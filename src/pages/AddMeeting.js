import '../css/addmeeting.css'
import { useNavigate } from 'react-router-dom';
import { useState,useRef,useEffect } from 'react';
function AddMeeting() {
    let title=useRef();
    let image=useRef();
    let link=useRef();
    let datetime=useRef();
    let message=useRef();
    let [spinner,setspinner]=useState(false);
    const navigate=useNavigate();
  function addedHandler(){
    setspinner(true);
    let tempdata={
      title:title.current.value,
      image:image.current.value,
      link:link.current.value,
      date:datetime.current.value,
      message:message.current.value,
    }
    fetch('https://todo-list-85144-default-rtdb.firebaseio.com/tasks.json',{
      method:'post',
      body:JSON.stringify(tempdata)
    }).then(()=>{
      setspinner(false)
      navigate('/new');
    })
  }
    return (
      <div >
        <h1 className='heading'> Add Meetings</h1>
        <div className='met'>
            <input ref={title} type='text'  placeholder='Title'/>
              <input ref={image} type='text'  placeholder='Image Name'/>
              <input ref={link} placeholder='link'/>
              <input ref={datetime} type='datetime-local' placeholder='link'/>
              <textarea ref={message} rows={3} cols={6}>The Meeting is about</textarea>
              <button className='btn' onClick={addedHandler}>Submit Meeting<span className={spinner==true?"loader":"d-none"}></span></button>
        </div>
      </div>
    );
  }
  
  export default AddMeeting;