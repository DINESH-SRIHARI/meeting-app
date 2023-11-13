import image from '../images/startups-hero.png'
import '../css/home.css'

function Home() {
    return (
      <div>
        <div className="imag">
          <div>
            <img src={image} />
            
          </div>
        </div>
        <h1 className={["cente"]}>
          Are You Missing Your Meeting On Time 🥲??? We Are Here🥹!!!!!!!!!!
          <br />
          <span className="span">MeetUps💕</span>
        </h1>


        
      </div>
    );
  }
  
  export default Home;