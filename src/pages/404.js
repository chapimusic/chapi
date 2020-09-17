/** @jsx jsx */
// import {motion} from 'framer-motion'
import {Box, jsx} from 'theme-ui'
import {Layout} from '../components/Layout'
import SEO from '../components/SEO'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Introuvable" />
    <Box
      sx={{
        maxWidth: '600px',
        mx: 'auto',
        bg: 'red.1',
        color: 'white',
        my: 4,
        p: 5,
      }}
    >
      <h1 sx={{m: 0}}>Désolé :(</h1>
      <p>
        Cette page n'existe pas ou plus, on espère que vous en trouverez
        d'autres qui vous plairont.
      </p>
    </Box>
  </Layout>
)

export default NotFoundPage
