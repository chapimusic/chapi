/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {Box, Grid, jsx, Styled} from 'theme-ui'
export {Vinyle} from './Vinyle'

export const Collector = () => {
  const data = useStaticQuery(graphql`
    query {
      collectorLP: file(
        relativePath: {eq: "ChapoChapo_Collector_LP_3Dsimu_A_Aplati.png"}
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Grid gap={2} columns={[1]} sx={{maxWidth: '960px', mx: 'auto'}}>
      <Box sx={{textAlign: 'center'}}>
        <Styled.h1>Collector</Styled.h1>
        <Styled.h2>Le nouvel album de Chapi Chapo</Styled.h2>
        <Img fluid={data.collectorLP.childImageSharp.fluid} />
      </Box>
    </Grid>
  )
}
