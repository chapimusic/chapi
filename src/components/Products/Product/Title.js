/** @jsx jsx */
import {jsx} from 'theme-ui'

export const Title = ({title}) => (
  <h1
    sx={{
      m: 0,
      fontSize: 3,
      bg: 'white',
      color: 'text',
      display: 'inline-flex',
      p: 3,
      variant: 'styles.raleway',
    }}
  >
    {title}
  </h1>
)
