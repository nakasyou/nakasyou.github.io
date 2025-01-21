import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { Hero } from './Hero'
import { About } from './About'
import { Articles } from './Articles'

export default component$(() => {
  return (
    <>
      <div class="p-4">
        <div>
          <Hero />
        </div>
        <hr class="my-5" />
        <div class="flex flex-wrap justify-around gap-4">
          <div>
            <About />
          </div>
          <div>
            <Articles />
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
