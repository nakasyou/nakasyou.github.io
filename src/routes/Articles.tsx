import { component$ } from '@builder.io/qwik'
import type { Post } from '~/lib/articles'

const OnePost = component$<{
  post: Post
}>((props) => {
  return (
    <a
      href={props.post.url}
      target="_blank"
      rel="noreferrer"
      class="hover:scale-105 transition-transform"
    >
      <div>
        <div class="text-xl">{props.post.title}</div>
        <div class="text-gray-500 flex items-center gap-3">
          <div>{props.post.formattedDate}</div>
          <div>{props.post.type === 'zenn' ? 'zenn.dev' : 'sizu.me'}</div>
        </div>
        <div>{}</div>
      </div>
    </a>
  )
})

export const Articles = component$<{
  posts: Post[]
}>((props) => {
  return (
    <div>
      <div class="text-3xl font-bold mb-2">Articles</div>
      <div class="flex flex-col gap-2">
        {props.posts.map((post, i) => (
          <>
          <OnePost post={post} key={post.url} />
          {i !== props.posts.length - 1 && <div class="h-px w-full bg-gray-100" />}
          </>
        ))}
      </div>
    </div>
  )
})
