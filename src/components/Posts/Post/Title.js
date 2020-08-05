/** @jsx jsx */
import {Link} from 'gatsby'
import {Fragment} from 'react'
import {jsx} from 'theme-ui'

export const Title = ({title, link}) => {
  return (
    <Fragment>
      <Link to={link} sx={{color: 'text', textDecoration: 'none'}}>
        <h2 sx={{fontSize: [2, 5], mb: [3, 0]}}>{title}</h2>
      </Link>
    </Fragment>
  )
}
