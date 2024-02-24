'use client'

import useElementOnScreen from '@/src/hooks/useElementOnScreen'
import { useEffect, useRef, useState } from 'react';
import './Video.scss'

const Video = ({ id }) => {

  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1
  }

  const isVisibile = useElementOnScreen(options, videoRef)

  const onVideoClick = () => {
    if (playing) {
      console.log(`video pause ${id}`);
      // videoRef.current.pause()
      setPlaying(!playing)
    } else {
      console.log(`video play ${id}`);
      // videoRef.current.play()
      setPlaying(!playing)
    }
  }

  useEffect(() => {
    if (isVisibile) {
      if (!playing) {
        console.log(`video play ${id}`);
        // videoRef.current.play()
        setPlaying(true)
      }
    }
    else {
      if (playing) {
        console.log(`video pause ${id}`);
        // videoRef.current.pause()
        setPlaying(false)
      }
    }
  }, [isVisibile])

  return (
    <>
      <iframe ref={videoRef} width="100%" height="100%" src="https://www.youtube.com/embed/ytl6TrroGis?si=pKtcTN3Vv_scYAqH&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen></iframe>
    </>
  )
}

export default Video



{/* <div className="video">
  <video className="video_player" loop preload="true" onClick={onVideoClick}>

  </video>
  {!playing && <VideoPlayButton onVideoClick={onVideoClick} />}
</div> */}