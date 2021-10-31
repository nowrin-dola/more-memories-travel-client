import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Tour from '../Tour/Tour';

const TourPlans = () => {
    
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('https://frightful-hollow-73407.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setTours(data));
    }, [])
    const { isLoading} = useAuth();
    if (isLoading) {
        return <Spinner className='m-5' animation="border" variant="dark" />
    }

    return (
        <div id='tourPlans'>

        
        <h3 className='fw-bold text-center text-primary mt-3'>Our Tour Plans</h3>
        


        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-3'>



            {
                tours.map((tour => <Tour
                    key={tour._id}
                    tour={tour}
                ></Tour>))

            }
        </div>




    </div>
    );
};

export default TourPlans;