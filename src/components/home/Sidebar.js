import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const isMenuOpen=useSelector(store =>store.app.isMenuOpen)
    console.log(isMenuOpen)
//early return pattern
    if(!isMenuOpen) return null;
  return (
    
    <div className=' shadow-lg w-48'>
         <ul>
            <li><Link to="/" >Home</Link></li>
            <li> shorts</li>
            <li> subscrtiptions</li>
        </ul>
        <hr/>
        <ul>
            <li> Library</li>
            <li> History</li>
            <li> Watch later</li>
            <li> Licked videos</li>
        </ul>
        <p className='font-bold mx-2'>Subscriptions</p>
        <ul>
            <li> Music</li>
            <li> Sports</li>
            <li> Gaming</li>
            <li> Movies</li>
            <li> Music</li>
        </ul>
        <p className='font-bold mx-2'>Explorer</p>
        <ul>
            <li> Trending</li>
            <li> Shoping</li>
            <li> Music</li>
            <li> Movies& shows</li>
            <li> Live</li>
            <li> Gaming</li>
            <li> News</li>
            <li> Sports</li>
            <li> Learning</li>
            <li> Fashion & beauty</li>
        </ul>
        <ul>    
            <p className='mx-2 font-bold'>More from YouToube</p>
            <li>Youtoube premium</li>
            <li>Youtoube music</li>
            <li>Youtoube kids</li>
        </ul>
    </div>

    
  )
}

export default Sidebar