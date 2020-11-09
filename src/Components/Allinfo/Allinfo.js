import React, { useState } from 'react';
import './Allinfo.css';
import information from '../../fakeData/info'
import User from '../User/User';
import Connect from '../Connected/Connect';

const Allinfo = () => {

    const [infos, setInfo] = useState(information);
    const [count, setCount] = useState([]);

    const handleConnectedUser = (user) =>{
        if(count.indexOf(user) === -1)
        {
            const counter=[...count, user];
            setCount(counter);
        }
    }

    console.log(information);
    return (
        <div className='allinfo'>
            <div className='userInfo-container'>
                {
                    infos.map(user => <User 
                        handleConnectedUser={handleConnectedUser}
                        info={user}></User>)
                }
            </div>
            <div className='connectedList-container'>
                <Connect count={count}></Connect>
            </div>
        </div>
    );
};

export default Allinfo;