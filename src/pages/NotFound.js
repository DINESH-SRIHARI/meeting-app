import '../css/notfount.css'
import image from '../images/4041.png'
function Home() {
    return (
      <div className='center'>
        <h1>The Page You Are Serching for is not found</h1>
        <img src={image}/>
      </div>
    );
  }
  
  export default Home;