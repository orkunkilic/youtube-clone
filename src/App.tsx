import React from 'react'
import Container from './components/Container'
import LeftBar from './components/LeftBar'
import Navbar from './components/Navbar'


const App = () => {

  const [data, setData] = React.useState()
  const [channelData, setChannelData] = React.useState()
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)


  React.useEffect(() => {
    console.log(`Bearer ${process.env.REACT_APP_API_KEY}`)
    fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&max_results=20&key=' + process.env.REACT_APP_API_KEY)
      .then(r => r.json())
      .then(r => {
        setData(r);

        let ids: string = ''
        r.items.forEach((item: any) => {
          ids += ',' + (item.snippet.channelId)
        });

        fetch('https://www.googleapis.com/youtube/v3/channels?part=snippet&id=' + ids + '&maxResults=20&key=' + process.env.REACT_APP_API_KEY)
          .then(r => r.json())
          .then(r => {
            setChannelData(r)
            setLoading(false)
          })
          .catch((e) => {
            setError(e)
            setLoading(false)
          })

      })
      .catch(e => {
        setError(e)
        setLoading(false)
      })
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <div className="main grid md:grid-cols-8">
        <LeftBar />
        <Container data={data} loading={loading} error={error} channelData={channelData} />
      </div>

    </div>
  )
}

export default App
