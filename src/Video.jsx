import React, { useEffect, useRef } from 'react'

export const Video = ({ image, videoProps }) => {
  const videoRef = useRef()

  useEffect(() => {
    videoRef.current?.load()
  }, [image.original])

  return (
    <video autoPlay playsInline muted loop preload="none" {...videoProps}>
      <source
        src={image.original}
        type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
      />
      <span>The video tag is not supported by your browser.</span>{' '}
      <a href={image.original}>
        <span>Download video</span>
      </a>
      .
    </video>
  )
}
