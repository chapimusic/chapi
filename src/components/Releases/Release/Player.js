/** @jsx jsx */
import {graphql} from 'gatsby'
import {Box, jsx} from 'theme-ui'
//import BandcampPlayer from 'react-bandcamp'

export const Player = ({bandcampId}) => {
  graphql`
    fragment releasePlayerFields on SanityRelease {
      bandcampId
    }
  `
  return (
    <Box
      sx={{
        height: 'full',
        width: 'full',
        iframe: {
          height: '100% !important',
          objectFit: 'contain',
        },
      }}
    >
      <iframe
        style={{border: 0, width: '100%'}}
        src={`https://bandcamp.com/EmbeddedPlayer/album=${bandcampId.toString()}/size=large/bgcol=ffffff/linkcol=7137dc/artwork=none/transparent=true/`}
        seamless
      ></iframe>
      {/*<BandcampPlayer album={} />*/}
    </Box>
  )
}
