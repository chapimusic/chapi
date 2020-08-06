/** @jsx jsx */
import {graphql} from 'gatsby'
import {Box, Grid, jsx} from 'theme-ui'
import {Title} from './Title'
import {Body} from './Body'
import {Video} from './Video'

export const Spectacle = ({title, vimeoVideo, _rawBody, link, ...props}) => {
  graphql`
    fragment spectacleFields on SanitySpectacle {
      id
      title
      ...spectacleVideoFields
      _rawBody
      link
    }
  `
  return (
    <li>
      <Grid gap={0} columns={[1, 1, 1, 2]} sx={{maxWidth: '95vw'}} {...props}>
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
          <Video vimeoVideo={vimeoVideo} />
        </Box>
      </Grid>
    </li>
  )
}
