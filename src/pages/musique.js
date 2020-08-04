import {graphql} from 'gatsby'
import React from 'react'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Layout} from '../components/Layout'
import {Main} from '../components/Layout/Main'
import {Releases} from '../components/Releases/'
import SEO from '../components/SEO'
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from '../lib/helpers'

const Musique = ({data, errors}) => {
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const releaseNodes = (data || {}).releases
    ? mapEdgesToNodes(data.releases)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : []

  return (
    <Layout>
      <Seo title="Musique" />
      <Main>{releaseNodes && <Releases nodes={releaseNodes} />}</Main>
    </Layout>
  )
}

export const query = graphql`
  query ReleasesPageQuery {
    releases: allSanityRelease(
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          ...releaseCardFields
        }
      }
    }
  }
`

export default Musique
