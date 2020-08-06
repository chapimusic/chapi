/** @jsx jsx */
import {Box, Styled, jsx} from 'theme-ui'
import {Contact} from '../components/Contact'
import {Layout} from '../components/Layout'
import SEO from '../components/SEO'

const ContactPage = () => (
  <Layout>
    <Box
      sx={{
        p: 3,
        position: 'relative',
        background: 'url(/arc-horizontal.svg)',
        height: '100%',
        minHeight: '600px',
      }}
    >
      <SEO title="Contact" />
      <Styled.h1 sx={{textAlign: 'center', mb: 4}}>
        <span
          sx={{
            fontSize: 4,
            mt: 2,
            display: 'inline-block',
            bg: 'white',
            p: 3,
          }}
        >
          Contact
        </span>
      </Styled.h1>
      <Contact />
    </Box>
  </Layout>
)

export default ContactPage
