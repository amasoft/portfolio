import React from 'react'
import Typical from 'react-typical'
import "./Profile.css"
export default function  () {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href="https://m.facebook.com/walter.emmanuel.967">
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href="#">
                        <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href="https://www.instagram.com/loyal_technology/">
                        <i className='fa fa-instagram-square'></i>
                    </a>
                    <a href="https://twitter.com/aripat5">
                        <i className='fa fa-twitter-square'></i>
                    </a>
                    </div>
                </div>
                <div className="profile-details-name">
                    <span className='primary-text'>
                        {" "}
                        Hello, I'M <span className="highlighted-text">Amadi</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Ethusiastic Dev",
                                1000,
                                "Full Stack Developer",
                                1000,
                                "MERN Stack Dev",
                                1000,
                                "Cross Platform  Dev",
                                1000,
                                "React/React Native Dev",
                                1000,
                            ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                            Knack of buliding applications with front and back end operatoions.
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {" "}
                        Hire Me{" "}
                    </button>
                    <a href='amadi.pdf' download={'Amadi amadi.pdf'}>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
            </div>
        </div>
      
    </div>
    
  )
}
