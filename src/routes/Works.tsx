import { $, component$, inlinedQrl, Slot } from "@builder.io/qwik";

import NanohaImage from '../assets/nanoha.jpeg?jsx'
import HonoWS from '../assets/hono-ws.png?jsx'
import JSROGP from '../assets/jsr-ogp.png?jsx'

export const Work = component$((props: {
  title: string
  desc: string
  link: string
}) => {
  return <a href={props.link} target="_blank" rel="noreferrer"><div class="border p-2 rounded-md">
    <div class="w-full h-30">
      <Slot name="image" />
    </div>
    <div class="text-xl">{props.title}</div>
    <div class="text-gray-500 text-sm">{props.desc}</div>
  </div></a>
})
export const Works = component$(() => {
  return <div>
    <div class="text-3xl font-bold mb-2">Works</div>
    <div class="grid grid-cols-3 gap-2">
      <Work link="https://github.com/nakasyou/nanoha" title="Nanoha" desc='AI 搭載「暗記」用デジタルノートブック。東京都モバイルアプリコンテスト2024受賞。'>
        <NanohaImage q:slot='image' class="w-full h-full object-cover" />
      </Work>
      <Work link="https://github.com/honojs/hono/pull/2265" title="hono/ws" desc="Hono の WebSocket サポート。マルチランタイムをサポート。">
        <HonoWS q:slot='image' class="w-full h-full object-cover" />
      </Work>
      <Work link="https://github.com/jsr-io/jsr/pull/417" title="OGP in jsr.io" desc="jsr.io にパッケージの OGP サポートを追加。">
        <JSROGP q:slot='image' class="w-full h-full object-cover" />
      </Work>
    </div>
  </div>
})