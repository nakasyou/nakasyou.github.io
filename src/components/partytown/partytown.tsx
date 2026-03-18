import type { PartytownConfig } from '@qwik.dev/partytown/integration'
import { partytownSnippet } from '@qwik.dev/partytown/integration'

export interface PartytownProps extends PartytownConfig {}

export const QwikPartytown = (props: PartytownProps) => {
  return <script dangerouslySetInnerHTML={partytownSnippet(props)} />
}
