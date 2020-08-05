/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {Box, Grid, jsx, Styled} from 'theme-ui'

export const Story = props => {
  const data = useStaticQuery(graphql`
    query {
      speakAndSpell: file(relativePath: {eq: "jouet-boite.png"}) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Grid
      gap={2}
      columns={[1, 'auto 300px']}
      sx={{maxWidth: '1024px', mx: 'auto'}}
      {...props}
    >
      <Box sx={{zIndex: 2}}>
        <p>
          "De brocantes en vide-greniers, le musicien finistérien amasse par
          centaines des jouets musicaux anciens du monde entier. Son 4ème album
          s'articule autour des jouets électroniques. C'est dans une marmite
          multicolore que prend vie <strong>Collector</strong>, un joyeux ovni
          qui navigue entre minimal pop, électro pop et punky pop."
        </p>
        <Styled.h4 sx={{my: 2}}>
          73 jouets musicaux vintage à l'intérieur !
        </Styled.h4>
        <p>
          Avec la participation de MAXWELL FARRINGTON (Dewaere), LAETITIA
          SHERIFF, JAD FAIR (Half Japanese), RACHEL BARREDA HORWOOD (Trash Kit,
          Bamboo), G.W.SOK (ex The Ex), EMILIE QUINQUIS (Tiny Feet, Yann
          Tiersen), TROY VON BALTHAZAR (Chokebore)
        </p>
        <p>
          A paraître le 06 novembre 2020 chez{' '}
          <strong>Music From The Masses</strong>, distribution{' '}
          <strong>[Pias]</strong>.<br />
        </p>
        <p>
          <span sx={{color: 'gray'}}>Musique :</span> Patrice Elégoët |{' '}
          <span sx={{color: 'gray'}}>Mixage :</span>
          Thomas Poli | <span sx={{color: 'gray'}}>Mastering :</span> Sébastien
          Lorho | <span sx={{color: 'gray'}}>Photos</span> : Jean-Philippe Corre
          | <span sx={{color: 'gray'}}>Graphisme</span> : Amélie Grosselin
        </p>
      </Box>
      <Box sx={{zIndex: 2}}>
        <Img
          fluid={data.speakAndSpell.childImageSharp.fluid}
          sx={{maxWidth: 'full'}}
        />
      </Box>
    </Grid>
  )
}
