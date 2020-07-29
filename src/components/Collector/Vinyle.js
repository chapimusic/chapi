/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {FaShoppingCart} from 'react-icons/fa'
import {Box, Button, Grid, jsx, Styled} from 'theme-ui'

export const Vinyle = () => {
  const data = useStaticQuery(graphql`
    query {
      speakAndSpell: file(relativePath: {eq: "jouet-speak-and-spell.png"}) {
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
    >
      <Box>
        <Styled.h2>Précommander</Styled.h2>
        <Grid gap={2} columns={[1, 1, 2]}>
          <Box>
            <h3>France</h3>
            <p>19€ + 7,25€ de frais de livraison</p>
            <form
              target="paypal"
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="PL2HFZDGKL6SC"
              />
              <Button className="btn-three">
                <FaShoppingCart />
                <span sx={{ml: 2}}>Précommander</span>
              </Button>
              <img
                alt=""
                border="0"
                src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </Box>
          <Box>
            <h3>World</h3>
            <p>19€ + 7,25€ of shipping costs</p>
            <form
              target="paypal"
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="PL2HFZDGKL6SC"
              />
              <Button className="btn-three">
                <FaShoppingCart />
                <span sx={{ml: 2}}>Preorder (World)</span>
              </Button>
              <img
                alt=""
                border="0"
                src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </Box>
        </Grid>
      </Box>
      <Box>
        <Img
          fluid={data.speakAndSpell.childImageSharp.fluid}
          sx={{maxWidth: '300px'}}
        />
      </Box>
    </Grid>
  )
}
