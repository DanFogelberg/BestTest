export default function AboutUs() {
    return <>
        <h1>Om oss</h1>
        <div className = "infoBlock">
        <p>Ett onlinetest med frågor på en grund- till medelnivå som har i syfte att dels ge de sökande ett första smakprov på vad programmet kommer att innehålla, och också för att sålla bort slentriansökande som inte är så intresserade egentligen.</p>
        </div>

        <div className = "usInfo">
            <div className="person">
                <img src='./images/interview.png' className="circle"></img>
                <p>Jovin Fast &#10; Game programmer</p>
            </div>
            
            <div className="person">
                <img src='./images/interview.png' className="circle"></img>
                <p>Carl Zeidler &#10; Game programmer</p>
            </div>       

            <div className="person">
                <img src='./images/interview.png' className="circle"></img>
                <p>Dan Fogelberg &#10; Webbutveckling</p>
                
            </div>

            <div className="person">
            <img src='./images/interview.png' className="circle"></img>
                <p>Michaela Rudbeck &#10; Ux designer</p>
            </div>

            <div className="person">
            <img src='./images/interview.png' className="circle"></img>
                <p>Weronika Dudzik &#10; Ux designer</p>
            </div>

        </div>


      
    </>;
}


