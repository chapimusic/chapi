/** @jsx jsx */
import {Box, jsx} from 'theme-ui'
import {Contact} from '../components/Contact'
import {Layout} from '../components/Layout'
import SEO from '../components/SEO'

const ContactPage = () => (
  <Layout>
    <Box sx={{p: 4}}>
      <SEO title="Contact" />
      <Contact />
    </Box>
  </Layout>
)

export default ContactPage
