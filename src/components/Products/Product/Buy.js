/** @jsx jsx */
import {jsx, Button as ThemeUiButton} from 'theme-ui'
import {PaypalButton} from '../../../components/PaypalButton'

const Button = ({children}) => (
  <ThemeUiButton
    sx={{
      display: 'inline-flex',
      bg: 'primary',
      color: 'white',
      borderRadius: 0,
      mr: 1,
      ':hover': {
        bg: 'green',
      },
    }}
  >
    {children}
  </ThemeUiButton>
)

export const Buy = ({paypalButtons}) => {
  const {france, world} = paypalButtons
  return (
    <div sx={{display: 'flex'}}>
      {france && (
        <PaypalButton buttonId={france}>
          <Button>Acheter (FR)</Button>
        </PaypalButton>
      )}
      {world && (
        <PaypalButton buttonId={world}>
          <Button>Buy (World)</Button>
        </PaypalButton>
      )}
    </div>
  )
}
