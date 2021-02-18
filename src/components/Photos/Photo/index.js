/** @jsx jsx */
import {graphql} from 'gatsby'
import {Box, Grid, jsx} from 'theme-ui'
import {Images} from './Images'
import {Title} from './Title'

export const Photo = ({title, images, ...props}) => {
  graphql`
    fragment photoFields on SanityPhoto {
      id
      title
      ...photoImageFields
    }
  `
  return (
    <li>
      <Title title={title} />
      <Images images={images} />
    </li>
  )
}
