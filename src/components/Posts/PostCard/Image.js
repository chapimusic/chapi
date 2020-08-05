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
  const Image = () =>
    image &&
    image.asset &&
    image.asset.fluid && (
      <Img
        fluid={image.asset.fluid}
        sx={{
          height: 'full',
          width: 'full',
          maxHeight: '200px',
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
