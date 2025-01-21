export const getArticles = async () => {
  const url = new URL('https://sizu.me/api/trpc/postList.index?batch=1')
  url.searchParams.add('inp')
}
getArticles()