import {graphql} from 'gatsby'
import React from 'react'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Layout} from '../components/Layout'
import {Main} from '../components/Layout/Main'
import {Products} from '../components/Products/'
import SEO from '../components/SEO'
import {filterOutDocsWithoutSlugs, mapEdgesToNodes} from '../lib/helpers'

const Boutique = ({data, errors}) => {
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const productNodes = (data || {}).products
    ? mapEdgesToNodes(data.products).filter(filterOutDocsWithoutSlugs)
    : []

  return (
    <Layout>
      <Seo title="Boutique" />
      <Main>{productNodes && <Products nodes={productNodes} />}</Main>
    </Layout>
  )
}

export const query = graphql`
  query BoutiquePageQuery {
    products: allSanityProduct(
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}}
    ) {
      edges {
        node {
          ...productCardFields
        }
      }
    }
  }
`

export default Boutique
