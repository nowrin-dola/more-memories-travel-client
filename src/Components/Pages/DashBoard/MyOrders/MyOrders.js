import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    
    const {user} = useAuth();
    
    const [myOrders,setMyOrders] = useState([]);
    const email = user.email ;
    useEffect(()=>{
        fetch(`https://frightful-hollow-73407.herokuapp.com/orders/${email}`)
        .then((res) => res.json())
        .then((data) => setMyOrders(data));
    }, []);
    console.log(myOrders);
    

    return (
        <div>
            <h3 className='fw-bold text-center text-primary mt-3'>My Tour Orders {myOrders.length}</h3>

            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-5'>

                    {
                        myOrders.map(myOrder=><MyOrder
                        key= {myOrder._id}
                        myOrder={myOrder}
                        
                        
                        ></MyOrder>)
                    }
            </div>
             
            
        </div>
    );
};

export default MyOrders;