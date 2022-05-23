import React from 'react'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import './Home.css'
import { Col, Row,Button} from "react-bootstrap";
import Contactme from '../ContactMe/Contactme';
export default function Home() {
  return (
    <div className='home-container'>
        <Profile/>
        <Contactme/>
        <Footer/>
       
    </div>
  )
}
