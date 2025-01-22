import { component$ } from '@builder.io/qwik'
import { mutualLinks } from '~/data/mutual-links'

export const MutualLinks = component$(() => {
  return (
    <div>
      <div class="text-3xl font-bold mb-2">Mutual Links</div>
      <div class="text-gray-500">
        Request{' '}
        <a
          class="underline hover:no-underline"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/nakasyou/nakasyou.github.io/issues/new?assignees=&labels=&template=%E7%9B%B8%E4%BA%92%E3%83%AA%E3%83%B3%E3%82%AF%E3%81%AE%E8%BF%BD%E5%8A%A0%E8%A6%81%E6%9C%9B.md&title=%E7%9B%B8%E4%BA%92%E3%83%AA%E3%83%B3%E3%82%AF%E3%81%AE%E8%BF%BD%E5%8A%A0%E8%A6%81%E6%9C%9B"
        >
          here
        </a>
      </div>
      <div>
        <ul class="pr-2 flex flex-col gap-2">
          {mutualLinks.map(({ name, url, author }) => (
            <div class="flex items-center justify-between" key={url}>
              <a
                class="text-teal-700"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                {name}
              </a>
              <div class="text-gray-500">&nbsp;by {author}</div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
})
