import React from 'react'

export default function Home() {
    return (
        <header id='hero'>
            <video 
                src={`${process.env.PUBLIC_URL}/videos/video2.mp4`}
                // src='videos/video2.mp4'
            />
        </header>
    )
}
