/** @jsx jsx */
import {graphql} from 'gatsby'
import {Styled, jsx} from 'theme-ui'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Layout} from '../components/Layout'
import {Main} from '../components/Layout/Main'
import SEO from '../components/SEO'
import {Installations} from '../components/Installations'
import {mapEdgesToNodes} from '../lib/helpers'

const InstallationsPage = ({data, errors}) => {
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const nodes = (data || {}).installations
    ? mapEdgesToNodes(data.installations)
    : []
  return (
    <Layout>
      <SEO title="Installations" />
      <Main
        sx={{
          px: 3,
          position: 'relative',
          background: 'url(/arc-horizontal.svg)',
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
            Installations
          </span>
        </Styled.h1>

        {nodes && <Installations nodes={nodes} />}
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query InstallationsPageQuery {
    installations: allSanityInstallation(sort: {fields: [order], order: ASC}) {
      edges {
        node {
          ...installationFields
        }
      }
    }
  }
`

export default InstallationsPage
