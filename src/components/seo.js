/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import {useLocation} from '@reach/router'
import PropTypes from 'prop-types'
import React from 'react'
import {Helmet} from 'react-helmet'
import {truncateString} from '../lib/helpers'
import {useSiteMetadata} from '../lib/useSiteMetadata'

const Seo = ({title, description, image, product, article, noIndex = false}) => {
  const site = useSiteMetadata()
  const {pathname} = useLocation()
  const seo = {
    title: title && title.length > 0 ? (title.length <= 60 ? (title.includes(site.title) ? title : `${title} — ${site.title}`) : title) : site.title,
    description: (description || site.description) && truncateString(description || site.description, 147),
    image: image || `${site.url}/chapi-chapo-collector-cover.jpg`,
    url: pathname && `${site.url}${pathname}`
  }

  return (
    <Helmet>
      <html lang='fr-FR' amp />
      <link rel='dns-prefetch' href='//cdn.sanity.io/' />
      {seo.title && (
        <title itemProp='name' lang='fr-FR'>
          {seo.title}
        </title>
      )}
      {seo.title && <meta property='og:title' content={seo.title} />}
      {seo.title && <meta name='twitter:title' content={seo.title} />}
      {seo.description && <meta name='description' content={seo.description} />}
      {seo.description && <meta property='og:description' content={seo.description} />}
      {seo.description && <meta name='twitter:description' content={seo.description} />}
      {seo.image && <meta name='image' content={seo.image} />}
      {seo.image && <meta property='og:image' content={seo.image} />}
      {seo.image && <meta name='twitter:image' content={seo.image} />}
      <meta name='twitter:card' content='summary_large_image' />
      {seo.url && <meta property='og:url' content={seo.url} />}
      {seo.url && <link rel='canonical' href={seo.url} />}
      {(article ? true : null) && <meta property='og:type' content='article' />}
      {(product ? true : null) && <meta property='og:type' content='product' />}
      {!product && !article && <meta property='og:type' content='website' />}
      {site.author && <meta name='twitter:creator' content={site.author} />}
      {noIndex && <meta name='robots' content='noindex' />}
    </Helmet>
  )
}

Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
  product: false
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  product: PropTypes.bool
}

export default Seo
