/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {Box, Grid, Styled, jsx} from 'theme-ui'

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
      <Box sx={{textAlign: ['left', 'center'], bg: 'white', p: 3}}>
        <Styled.h1 css={{marginBlockStart: 0, marginBlockEnd: 0}}>
          <span sx={{fontSize: 4}}>Contact</span>
        </Styled.h1>
        <p sx={{fontSize: 3, pb: 5}}>
          <a href={`mailto:contact@chapimusic.com`}>contact@chapimusic.com</a>
        </p>
      </Box>
    </Grid>
  )
}
