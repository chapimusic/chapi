/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import {GatsbyImage, getImage, getSrc} from 'gatsby-plugin-image'
import {IoIosArrowDropdown} from 'react-icons/io'
import {Box, Grid, jsx, Themed} from 'theme-ui'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Seo from '../SEO'

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      collectorLP: file(
        relativePath: {eq: "ChapoChapo_Collector_LP_3Dsimu_A_Aplati.png"}
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 1200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  return (
    <Grid gap={2} columns={[1]} sx={{maxWidth: '960px', mx: 'auto'}}>
      <Seo
        title="COLLECTOR, nouvel album"
        image={getSrc(data.collectorLP)}
        description="De brocantes en vide-greniers, le musicien finistérien amasse par centaines des jouets musicaux anciens du monde entier. Son 4ème album s'articule autour des jouets électroniques. C'est dans une marmite multicolore que prend vie Collector, un joyeux ovni qui navigue entre minimal pop, électro pop et punky pop."
      />
      <Box sx={{textAlign: 'center'}}>
        <Themed.h1>Collector</Themed.h1>
        <Themed.h2>Nouvel album</Themed.h2>
        <Themed.h2 sx={{mt: 2, mb: 3}}>
          Chapi Chapo &amp; les jouets électroniques
        </Themed.h2>
        <GatsbyImage
          image={getImage(data.collectorLP)}
          sx={{maxWidth: ['80vw', '70vw', '65vw', '55vw', '40vw'], mx: 'auto'}}
        />
      </Box>
      <Box
        sx={{
          display: 'block',
          textAlign: 'center',
          p: 2,
          mx: 'auto',
        }}
      >
        <AnchorLink
          href={`#order`}
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
          <span sx={{color: 'white'}}>Commander</span>
        </AnchorLink>
        <IoIosArrowDropdown />
      </Box>
    </Grid>
  )
}
