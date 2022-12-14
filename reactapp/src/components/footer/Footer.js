import React from 'react';
import googlemap from '../../assets/images/googlemap.png';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () =>{
    return(
        <>
            <footer className='footer-section'>
                <div className='main-footer'>
                <div className='footer-top'>
                    <div className='footer-title contact'>
                        <h3>Contact Us</h3>
                        <div className='address footer'>
                            <div className='address-icon icon'>
                            <span><FmdGoodIcon/></span>
                            </div>
                            <div className='address-details'>
                                <h4 className='title'>Address</h4>
                                <p>TInkune, Kathmandu</p>
                            </div>

                        </div>

                      
                        <div className='email footer'>
                            <div className='email-icon icon'>
                            <span><MailIcon/></span>
                            </div>
                            <div className='email-details'>
                                <h4 className='title'>Address</h4>
                                <p>TInkune, Kathmandu</p>
                            </div>

                        </div>

                        <div className='phone footer'>
                            <div className='phone-icon icon'>
                            <span><PhoneIcon/></span>
                            </div>
                            <div className='phone-details'>
                                <h4 className='title'>Address</h4>
                                <p>TInkune, Kathmandu</p>
                            </div>

                        </div>

                    </div>


                    <div className='footer-title quicklinks'>
                        <h3>Quick Links</h3>
                        <div className='quicklinks-details'>
                            <ul className='list'>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Menu</li>
                                <li>Hall and Meeting</li>
                                <li>Our Client Review</li>
                            </ul>


                        </div>

                    </div>
                    <div className='footer-title google-map'>
                            <img src={googlemap} alt="map"/>
                    </div>

                </div>

                <div className='footer-bottom'>
                    <div className='copyright'>
                        <p>@copyright 2022. All Rights Reserve</p>
                    </div>
                    <div className='sociallinks'>
                        <span><FacebookIcon/></span>
                        <span><InstagramIcon/></span>
                        <span><TwitterIcon/></span>
                    </div>

                </div>
                </div>


            </footer>
        </>
    )
    

}

export default Footer;