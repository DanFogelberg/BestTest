//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg' Kept to remember how this is done
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className = "banner">
        <p className = "bannerName">Team666</p>
        <div className = "nav">
          <a className = "navItem navSelected">Koncept</a>
          <a className = "navItem">Om oss</a>
        </div>

      </div>

      <h1>Koncept</h1>

      <div className = "overview">
        <div className="concept">
          <img src='./images/onlineTest.png' className="circle"></img>
          <p className = "conceptTitle">1. Onlinetest</p>
        </div>
        <div className="concept">
        <img src='./images/escapeRoom.png' className="circle"></img>
          <p className = "conceptTitle">2. Escape room</p>
        </div>        <div className="concept">
        <img src='./images/interview.png' className="circle"></img>
          <p className = "conceptTitle">3. Intervju</p>
        </div>

      </div>
      <div className = "infoBlock">
      <p>Vi har valt att utforma urvalsprocessen som ett såll för att sortera ut sökande och minska antalet intervjuer som behöver göras. Detta i syfte att effektivisera och minska arbetet som behöver göras ifall utbildningen har mycket fler sökande än platser.</p>
      </div>

      <div className = "infoBlock">
      <h2>Onlinemomentet</h2>
      <p>Ett onlinetest med frågor på en grund- till medelnivå som har i syfte att dels ge de sökande ett första smakprov på vad programmet kommer att innehålla, men också för att sålla bort slentriansökande.</p>
      </div>
      
      <div className = "infoBlock">
      <h2>Escape room</h2>
      <p>Ett “escape room”-moment på plats i Yrgos lokaler som skall testa problemlösnings- och samarbetsförmåga hos sökande. Det sista momentet i escape room:et ger den sökande ett formulär att fylla i inför det tredje momentet. Detta moment involverar de X antal sökande som fått bäst resultat på moment 1.</p>
      </div>

      <div className = "infoBlock">
      <h2>Intervju</h2>
      <p>En intervju med ansvarig lärare och en person till för att gå igenom resultaten av de tidigare testerna och bilda ett intryck av den sökande för att avgöra slutgiltig lämplighet för utbildningen.</p>
      </div>


    </>
  )
}

export default App
