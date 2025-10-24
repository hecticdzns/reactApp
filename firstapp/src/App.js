import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';

import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import UserSupport from './UserSupport';
import NavBar from './NavBar';


function App() {
  return (
   <BrowserRouter>
         <NavBar />
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/about' element={<About />} />
           <Route path='/contact' element={<Contact />} />
           <Route path='/usersupport' element={<UserSupport />} />
         </Routes>
   </BrowserRouter>
  );
}

export default App;
