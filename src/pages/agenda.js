/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import {Box, jsx, Styled} from 'theme-ui'
import {BlockContent} from '../components/BlockContent'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Layout} from '../components/Layout'
import SEO from '../components/SEO'
import {useSiteMetadata} from '../lib/useSiteMetadata'

const AgendaPage = () => {
  const {
    concerts: {_rawUpcomingConcerts, _rawPastConcerts},
    errors,
  } = useStaticQuery(graphql`
    {
      concerts: sanityConcert {
        _rawPastConcerts
        _rawUpcomingConcerts
      }
    }
  `)
  if (errors) {
    return <GraphQLErrorList errors={errors} />
  }
  return (
    <Layout>
      <SEO title="Concerts" />
      <Box
        sx={{
          position: 'relative',
          background: 'url(/arc.svg)',
          height: '100%',
        }}
      >
        <Styled.h1 sx={{textAlign: 'center'}}>
          <span
            sx={{
              fontSize: 4,
              mt: 2,
              display: 'inline-block',
              bg: 'white',
              p: 3,
            }}
          >
            Agenda
          </span>
        </Styled.h1>
        <Box sx={{p: 4, maxWidth: '960px', mx: 'auto'}}>
          <Box sx={{bg: 'red.1', color: 'white', p: 3}}>
            <BlockContent blocks={_rawUpcomingConcerts} />
          </Box>
          <Box sx={{p: 3}}>
            <BlockContent blocks={_rawPastConcerts} />
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default AgendaPage