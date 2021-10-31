import React from 'react';
import './SocialPart.css';

const SocialPart = () => {
    return (
        
            <div className="social-interact-main d-flex justify-content-center m-3 mb-5">
            <div className="social-interact">
                <h3 className="text-primary">256k</h3>
                <p className="fw-bold">Youtube Subscriber</p>
                <i class="fab fa-youtube"></i>

            </div>
            <div className="social-interact">
                <h3 className="text-primary">2m</h3>
                <p className="fw-bold">Instagram Followers</p>
                <i class="fab fa-instagram-square"></i>

            </div>
            <div className="social-interact ">
                <h3 className="text-primary">177k</h3>
                <p className="fw-bold">Facebook Likes</p>
                <i class="fab fa-facebook-square"></i>

            </div>
            
        </div>
    );
};

export default SocialPart;