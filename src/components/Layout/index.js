/** @jsx jsx */
import 'normalize.css'
import React, {useState} from 'react'
import {jsx, Styled} from 'theme-ui'
import {useSiteMetadata} from '../../lib/useSiteMetadata'
import {Footer} from './Footer'
import {Header} from './Header'
import {Mobile as MobileMenu} from './Menu'
import {Main} from './Main'

export const MenuContext = React.createContext(false)

export const Layout = ({children}) => {
  const {title} = useSiteMetadata()
  const [menuOpenState, setMenuOpenState] = useState(false)

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen: menuOpenState,
        handleToggleMenu: () => setMenuOpenState(!menuOpenState),
        stateChangeHandler: newState => setMenuOpenState(newState.isOpen),
      }}
    >
      <MobileMenu />
      <Styled.root>
        <div
          sx={{
            variant: 'layout.container',
          }}
        >
          <Header siteTitle={title} />
          <Main>{children}</Main>
          <Footer />
        </div>
      </Styled.root>
    </MenuContext.Provider>
  )
}
