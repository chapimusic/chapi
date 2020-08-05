/** @jsx jsx */
import {Grid, Box, Styled, jsx} from 'theme-ui'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'

export const Contact = props => {
  const data = useStaticQuery(graphql`
    query {
      jouetSynth: file(relativePath: {eq: "jouet-synth.png"}) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Grid gap={4} columns={[1]} sx={{maxWidth: '400px', mx: 'auto'}} {...props}>
      <Box sx={{textAlign: 'center'}}>
        <Img
          fluid={data.jouetSynth.childImageSharp.fluid}
          sx={{maxWidth: '100%'}}
        />
      </Box>
      <Box sx={{textAlign: ['left', 'center']}}>
        <Styled.h1>
          <span sx={{fontSize: 4}}>Contact</span>
        </Styled.h1>
        <p sx={{fontSize: 3}}>
          <a href={`mailto:contact@chapimusic.com`}>contact@chapimusic.com</a>
        </p>
      </Box>
    </Grid>
  )
}
