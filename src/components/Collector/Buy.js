/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {FaShoppingCart} from 'react-icons/fa'
import {Box, Button, Grid, jsx, Styled} from 'theme-ui'

export const Buy = props => {
  const {speakAndSpell, cdPreview, lpPreview} = useStaticQuery(graphql`
    query {
      speakAndSpell: file(relativePath: {eq: "jouet-speak-and-spell.png"}) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cdPreview: file(
        relativePath: {eq: "ChapoChapo_Collector_CD_3Dsimu_A.png"}
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lpPreview: file(
        relativePath: {eq: "ChapoChapo_Collector_LP_3Dsimu_B_aplati.png"}
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Grid
      gap={4}
      columns={[1, 1, 1, '300px auto']}
      sx={{
        maxWidth: '1200px',
        mx: 'auto',
      }}
      {...props}
    >
      <Box sx={{order: [1, 1, 1, 0], zIndex: 1}}>
        <Img
          fluid={speakAndSpell.childImageSharp.fluid}
          sx={{
            maxWidth: '300px',
          }}
        />
      </Box>
      <Box id="order" sx={{order: [0, 0, 0, 1], zIndex: 2}}>
        <Grid gap={2} columns={[1, 2, 2, 2]}>
          <Box>
            <Img
              fluid={lpPreview.childImageSharp.fluid}
              sx={{
                maxWidth: '400px',
              }}
            />
          </Box>
          <Box>
            <Styled.h2>Commander</Styled.h2>
            <Styled.h3 sx={{color: 'red.1', p: 0}}>
              Vinyle blanc / 12" / Gatefold
            </Styled.h3>
            <p>
              <span sx={{color: 'primary'}}>19€</span>
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
              <Button className="btn-three" sx={{mb: 2}}>
                <FaShoppingCart />
                <span sx={{ml: 2}}>Commander</span>
              </Button>
              <img
                alt=""
                border="0"
                src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
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
                <span sx={{ml: 2}}>Order (World)</span>
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
            <Img
              fluid={cdPreview.childImageSharp.fluid}
              sx={{
                maxWidth: '400px',
              }}
            />
          </Box>
          <Box>
            <Styled.h3 sx={{color: 'red.1', p: 0, mt: 4}}>
              CD Digipack
            </Styled.h3>
            <p>
              <span sx={{color: 'primary'}}>15€</span>
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
              <Button className="btn-three" sx={{mb: 2}}>
                <FaShoppingCart />
                <span sx={{ml: 2}}>Commander</span>
              </Button>
              <img
                alt=""
                border="0"
                src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
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
                <span sx={{ml: 2}}>Order (World)</span>
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
    </Grid>
  )
}
