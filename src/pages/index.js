/** @jsx jsx */
import {Box, jsx} from 'theme-ui'
import {Collector, Vinyle} from '../components/Collector'
import {Layout} from '../components/Layout'
import Seo from '../components/Seo'

const IndexPage = () => (
  <Layout>
    <Box sx={{bg: 'primary', color: 'white', p: 4}}>
      <Seo title="COLLECTOR, nouvel album" />
      <Collector />
    </Box>
    <Box sx={{bg: 'red.1', color: 'text', p: 4}}>
      <Vinyle />
    </Box>
  </Layout>
)

export default IndexPage
