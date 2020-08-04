/** @jsx jsx */
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
  FaSpotify,
} from 'react-icons/fa'
import {jsx} from 'theme-ui'
import {useSiteMetadata} from '../../lib/useSiteMetadata'

const Link = ({href, children}) => (
  <a href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
)

export const Socials = props => {
  const {youtube, instagram, twitter, facebook, spotify} = useSiteMetadata()
  return (
    <div {...props}>
      <ul
        sx={{
          listStyle: 'none',
          justifyContent: 'center',
          p: 0,
          '&>li': {display: 'inline-flex', pl: 3},
        }}
      >
        {youtube && (
          <li>
            <Link
              href={`https://www.youtube.com/user/${youtube}`}
              target="_blank"
            >
              <FaYoutube />
            </Link>
          </li>
        )}
        {instagram && (
          <li>
            <Link
              href={`https://www.instagram.com/${instagram}`}
              target="_blank"
            >
              <FaInstagram />
            </Link>
          </li>
        )}
        {twitter && (
          <li>
            <Link href={`https://twitter.com/${twitter}`}>
              <FaTwitter />
            </Link>
          </li>
        )}
        {facebook && (
          <li>
            <Link href={`https://facebook.com/${facebook}`}>
              <FaFacebookSquare />
            </Link>
          </li>
        )}
        {spotify && (
          <li>
            <Link href={`https://open.spotify.com/artist/${spotify}`}>
              <FaSpotify />
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}
