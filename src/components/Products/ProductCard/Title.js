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
          textDecoration: 'none',
        }}
      >
        <h2
          sx={{
            m: 0,
            fontSize: 3,
            color: 'white',
            variant: 'styles.raleway',
          }}
        >
          {title}
        </h2>
      </Link>
    </Fragment>
  )
}
