/** @jsx jsx */
import {jsx} from 'theme-ui'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {graphql} from 'gatsby'

export const Images = ({images}) => {
  graphql`
    fragment photoImageFields on SanityPhoto {
      images {
        asset {
          url
          gatsbyImageData(
            width: 400
            height: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
        caption
      }
    }
  `
  return (
    <ul
      sx={{
        listStyle: 'none',
        width: '100%',
        position: 'relative',
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 400px))',
        justifyContent: 'center',
      }}
    >
      {images &&
        images.length > 0 &&
        images.map(image => {
          const imageData = getImage(image.asset)
          return imageData ? (
            <li
              sx={{
                height: 'full',
                width: 'full',
              }}
            >
              <figure sx={{bg: 'white'}}>
                <a href={image.asset.url} target="_blank" rel="noreferrer">
                  <GatsbyImage
                    key={image.asset.url}
                    image={imageData}
                    alt={image.caption}
                    sx={{
                      height: 'full',
                      width: 'full',
                    }}
                  />
                </a>
                {image.caption && image.caption.replace(/\s/g, '') !== '' && (
                  <figcaption sx={{p: 2, color: 'black', fontSize: 0}}>
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            </li>
          ) : null
        })}
    </ul>
  )
}
