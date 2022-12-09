import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';

const Places = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('places.json')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mb-5'>Available <span className='text-secondary'>Places</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    places.map(place => <Place
                        key={place.id}
                        place={place}
                    ></Place>)
                }
            </div>
        </div>
    );
};

export default Places;