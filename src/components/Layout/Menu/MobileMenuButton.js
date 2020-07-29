/** @jsx jsx */
import {useContext} from 'react'
import {jsx, MenuButton} from 'theme-ui'
import {MenuContext} from '../'

export const MobileMenuButton = props => {
  const ctx = useContext(MenuContext)
  return (
    <div
      sx={{display: ['flex'], justifyContent: 'end', alignItems: 'center'}}
      {...props}
    >
      <MenuButton
        onClick={ctx.handleToggleMenu}
        sx={{height: '2rem', width: '6rem'}}
      />
    </div>
  )
}
