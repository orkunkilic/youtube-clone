import React from 'react'
import VideoCard from './VideoCard'

type Props = {
    data: any,
    channelData: any,
    loading: boolean,
    error: boolean
}

const Container: React.FC<Props> = ({ data, channelData, loading, error }) => {
    return (
        <div className='container'>
            { !data && !channelData && error && !loading && <div>Hata</div>}
            { !data && !channelData && !error && loading && <div>Yükleniyor</div>}
            { data && channelData && !error && !loading && (
                <>
                    {data.items.map((item: any) => {
                        const channelThumbnails = channelData.items.filter((channel: any) => channel.id === item.snippet.channelId)
                        return (
                            <VideoCard key={item.id} title={item.snippet.title} channelTitle={item.snippet.channelTitle} viewCount={item.statistics.viewCount} duration={item.contentDetails.duration} thumbnail={item.snippet.thumbnails.default} channelThumbnail={channelThumbnails[0].snippet.thumbnails.default} />
                        )
                    })}
                </>
            )}
        </div>
    )
}

export default Container
