import React from 'react';
import { useLoaderData } from 'react-router';
import Doctor from './Doctor';
import Button from '../ui/Button';

const Doctors = () => {
    const data  = useLoaderData();
    console.log(data);
   
    return (
        
        <div>
            <div className='text-center md:pt-16 pt-4'> <h1 className='text-3xl font-thin text-gray-900'>Our Best Doctors</h1>
            <p className='text-gray-500 w-full mb-8 lg:max-w-5/6 mx-auto'>Get access to trusted medical professionals anytime, anywhere. From general advice to expert consultations, our platform makes it simple to connect and book with ease — your health, your schedule.</p></div>
            <div className='grid md:grid-cols-3 gap-4 grid-cols-1'>
            {
                data.map((doctor)=> <Doctor key={doctor.id} doctor={doctor}/>)
            }
            </div>
            <div className='text-center mt-6 md:mt-12 pb-8 md:pb-16'>
            <Button label="View All Doctors"/>
            </div>
        </div>
    );
};

export default Doctors;