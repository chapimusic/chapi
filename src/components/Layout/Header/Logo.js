/** @jsx jsx */
import {Box, jsx} from 'theme-ui'
import Svg from '../../../svgs/logo.svg'
export const Logo = () => (
  <Box sx={{width: '100%', px: [0, 0, 0, 2]}}>
    <Svg sx={{maxWidth: 'full', minWidth: '200px', width: 'full'}} />
  </Box>
)
