import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Menubar from '../Menubar/Menubar';

const PlaceOrder = () => {
    const { user } = useAuth();

    const { id } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://calm-mesa-98436.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    service.orderedMail = user.email;
    delete service._id;
    const handlePlaceOrder = () => {

        fetch('https://calm-mesa-98436.herokuapp.com/orders', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Ordered Placed Successfully')
                }
            })
    }
    console.log(service);

    return (
        <div>
            <Menubar></Menubar>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-2">
                        <img height="100px" width="300px" src={service?.img} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{service?.name}</h5>
                            <p class="card-text">{service?.description}</p>
                            <p class="card-text"> <b>{service?.packag}</b> package</p>
                            <p class="card-text">Price: <b> {service?.price}$</b></p>
                            <button onClick={handlePlaceOrder}>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;