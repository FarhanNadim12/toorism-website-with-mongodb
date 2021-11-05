import React from 'react';
import { Link } from 'react-router-dom';
import './Package.css'
const Package = (props) => {

    const { _id, img, name, description, price, packag } = props.packag;

    return (
        <div className='card-group col-md-4 container mb-5'>
            <div className="card">
                <img src={img} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{description}</p>
                    <p><b>{packag} </b>package</p>
                    <p>Package Price: <b>{price}$</b></p>
                </div>
                <div className="card-footer">
                    <Link className='detailBtn' to={`service/${_id}`} >Book Now</Link>
                </div>
            </div>



        </div>
    );
};

export default Package;