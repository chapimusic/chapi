/** @jsx jsx */
import {graphql} from 'gatsby'
import {Box, Grid, jsx} from 'theme-ui'
import {Title} from './Title'
import {Body} from './Body'
import {VideosVideoVideo} from './Video'

export const VideosVideo = ({title, video, _rawBody, ...props}) => {
  graphql`
    fragment videoFields on SanityVideos {
      id
      title
      ...videoVideoFields
      _rawBody
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
        </Box>
        <Box>
          <VideosVideoVideo video={video} />
        </Box>
      </Grid>
    </li>
  )
}
