/** @jsx jsx */
import {jsx} from 'theme-ui'
import Img from 'gatsby-image'
import {Link, graphql} from 'gatsby'
import getVideoId from 'get-video-id'

export const VideoThumbnail = ({video, link}) => {
  graphql`
    fragment postVideoThumbnailFields on SanityPost {
      videos {
        url
      }
    }
  `
  const Thumbnail = () => {
    const urlParsed = video && video.url && getVideoId(video.url)
    const videoId = urlParsed && urlParsed.id
    return (
      videoId && (
        <img
          src={`http://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
          sx={{
            width: '256px',
          }}
        />
      )
    )
  }
  return link ? (
    <Link to={link}>
      <Thumbnail />
    </Link>
  ) : (
    <Thumbnail />
  )
}
