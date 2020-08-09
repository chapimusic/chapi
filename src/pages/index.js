/** @jsx jsx */
import {Box, jsx} from 'theme-ui'
import {Hero, Buy, Story} from '../components/Collector'
import {Layout} from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <Box
      sx={{
        background: theme =>
          `linear-gradient(${theme.colors.red[0]} 0%, ${theme.colors.purple} 90%)`,
        color: 'white',
        p: 4,
      }}
    >
      <Hero />
    </Box>
    <Box
      sx={{
        position: 'relative',
        background: 'url(/arc.svg)',
        backgroundRepeat: 'repeat-y',
        height: '100%',
        backgroundSize: '20vw',
      }}
    >
      <Box
        sx={{
          zIndex: '2',
          color: 'text',
          py: [1, 2, 4, 4],
          px: [1, 2, 4, 2],
        }}
      >
        <Story
          sx={{
            pl: '22vw',
          }}
        />
      </Box>
      <Box sx={{background: 'transparent', color: 'text', p: 4}}>
        <Buy
          sx={{
            pl: ['22vw', 3],
          }}
        />
      </Box>
    </Box>
  </Layout>
)

export default IndexPage
