/** @jsx jsx */
import {graphql} from 'gatsby'
import {jsx} from 'theme-ui'
import Player from '@u-wave/react-vimeo'
import getVideoId from 'get-video-id'

export const Video = ({vimeoVideo}) => {
  graphql`
    fragment spectacleVideoFields on SanitySpectacle {
      vimeoVideo
    }
  `

  const urlParsed = vimeoVideo && getVideoId(vimeoVideo)
  const videoId = urlParsed && urlParsed.id
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
      {videoId && (
        <figure
          sx={{
            height: 'full',
            width: 'full',
          }}
        >
          <Player video={videoId} responsive="true" />
        </figure>
      )}
    </div>
  )
}
