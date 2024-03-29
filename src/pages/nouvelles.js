import {graphql} from 'gatsby'
import React from 'react'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Layout} from '../components/Layout'
import {Main} from '../components/Layout/Main'
import {Posts} from '../components/Posts/'
import SEO from '../components/SEO'
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
      <SEO title="Nouvelles" />
      <Main sx={{px: 3}}>{postNodes && <Posts nodes={postNodes} />}</Main>
    </Layout>
  )
}

export const query = graphql`query PostsPageQuery {
  posts: allSanityPost(
    sort: {publishedAt: DESC}
    filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
  ) {
    edges {
      node {
        ...postCardFields
      }
    }
  }
}`

export default Nouvelles
