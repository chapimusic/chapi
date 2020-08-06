/** @jsx jsx */
import {jsx} from 'theme-ui'
import Img from 'gatsby-image'
import {graphql} from 'gatsby'

export const Images = ({images}) => {
  graphql`
    fragment installationImageFields on SanityInstallation {
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
    <ul
      sx={{
        listStyle: 'none',
        width: '100%',
        position: 'relative',
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: 'repeat(auto-fit, minmax(100%, 100%))',
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
                <figure>
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
              </li>
            )
        )}
    </ul>
  )
}
