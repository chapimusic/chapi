/** @jsx jsx */
import {jsx} from 'theme-ui'

export const Main = ({children, ...props}) => {
  return (
    <div sx={{variant: 'layout.main'}} {...props}>
      {children}
    </div>
  )
}
