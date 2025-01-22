interface BasePost {
  url: string
  title: string
  date: Date
}
interface Sizume extends BasePost {
  type: 'sizu.me'
}
interface Zenn extends BasePost {
  type: 'zenn'
}
export type Post = (Sizume | Zenn) & {
  formattedDate: string
}

const formatter = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
})

const setCache = (data: Post[]) => {
  if (import.meta.env.PROD) {
    return
  }
  // @ts-ignore for cache
  globalThis._posts = data
}
const getCache = (): Post[] | null => {
  if (import.meta.env.PROD) {
    return null
  }
  // @ts-ignore for cache
  return globalThis._posts ?? null
}

const getFromSizuMe = async (): Promise<Sizume[]> => {
  const url = new URL('https://sizu.me/api/trpc/postList.index?batch=1')
  url.searchParams.set('input', '{"0":{"userId":33,"pageNumber":1}}')
  const res = await fetch(url).then(res => res.json())
  const posts: {
    slug: string
    title: string
    firstPublishedAt: {
      iso: string
    }
  }[] = res[0].result.data.posts

  return posts.map(post => ({
    type: 'sizu.me',

    url: `https://sizu.me/nakasyou/posts/${post.slug}`,
    title: post.title,
    date: new Date(post.firstPublishedAt.iso)
  }))
}
const getFromZenn = async (): Promise<Zenn[]> => {
  const res = await fetch('https://zenn.dev/api/articles?page=1&username=nakasyou&count=96&order=latest').then(res => res.json())
  const articles: {
    title: string
    slug: string
    liked_count: number
    published_at: string
  }[] = res.articles

  return articles.map(article => ({
    type: 'zenn',

    title: article.title,
    url: `https://zenn.dev/nakasyou/articles/${article.slug}`,
    date: new Date(article.published_at),
  }))
}

export const getArticles = async (): Promise<Post[]> => {
  const cache = getCache()
  if (cache) {
    return cache
  }
  const posts: Post[] = (await Promise.all([
    getFromZenn(),
    getFromSizuMe()
  ])).flat().sort((a, b) => b.date.getTime() - a.date.getTime()).map(post => ({
    ...post,
    formattedDate: formatter.format(post.date)
  })).slice(0, 10)
  setCache(posts)

  return posts
}
