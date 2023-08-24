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

      <h1>Urvalsprov för webbutvecklare</h1>

      <div className = "overview">
        <div className="concept">
          <img src='./images/onlineTest.png' className="circle"></img>
          <p className = "conceptTitle">1. Onlinetest</p>
        </div>
        <div className ="horizontalLine"> </div>
        <div className="concept">
        <img src='/images/escapeRoom.png' className="circle"></img>
          <p className = "conceptTitle">2. Escape room</p>
        </div>        
        <div className ="horizontalLine"> </div>
        <div className="concept">
        <img src='./images/interview.png' className="circle"></img>
          <p className = "conceptTitle">3. Intervju</p>
        </div>

      </div>
      <div className = "infoBlock">
      <p>Vi har valt att utforma en urvalsprocess i tre steg för att testa olika aspekter av de sökande.</p>
      </div>

      <div className = "infoBlock">
      <h2>Onlinetest</h2>
      <p>Ett onlinetest med frågor på en grund- till medelnivå som har i syfte att dels ge de sökande ett första smakprov på vad programmet kommer att innehålla, och också för att sålla bort slentriansökande som inte är så intresserade egentligen.</p>
      </div>
      
      <div className = "infoBlock">
      <h2>Escape room</h2>
      <p>Escape room:et består av två moment:
Det första momentet är en gemensam del för fyra sökande som skall lösa ett logikpussel där varje sökande har en del av pusslet som de inte får visa för de andra. När detta pusslet är löst får de den andra delen, som är individuell. Ifall det skulle vara färre än fyra deltagare så får de återstående fler ledtrådar.
<br></br><br></br>
I det andra momentet så skall de sökande placera ut fem segment av kod i rätt ordning så att koden kompilerar utan problem. När papprena är i rätt ordning kan den sökande vända på dem för att få fram en sifferkod som låser upp en låda där det finns ett formulär som den sökande skall fylla i och ta med till intervjusteget.</p>
      </div>

      <div className = "infoBlock">
      <h2>Intervju</h2>
      <p>EIntervjun har som syfte att följa upp på de tidigare testerna för att utvärdera hur den sökande gick tillväga för att lösa problemen som de mötte, samt gå igenom formuläret som den sökande fyllt i efter att ha klarat escape room:et. Detta formulär består av frågor där den sökande får beskriva sin roll i gruppmomentet i escape room:et.
      <br></br>
      <br></br>
      Den har också som syfte att utvärdera slutgiltig lämplighet för studierna.
      intervjun genomförs av programansvarig lärare samt en person till, helst branschmedlem, men det viktigaste är att det är en utomstående för att motverka partiskhet.</p>
      </div>


    </>
  )
}

export default App
