/** @jsx jsx */
import {jsx} from 'theme-ui'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {graphql} from 'gatsby'

export const Images = ({images}) => {
  graphql`
    fragment productImageFields on SanityProduct {
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
    <ul
      sx={{
        width: '100%',
        position: 'relative',
        listStyle: 'none',
      }}
    >
      {images &&
        images.length > 0 &&
        images.map(image => {
          const imageData = getImage(image.asset)
          return (
            <figure
              sx={{
                height: 'full',
                width: 'full',
              }}
            >
              <GatsbyImage
                key={image.asset.url}
                image={imageData}
                title={image.caption}
                alt={image.caption}
                sx={{
                  height: 'full',
                  width: 'full',
                }}
              />
            </figure>
          )
        })}
    </ul>
  )
}
