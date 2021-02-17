/** @jsx jsx */
import {graphql} from 'gatsby'
import {Styled, jsx} from 'theme-ui'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Layout} from '../components/Layout'
import {Main} from '../components/Layout/Main'
import SEO from '../components/SEO'
import {Videos} from '../components/Videos/'
import {mapEdgesToNodes} from '../lib/helpers'

const VideosPage = ({data, errors}) => {
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const videosNodes = (data || {}).videos
    ? mapEdgesToNodes(data.videos)
    : []
  return (
    <Layout>
      <SEO title="Vidéos" />
      <Main
        sx={{
          px: 3,
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
            Vidéos
          </span>
        </Styled.h1>

        {videosNodes && <Videos nodes={videosNodes} />}

      </Main>
    </Layout>
  )
}

export const query = graphql`
  query VideosPageQuery {
    videos: allSanityVideos(sort: {fields: [publishedAt], order: DESC}) {
      edges {
        node {
          ...videoFields
        }
      }
    }
  }
`

export default VideosPage
