/** @jsx jsx */
import {graphql} from 'gatsby'
import {Box, jsx} from 'theme-ui'
import BandcampPlayer from 'react-bandcamp'

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
        },
      }}
    >
      <h4>Ecouter :</h4>
      <BandcampPlayer album={bandcampId.toString()} />
    </Box>
  )
}
