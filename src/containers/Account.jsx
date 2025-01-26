import '../styles/acc.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Calendar from '../components/Calendar';
import { logout } from '../redux/actions';
import FeedbackForm from '../components/FeedbackForm';
import { updateUserInfo } from '../redux/actions';

export default function Account() {
    const navigate = useNavigate(); 
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.users.currentUser); 
    const orderInfo = useSelector((state) => state.panier.orderInfo);


    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState({
        username: currentUser.username,
        email: currentUser.email,
    });

    
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

    const handleLogout = () => {
        dispatch(logout());  // Dispatch logout action
        navigate('/userHome'); // Redirect to userHome after logout
    };


    const handleEditClick = () => {
        setIsEditing(true); // Set edit mode to true
    };

    const handleSaveClick = () => {
        dispatch(updateUserInfo(editedUser));

        setIsEditing(false); // Exit edit mode
    };

    const handleChange = (e) => {
        setEditedUser({
            ...editedUser,
            [e.target.name]: e.target.value, // Update the field being edited
        });
    };

    return (
        <>            
        <h1 className="acc-title">Profile</h1>
        

        <div id='account-container'>
            
            
            <section className="personal-info">
                <h2>Personal Info 
                <button className="logout-button" onClick={handleLogout}>
                Logout
                </button>
                <span className="edit-link" onClick={handleEditClick}>(Edit)</span></h2>
                {isEditing ? (
                    <div>
                        <div>
                            <strong>Username:</strong>
                            <input
                                type="text"
                                name="username"
                                value={editedUser.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <strong>Email:</strong>
                            <input
                                type="email"
                                name="email"
                                value={editedUser.email}
                                onChange={handleChange}
                            />
                        </div>
                        <button onClick={handleSaveClick}>Save</button>
                    </div>
                ) : (
                    <div>
                        <div><strong>Username:</strong> {currentUser.username}</div>
                        <div><strong>Email:</strong> {currentUser.email}</div>
                    </div>
                )}
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
                    <FeedbackForm />
            <section className="calendar-booking">
                <h2>Calendar and Booking</h2>
                <Calendar />
            </section>
        </div>
        </>
    );
}
