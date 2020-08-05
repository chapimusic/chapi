const pth = require('path')
const {isFuture, format, parseISO} = require('date-fns')
const currency = require('currency.js')

/* TEMPLATES */
const templates = {
  baseDir: 'src/templates',
  posts: {
    post: 'posts/post.js',
  },
  releases: {
    release: 'releases/release.js',
  },
  products: {
    product: 'products/product.js',
  },
}

/*
    POSTS / POST
*/
async function createPostPages(graphql, actions, reporter) {
  const {createPage} = actions
  const result = await graphql(`
    {
      query: allSanityPost(
        filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)
  if (result.errors) throw result.errors
  const edges = (result.data.query || {}).edges || []
  edges
    .filter(edge => !isFuture(parseISO(edge.node.publishedAt)))
    .forEach(edge => {
      const {
        node: {
          id: post,
          slug: {current: slug},
          publishedAt,
        },
      } = edge
      const path = `/${format(parseISO(publishedAt), 'yyyy/MM')}/${slug}/`
      reporter.info(`Creating project page: ${path}`)
      createPage({
        path,
        component: pth.resolve(
          pth.join(templates.baseDir, templates.posts.post)
        ),
        context: {
          post,
        },
      })
    })
}

/*
    RELEASES / RELEASE
*/
async function createReleasePages(graphql, actions, reporter) {
  const {createPage} = actions
  const result = await graphql(`
    {
      query: allSanityRelease(
        filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)
  if (result.errors) throw result.errors
  const edges = (result.data.query || {}).edges || []
  edges.forEach(edge => {
    const {
      node: {
        id: release,
        slug: {current: slug},
        publishedAt,
      },
    } = edge
    const path = `/album/${slug}/`
    reporter.info(`Creating project page: ${path}`)
    createPage({
      path,
      component: pth.resolve(
        pth.join(templates.baseDir, templates.releases.release)
      ),
      context: {
        release,
      },
    })
  })
}

/*
    SHOP / PRODUCTS
*/
async function createShopProductPages(graphql, actions, reporter) {
  const {createPage} = actions
  const result = await graphql(`
    {
      query: allSanityProduct(filter: {slug: {current: {ne: null}}}) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)
  if (result.errors) throw result.errors
  const edges = (result.data.query || {}).edges || []
  edges.forEach(edge => {
    const {
      node: {
        id: product,
        slug: {current: slug},
      },
    } = edge
    const path = `/${slug}/`
    reporter.info(`Creating product page: ${path}`)
    createPage({
      path,
      component: pth.resolve(
        pth.join(templates.baseDir, templates.products.product)
      ),
      context: {
        product,
      },
    })
  })
}

/*
    SHOP / CATEGORIES
*/
/*
async function createShopCategoryPages(graphql, actions, reporter) {
  const {createPage} = actions
  const result = await graphql(`
    {
      query: allSanityProductCategory(filter: {slug: {current: {ne: null}}}) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)
  if (result.errors) throw result.errors
  const edges = (result.data.query || {}).edges || []
  edges.forEach(edge => {
    const {
      node: {
        id: category,
        slug: {current: slug},
      },
    } = edge
    const path = `/${slug}/`
    reporter.info(`Creating category page: ${path}`)
    createPage({
      path,
      component: pth.resolve(
        pth.join(templates.baseDir, templates.shop.category)
      ),
      context: {
        category,
      },
    })
  })
}
*/

exports.createPages = async ({graphql, actions, reporter}) => {
  await createPostPages(graphql, actions, reporter)
  await createReleasePages(graphql, actions, reporter)
  await createShopProductPages(graphql, actions, reporter)
  //  await createShopCategoryPages(graphql, actions, reporter)
}

exports.createResolvers = ({createResolvers}) => {
  createResolvers({
    SanityPrice: {
      formatted: {
        type: 'String!',
        resolve: source => {
          return (
            currency(source.value, {decimal: ',', symbol: ''}).format() + ' €'
          )
        },
      },
    },
  })
}
