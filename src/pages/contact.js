/** @jsx jsx */
import {Box, jsx} from 'theme-ui'
import {Contact} from '../components/Contact'
import {Layout} from '../components/Layout'
import SEO from '../components/SEO'

const ContactPage = () => (
  <Layout>
    <Box
      sx={{
        p: [3, 4, 5],
        position: 'relative',
        background: 'url(/arc-horizontal.svg)',
        height: '100%',
        minHeight: '600px',
      }}
    >
      <SEO title="Contact" />
      <Contact />
    </Box>
  </Layout>
)

export default ContactPage
