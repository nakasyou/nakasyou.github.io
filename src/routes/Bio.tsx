import { component$ } from "@builder.io/qwik";
import { Tooltip } from '@qwik-ui/headless'

const thisYear = new Date().getFullYear()
const startYear = 2009

const bio: {
  year: number
  month: number
  content: string
}[] = [
  { year: thisYear, month: new Date().getMonth() + 1, content: 'Now' },
  { year: 2022, month: 4, content: '中学校入学' },
  { year: 2016, month: 4, content: '小学校入学' },
  { year: 2009, month: 11, content: 'Born in Tokyo' },
]
export const Bio = component$(() => {
  return <div>
    <div class="text-3xl font-bold mb-2">Bio</div>
    <div class="">
      {
        Array.from({ length: thisYear - startYear + 1 }).map((_, i) => {
          const year = startYear + i
          return <div key={year} class="flex gap-3">
            <div class="h-full font-bold font-mono">{year}</div>
            <div class="h-full bg-yellow-400">&nbsp;</div>
            <div class="h-full">{bio.filter(b => b.year === year).map(col => (
              <Tooltip.Root gutter={10} flip placement='right' key={col.content}>
                <Tooltip.Trigger>
                  <div class="hover:scale-110 transition-transform" key={col.content}>{col.content}</div>
                </Tooltip.Trigger>
                <Tooltip.Panel class="tooltip-panel">
                  <div>{col.year}-{col.month}</div>
                </Tooltip.Panel>
              </Tooltip.Root>
            ))}</div>
          </div>
        }).reverse()
      }
    </div>
  </div>
})