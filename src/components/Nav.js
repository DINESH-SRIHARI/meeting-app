import '../css/nav.css'

import { Link } from 'react-router-dom';
function Nav() {
    return (
      <div className='main'>
        <Link to='/' className='link'>MeetUps</Link>
              <div className='gap'>
              <Link to='/new' className='link'>UpCommingMeetings</Link>
            <Link to='/old' className='link'>PastMeetings</Link>
            <Link to='/Add' className='link'>AddMeeting</Link>
            </div>
            
      </div>
    );
  }
  
  export default Nav;