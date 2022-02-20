import React from 'react';
import images from '../img/tryst-logo.png'
import extra from '../img/extra.png'

const ExtraSection = () => {
    return (
        <div className='my-4'>
            <div className='container'>
                <img src={images} alt="" /><br />
                <img src={extra} alt="" className='img-fluid w-25 h-50' />
                <p className='my-3'> Location From Australia</p>
            </div>
        </div>
    );
};

export default ExtraSection;