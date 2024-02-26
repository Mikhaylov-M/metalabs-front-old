'use client'

import useElementOnScreen from '@/src/hooks/useElementOnScreen'
import { useEffect, useRef, useState } from 'react';
import './Video.scss'
import YouTube from 'react-youtube';
import Link from 'next/link';

const Video = ({ id, videoId }) => {

  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

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
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      muted: '1'
    }
  }

  const isVisibile = useElementOnScreen(options, videoRef)

  const onVideoClick = () => {
    if (playing) {
      console.log(`video pause ${id}`)
      console.log(videoRef);
      
      // videoRef.current.pause()
      setPlaying(!playing)
    } else {
      console.log(`video play ${id}`);
      // videoRef.current.play()
      setPlaying(!playing)
    }
  }

  const onPlayerReady = (event) => {
    event.target.mute()
    event.target.playVideo()
    console.log('play сработал');
  }
  useEffect(() => {
    if (isVisibile) {
      if (!playing) {
        console.log(`video play ${id}`);
        // videoRef.current.contentWindow.postMessage(JSON.stringify(
        //   { event: 'command', func: 'playVideo' }), 'https://www.youtube.com');
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
              Знакомство с языком программирования - <a href="#">C#</a>
            </p>
            <a className="video__link" href="#">Подробнее</a>
          </div>
          <Link href="/#contacts" className="video-top__btn">Оставить заявку</Link>
        </div>
      </li>
    </>
  )
}

export default Video


{/* <iframe enablejsapi='true' ref={videoRef} width="100%" height="100%" src="https://www.youtube.com/embed/ytl6TrroGis?si=pKtcTN3Vv_scYAqH&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen origin="http://localhost:3000/videos"></iframe>
      <button onClick={testClick}>Pause</button> */}