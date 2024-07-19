import React from 'react'
// import "./sidebar.css"



export default function Index() {
    return (
        <div className='side-bar'>
            <button className='btn'> <i class="fa-solid fa-comment"></i>Feed</button>
            <button className='btn'> <i class="fa-solid fa-fire"></i>Trending</button>
            <button className='btn'> <i class="fa-solid fa-play"></i>Player</button>
            <button className='btn'><i class="fa-solid fa-heart"> </i> Favorites</button>
            <button className='btn'> <i class="fa-solid fa-bookmark"></i>Library</button>
        </div>
    )
}
