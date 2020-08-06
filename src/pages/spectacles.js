/** @jsx jsx */
import {graphql} from 'gatsby'
import {Styled, jsx} from 'theme-ui'
import {GraphQLErrorList} from '../components/GraphQLErrorList'
import {Layout} from '../components/Layout'
import {Main} from '../components/Layout/Main'
import SEO from '../components/SEO'
import {Spectacles} from '../components/Spectacles/'
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
        <Styled.h1 sx={{textAlign: 'center'}}>
          <span sx={{fontSize: 4, bg: 'white', p: 3}}>
            Spectacles pour petits et grands
          </span>
        </Styled.h1>

        {spectaclesNodes && <Spectacles nodes={spectaclesNodes} />}
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
  }
`

export default SpectaclesPage
