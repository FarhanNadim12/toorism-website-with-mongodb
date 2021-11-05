import React from 'react';
import './Aboutus.css'
const Aboutus = () => {
    return (

        <div id='about' className="row w-75 m-auto align-items-center mb-5">
            <div className='col-md-6'>
                <img height='350px' className='w-100' src="https://free4kwallpapers.com/uploads/wallpaper-cache/famous-buildings-world-travel-1300x0-MM-100.jpg" alt="" />
            </div>
            <div className="col-md-6">
                <h2>Abot Us</h2>
                <h3>World Best Travel Agency Company Since 2008.</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet tortor justo, in aliquam mi congue eget. Maecenas tristique eleifend sapien eget lacinia. Phasellus mollis lectus tempor ex tincidunt, at ultrices massa efficitur. Integer vulputate malesuada sollicitudin. Nulla iaculis mi quis nunc tristique dapibus. Etiam risus quam, posuere in fringilla at, venenatis vitae mauris. Cras et luctus nisi. Aliquam iaculis ex malesuada, tristique nulla at, congue justo. Etiam vulputate
                </p>
            </div>

        </div>

    );
};

export default Aboutus;