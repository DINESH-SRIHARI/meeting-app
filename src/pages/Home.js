import image from '../images/startups-hero.png'
import '../css/home.css'
import Data from './Data'
import { useEffect, useState } from 'react'
function Home() {
    let [details,setdetails]=useState([])
   useEffect(()=>{
    fetch('https://todo-list-85144-default-rtdb.firebaseio.com/tasks.json').then(()=>{
      response=>response.json()
    }).then((data)=>{
      let temp=[];
      for(const key in data){
        let tempdata={
          id:key,
          ...data[key]
        }
        temp.push(tempdata)
      }
      setdetails(temp)
    },[])
   })
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


        {details.filter((meeting) => {
              let tday = new Date();
              let meetingDate = new Date(meeting.date);
              if (
                tday.getDate() === meetingDate.getDate() &&
                tday.getMonth() === meetingDate.getMonth() &&
                tday.getFullYear() === meetingDate.getFullYear()
              ) {
                tday.setHours(0, 0, 0, 0);
                meetingDate.setHours(0, 0, 0, 0);
                return meetingDate.getTime() === tday.getTime();
              }
            }).then((meeting)=>{
              let event=new Date((meeting.date));
                const options = {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  };
                  let time=(event.toLocaleDateString('en', options))
              return <Data title={meeting.title} img={meeting.image} time={time} message={meeting.message}/>;
            })
            
            }
      </div>
    );
  }
  
  export default Home;