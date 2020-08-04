/** @jsx jsx */
import {Box, jsx} from 'theme-ui'
import {Collector, Vinyle, Story} from '../components/Collector'
import {Layout} from '../components/Layout'
import Seo from '../components/Seo'

const IndexPage = () => (
  <Layout>
    <Box sx={{bg: 'red.0', color: 'white', p: 4}}>
      <Seo title="COLLECTOR, nouvel album" />
      <Collector />
    </Box>
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background: 'url(/arc.svg)',
        backgroundRepeat: 'no-repeat',
        //background: 'transparent',
        '::before': {
          content: '""',
          position: 'absolute',
          width: '20vw',
          height: '100%',
          top: 0,
          bottom: '0',
          left: '0',
          zIndex: '0',
          //transform: 'rotate(60deg)',
        },
      }}
    >
      <Box
        sx={{
          zIndex: '2',
          color: 'text',
          p: 4,
        }}
      >
        <Story
          sx={{
            background: ['rgba(255,255,255,0.45)'],
            p: 3,
          }}
        />
      </Box>
      <Box sx={{background: 'transparent', color: 'text', p: 4}}>
        <Vinyle
          sx={{
            background: ['rgba(255,255,255,0.45)'],
            p: 3,
          }}
        />
      </Box>
    </Box>
  </Layout>
)

export default IndexPage
