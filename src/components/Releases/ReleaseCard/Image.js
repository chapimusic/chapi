/** @jsx jsx */
import {jsx} from 'theme-ui'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {Link, graphql} from 'gatsby'

export const Image = ({image, link}) => {
  graphql`
    fragment releaseCardImageFields on SanityImageAsset {
      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  `
  const Image = () => {
    return (
      <GatsbyImage
        image={getImage(image)}
        sx={{
          height: 'full',
          width: 'full',
        }}
      />
    )
  }
  return link ? (
    <Link to={link}>
      <Image />
    </Link>
  ) : (
    <Image />
  )
}
