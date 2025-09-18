import { component$, Slot } from '@builder.io/qwik'

import AblazeI18n from '../assets/ablaze-l18n.png?jsx'
import BadappleHono from '../assets/badapple-hono.png?jsx'
import Ha from '../assets/ha.png?jsx'
import HonoWS from '../assets/hono-ws.png?jsx'
import JSROGP from '../assets/jsr-ogp.png?jsx'
import MaterialColorUNO from '../assets/material-color-uno.png?jsx'
import NanohaImage from '../assets/nanoha.jpeg?jsx'
import SpaceUnicorn from '../assets/spaceunicorn.png?jsx'

export const Work = component$(
  (props: { title: string; desc: string; link: string }) => {
    return (
      <a
        class="min-w-40 snap-start"
        href={props.link}
        target="_blank"
        rel="noreferrer"
      >
        <div class="border p-2 rounded-md">
          <div class="w-full h-30">
            <Slot name="image" />
          </div>
          <div class="text-xl">{props.title}</div>
          <div class="text-gray-500 text-sm">{props.desc}</div>
        </div>
      </a>
    )
  },
)
export const Works = component$(() => {
  return (
    <div>
      <div class="text-3xl font-bold mb-2">Works</div>
      <div class="snap-x w-full overflow-x-auto flex md:grid md:grid-cols-3 gap-2">
        <Work
          link="https://github.com/nakasyou/nanoha"
          title="Nanoha"
          desc="AI 搭載「暗記」用デジタルノートブック。東京都モバイルアプリコンテスト2024受賞。"
        >
          <NanohaImage q:slot="image" class="w-full h-full object-cover" />
        </Work>
        <Work
          link="https://github.com/honojs/hono/pull/2265"
          title="hono/ws"
          desc="Hono の WebSocket サポート。マルチランタイムをサポート。"
        >
          <HonoWS q:slot="image" class="w-full h-full object-cover" />
        </Work>
        <Work
          link="https://github.com/jsr-io/jsr/pull/417"
          title="OGP in jsr.io"
          desc="jsr.io にパッケージの OGP サポートを追加。"
        >
          <JSROGP q:slot="image" class="w-full h-full object-cover" />
        </Work>
        <Work
          link="https://github.com/nakasyou/badapple-hono"
          title="Bad Apple with Hono"
          desc="Bad Apple!! feat. nomico を hono/streaming を用いて再生。"
        >
          <BadappleHono q:slot="image" class="w-full h-full object-cover" />
        </Work>
        <Work
          link="https://github.com/nakasyou/ha"
          title="@ns/ha"
          desc="Web 上でシンプルかつインタラクティブな波を表現するライブラリ。"
        >
          <Ha q:slot="image" class="w-full h-full object-cover" />
        </Work>
        <Work
          link="https://github.com/XelyNetwork/material-color-uno"
          title="material-color-uno"
          desc="Material Design 3 のカラーシステムを UnoCSS のプリセットとして提供するライブラリ。"
        >
          <MaterialColorUNO q:slot="image" class="w-full h-full object-cover" />
        </Work>
        <Work
          link="https://ablaze.one"
          title="i18n in ablaze.one"
          desc="Astro を用いて i18n を独自実装。"
        >
          <AblazeI18n q:slot="image" class="w-full h-full object-cover" />
        </Work>
        <Work
          link="https://github.com/XelyNetwork/spaceunocorn"
          title="SpaceUnicorn"
          desc="Hono の上に構築された WebSocket なしの環境でも双方向 Web 通信を可能にするライブラリ。"
        >
          <SpaceUnicorn q:slot="image" class="w-full h-full object-cover" />
        </Work>
      </div>
    </div>
  )
})
