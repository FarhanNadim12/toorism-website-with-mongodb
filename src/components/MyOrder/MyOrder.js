import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Menubar from '../Menubar/Menubar';

const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://calm-mesa-98436.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const myOrders = orders.filter(order => order.orderedMail === user.email);

    let total = 0;
    const prices = myOrders.map(order => parseInt(order.price))
    for (const price of prices) {
        total = total + price
    }
    const handleDelete = (id) => {
        const proceed = window.confirm('Are sure you want to cancel the order');
        if (proceed) {
            fetch(`https://calm-mesa-98436.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Ordered Canceled Successfully')
                        const remainingOrders = orders.filter(order => order._id !== id)
                        setOrders(remainingOrders)
                    }
                })
        }

    }

    console.log(orders.length);
    return (
        <div>
            <Menubar></Menubar>
            <h1>My Orders: {myOrders.length}</h1>
            <h3>Total Price:{total}</h3>
            <div className="row w-100 m-auto">
                {
                    myOrders.map(myOrder =>
                        <div className="card col-md-4 ">
                            <img src={myOrder.img} className="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 className="card-title">{myOrder.name}</h5>
                                <p className="card-text">{myOrder.description}</p>
                                <p className="card-text">Price: {myOrder.price}$</p>
                                <button onClick={() => handleDelete(myOrder._id)} >Cancel </button>
                            </div>
                        </div>



                    )
                }
            </div>
        </div>
    );
};

export default MyOrder;