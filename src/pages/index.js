/** @jsx jsx */
import {Box, jsx} from 'theme-ui'
import {Collector, Vinyle, Story} from '../components/Collector'
import {Layout} from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <Box
      sx={{
        //bg: 'red.0',
        background: theme =>
          `linear-gradient(${theme.colors.red[0]} 0%, ${theme.colors.purple} 90%)`,
        color: 'white',
        p: 4,
      }}
    >
      <Collector />
    </Box>
    <Box
      sx={{
        position: 'relative',
        background: 'url(/arc.svg)',
        backgroundRepeat: 'repeat-y',
        height: '100%',
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
