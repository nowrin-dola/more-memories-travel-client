import React, { useEffect, useState } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageAllOrders = () => {
    const [orders,setOrders] = useState([]);
    useEffect(()=>{
        fetch('https://frightful-hollow-73407.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data));

    },[])
    return (
        <div>
             <h3 className='fw-bold text-center text-primary mt-3'>Manage All Plans</h3>

              <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-5'>
                    {
                        orders.map((order => <ManageOrder
                            key={order._id}
                            order={order}
                        >
                            
                        </ManageOrder>))

                    }
             </div>
            
        </div>
    );
};

export default ManageAllOrders;