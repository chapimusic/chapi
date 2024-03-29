/** @jsx jsx */
import {jsx} from 'theme-ui'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {graphql} from 'gatsby'

export const Images = ({images}) => {
  graphql`
    fragment postImageFields on SanityPost {
      images {
        asset {
          gatsbyImageData(placeholder: BLURRED)
          url
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 512px))',
        justifyContent: 'center',
      }}
    >
      {images &&
        images.length > 0 &&
        images.map(
          image =>
            image?.asset?.url && (
              <li
                sx={{
                  height: 'full',
                  width: 'full',
                }}
              >
                <figure>
                  <GatsbyImage
                    key={image.asset.url}
                    image={getImage(image.asset)}
                    alt={image.caption}
                    sx={{
                      height: 'full',
                      width: 'full',
                    }}
                  />
                  <figcaption>{image.caption}</figcaption>
                </figure>
              </li>
            )
        )}
    </ul>
  )
}
