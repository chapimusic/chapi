/** @jsx jsx */
import {Styled, Box, jsx} from 'theme-ui'

export const Title = ({title}) => (
  <Styled.h1 sx={{textAlign: 'center'}}>
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
  </Styled.h1>
)
