/** @jsx jsx */
import {jsx, Themed} from 'theme-ui'

export const Title = ({title}) => (
  <Themed.h1 sx={{textAlign: 'center'}}>
    <span
      sx={{
        fontSize: 4,
        display: 'inline-block',
        bg: 'white',
        p: 3,
        mb: 3,
      }}
    >
      {title}
    </span>
  </Themed.h1>
)
