/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {FaShoppingCart} from 'react-icons/fa'
import {Box, Button, Grid, jsx, Styled} from 'theme-ui'

export const Vinyle = props => {
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
      gap={4}
      columns={[1, '300px auto']}
      sx={{
        maxWidth: '1024px',
        mx: 'auto',
      }}
      {...props}
    >
      <Box sx={{order: [1, 0], zIndex: 1}}>
        <Img
          fluid={data.speakAndSpell.childImageSharp.fluid}
          sx={{
            maxWidth: '300px',
          }}
        />
      </Box>
      <Box id="preorder" sx={{order: [0, 1], zIndex: 2}}>
        <Styled.h2>Précommander</Styled.h2>
        <Styled.h3 sx={{color: 'red.1', p: 0}}>
          Vinyle blanc / 12" / Gatefold
        </Styled.h3>
        <Grid gap={2} columns={[1, 1, 2]}>
          <Box>
            <p>
              <h4>France</h4>19€ + 7,90€ de frais de livraison
            </p>
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
            <p>
              <h4>World</h4>19€ + 18,50€ including shipping costs
            </p>
            <form
              target="paypal"
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="DVU67FAVMRRUE"
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
        <Styled.h3 sx={{color: 'red.1', p: 0}}>CD Digipack</Styled.h3>
        <Grid gap={2} columns={[1, 1, 2]}>
          <Box>
            <p>
              <h4>France</h4>15 + 3€ de frais de livraison
            </p>
            <form
              target="paypal"
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="3GCQHL3X9WX7G"
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
            <p>
              <h4>World</h4>15 + 5,90€ including shipping costs
            </p>
            <form
              target="paypal"
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="YH7XETRXENTXG"
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
        <p sx={{fontSize: 0, fontStyle: 'italic'}}>
          Les précommandes seront expédiées en octobre.
        </p>
      </Box>
    </Grid>
  )
}
