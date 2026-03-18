import { component$ } from '@builder.io/qwik'
import ProfileImage from '~/assets/profile.png?w=64;256;512&jsx'

export const Hero = component$(() => {
  return (
    <div class="flex flex-col gap-2">
      <div class="flex justify-center gap-2 items-center">
        <ProfileImage
          alt="Shotaro Nakamura のプロフィール画像"
          class="rounded-full w-16 h-16"
          decoding="sync"
          loading="eager"
        />
        <div class="flex flex-wrap gap-1 items-center">
          <div class="font-bold text-lg">Shotaro Nakamura</div>
          <div class="text-slate-600">/ nakasyou</div>
        </div>
      </div>
      <div class="flex gap-2 justify-center">
        <a
          class="i-simple-icons:github w-6 h-6"
          href="https://github.com/nakasyou"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        />
        <a
          class="i-simple-icons:bluesky w-6 h-6"
          href="https://nakasyou.bsky.social"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bluesky"
          title="Bluesky"
        />
        <a
          class="i-simple-icons:x w-6 h-6"
          href="https://x.com/nakasyou0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          title="X"
        />
        <a
          class="i-simple-icons:zenn w-6 h-6"
          href="https://zenn.dev/nakasyou"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Zenn"
          title="Zenn"
        />
        <a
          class="i-simple-icons:matrix w-6 h-6"
          href="https://matrix.to/#/@nakasyou:matrix.org"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Matrix"
          title="Matrix"
        />
        <a
          class="i-custom:sizume w-6 h-6"
          href="https://sizu.me/nakasyou"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Sizu.me"
          title="Sizu.me"
        />
        <a
          class="i-simple-icons:instagram w-6 h-6"
          href="https://instagram.com/nakasyou_opened"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
        />
      </div>
    </div>
  )
})
