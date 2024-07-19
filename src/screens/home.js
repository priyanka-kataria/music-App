import React from 'react'
import './home.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Feed from './feed'
import Library from './library'
import Favirates from './favirates'
import Player from './player'
import Trending from './trending'
import Navbar from '../components/navbar/nav'
import Index from "./index"



export default function Home() {
    return (
        <>
            <BrowserRouter>

                <div className="main-body">
                    <Navbar />
                   <Index/>
                    <Routes>

                        <Route path='/' element={ <Library /> } />
                        <Route path='/feed' element={ <Feed /> } />
                        <Route path='/favirates' element={ <Favirates /> } />
                        <Route path='/player' element={ <Player /> } />
                        <Route path='/trending' element={ <Trending /> } />

                    </Routes>
                </div>
            </BrowserRouter>

        </>
    )
}

