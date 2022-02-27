import React from 'react';

import appStoreWeb from "../assets/appstore.png"
import playStoreWeb from "../assets/playstore.png"
import logo from '../assets/logo.png';
import visa from '../assets/visa';
import master from '../assets/master';

const Footer = () => {
    return (
        <>
            <div className='footer-background-2 d-flex flex-column justify-content-between align-items-center'>
                <div className='container'>
                    <div className='row mt-5 d-flex flex-row justify-content-between align-items-center' style={{ width: '100%' }}>
                        <div className='col-4'>
                            <div className=' mb-4'>
                                <img src={logo} />
                            </div>
                            <div className='text-white'>
                                CIG Dubai is the Business Setup Consultant.
                            </div>
                        </div>

                        <div className='col-4'>
                            <div className='row'>
                                <div className='col'>
                                    <div>
                                        <div className='text-white text-bold mb-2'>We Accept</div>

                                        <div className='d-flex justify-content-start'>
                                            <div className='footer-master-card'>{master}</div>
                                            <div>{visa}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='text-white mb-2'>Download Now</div>
                                    <div className='d-flex'>
                                    <img src={appStoreWeb} loading="lazy" className='footer-app-store footer-app-store-margin' alt="App Store" />
                                    <img src={playStoreWeb} loading="lazy" className='footer-app-store' alt="Play Store" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-4 d-flex justify-content-center'>
                            <div className='footer-link-container'>

                                <div className=' p-1' >
                                    <a className='footer-link text-decoration-none text-white'>
                                        Home
                                    </a>
                                </div>

                                <div className=' p-1'  >
                                    <a className='footer-link text-decoration-none text-white' >
                                        Services
                                    </a>
                                </div>

                                <div className=' p-1' >
                                    <a className='footer-link text-decoration-none text-white'>
                                        Contact Us
                                    </a>
                                </div>

                                <div className=' p-1'  >
                                    <a className='footer-link text-decoration-none text-white'>
                                        Visa
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className='  p-1' >
                                    <a className='footer-link text-decoration-none text-white' >
                                        Licensing
                                    </a>
                                </div>

                                <div className=' p-1'  >
                                    <a className='footer-link text-decoration-none text-white'>
                                        FAQs
                                    </a>
                                </div>

                                <div className=' p-1'  >
                                    <a className='footer-link text-decoration-none text-white'>Teams & Conditions</a>
                                </div>

                                <div className=' p-1'  >
                                    <a className='footer-link text-decoration-none text-white'>Privacy Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-white mb-3'>Copyright © 2019 CIG. All rights reserved</div>
            </div>
        </>
    )
}

export default Footer;
