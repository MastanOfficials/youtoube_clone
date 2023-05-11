import React, { useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { YOUTUBE_LIST } from '../assets/images/constatnts/constents'
import VideoCard from './VideoCard'

const VideoContainer = () => {
const [YouToubePlayList,setYouToubePlayList]=useState([])

    useEffect(()=>{
      getVideos();
    },[])
    const getVideos=async ()=>{
        const response=await fetch(YOUTUBE_LIST);
        const data=await response.json();
        setYouToubePlayList(data?.items)
    //     console.log(data)
    // console.log(data.items);
    }
  return (
    <div className='flex flex-wrap'>
        {
            YouToubePlayList.map(video=> < Link to={"watch?v="+video.id}><VideoCard info={video} id={video.id}/></Link>)
        }
        {/* <VideoCard info={YouToubePlayList[0]}/> */}
        </div>
  )
}

export default VideoContainer