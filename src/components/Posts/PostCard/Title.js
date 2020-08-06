/** @jsx jsx */
import {Link} from 'gatsby'
import {jsx} from 'theme-ui'

export const Title = ({title, link}) => (
  <Link
    to={link}
    sx={{
      borderBottom: '1px solid transparent',
      textDecoration: 'none',
      ':hover': {borderColor: 'rgba(0,0,0,0.08)'},
    }}
  >
    <h2 sx={{m: 0, color: 'white'}}>{title}</h2>
  </Link>
)
