/** @jsx jsx */
import {Link} from 'gatsby'
import {Fragment} from 'react'
import {jsx} from 'theme-ui'

export const Title = ({title, link}) => {
  return (
    <Fragment>
      <Link to={link}>
        <h2 sx={{fontSize: [5, 6, 5, 6]}}>{title}</h2>
      </Link>
    </Fragment>
  )
}
