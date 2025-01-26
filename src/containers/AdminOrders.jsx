import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteOrder } from '../redux/actions';

const UserOrders = () => {
    const dispatch = useDispatch();
    const { utilisateurs } = useSelector(state => state.users);
    const { orderInfo } = useSelector(state => state.panier);

    const navigate = useNavigate(); 
    const currentUser = useSelector((state) => state.users.currentUser); 

    const handleDelete = (trackingNumber) => {
        dispatch(deleteOrder(trackingNumber)); 
    };

    
    useEffect(() => {
        if (currentUser) {
            if (currentUser.isAdmin) {
                navigate('/admin/orders');
            } else {
                navigate('/userHome');
            }
        }
        else{
            navigate('/auth');
        }
    }, [currentUser, navigate]);


    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Clients Orders</h1>
            {orderInfo.order.length > 0 ? (
                <table style={{ width: '80%', margin: '20px auto', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Full Name</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tracking Number</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Date</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Items</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th> {/* New column for actions */}
                        </tr>
                    </thead>
                    <tbody>
                        {orderInfo.order.map((order, index) => {
                            const user = utilisateurs.find(u => u.id === order.userId);
                            if (!user) return null;

                            return (
                                <tr key={index}>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.fullName}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{order.trackingNumber}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{order.date}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                        <ul>
                                            {order.items.map((item, idx) => (
                                                <li key={idx}>{item.nom} (x{item.quantite}) - ${item.prix}</li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                        <button 
                                            onClick={() => handleDelete(order.trackingNumber)} 
                                            style={{ padding: '5px 10px', backgroundColor: '#ff4d4d', color: '#fff', border: 'none', cursor: 'pointer' }}>
                                            Confirm
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                <p>No orders found.</p>
            )}
        </div>
    );
};

export default UserOrders;
