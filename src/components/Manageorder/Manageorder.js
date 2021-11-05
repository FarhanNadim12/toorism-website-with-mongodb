import React from 'react';
import { useEffect, useState } from 'react';
import Menubar from '../Menubar/Menubar';

const Manageorder = () => {
    const [manageAllOrders, setManageAllOrders] = useState([]);
    useEffect(() => {
        fetch('https://calm-mesa-98436.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setManageAllOrders(data))
    }, [])
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
                        const remainingOrders = manageAllOrders.filter(order => order._id !== id)
                        setManageAllOrders(remainingOrders)
                    }
                })
        }

    }
    return (
        <div>
            <Menubar></Menubar>
            <h1>Manage Order:{manageAllOrders.length}</h1>
            <div className="row w-100 m-auto">
                {
                    manageAllOrders.map(manageAllOrder =>
                        <div className="card col-md-4 ">
                            <img src={manageAllOrder.img} className="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 className="card-title">{manageAllOrder.name}</h5>
                                <p className="card-text">{manageAllOrder.description}</p>
                                <p className="card-text">Ordered By: {manageAllOrder.orderedMail
                                }</p>
                                <p className="card-text">Price: {manageAllOrder.price}$</p>
                                <button onClick={() => handleDelete(manageAllOrder._id)}>Cancel </button>
                            </div>
                        </div>



                    )
                }
            </div>
        </div>
    );
};

export default Manageorder;