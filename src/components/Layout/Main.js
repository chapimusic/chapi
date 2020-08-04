/** @jsx jsx */
import {jsx} from 'theme-ui'

export const Main = ({children, ...props}) => {
  return (
    <main sx={{variant: 'layout.main'}} {...props}>
      {children}
    </main>
  )
}
