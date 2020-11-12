import React from 'react'
import VideoCard from './VideoCard'
import Skeleton from 'react-loading-skeleton'

type Props = {
    data: any,
    channelData: any,
    loading: boolean,
    error: boolean
}

const Container: React.FC<Props> = ({ data, channelData, loading, error }) => {

    return (
        < div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2  lg:grid-cols-4 gap-y-12  grid-cols-1 sm:px-20 px-0 py-3 sm:py-6 col-span-7 bg-gray-100 min-h-screen" >
            { !data && !channelData && !error && loading && (
                <>
                    <div className='flex flex-col'>
                        <Skeleton height={225} />
                        <div className='flex flex-row'>
                            <Skeleton height={35} width={35} className='rounded-full mr-5' />
                            <div className='flex flex-col'>
                                <Skeleton height={15} width={250} />
                                <Skeleton height={15} width={150} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <Skeleton height={225} />
                        <div className='flex flex-row'>
                            <Skeleton height={35} width={35} className='rounded-full mr-5' />
                            <div className='flex flex-col'>
                                <Skeleton height={15} width={250} />
                                <Skeleton height={15} width={150} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <Skeleton height={225} />
                        <div className='flex flex-row'>
                            <Skeleton height={35} width={35} className='rounded-full mr-5' />
                            <div className='flex flex-col'>
                                <Skeleton height={15} width={250} />
                                <Skeleton height={15} width={150} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <Skeleton height={225} />
                        <div className='flex flex-row'>
                            <Skeleton height={35} width={35} className='rounded-full mr-5' />
                            <div className='flex flex-col'>
                                <Skeleton height={15} width={250} />
                                <Skeleton height={15} width={150} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <Skeleton height={225} />
                        <div className='flex flex-row'>
                            <Skeleton height={35} width={35} className='rounded-full mr-5' />
                            <div className='flex flex-col'>
                                <Skeleton height={15} width={250} />
                                <Skeleton height={15} width={150} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <Skeleton height={225} />
                        <div className='flex flex-row'>
                            <Skeleton height={35} width={35} className='rounded-full mr-5' />
                            <div className='flex flex-col'>
                                <Skeleton height={15} width={250} />
                                <Skeleton height={15} width={150} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <Skeleton height={225} />
                        <div className='flex flex-row'>
                            <Skeleton height={35} width={35} className='rounded-full mr-5' />
                            <div className='flex flex-col'>
                                <Skeleton height={15} width={250} />
                                <Skeleton height={15} width={150} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <Skeleton height={225} />
                        <div className='flex flex-row'>
                            <Skeleton height={35} width={35} className='rounded-full mr-5' />
                            <div className='flex flex-col'>
                                <Skeleton height={15} width={250} />
                                <Skeleton height={15} width={150} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <Skeleton height={225} />
                        <div className='flex flex-row'>
                            <Skeleton height={35} width={35} className='rounded-full mr-5' />
                            <div className='flex flex-col'>
                                <Skeleton height={15} width={250} />
                                <Skeleton height={15} width={150} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <Skeleton height={225} />
                        <div className='flex flex-row'>
                            <Skeleton height={35} width={35} className='rounded-full mr-5' />
                            <div className='flex flex-col'>
                                <Skeleton height={15} width={250} />
                                <Skeleton height={15} width={150} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <Skeleton height={225} />
                        <div className='flex flex-row'>
                            <Skeleton height={35} width={35} className='rounded-full mr-5' />
                            <div className='flex flex-col'>
                                <Skeleton height={15} width={250} />
                                <Skeleton height={15} width={150} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <Skeleton height={225} />
                        <div className='flex flex-row'>
                            <Skeleton height={35} width={35} className='rounded-full mr-5' />
                            <div className='flex flex-col'>
                                <Skeleton height={15} width={250} />
                                <Skeleton height={15} width={150} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <Skeleton height={225} />
                        <div className='flex flex-row'>
                            <Skeleton height={35} width={35} className='rounded-full mr-5' />
                            <div className='flex flex-col'>
                                <Skeleton height={15} width={250} />
                                <Skeleton height={15} width={150} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <Skeleton height={225} />
                        <div className='flex flex-row'>
                            <Skeleton height={35} width={35} className='rounded-full mr-5' />
                            <div className='flex flex-col'>
                                <Skeleton height={15} width={250} />
                                <Skeleton height={15} width={150} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <Skeleton height={225} />
                        <div className='flex flex-row'>
                            <Skeleton height={35} width={35} className='rounded-full mr-5' />
                            <div className='flex flex-col'>
                                <Skeleton height={15} width={250} />
                                <Skeleton height={15} width={150} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <Skeleton height={225} />
                        <div className='flex flex-row'>
                            <Skeleton height={35} width={35} className='rounded-full mr-5' />
                            <div className='flex flex-col'>
                                <Skeleton height={15} width={250} />
                                <Skeleton height={15} width={150} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <Skeleton height={225} />
                        <div className='flex flex-row'>
                            <Skeleton height={35} width={35} className='rounded-full mr-5' />
                            <div className='flex flex-col'>
                                <Skeleton height={15} width={250} />
                                <Skeleton height={15} width={150} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <Skeleton height={225} />
                        <div className='flex flex-row'>
                            <Skeleton height={35} width={35} className='rounded-full mr-5' />
                            <div className='flex flex-col'>
                                <Skeleton height={15} width={250} />
                                <Skeleton height={15} width={150} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <Skeleton height={225} />
                        <div className='flex flex-row'>
                            <Skeleton height={35} width={35} className='rounded-full mr-5' />
                            <div className='flex flex-col'>
                                <Skeleton height={15} width={250} />
                                <Skeleton height={15} width={150} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <Skeleton height={225} />
                        <div className='flex flex-row'>
                            <Skeleton height={35} width={35} className='rounded-full mr-5' />
                            <div className='flex flex-col'>
                                <Skeleton height={15} width={250} />
                                <Skeleton height={15} width={150} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <Skeleton height={225} />
                        <div className='flex flex-row'>
                            <Skeleton height={35} width={35} className='rounded-full mr-5' />
                            <div className='flex flex-col'>
                                <Skeleton height={15} width={250} />
                                <Skeleton height={15} width={150} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <Skeleton height={225} />
                        <div className='flex flex-row'>
                            <Skeleton height={35} width={35} className='rounded-full mr-5' />
                            <div className='flex flex-col'>
                                <Skeleton height={15} width={250} />
                                <Skeleton height={15} width={150} />
                            </div>
                        </div>
                    </div>
                </>

            )
            }
            {
                data && channelData && (
                    <>
                        {data.items.map((item: any) => {
                            const channelThumbnails = channelData.items.filter((channel: any) => channel.id === item.snippet.channelId)
                            return (
                                <VideoCard key={item.id} title={item.snippet.title} channelTitle={item.snippet.channelTitle} viewCount={item.statistics.viewCount} duration={item.contentDetails.duration} thumbnail={item.snippet.thumbnails.medium} channelThumbnail={channelThumbnails[0].snippet.thumbnails.default} publishedAt={item.snippet.publishedAt} />
                            )
                        })}
                    </>
                )
            }
        </div >
    )
}

export default Container
