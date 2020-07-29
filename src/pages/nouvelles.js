import {graphql} from 'gatsby'
import React from 'react'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Layout} from '../components/Layout'
import {Main} from '../components/Layout/Main'
import {Posts} from '../components/Posts/'
import Seo from '../components/Seo'
import {filterOutDocsWithoutSlugs, mapEdgesToNodes} from '../lib/helpers'

const Nouvelles = ({data, errors}) => {
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)
    : []

  return (
    <Layout>
      <Seo title="Nouvelles" />
      <Main>{postNodes && <Posts nodes={postNodes} />}</Main>
    </Layout>
  )
}

export const query = graphql`
  query PostsPageQuery {
    posts: allSanityPost(
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          ...postCardFields
        }
      }
    }
  }
`

export default Nouvelles
