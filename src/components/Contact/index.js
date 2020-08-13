/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {Box, Grid, jsx} from 'theme-ui'
import {useSiteMetadata} from '../../lib/useSiteMetadata'

export const Contact = props => {
  const data = useStaticQuery(graphql`
    query {
      jouetSynth: file(relativePath: {eq: "jouet-synth.png"}) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const {mail} = useSiteMetadata()
  return (
    <Grid gap={4} columns={[1]} sx={{maxWidth: '500px', mx: 'auto'}} {...props}>
      <Box sx={{textAlign: 'center', position: 'relative'}}>
        <Img
          fluid={data.jouetSynth.childImageSharp.fluid}
          sx={{maxWidth: '100%'}}
        />
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
          <p sx={{fontSize: 4}}>
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
