/** @jsx jsx */
import {graphql} from 'gatsby'
import {Box, jsx} from 'theme-ui'
import {Themed} from '@theme-ui/mdx'
import {GraphQLErrorList} from '../../components/GraphQLErrorList'
import SEO from '../../components/SEO'
import {Post} from '../../components/Posts/Post'
import {Posts} from '../../components/Posts/'
import {Layout} from '../../components/Layout'
import {mapEdgesToNodes, toPlainText} from '../../lib/helpers'

const PostPage = ({data, errors, ...props}) => {
  const {post, newerPosts} = data
  const {title, images, _rawBody} = post
  const newerPostsNodes = mapEdgesToNodes(newerPosts)
  const image =
    images &&
    images.images &&
    images.images[0] &&
    images.images[0].asset.fluid.src
  const body = _rawBody && toPlainText(_rawBody)
  return (
    <Layout {...props}>
      {errors && <SEO title="GraphQL Error" />}
      {post && <SEO title={title} description={body} image={image} />}

      {errors && <GraphQLErrorList errors={errors} />}

      {post && <Post {...post} />}
      {newerPostsNodes && newerPostsNodes.length > 0 && (
        <Box p={[4, 4, 5]}>
          <Themed.h2>Autres nouvelles</Themed.h2>
          <Posts nodes={newerPostsNodes} />
        </Box>
      )}
    </Layout>
  )
}

export const query = graphql`query PostPage($post: String) {
  post: sanityPost(id: {eq: $post}) {
    ...postFields
  }
  newerPosts: allSanityPost(
    filter: {id: {ne: $post}}
    sort: {publishedAt: DESC}
    limit: 8
  ) {
    edges {
      node {
        ...postCardFields
      }
    }
  }
}`

export default PostPage
