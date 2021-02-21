import React from 'react'

export default function Home() {
    return (
        <header>
            <video 
                src={`${process.env.PUBLIC_URL}/videos/video1`}
            />
        </header>
    )
}
