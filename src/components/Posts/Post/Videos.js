/** @jsx jsx */
import {graphql} from 'gatsby'
import {jsx} from 'theme-ui'
import YouTubePlayer from 'react-youtube'
import getVideoId from 'get-video-id'
import VimeoPlayer from '@u-wave/react-vimeo'

export const Videos = ({videos}) => {
  graphql`
    fragment postVideoFields on SanityPost {
      videos {
        url
        description
      }
    }
  `
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
      {videos &&
        videos.length > 0 &&
        videos.map(({url, description}) => {
          const urlParsed = url && getVideoId(url)
          const videoId = urlParsed && urlParsed.id
          const provider = url.includes('youtube')
            ? 'youtube'
            : url.includes('vimeo')
            ? 'vimeo'
            : false
          return (
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
              {description && <figcaption>{description}</figcaption>}
            </figure>
          )
        })}
    </div>
  )
}
