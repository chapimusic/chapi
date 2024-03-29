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
      <SEO title="Boutique" />
      <Main>
        {productNodes && (
          <Products nodes={productNodes} sx={{px: [0, 2, 2, 4], pb: 4}} />
        )}
      </Main>
    </Layout>
  )
}

export const query = graphql`query BoutiquePageQuery {
  products: allSanityProduct(
    sort: {publishedAt: DESC}
    filter: {slug: {current: {ne: null}}, price: {value: {ne: 0}}}
  ) {
    edges {
      node {
        ...productCardFields
      }
    }
  }
}`

export default Boutique
