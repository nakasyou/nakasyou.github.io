import { component$ } from '@builder.io/qwik'

const ContactLink = component$<
  {
    icon: string
    name: string
    id: string

    speed: 'ultrafast' | 'fast' | 'slow' | 'ultraslow'
  } & (
    | {
        url: string
      }
    | {
        copy: string
      }
  )
>((props) => {
  return (
    <>
      <div class="flex items-center gap-2 items-center">
        <div class={`w-6 h-6 ${props.icon}`} />
        <div>{props.name}</div>
        <div class={`text-sm`}>
          (
          {
            {
              ultrafast: '高速',
              fast: '早め',
              slow: '遅い',
              ultraslow: '激遅',
            }[props.speed]
          }
          )
        </div>
      </div>
      <div class="hover:scale-110 transition-transform">
        {'url' in props ? (
          <a href={props.url} target="_blank" rel="noreferrer">
            <div class="bg-slate-500 text-white p-2 rounded-md flex items-center gap-2">
              <div class="font-bold">{props.id}</div>
              <div class="w-5 h-5 i-tabler:external-link" />
            </div>
          </a>
        ) : (
          <button
            type="button"
            onClick$={() => {
              navigator.clipboard.writeText(props.copy)
            }}
          >
            <div class="bg-slate-500 text-white p-2 rounded-md flex items-center gap-2">
              <div class="font-bold">{props.copy}</div>
              <div class="w-5 h-5 i-tabler:copy" />
            </div>
          </button>
        )}
      </div>
    </>
  )
})
export const Contact = component$(() => {
  return (
    <div>
      <div class="text-3xl font-bold mb-2 text-center">Contact</div>
      <div class="grid place-items-center">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center max-w-100">
          <ContactLink
            icon="i-simple-icons:instagram"
            speed="ultrafast"
            name="Instagram"
            url="https://instagram.com/nakasyou_opened"
            id="@nakasyou_opened"
          />
          <ContactLink
            icon="i-simple-icons:x"
            speed="fast"
            name="X"
            url="https://x.com/nakasyou0"
            id="@nakasyou0"
          />
          <ContactLink
            icon="i-simple-icons:discord"
            speed="fast"
            name="Discord"
            copy="nakasyou_sub"
            id="nakasyou_sub"
          />
          <ContactLink
            icon="i-tabler:mail"
            speed="ultraslow"
            name="e-mail"
            url="mailto:nakasyou1103@gmail.com"
            id="nakasyou1103@gmail.com"
          />
        </div>
      </div>
    </div>
  )
})
