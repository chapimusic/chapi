/** @jsx jsx */
import {graphql, Link} from 'gatsby'
import getVideoId from 'get-video-id'
import {jsx} from 'theme-ui'

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
          src={`https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
          sx={{
            width: '100%',
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
