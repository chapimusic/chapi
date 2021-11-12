/** @jsx jsx */
import {jsx} from 'theme-ui'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {graphql} from 'gatsby'

export const Images = ({images}) => {
  graphql`
    fragment releaseImageFields on SanityRelease {
      images {
        asset {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          url
        }
        caption
      }
    }
  `
  return (
    <div
      sx={{
        width: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {images &&
        images.length > 0 &&
        images.map(image => (
          <figure
            sx={{
              height: 'full',
              width: 'full',
            }}
          >
            <GatsbyImage
              key={image.asset.url}
              image={getImage(image)}
              alt={image.caption}
              sx={{
                height: 'full',
                width: 'full',
              }}
            />
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
    </div>
  )
}
