import React from 'react'
import moment from 'moment'
import 'moment/locale/tr'

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
    publishedAt: string,
    thumbnail: {
        url: string,
        width: number,
        height: number
    }
}

const VideoCard: React.FC<Props> = ({ title, channelTitle, channelThumbnail, viewCount, duration, thumbnail, publishedAt }) => {

    const [dur, setDuration] = React.useState('')

    React.useEffect(() => {
        const first = duration.split('T')[1]
        // const end = first.includes('H') ? `${first.split('H')[0] + `:`}${first.includes('M') ? first.split('H')[1].split('M')[0] + `` : `00:`}${first.includes('S') && first.includes('M') ? first.split('H')[1].split('M')[1].split('S')[0] : ``}${first.includes('S') && !first.includes('M') ? first.split('H')[1].split('S')[0] : ``}` : first.split('M')[0] + ':' + (first.split('M')[1].split('S')[0].length === 1 ? '0' + first.split('M')[1].split('S')[0] : first.split('M')[1].split('S')[0])
        setDuration('1')
        moment().locale('tr')
    }, [duration])



    return (
        <div className="cursor-pointer">
            <div className='relative'>
                <img src={thumbnail.url} alt="" className="w-full bg-opacity-0" />
                <div className="absolute bottom-0 right-0 mb-1 mr-1 p-px bg-black bg-opacity-75 text-white text-xs font-bold rounded-sm">
                    <span>{dur}</span>
                </div>
            </div>

            <div className="grid grid-cols-12 mt-3">
                <div className="col-span-2 flex justify-center">
                    <img src={channelThumbnail.url} alt="" className="w-8 h-8 rounded-full" />

                </div>
                <div className="col-span-10">
                    <h1 className="text-md text-black font-semibold truncate-2-lines pb-1">{title}</h1>
                    <h3 className="text-sm text-gray-800  font-myMed leading-4">{channelTitle}</h3>
                    <h3 className="text-sm text-gray-800  font-myMed leading-4">{parseInt(viewCount).toLocaleString()} görüntüleme <strong>·</strong> {moment(publishedAt).fromNow()}</h3>


                </div>
            </div>
        </div>
    )
}

export default VideoCard
