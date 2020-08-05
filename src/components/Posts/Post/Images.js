/** @jsx jsx */
import {jsx} from 'theme-ui'
import Img from 'gatsby-image'
import {graphql} from 'gatsby'

export const Images = ({images}) => {
  graphql`
    fragment postImageFields on SanityPost {
      images {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
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
        images.map(
          image =>
            image &&
            image.asset &&
            image.asset.fluid &&
            image.asset.fluid.src && (
              <figure
                sx={{
                  height: 'full',
                  width: 'full',
                }}
              >
                <Img
                  key={image.asset.fluid.src}
                  fluid={image.asset.fluid}
                  title={image.caption}
                  alt={image.caption}
                  sx={{
                    height: 'full',
                    width: 'full',
                  }}
                />
                <figcaption>{image.caption}</figcaption>
              </figure>
            )
        )}
    </div>
  )
}
