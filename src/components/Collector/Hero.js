/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {IoIosArrowDropdown} from 'react-icons/io'
import {Box, Grid, jsx, Styled} from 'theme-ui'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import SEO from '../SEO'

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      collectorLP: file(
        relativePath: {eq: "ChapoChapo_Collector_LP_3Dsimu_A_Aplati.png"}
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Grid gap={2} columns={[1]} sx={{maxWidth: '960px', mx: 'auto'}}>
      <SEO
        title="COLLECTOR, nouvel album"
        image={data.collectorLP.childImageSharp.fluid.src}
        description="De brocantes en vide-greniers, le musicien finistérien amasse par centaines des jouets musicaux anciens du monde entier. Son 4ème album s'articule autour des jouets électroniques. C'est dans une marmite multicolore que prend vie Collector, un joyeux ovni qui navigue entre minimal pop, électro pop et punky pop."
      />
      <Box sx={{textAlign: 'center'}}>
        <Styled.h1>Collector</Styled.h1>
        <Styled.h2>Nouvel album</Styled.h2>
        <Styled.h2 sx={{mt: 3}}>
          Chapi Chapo &amp; les jouets électroniques
        </Styled.h2>
        <Img
          fluid={data.collectorLP.childImageSharp.fluid}
          sx={{maxWidth: ['80vw', '70vw', '65vw', '55vw', '40vw'], mx: 'auto'}}
        />
        <Box
          sx={{
            display: 'inline-block',
            p: 2,
          }}
        >
          <AnchorLink
            href={`#preorder`}
            sx={{
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderBottom: '1px solid',
              borderColor: 'rgba(255,255,255,0.5)',
              pb: 1,
              mb: 2,
              display: 'block',
              ':hover': {
                borderColor: 'rgba(255,255,255,0.5)',
                transition: 'all 0.3s ease-in',
                transform: 'scale(1.1, 1.1)',
              },
              '&:hover': {span: {color: 'white'}},
            }}
          >
            <span sx={{color: 'white'}}>Précommander</span>
          </AnchorLink>

          <IoIosArrowDropdown />
        </Box>
      </Box>
    </Grid>
  )
}
