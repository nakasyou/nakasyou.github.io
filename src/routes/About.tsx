import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useArticles = routeLoader$(async () => {

})

const AboutCol = component$<{
  text: string
  icon: string
}>((props) => {
  return <li class="flex items-center gap-2">
    <div class={`${props.icon} w-6 h-6`} />
    <div>{props.text}</div>
  </li>
})
export const About = component$(() => {
  const articles = useArticles()

  return <div>
    <div class="text-3xl font-bold mb-2">About</div>
    <ul class="flex flex-col gap-2">
      <AboutCol icon="i-tabler:label" text="Shotaro Nakamura" />
      <AboutCol icon="i-tabler:cake" text="2009-11-03" />
      <AboutCol icon="i-tabler:droplet-filled" text="Unknown" />
    </ul>
  </div>
})
