import React from 'react';
import './Place.css';

const Place = ({ place }) => {
    const { name, img, price, description } = place;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='image' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-accent font-semibold'>${price}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Visit Now</button>
                </div>
            </div>
        </div>
    );
};

export default Place;