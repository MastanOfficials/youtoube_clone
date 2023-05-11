import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const {snippet ,statistics}=info;
    const{ channelTitle,title,thumbnails}=snippet;
  return (
   <>       {/* <pre>{JSON.stringify(info?.snippet)}</pre> */}
        {/* <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                     
                        
                    </div>
                </div>
            </div>
  */}  
  <div className='p-2 m-2 w-30 shadow-lg'>
  <button><img src={thumbnails?.high?.url} alt="thumbline" /></button>
                       <p className='font-bold w-50'>{title}</p>
                       <p>{channelTitle} </p>
                       <p>{statistics?.viewCount}</p>
  </div>
  </>
 
  )
}

export default VideoCard