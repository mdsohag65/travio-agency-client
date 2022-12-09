import React from 'react';
import about from '../../../images/about/about.jpg';
import mini from '../../../images/about/mini.jpg';

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={about} className="w-4/5 h-full rounded-lg shadow-2xl" alt='' />
                    <img src={mini} className="w-2/5 right-5 top-1/2 absolute border-8 rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='w-1/2 mt-8'>
                    <p className='text-2xl text-orange-600 font-bold'>About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;