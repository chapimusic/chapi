/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {Box, Grid, jsx, Themed} from 'theme-ui'

export const Story = props => {
  const data = useStaticQuery(graphql`
    query {
      speakAndSpell: file(relativePath: {eq: "jouet-boite.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 500
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)
  const speakAndSpellImage = getImage(data.speakAndSpell)
  return (
    <Grid
      gap={2}
      columns={[1, 'auto 200px', 'auto 300px']}
      sx={{maxWidth: '1200px'}}
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
        <Themed.h4>73 jouets musicaux vintage à l'intérieur !</Themed.h4>
        <p>
          Avec la participation de MAXWELL FARRINGTON (Dewaere), LAETITIA
          SHERIFF, JAD FAIR (Half Japanese), RACHEL BARREDA HORWOOD (Trash Kit,
          Bamboo), G.W.SOK (ex The Ex), EMILIE QUINQUIS (Tiny Feet, Yann
          Tiersen), TROY VON BALTHAZAR (Chokebore)
        </p>
        <p>
          <strong>Music From The Masses</strong> // distribution{' '}
          <strong>[Pias]</strong> // 2020
          <br />
        </p>
        <p>
          <span sx={{color: 'gray'}}>Musique :</span> Patrice Elégoët |{' '}
          <span sx={{color: 'gray'}}>Mixage :</span>
          {` `}
          Thomas Poli | <span sx={{color: 'gray'}}>Mastering :</span> Sébastien
          Lorho | <span sx={{color: 'gray'}}>Photos</span> : Jean-Philippe Corre
          | <span sx={{color: 'gray'}}>Graphisme</span> : Amélie Grosselin
        </p>
      </Box>
      <Box sx={{zIndex: 2}}>
        <GatsbyImage image={speakAndSpellImage} sx={{maxWidth: '50vw'}} />
      </Box>
    </Grid>
  )
}
