/** @jsx jsx */
import {Box, jsx} from 'theme-ui'
import {Socials} from '../Socials'
import {useSiteMetadata} from '../../../lib/useSiteMetadata'

export const Footer = () => {
  const {url} = useSiteMetadata()
  return (
    <Box as="footer" sx={{variant: 'layout.footer'}}>
      <Box>
        © {new Date().getFullYear()}{' '}
        <a href={url} sx={{textDecoration: 'none'}}>
          Chapi Chapo
        </a>
        {` `}
      </Box>
      <Box>
        <Socials sx={{mt: 2}} />
      </Box>
    </Box>
  )
}
