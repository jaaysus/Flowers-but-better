import '../styles/acc.css';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Account() {
    const navigate = useNavigate(); 
    const currentUser = useSelector((state) => state.users.currentUser); 
    const trackingNumbers = useSelector((state) => state.panier.orderInfo.trackingNumbers); // Use trackingNumbers array
    console.log(trackingNumbers)
    useEffect(() => {
        if (currentUser) {
            if (currentUser.isAdmin) {
                navigate('/adminHome');
            } else {
                navigate('/acc');
            }
        } else {
            navigate('/userHome');
        }
    }, [currentUser, navigate]);

    return (
        <div id='container'>
            <h1>Account</h1>
            <section>
                Personal infos + edit
                <br />
                {currentUser.username}
                <br />
                {currentUser.email}
            </section>
            <section>
            {trackingNumbers && trackingNumbers.length > 0 ? (
    <div>
        <h2>Tracking Numbers:</h2>
        <ul>
            {trackingNumbers.map((trackingNumber, index) => (
                <li key={index}>{trackingNumber}</li>
            ))}
        </ul>
    </div>
) : (
    "No orders"
)}

            </section>
            <section>
                Calendar and option to book flowers for an event ig
            </section>
        </div>
    );
}
