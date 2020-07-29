/** @jsx jsx */
import {Link as GatsbyLink} from 'gatsby'
import {jsx, Styled} from 'theme-ui'
import {MobileMenuButton} from '../Menu'
import {Logo} from './Logo'
import {Desktop as DesktopMenu} from '../Menu'
import {Socials} from '../Socials'

export const Header = ({siteTitle}) => (
  <Styled.div
    as="header"
    sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      p: 3,
      mt: 1,
      alignItems: 'center',
      variant: 'layout.header',
    }}
  >
    <div>
      <GatsbyLink
        to="/"
        sx={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <Logo />
        <h1 hidden>{siteTitle}</h1>
      </GatsbyLink>
    </div>
    <div>
      <nav>
        <DesktopMenu
          sx={{
            display: ['none', 'none', 'none', 'flex'],
          }}
        />
      </nav>
    </div>
    <div>
      <MobileMenuButton
        sx={{
          display: ['flex', 'flex', 'flex', 'none'],
          justifyContent: 'flex-end',
        }}
      />
      <Socials
        sx={{
          display: ['none', 'none', 'none', 'flex'],
          justifyContent: 'flex-end',
        }}
      />
    </div>
  </Styled.div>
)
