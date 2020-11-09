import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const User = (props) => {
    const {name, img, salary, Profession} = props.info;
    console.log(props.info);
    return (
        <div className='user'>
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <h2>{Profession}</h2>
            <h2>Salary: {salary}</h2>
            <button 
            onClick={()=> props.handleConnectedUser(props.info)}
            ><span>Connect</span><FontAwesomeIcon icon={faUserPlus} /></button>
        </div>
    );
};


export default User;