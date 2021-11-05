import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import './Packages.css';

const Packages = () => {


    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://calm-mesa-98436.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setPackages(data))


    }, [])

    return (
        <div className='my-3'>

            <h1 className='text-center'>Destinations </h1>
            <div className='row container m-auto'>
                {
                    packages.map(packag => <Package key={packag.id} packag={packag}></Package>)
                }
            </div>
        </div>
    );
};

export default Packages;