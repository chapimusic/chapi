/** @jsx jsx */
import {graphql, useStaticQuery} from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {Box, jsx, Themed} from 'theme-ui'
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
          gatsbyImageData(
            width: 600
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
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
        <Themed.h1 sx={{textAlign: 'center'}}>
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
        </Themed.h1>
        <Box sx={{p: 4, maxWidth: '960px', mx: 'auto'}}>
          <Box sx={{bg: 'red.1', color: 'white', p: 3}}>
            <BlockContent blocks={_rawUpcomingConcerts} />
          </Box>
          <GatsbyImage
            image={getImage(jouetGuitare)}
            sx={{
              maxWidth: '70%',
              mt: 4,
              transform: 'rotate(180deg)',
              mx: 'auto',
            }}
          />
          <Box sx={{p: 3, mt: 3, bg: 'rgba(255,255,255,0.8)'}}>
            <BlockContent blocks={_rawPastConcerts} />
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default AgendaPage
