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
        <>            
        <h1 className="acc-title">Profile</h1>
        

        <div id='account-container'>
            
            <section className="personal-info">
                <h2>Personal Info <span className="edit-link">(Edit)</span></h2>
                <div><strong>Full Name:</strong> {currentUser.fullName}</div>
                <div><strong>Username:</strong> {currentUser.username}</div>
                <div><strong>Email:</strong> {currentUser.email}</div>
            </section>

            <section className="order-history">
                {orderInfo.order && orderInfo.order.length > 0 ? (
                    <div>
                        <h2>Order History</h2>
                        <ul className="order-list">
                            {orderInfo.order.map((order, index) => (
                                <li key={index} className="order-item">
                                        <strong>Tracking Number: {order.trackingNumber}</strong>
                                    <br />
                                    <p>{order.date}</p> 

                                    <ul className="order-details">
                                        {order.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                {item.nom} - <strong>Quantity:</strong> {item.quantite} - <strong>Price:</strong> {item.prix}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p className="no-orders">No orders found</p>
                )}
            </section>

            <section className="calendar-booking">
                <h2>Calendar and Booking</h2>
                <p>Option to book flowers for an event.</p>
            </section>
        </div>
        </>
    );
}
