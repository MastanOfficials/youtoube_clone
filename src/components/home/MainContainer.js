import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div>
     <div className='d-flex'>
<ButtonList name="All"/>
<ButtonList name="Gamig"/>
<ButtonList name="songs"/>
<ButtonList name="Live"/>
<ButtonList name="Soccer"/>
<ButtonList name="Cricket"/>
<ButtonList name="Cooking"/>
<ButtonList name="Cricket"/>
<ButtonList name="Valenting"/>
<ButtonList name="sports"/>
     </div>
     <div>

     </div>
      <VideoContainer/>
      
    </div>
  )
}

export default MainContainer