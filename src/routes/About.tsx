import {
  component$,
  JSX,
  Slot,
  useComputed$,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'

const AboutCol = component$<{
  icon: string
}>((props) => {
  return (
    <li class="flex items-center gap-2">
      <div class={`${props.icon} w-6 h-6`} />
      <div>
        <Slot />
      </div>
    </li>
  )
})
export const About = component$(() => {
  const date = useSignal(Date.now())
  useVisibleTask$(({ cleanup }) => {
    let isCleanuped = false
    const step = () => {
      date.value = Date.now()
      if (!isCleanuped) {
        requestAnimationFrame(step)
      }
    }
    step()
    cleanup(() => {
      isCleanuped = true
    })
  })
  const age = useComputed$(
    () => (date.value - 1257174000000) / 1000 / 3600 / 24 / 364.25636,
  )
  return (
    <div>
      <div class="text-3xl font-bold mb-2">About</div>
      <ul class="flex flex-col gap-2">
        <AboutCol icon="i-tabler:label">Shotaro Nakamura</AboutCol>
        <AboutCol icon="i-tabler:torii">中村 承太郎</AboutCol>
        <AboutCol icon="i-tabler:cake">
          2009-11-03 ({Math.floor(age.value)}.
          <span class="text-sm font-mono">
            {(Math.floor((age.value % 1) * 1000000000) / 1000000000)
              .toString()
              .slice(2)
              .padEnd(9, '0')}
          </span>
          )y/o
        </AboutCol>
        <AboutCol icon="i-tabler:droplet-filled">Unknown</AboutCol>
        <AboutCol icon="i-tabler:gender-bigender">Male</AboutCol>
      </ul>
    </div>
  )
})
