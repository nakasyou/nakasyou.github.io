import { component$ } from "@builder.io/qwik";
import {  } from '@builder.io/qwik-city'
import type { Post } from "~/lib/articles";

const Post = component$<{
  post: Post
}>((props) => {
  return <a href={props.post.url} target="_blank" rel="noreferrer"><div>
    <div class="text-xl">{props.post.title}</div>
    <div class="text-gray-500 flex items-center gap-3">
      <div>{props.post.formattedDate}</div>
      <div>{props.post.type === 'zenn' ? 'zenn.dev' : 'sizu.me'}</div>
    </div>
    <div>
      {}
    </div>
  </div></a>
})

export const Articles = component$<{
  posts: Post[]
}>((props) => {
  return <div>
    <div class="text-3xl font-bold mb-2">Articles</div>
    <div class="flex flex-col gap-2">
      {
        props.posts.map(props => <Post post={props} />)
      }
    </div>
  </div>
})
