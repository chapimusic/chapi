/** @jsx jsx */
import {graphql} from 'gatsby'
import {Themed, jsx} from 'theme-ui'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Layout} from '../components/Layout'
import {Main} from '../components/Layout/Main'
import SEO from '../components/SEO'
import {Photos} from '../components/Photos/'
import {mapEdgesToNodes} from '../lib/helpers'

const PhotosPage = ({data, errors}) => {
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const photosNodes = (data || {}).photos ? mapEdgesToNodes(data.photos) : []
  return (
    <Layout>
      <SEO title="Photos" />
      <Main
        sx={{
          px: 3,
          bg: 'red',
          pb: 3,
        }}
      >
        {photosNodes && <Photos nodes={photosNodes} />}
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query PhotosPageQuery {
    photos: allSanityPhoto(sort: {fields: [publishedAt], order: DESC}) {
      edges {
        node {
          ...photoFields
        }
      }
    }
  }
`

export default PhotosPage
