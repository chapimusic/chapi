/** @jsx jsx */
import {Box, jsx} from 'theme-ui'
import {Socials} from '../Socials'
import {useSiteMetadata} from '../../../lib/useSiteMetadata'

export const Footer = () => {
  const {url} = useSiteMetadata()
  return (
    <Box as="footer" sx={{variant: 'layout.footer'}}>
      <Box>
        © {new Date().getFullYear()} <a href={url}>Chapi Chapo</a>
        {` `}
      </Box>
      <Box>
        <Socials sx={{}} />
      </Box>
    </Box>
  )
}
