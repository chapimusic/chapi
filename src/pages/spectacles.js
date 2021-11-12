/** @jsx jsx */
import {graphql} from 'gatsby'
import {Themed, jsx} from 'theme-ui'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Layout} from '../components/Layout'
import {Main} from '../components/Layout/Main'
import SEO from '../components/SEO'
import {Spectacles} from '../components/Spectacles/'
import {Installations} from '../components/Installations'
import {mapEdgesToNodes} from '../lib/helpers'

const SpectaclesPage = ({data, errors}) => {
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const spectaclesNodes = (data || {}).spectacles
    ? mapEdgesToNodes(data.spectacles)
    : []
  const installationsNodes = (data || {}).installations
    ? mapEdgesToNodes(data.installations)
    : []
  return (
    <Layout>
      <SEO title="Spectacles" />
      <Main
        sx={{
          px: 3,
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
            Spectacles pour petits et grands
          </span>
        </Themed.h1>

        {spectaclesNodes && <Spectacles nodes={spectaclesNodes} />}

        <Themed.h1 sx={{textAlign: 'center'}}>
          <span
            sx={{
              fontSize: 4,
              mt: 5,
              display: 'inline-block',
              bg: 'white',
              p: 3,
            }}
          >
            Installations
          </span>
        </Themed.h1>

        {installationsNodes && <Installations nodes={installationsNodes} />}
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query SpectaclesPageQuery {
    spectacles: allSanitySpectacle(sort: {fields: [order], order: ASC}) {
      edges {
        node {
          ...spectacleFields
        }
      }
    }
    installations: allSanityInstallation(sort: {fields: [order], order: ASC}) {
      edges {
        node {
          ...installationFields
        }
      }
    }
  }
`

export default SpectaclesPage
