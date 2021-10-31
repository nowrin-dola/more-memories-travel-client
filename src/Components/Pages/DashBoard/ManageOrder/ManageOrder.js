
import React, {  useState } from 'react';


const ManageOrder = ({order}) => {
    const {_id,tourId,name,email,address,phone,status,placeName}= order;
    const[orders,SetOrders] = useState([]);
    
     const [update,setUpdate] = useState([]);

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');

        if(proceed){
            const url =`https://frightful-hollow-73407.herokuapp.com/orders/${_id}`;
        fetch(url,{
            method: "DELETE",
            headers: { "Content-type": "application/json" },
                  })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount >0 ){
                alert('Deleted successfully');
                const remaining = orders.filter(order=> order._id !== id);
                SetOrders(remaining);
                window.location.reload(true);
                
                            }
                     })
        }


        
    }

    const handleUpdate = id =>{

        order.status = "approved";
             
            const url =`https://frightful-hollow-73407.herokuapp.com/orders/${_id}`;
        fetch(url,{
            method:"PUT",
            headers:{
                "content-type" : "application/json"
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
          setUpdate(data)

        })
        


        
        
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
                        <button className="m-2 btn btn-danger" onClick={()=>handleDelete(_id)}>delete</button>
                        <button className="m-2 btn btn-success" onClick={()=>handleUpdate(_id)}>update</button>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ManageOrder;