import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const DoctorDetails = () => {
    const data = useLoaderData();
    const {name} = useParams();
    
    return (
        <div>
            thiss doctor details
        </div>
    );
};

export default DoctorDetails;