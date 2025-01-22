import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city'
import { Hero } from './Hero'
import { About } from './About'
import { Articles } from './Articles'
import { getArticles } from '~/lib/articles'
import { MutualLinks } from './MutualLinks'
import { Works } from './Works'

export const useArticles = routeLoader$(() => {
  return getArticles()
})

export default component$(() => {
  const articles = useArticles()

  const isHeroHidden = useSignal(false)
  useVisibleTask$(({cleanup}) => {
    const scrollHandler = () => {
    }
    window.addEventListener('scroll', scrollHandler)
    cleanup(() => {
      window.removeEventListener('scroll', scrollHandler)
    })
  })
  return (
    <>
      <div class="p-4">
        <div class="">
          <Hero />
        </div>
        <hr class="my-5" />
        <div class="flex gap-5">
          <div class='w-1/2 flex flex-col gap-5'>
            <About />
            <MutualLinks />
            <Works />
          </div>
          <div class='w-1/2 flex flex-col gap-5'>
            <Articles posts={articles.value} />
          </div>
        </div>
      </div>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
}
