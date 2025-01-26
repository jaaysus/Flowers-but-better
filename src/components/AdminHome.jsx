import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/actions'; // Assuming you have this import


const AdminHome = () => {
    const currentUser = useSelector((state) => state.users.currentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    useEffect(() => {
        if (currentUser) {
            if (!currentUser.isAdmin) {
                navigate('/Flowers-but-better/userHome');
            }
            else if (currentUser.isAdmin) {
                navigate('/Flowers-but-better/adminHome');
            }
        } else {
            navigate('/Flowers-but-better/userHome'); 
        }
    }, [currentUser, navigate]);

    const handleLogout = () => {
            dispatch(logout());  // Dispatch logout action
            navigate('/Flowers-but-better/userHome'); // Redirect to userHome after logout
        };
    

    if (currentUser && currentUser.isAdmin) {
        return (
            <>
                <h1 style={{ textAlign: 'center', marginTop: '50px' }}>
                    Welcome Admin
                    <button onClick={handleLogout}>
                        Logout
                    </button>
                    </h1>
                
        </>
);
    }

    return null; 
};

export default AdminHome;


