import { component$, JSX, Slot, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

const AboutCol = component$<{
  icon: string
}>((props) => {
  return <li class="flex items-center gap-2">
    <div class={`${props.icon} w-6 h-6`} />
    <div><Slot /></div>
  </li>
})
export const About = component$(() => {
  const date = useSignal(Date.now())
  useVisibleTask$(({ cleanup }) => {
    const intervalId = setInterval(() => {
      date.value = Date.now()
    }, 1000)
    cleanup(() => clearInterval(intervalId))
  })
  return <div>
    <div class="text-3xl font-bold mb-2">About</div>
    <ul class="flex flex-col gap-2">
      <AboutCol icon="i-tabler:label">Shotaro Nakamura</AboutCol>
      <AboutCol icon="i-tabler:cake">2009-11-03 ({Math.floor((date.value - 1257174000000) / 1000 / 3600 / 24 / 364.25636 * 100000) / 100000 } y/o)</AboutCol>
      <AboutCol icon="i-tabler:droplet-filled">Unknown</AboutCol>
    </ul>
  </div>
})
