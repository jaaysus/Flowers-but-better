import '../styles/acc.css';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Account() {
    const navigate = useNavigate(); 
    const currentUser = useSelector((state) => state.users.currentUser); 
    const orderInfo = useSelector((state) => state.panier.orderInfo);
    console.log(orderInfo);
    
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
                
            </section>
            <section>
                {orderInfo.items && orderInfo.items.length > 0 ? (
                    <div>
                        <h2>Order History:</h2>
                        <ul>
                            {orderInfo.items.map((order, index) => (
                                <li key={index}>
                                    <strong>Tracking Number:</strong> {order.trackingNumber}
                                    <ul>
                                        {order.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                {item.nom} - Quantity: {item.quantite} - Price: {item.prix}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
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

