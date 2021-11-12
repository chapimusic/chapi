/** @jsx jsx */
import {jsx} from 'theme-ui'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {Link, graphql} from 'gatsby'

export const Image = ({image, link}) => {
  graphql`
    fragment productCardImageFields on SanityImageAsset {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  `
  const Image = () => (
    <GatsbyImage
      image={getImage(image)}
      sx={{
        height: 'full',
        maxHeight: 'full',
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
