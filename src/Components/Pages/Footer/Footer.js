import React from 'react';
import './Footer.css';
import pic1 from '../../Images/footer/footer1.jpg';
import pic2 from '../../Images/footer/footer2.jpg';
import pic3 from '../../Images/footer/footer3.jpg';
import pic4 from '../../Images/footer/footer4.jpg';
import pic5 from '../../Images/footer/footer5.jpg';
import pic6 from '../../Images/footer/footer6.jpg';



const Footer = () => {
    return (
        <div>
            <div>
                <div className="footer-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-12">
                                <div className="left-container text-center">
                                   
                                    <h1 className='fw-bold text-warning mt-2'>More Memories Travel</h1>


                                    

                                    <div className="mt-5">
                                    <h3 className=''>Contact Us</h3>
                                    <h5>+1 7 986 45 677 345</h5>
                                    <div>
                                            <p>
                                                Beside Gulshan Lake
                                                <br /> Dhaka, Bangladesh
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-12">
                                <div className="footer-menu-container text-center">
                                    <ul>
                                        <li className="footer-menu">Home</li>
                                        <li className="footer-menu">About us</li>
                                        <li className="footer-menu">Services</li>
                                        <li className="footer-menu">Contact us</li>
                                        <li className="footer-menu">Blogs</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5 col-12">
                                <div className="right-footer-container">
                                    <h3 className='text-center m-3 text-warning'>InstaFeed</h3>
                                <div class="container ">
                                  <div class="row row-cols-3  ">
                                    <div class="col"><img src={pic1} className='mb-2' alt="" srcset="" /></div>
                                    <div class="col"><img src={pic2} alt="" srcset="" /></div>
                                    <div class="col"><img src={pic3} alt="" srcset="" /></div>
                                    <div class="col"><img src={pic4} alt="" srcset="" /></div>
                                    <div class="col"><img src={pic5} alt="" srcset="" /></div>
                                    <div class="col"><img src={pic6} alt="" srcset="" /></div>
                                    </div>
                                </div>
                                   

                                    

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <hr />
                        <h4>Follow Us on:</h4>
                        <div className="icons-container d-flex text-center justify-content-center">
                            <div className="icon">
                                <i class="fab fa-facebook-square"></i>
                            </div>
                            <div className="icon">
                                <i class="fab fa-instagram"></i>
                            </div>
                            <div className="icon">
                                <i class="fab fa-youtube"></i>
                            </div>

                        </div>
                        <small>Nowrin © . All rights reserved.</small>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Footer;