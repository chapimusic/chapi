/** @jsx jsx */
import {jsx} from 'theme-ui'
import Img from 'gatsby-image'
import {graphql} from 'gatsby'

export const Images = ({images}) => {
  graphql`
    fragment photoImageFields on SanityPhoto {
      images {
        asset {
          url
          fluid(maxWidth: 400, maxHeight: 400) {
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
        images.map(
          image =>
            image &&
            image.asset &&
            image.asset.fluid &&
            image.asset.fluid.src && (
              <li
                sx={{
                  height: 'full',
                  width: 'full',
                }}
              >
                <figure sx={{bg: 'white'}}>
                  <a href={image.asset.url} target="_blank">
                    <Img
                      key={image.asset.fluid.src}
                      fluid={image.asset.fluid}
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
            )
        )}
    </ul>
  )
}
