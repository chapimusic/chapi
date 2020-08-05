/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import {Box, jsx, Styled} from 'theme-ui'
import {BlockContent} from '../components/BlockContent'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Layout} from '../components/Layout'
import SEO from '../components/SEO'

const ConcertsPage = () => {
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
      <Box sx={{p: 4, maxWidth: '960px', mx: 'auto'}}>
        <Box sx={{bg: 'red.1', color: 'white', p: 3}}>
          <Styled.h2>Concerts à venir</Styled.h2>{' '}
          <BlockContent blocks={_rawUpcomingConcerts} />
        </Box>
        <Box sx={{pt: 3}}>
          <Styled.h2>Concerts passés</Styled.h2>
          <BlockContent blocks={_rawPastConcerts} />
        </Box>
      </Box>
    </Layout>
  )
}

export default ConcertsPage
