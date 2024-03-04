'use client'

import useElementOnScreen from '@/src/hooks/useElementOnScreen'
import { useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';

const Video = ({ videoId, autoplay, desc, handleClickPopUp }) => {

  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)
  const playerRef = useRef(null)

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1
  }

  const opts = {
    width: '100%',
    height: '100%',
    muted: '1',
    playerVars: {
      autoplay,
      enablejsapi: 1,
      color: 'white',
      iv_load_policy: 3,
      // origin: 'https://metalabs.kg/',
      // widget_referrer: 'https://metalabs.kg/',
      playsinline: 1
      // https://developers.google.com/youtube/player_parameters
    }
  }

  const isVisibile = useElementOnScreen(options, videoRef)

  const onPlayerReady = (event) => {
    playerRef.current = event.target
    playerRef.current.mute()
  }

  useEffect(() => {
    if (playerRef.current && window.innerWidth <= 768) {
      if (isVisibile) {
        if (!playing) {
          playerRef.current?.mute()
          playerRef.current?.playVideo()
          setPlaying(true)
        }
      } else {
        if (playing) {
          playerRef.current?.stopVideo()
          setPlaying(false)
        }
      }
    }
  }, [isVisibile])

  return (
    <>
      <li className="video__card video__scroll" ref={videoRef}>
        <YouTube
          videoId={videoId}
          opts={opts}
          className='video__wrapper'
          onReady={onPlayerReady}
        />
        <div className="video__card-desc">
          <div className="video__desc-wrapper">
            <p className="video__desc">
              {desc}
            </p>
          </div>
          <button className="video-top__btn" onClick={handleClickPopUp}>Записаться на консультацию</button>
        </div>
      </li>
    </>
  )
}

export default Video