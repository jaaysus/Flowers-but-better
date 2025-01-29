import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dismissRequest } from '../redux/actions';
import '../styles/adminusers.css';

const UserManagement = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const currentUser = useSelector((state) => state.users.currentUser);
    const users = useSelector((state) => state.users.utilisateurs);
    const savedEvents = useSelector((state) => state.calendar.savedEvents);

    const [openRows, setOpenRows] = useState({});

    const handleRemoveUser = (userId) => {
        dispatch({ type: 'REMOVE_USER', payload: userId });
    };

    const toggleMessage = (userId) => {
        setOpenRows((prevState) => ({
            ...prevState,
            [userId]: !prevState[userId],
        }));
    };

    useEffect(() => {
        if (currentUser) {
            if (currentUser.isAdmin) {
                navigate('/Flowers-but-better/admin/users');
            } else {
                navigate('/Flowers-but-better/userHome');
            }
        } else {
            navigate('/Flowers-but-better/userHome');
        }
    }, [currentUser, navigate]);

    return (
        <>
            <h1 className="user-management-title">User Management</h1>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users
                        .filter((user) => !user.isAdmin)
                        .map((user) => {
                            // Check if the user has any events with a request
                            const userHasRequest = savedEvents.some((event) => event.currentUserId === user.id && event.eventDetails.request);
                            
                            return (
                                <React.Fragment key={user.id}>
                                    <tr className="user-row">
                                        <td className="user-name">
                                            {user.username}
                                        </td>
                                        <td className="user-email">{user.email}</td>
                                        <td className="user-actions">
                                            <button className="remove-button" onClick={() => handleRemoveUser(user.id)}>
                                                Remove User
                                            </button>
                                            <button
                                                className="message-button"
                                                onClick={() => toggleMessage(user.id)}
                                                disabled={!userHasRequest} // Disable button if no request
                                            >
                                                ✉
                                                {savedEvents.some((event) => event.currentUserId === user.id) && (
                                                    <span className="red-dot">
                                                        <span className="red-dot-text">!!!</span>
                                                    </span>
                                                )}
                                            </button>
                                        </td>
                                    </tr>
                                    {openRows[user.id] && (
                                    <tr className="user-details">
                                        <td colSpan="3" className="user-details-content">
                                        {savedEvents
                                            .filter((event) => event.currentUserId === user.id)
                                            .map((event) => (
                                            <div key={event.eventDate}>
                                                <h3>{event.eventDetails.eventTitle}</h3>
                                                <p><strong>Phone Number:</strong> {event.eventDetails.phoneNumber}</p>
                                                <p><strong>Request:</strong> {event.eventDetails.request}</p>
                                                <button
                                                onClick={() => dispatch(dismissRequest(user.id, event.eventDate))}
                                                className="dismiss-request-button"
                                                >
                                                Dismiss Request
                                                </button>
                                            </div>
                                            ))}
                                        {user.message && <p>{user.message}</p>}
                                        </td>
                                    </tr>
                                    )}
                                </React.Fragment>
                            );
                        })}
                </tbody>
            </table>
        </>
    );
};

export default UserManagement;