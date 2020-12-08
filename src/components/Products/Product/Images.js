/** @jsx jsx */
import {jsx} from 'theme-ui'
import Img from 'gatsby-image'
import {graphql} from 'gatsby'

export const Images = ({images}) => {
  graphql`
    fragment productImageFields on SanityProduct {
      images {
        asset {
          fluid{
            ...GatsbySanityImageFluid_withWebp
          }
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
        images.map(image => (
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
              title={image.caption}
              sx={{
                height: 'full',
                width: 'full',
              }}
            />
          </figure>
        ))}
    </ul>
  )
}
