/** @jsx jsx */
import {Link} from 'gatsby'
import {Fragment} from 'react'
import {jsx} from 'theme-ui'

export const Title = ({title, link}) => {
  return (
    <Fragment>
      <Link
        to={link}
        sx={{
          borderBottom: '1px solid transparent',
          ':hover': {textDecoration: 'none', borderColor: 'rgba(0,0,0,0.08)'},
        }}
      >
        <h2 sx={{m: 0}}>{title}</h2>
      </Link>
    </Fragment>
  )
}
