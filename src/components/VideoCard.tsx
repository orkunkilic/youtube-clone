import React from 'react'

type Props = {
    title: string,
    channelTitle: string,
    channelThumbnail: {
        url: string,
        width: number,
        height: number
    },
    viewCount: string,
    duration: string,
    thumbnail: {
        url: string,
        width: number,
        height: number
    }
}

const VideoCard: React.FC<Props> = ({ title, channelTitle, channelThumbnail, viewCount, duration, thumbnail }) => {
    return (
        <div>

        </div>
    )
}

export default VideoCard
