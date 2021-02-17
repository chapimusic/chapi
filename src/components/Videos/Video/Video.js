/** @jsx jsx */
import {graphql} from 'gatsby'
import {jsx} from 'theme-ui'
import YouTubePlayer from 'react-youtube'
import getVideoId from 'get-video-id'
import VimeoPlayer from '@u-wave/react-vimeo'

export const VideosVideoVideo = ({video: {url, description}}) => {
  graphql`
    fragment videoVideoFields on SanityVideos {
      video {
        url
        description
      }
    }
  `

  const urlParsed = url && getVideoId(url)
  const videoId = urlParsed && urlParsed.id
  const provider =
    url &&
    (url.includes('youtube')
      ? 'youtube'
      : url.includes('vimeo')
      ? 'vimeo'
      : false)
      
  return (
    <div
      sx={{
        width: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <figure
        sx={{
          height: 'full',
          width: 'full',
          pt: 2,
        }}
      >
        {videoId && provider === 'youtube' ? (
          <YouTubePlayer
            videoId={videoId}
            opts={{
              width: '100%',
            }}
          />
        ) : provider === 'vimeo' ? (
          <VimeoPlayer video={videoId} responsive="true" />
        ) : (
          false
        )}
        {description && <figcaption sx={{display:'none'}}>{description}</figcaption>}
      </figure>

    </div>
  )
}
