/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {Box, jsx, Styled} from 'theme-ui'
import {BlockContent} from '../components/BlockContent'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Layout} from '../components/Layout'
import SEO from '../components/SEO'

const AgendaPage = () => {
  const {
    concerts: {_rawUpcomingConcerts, _rawPastConcerts},
    jouetGuitare,
    errors,
  } = useStaticQuery(graphql`
    {
      concerts: sanityConcert {
        _rawPastConcerts
        _rawUpcomingConcerts
      }
      jouetGuitare: file(relativePath: {eq: "jouet-guitare.png"}) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  if (errors) {
    return <GraphQLErrorList errors={errors} />
  }
  return (
    <Layout>
      <SEO title="Agenda" />
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
          <Img
            fluid={jouetGuitare.childImageSharp.fluid}
            sx={{
              maxWidth: '70%',
              mt: 4,
              transform: 'rotate(180deg)',
              mx: 'auto',
            }}
          />
          <Box sx={{p: 3}}>
            <BlockContent blocks={_rawPastConcerts} />
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default AgendaPage
