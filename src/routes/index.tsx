import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'
import { type DocumentHead, routeLoader$ } from '@builder.io/qwik-city'
import { getArticles } from '~/lib/articles'
import { About } from './About'
import { Articles } from './Articles'
import { Contact } from './Contact'
import { Hero } from './Hero'
import { MutualLinks } from './MutualLinks'

export const useArticles = routeLoader$(() => {
  return getArticles()
})

export default component$(() => {
  const articles = useArticles()

  const _isHeroHidden = useSignal(false)
  useVisibleTask$(({ cleanup }) => {
    const scrollHandler = () => {}
    window.addEventListener('scroll', scrollHandler)
    cleanup(() => {
      window.removeEventListener('scroll', scrollHandler)
    })
  })
  return (
    <div class="max-w-4xl mx-auto px-10 py-20">
      <div class="">
        <Hero />
      </div>
      <hr class="my-5" />
      <div class="md:flex gap-20 my-10">
        <div class="w-full flex flex-col gap-10 md:w-1/2">
          <About />
          <div class="block md:hidden">
            <Articles posts={articles.value} />
          </div>
          <MutualLinks />
        </div>
        <div class="hidden md:flex flex-col gap-10 w-1/2">
          <Articles posts={articles.value} />
        </div>
      </div>
      <Contact />
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Shotaro Nakamura / nakasyou',
  meta: [
    {
      name: 'description',
      content: 'A profile of Shotaro Nakamura.',
    },
  ],
}
