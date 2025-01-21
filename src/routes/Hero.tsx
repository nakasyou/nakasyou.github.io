import { component$ } from "@builder.io/qwik";

export const Hero = component$(() => {
  return <div class="flex flex-col gap-2">
    <div class="flex justify-center gap-2 items-center">
      <img src="https://github.com/nakasyou.png" alt="Icon" class="rounded-full w-16 h-16" />
      <div class="flex flex-wrap gap-1 items-center">
        <div class="font-bold text-lg">Shotaro Nakamura</div>
        <div class="text-slate-600">/ nakasyou</div>
      </div>
    </div>
    <div class="flex gap-2 justify-center">
      <a class="i-simple-icons:github w-6 h-6" href="https://github.com/nakasyou" target='_blank' rel="noopener noreferrer" />
      <a class="i-simple-icons:bluesky w-6 h-6" href="https://nakasyou.bsky.social" target='_blank' rel="noopener noreferrer" />
      <a class="i-simple-icons:x w-6 h-6" href="https://x.com/nakasyou0" target='_blank' rel="noopener noreferrer" />
      <a class="i-simple-icons:zenn w-6 h-6" href="https://zenn.dev/nakasyou" target='_blank' rel="noopener noreferrer" />
      <a class="i-simple-icons:matrix w-6 h-6" href="https://matrix.to/#/@nakasyou:matrix.org" target='_blank' rel="noopener noreferrer" />
      <a class="i-custom:sizume w-6 h-6" href="https://sizu.me/nakasyou" target='_blank' rel="noopener noreferrer" />
    </div>
  </div>
})
