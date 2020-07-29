/** @jsx jsx */
import {jsx} from 'theme-ui'
import Img from 'gatsby-image'
import {Link, graphql} from 'gatsby'

export const Image = ({image, link}) => {
  graphql`
    fragment postCardImageFields on SanityImageAsset {
      fluid {
        ...GatsbySanityImageFluid
      }
    }
  `
  const Image = () => (
    <Img
      fluid={image.asset.fluid}
      sx={{
        height: 'full',
        width: 'full',
      }}
    />
  )
  return link ? (
    <Link to={link}>
      <Image />
    </Link>
  ) : (
    <Image />
  )
}
