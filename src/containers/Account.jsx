import '../styles/acc.css';
import React, { useEffect } from 'react';
import { useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Account() {
    const navigate = useNavigate(); 
    const currentUser = useSelector((state) => state.users.currentUser); 


    useEffect(() => {
            if (currentUser) {
                if (currentUser.isAdmin) {
                    navigate('/adminHome');
                } else {
                    navigate('/acc');
                }
            }
            else{
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
            Past Orders + add review
        </section>
        <section>
            Calendar and option to book flowers for an event ig
        </section>
        
      </div>
    );
}