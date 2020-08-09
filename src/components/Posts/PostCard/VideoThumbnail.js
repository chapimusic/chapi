/** @jsx jsx */
import {graphql, Link} from 'gatsby'
import getVideoId from 'get-video-id'
import {jsx} from 'theme-ui'
import {useState, useEffect} from 'react'

const useVimeoThumbnail = videoId => {
  const url = `https://vimeo.com/api/v2/video/${videoId}.json`
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url)
      const json = await response.json()
      const [{thumbnail_large}] = json
      setData(thumbnail_large)
    }
    fetchData()
  }, [url])

  return data
}

export const VideoThumbnail = ({video, link}) => {
  graphql`
    fragment postVideoThumbnailFields on SanityPost {
      videos {
        url
      }
    }
  `

  const urlParsed = video && video.url && getVideoId(video.url)
  const videoId = urlParsed && urlParsed.id

  const provider =
    video &&
    video.url &&
    (video.url.includes('youtube')
      ? 'youtube'
      : video.url.includes('vimeo')
      ? 'vimeo'
      : false)

  const vimeoThumbnail = useVimeoThumbnail(videoId)

  const Thumbnail = () => {
    return videoId && provider === 'youtube' ? (
      <img
        alt={`Chapi Chapo Vidéo`}
        src={`https://i3.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        sx={{
          width: '100%',
        }}
      />
    ) : provider === 'vimeo' ? (
      <img
        alt={`Chapi Chapo Vidéo`}
        src={vimeoThumbnail}
        sx={{
          width: '100%',
        }}
      />
    ) : (
      false
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
