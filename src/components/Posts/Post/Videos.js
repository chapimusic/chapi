/** @jsx jsx */
import {graphql} from 'gatsby'
import {jsx} from 'theme-ui'
import Player from 'react-youtube'
import getVideoId from 'get-video-id'

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
          return (
            videoId && (
              <figure
                sx={{
                  height: 'full',
                  width: 'full',
                }}
              >
                <Player
                  videoId={videoId}
                  opts={{
                    width: '100%',
                  }}
                  sx={{mt: 3}}
                />
                <figcaption>{description}</figcaption>
              </figure>
            )
          )
        })}
    </div>
  )
}
