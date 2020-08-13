/** @jsx jsx */
import {jsx} from 'theme-ui'
import {BlockContent} from '../../BlockContent'

export const Body = ({raw}) => {
  return <BlockContent blocks={raw} />
}
