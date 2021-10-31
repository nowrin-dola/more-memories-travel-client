import React from 'react';
import pic from '../../../Images/footer/about.jpg';

const About = () => {
    return (
        <div id="about">
            <div class="container">
                <div class="row mt-5">
                    <div class="col-12 col-lg-6 mb-3 ">
                        <img src={pic} className='d-block img-fluid' alt="" srcset="" />

                    </div>
                    <div class="col-12 col-lg-6 mt-5">
                        <h5 className='text-center fw-bold'><span className='text-warning '>Get To Know </span> Us</h5>
                        <h1 className='text-primary fw-bold ' >Plan Your Tour With Us!</h1>
                        <p className="mt-5">
                        Vibrant communities are at the very core of everything we do. Informed by deep experience and proprietary methodologies, we transform destinations of all kinds — driving demand and fostering deep relationships with residents and visitors alike. We’ll be a trusted partner for your destination: one that knows the right questions to ask, when to ask them, and the only one willing to guarantee our commitment. Get started with us today — complete the simple form below, and we’ll take care of the rest.</p>
                        

                    </div>

                </div>

            </div>
        </div>
            
       
    );
};

export default About;