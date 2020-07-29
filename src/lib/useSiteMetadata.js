import {graphql, useStaticQuery} from 'gatsby'

export const useSiteMetadata = () => {
  const {site} = useStaticQuery(
    graphql`
      query SiteMetaData {
        site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
          title
          url
          description
          keywords
          instagram
          facebook
          twitter
          youtube
          spotify
        }
      }
    `
  )
  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }
  return site
}
