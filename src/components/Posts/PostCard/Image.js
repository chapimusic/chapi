/** @jsx jsx */
import {jsx} from 'theme-ui'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {Link, graphql} from 'gatsby'

export const Image = ({image, link}) => {
  graphql`
    fragment postCardImageFields on SanityImageAsset {
      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  `
  const Image = () => {
    const imageData = getImage(image.asset)

    return (
      <GatsbyImage
        image={imageData}
        sx={{
          height: 'full',
          width: 'full',
          maxHeight: '200px',
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
