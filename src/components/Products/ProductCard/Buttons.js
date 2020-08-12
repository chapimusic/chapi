/** @jsx jsx */
import {Flex, jsx} from 'theme-ui'

const Button = ({children, ...props}) => (
  <a
    sx={{
      bg: 'white',
      display: 'flex',
      fontSize: 0,
      textTransform: 'none',
      px: 2,
      py: 1,
      color: 'primary',
      borderRadius: 0,
      alignItems: 'center',
      textDecoration: 'none',
      '& + button': {
        ml: 3,
      },
    }}
    {...props}
  >
    {children}
  </a>
)

export const Buttons = ({link, ...props}) => {
  return (
    <Flex {...props}>
      <Button href={link}>Plus d'infos</Button>
    </Flex>
  )
}
