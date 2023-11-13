
import '../css/App.css';
import Home from '../pages/Home'
import AddMeeting from '../pages/AddMeeting'
import UpCommingMeets from '../pages/UpCommingMeets';
import PastMeets from '../pages/PastMeets'
import Not from '../pages/NotFound'
import { Route,Routes } from 'react-router-dom';
import Nav from './Nav'
function App() {
  return (
    <div>
        <Nav/>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/Add' element={<AddMeeting/>}/>
          <Route path='/old' element={<PastMeets/>}/>
          <Route path='/new' element={<UpCommingMeets/>}/>
          <Route path='*' element={<Not/>}/>
        </Routes>

    </div>
  );
}

export default App;
