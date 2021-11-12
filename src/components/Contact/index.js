/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {Box, Grid, jsx} from 'theme-ui'
import {useSiteMetadata} from '../../lib/useSiteMetadata'

export const Contact = props => {
  const data = useStaticQuery(graphql`
    query {
      jouetSynth: file(relativePath: {eq: "jouet-synth.png"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `)
  const {mail} = useSiteMetadata()
  const jouetSynthImage = getImage(data.jouetSynth)
  return (
    <Grid gap={4} columns={[1]} sx={{maxWidth: '500px', mx: 'auto'}} {...props}>
      <Box sx={{textAlign: 'center', position: 'relative'}}>
        <GatsbyImage image={jouetSynthImage} sx={{maxWidth: '100%'}} />
        <Box
          sx={{
            textAlign: 'center',
            //bg: 'primary',
            px: 3,
            py: 2,
            position: 'absolute',
            top: '85%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <p sx={{fontSize: [2, 3, 3, 4]}}>
            <a href={`mailto:${mail}`} sx={{textDecoration: 'none'}}>
              <span
                sx={{
                  color: 'white',
                  textTransform: 'uppercase',
                }}
              >
                {mail}
              </span>
            </a>
          </p>
        </Box>
      </Box>
    </Grid>
  )
}
