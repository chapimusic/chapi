/** @jsx jsx */
import {jsx} from 'theme-ui'
import {BlockContent} from '../../BlockContent'

export const Description = ({raw}) => {
  return (
    <span sx={{}}>
      <BlockContent blocks={raw} />
    </span>
  )
}
