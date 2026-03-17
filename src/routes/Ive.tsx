import { component$, Slot, useSignal, useTask$ } from '@builder.io/qwik'
import eikenpre125 from '~/assets/eikenpre1-25.png'
import joai2026 from '~/assets/joai2026.png'

const JimanDialog = component$(
  (props: { isShown: boolean; onClose$: () => void }) => {
    const isAnimationShown = useSignal(props.isShown)
    const isMounted = useSignal(props.isShown)
    const backgroundRef = useSignal<HTMLElement>()

    useTask$(({ track }) => {
      track(() => props.isShown)
      if (props.isShown) {
        isMounted.value = true
        setTimeout(() => {
          isAnimationShown.value = true
        }, 100)
      } else {
        isAnimationShown.value = false
        setTimeout(() => {
          isMounted.value = false
        }, 300)
      }
    })

    return (
      <>
        {isMounted.value && (
          <div
            class={`z-20 fixed inset-0 bg-black/20 transition-opacity ${
              isAnimationShown.value ? 'opacity-100' : 'opacity-0'
            } grid place-items-center`}
            ref={backgroundRef}
            onClick$={(e, currentTarget) => {
              if (e.target === currentTarget) {
                props.onClose$()
              }
            }}
          >
            <div class="text-black bg-white p-6 rounded max-w-sm w-full">
              <Slot />
            </div>
          </div>
        )}
      </>
    )
  },
)

const Jiman = component$(
  (props: {
    text: string
    evidence:
      | {
          type: 'url'
          url: string
        }
      | {
          type: 'image'
          src: string
        }
  }) => {
    const isOpenedDialog = useSignal(false)
    return (
      <li class="text-gray-800 flex gap-1 items-center">
        <JimanDialog
          isShown={isOpenedDialog.value}
          onClose$={() => {
            isOpenedDialog.value = false
          }}
        >
          <div class="flex flex-col gap-4">
            <img
              src={
                props.evidence.type === 'image'
                  ? props.evidence.src
                  : '/favicon.ico'
              }
              alt={`${props.text} の証跡`}
              class="w-full h-auto"
            />
          </div>
        </JimanDialog>
        <div>{props.text}</div>
        {props.evidence.type === 'image' ? (
          <button
            type="button"
            aria-label={`${props.text} の詳細を開く`}
            onClick$={() => {
              isOpenedDialog.value = true
            }}
          >
            <div class="i-tabler:info-circle w-5 h-5 text-gray-500 hover:text-gray-700" />
          </button>
        ) : (
          <a
            href={props.evidence.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`${props.text} の証跡リンク`}
          >
            <div class="i-tabler:info-circle w-5 h-5 text-gray-500 hover:text-gray-700" />
          </a>
        )}
      </li>
    )
  },
)

export default component$(() => {
  return (
    <div>
      <div class="text-3xl font-bold mb-3">Jimans</div>
      <ul class="flex flex-col gap-2">
        <Jiman
          text="日本人工知能オリンピック'26 金賞"
          evidence={{ type: 'image', src: joai2026 }}
        />
        <Jiman
          text="未踏ジュニア'25 スーパークリエイター"
          evidence={{
            type: 'url',
            url: 'https://jr.mitou.org/projects/2025/gen5',
          }}
        />
        <Jiman
          text="都教委モバイルアプリコンテスト'24 金賞"
          evidence={{
            type: 'url',
            url: 'https://infoedu.metro.tokyo.lg.jp/applicon2024.html',
          }}
        />
        <Jiman
          text="英検準一級 GP1 -2 😭"
          evidence={{ type: 'image', src: eikenpre125 }}
        />
      </ul>
    </div>
  )
})
