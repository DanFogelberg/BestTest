export default function AboutUs() {
    return <>
        <h1>Om oss</h1>
        <div className = "aboutUsInfoBlock">
        <p>Vi är fem personer som läser på yrgo. En som läser webbutveckling, två som läser Game Programmer och två som läser UX design.</p>
        </div>

        <div className = "usInfo">
            <div className="person">
                <img src='./images/jovin.jpeg' className="circle"></img>
                <p>Jovin Fast &#10; Game programmer</p>
            </div>
            
            <div className="person">
                <img src='./images/carl.jpeg' className="circle"></img>
                <p>Carl Zeidler &#10; Game programmer</p>
            </div>       

            <div className="person">
                <img src='./images/dan.jpeg' className="circle"></img>
                <p>Dan Fogelberg &#10; Webbutveckling</p>
                
            </div>

            <div className="person">
            <img src='./images/michaela.jpeg' className="circle"></img>
                <p>Michaela Rudbeck &#10; Ux designer</p>
            </div>

            <div className="person">
            <img src='./images/weronika.jpeg' className="circle"></img>
                <p>Weronika Dudzik &#10; Ux designer</p>
            </div>

        </div>


      
    </>;
}


