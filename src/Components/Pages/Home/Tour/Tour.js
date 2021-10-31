import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Tour.css';

const Tour = ({tour}) => {
    const { _id, name, picture, about } = tour;
    return (
        <div>
            <div className="col">
                <div className="card card-style">
                    <img src={picture} className="card-img-top img-style" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-primary">{name}</h5>
                        <p className="card-text">{about}</p>
                        <Link to={`/orderDetails/${_id}`}>
                            <Button className='btn btn-warning fw-bold'>Book Now</Button>
                        </Link>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Tour;