import '../css/next.css'
import Data from '../pages/Data'
import { useState,useEffect } from 'react';
function UpCommingMeets() {
    let [meetings,setmeetings]=useState([]);
    let [loader,setloader]=useState(true);
    useEffect(()=>{
        fetch('https://todo-list-85144-default-rtdb.firebaseio.com/tasks.json').then(
        response=>response.json()).then(data=>{
            let tempdata=[]
            for(const key in data){
                let temp={
                    id:key,
                    ...data[key]
                }
                tempdata.push(temp);
                console.log(tempdata)
            }
            setmeetings(tempdata)
            setloader(false)
    })
    },[])
    

    return (
      <div className='meeting-container'>
        <div>
        <span className={loader?"loader":"d-none"}></span>
        </div>
        {
            meetings.filter((meeting)=>{
                let tday=new Date();
                return(new Date(meeting.date)>tday);
            }).map((meeting)=>{
                let event=new Date((meeting.date));
                const options = {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  };
                  let time=(event.toLocaleDateString('en', options))
                return <Data title={meeting.title} img={meeting.image} time={time} message={meeting.message} link={meeting.link}/>;
            })
        }
            
      </div>
    );
  }
  
  export default UpCommingMeets;