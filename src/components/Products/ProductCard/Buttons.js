/** @jsx jsx */
import {Flex, jsx} from 'theme-ui'
import {PaypalButton} from '../../../components/PaypalButton'

const commonSx = {
  bg: 'white',
  border: 0,
  height: 'full',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 0,
  textTransform: 'none',
  px: 3,
  py: 2,
  mr: 1,
  color: 'primary',
  borderRadius: 0,
  alignItems: 'center',
  textDecoration: 'none',
  '& + button': {
    ml: 3,
  },
  ':hover': {
    bg: 'green',
    color: 'white',
    cursor: 'pointer',
  },
}

const Link = ({children, ...props}) => (
  <a sx={commonSx} {...props}>
    {children}
  </a>
)

const Button = ({children, ...props}) => (
  <button sx={commonSx} {...props}>
    {children}
  </button>
)

export const Buttons = ({moreInfos, paypalButtons, ...props}) => {
  const {france, world} = paypalButtons
  return (
    <Flex {...props}>
      {france && (
        <span sx={{display: 'flex'}}>
          <PaypalButton buttonId={france}>
            <Button>Acheter (FR)</Button>
          </PaypalButton>
        </span>
      )}
      {world && (
        <span sx={{display: 'flex'}}>
          <PaypalButton buttonId={world}>
            <Button>Buy (World)</Button>
          </PaypalButton>
        </span>
      )}
      {moreInfos && (
        <span sx={{display: 'flex'}}>
          <Link href={moreInfos}>Plus d'infos</Link>
        </span>
      )}
    </Flex>
  )
}
