/** @jsx jsx */
import {graphql} from 'gatsby'
import {Box, Grid, jsx} from 'theme-ui'
import {Title} from './Title'
import {Body} from './Body'
import {Images} from './Images'

export const Installation = ({title, images, _rawBody, link, ...props}) => {
  graphql`
    fragment installationFields on SanityInstallation {
      id
      title
      ...installationImageFields
      _rawBody
      link
    }
  `
  return (
    <li>
      <Grid gap={0} columns={[1, 1, 1, 2]} sx={{}} {...props}>
        <Box
          p={3}
          sx={{
            bg: 'white',
            color: 'text',
          }}
        >
          <Title title={title} />
          <Body raw={_rawBody} />
          {link && (
            <a href={link} target="_blank" rel="noreferrer">
              Plus d'infos ici
            </a>
          )}
        </Box>
        <Box>
          <Images images={images} />
        </Box>
      </Grid>
    </li>
  )
}
