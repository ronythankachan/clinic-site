import React,{useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import BookAppointment from './BookAppointment';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import About from './About';
import Contact from './Contact';
import MedicineShop from './MedicineShop';
import HomeAppointment from './HomeAppointment';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './ScrollToTop';
function App() {

  const [isOpen,setIsOpen] =useState(false);
  const toggle = () =>{
      setIsOpen(!isOpen)
  }
  return (
    <div>
      <Router>
          <Navbar toggle={toggle}/>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <ScrollToTop/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/book_appointment' component={BookAppointment}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/shop' component={MedicineShop}/>
                <Route path='/home_appointment' component={HomeAppointment}/>
            </Switch>
          <Footer/>
      </Router>
    </div>


  );
}

export default App;
