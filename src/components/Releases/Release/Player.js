/** @jsx jsx */
import {Box, jsx} from 'theme-ui'
import BandcampPlayer from 'react-bandcamp'

export const Player = ({album}) => (
  <Box
    sx={{
      height: 'full',
      width: 'full',
    }}
  >
    <h4>Ecouter :</h4>
    <BandcampPlayer album={album.toString()} />
  </Box>
)
