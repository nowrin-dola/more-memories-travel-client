import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './OrderDetails.css';

const OrderDetails = () => {
    const {user} = useAuth();
    const {tourId} = useParams();
    const [tour, setTour] = useState ({});
    useEffect(()=>{
        fetch(`https://frightful-hollow-73407.herokuapp.com/tours/${tourId}`)
        .then(res=>res.json())
        .then(data=>setTour(data))
    },[])

    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
      data.status= "pending";
      data.placeName = tour.name;
      axios.post('https://frightful-hollow-73407.herokuapp.com/users', data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Added successfully');
               reset();
           }
        
        })
  }
    
    return (
       <div className="d-flex justify-content-center">     
            <div className="col-lg-5  col-sm-12 col-md-12 m-2">
                <div className="card crd card-style mx-auto">
                    <img src={tour?.picture} className="card-img-top img-style" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-primary">{tour?.name}</h5>
                        <p className="card-text">{tour?.about}</p>


                    </div>
                </div>
            </div>
           
    
            <div className='add-service col-lg-7  col-sm-12 col-md-12 m-2'>
                <h3 className="text-danger ">Order Details</h3>
               <form onSubmit={handleSubmit(onSubmit)} >
               <input
                        className="p-2 m-2"
                        defaultValue={tourId}
                        {...register("tourId")}
                        required
                    />
                    <input
                        className="p-2 m-2"
                        defaultValue={user.displayName}
                        {...register("name")}
                        required
                    />
                     <input
                        className="p-2 m-2"
                        defaultValue={user.email}
                        {...register("email")}
                        required
                    />
                    <input type="number" {...register("age", { min: 18, max: 99 })}  placeholder="Age"/>
                    <textarea className="p-4" {...register("address")} placeholder="Address" />
                    <input type="number" {...register("phone")} placeholder=" Phone Number" />
                    
                    <input className="bg-danger text-white fw-bold p-2" type="submit" value="Place Order" />
                </form>
          </div>
       </div>

    );
};

export default OrderDetails;