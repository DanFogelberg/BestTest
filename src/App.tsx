import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg' Kept to remember how this is done
import './App.css'
import AboutUs from './AboutUs.tsx'
import Concept from './Concept.tsx'



function App() {
  const [page, setPage] = useState("index");



  return (
    <>
      <div className = "banner">
        <p className = "bannerName">Team666</p>
        <div className = "nav">
          <a className = {page==="index" ? "navItem navSelected" : "navItem"} onClick={() => setPage("index")} >Koncept</a>
          <a className = {page==="aboutUs" ? "navItem navSelected" : "navItem"} onClick={() => setPage("aboutUs")}>Om oss</a>
        </div>

      </div>

    {page==="index" ? <Concept/> : <AboutUs/>}     
      
      


    </>
  )
}

export default App
