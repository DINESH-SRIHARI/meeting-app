import '../css/nav.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
//import { faBookmark } from '@fortawesome/free-solid-svg-icons';
function Nav() {
    return (
      <div className='main'>
        <Link to='/' className='link'>MeetUps</Link>
        <div className="parent">
          <div className='iconn'>
                    <FontAwesomeIcon icon={faBars} size="2x" color="#bb788c" />
                    <div className='gap2'>
                      <Link to='/new' className='link'>UpCommingMeetings</Link>
                      <Link to='/old' className='link'>PastMeetings</Link>
                      <Link to='/Add' className='link'>AddMeeting</Link>
                    </div>
              </div>
        </div>
            
              <div className='gap'>
                    <Link to='/new' className='link'>UpCommingMeetings</Link>
                  <Link to='/old' className='link'>PastMeetings</Link>
                  <Link to='/Add' className='link'>AddMeeting</Link>
              </div>   
      </div>
    );
  }
  
  export default Nav;