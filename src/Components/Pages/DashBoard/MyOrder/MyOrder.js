import React, { useState } from 'react';

const MyOrder = ({myOrder}) => {
    const {_id,tourId,name,email,address,phone,status,placeName}= myOrder;
    const [orders,setOrders] = useState([]);
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');

        if(proceed){
            const url =`https://frightful-hollow-73407.herokuapp.com/orders/${_id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.deletedCount > 0){
               alert('Deleted Successfully')
            const remaining = orders.filter(order=> order._id !== id);
            setOrders(remaining);
           }
        })
        }
        
    }

    return (
        <div>
            <div className="col">
                <div className="card card-style">
                    <div className="card-body">
                        <h5 className="card-title text-primary">Order Id: {tourId}</h5>
                        <p className="card-text">Tour Destination: {placeName}</p>
                        <p className="card-text">Name: {name}</p>
                        <p className="card-text">Email: {email}</p>
                        <p className="card-text">Address: {address}</p>
                        <p className="card-text">Phone Number: {phone}</p>
                        <p className="card-text">Status: {status}</p>
                        <button type="button" class="btn btn-primary" onClick={()=>handleDelete(_id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Delete
                            </button>

                       
                    </div>
              </div>
            </div>
                                    
        </div>
    );
};

export default MyOrder;