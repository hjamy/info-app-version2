import React from 'react';
import './Connect.css'

const Connect = (props) => {
    const count = props.count;
    console.log(count);
    let total=0;
    for(let i=0;i<count.length;i++)
    {
        total = total + count[i].salary; 
    }

    return (
        <div className='connect'>
            <h3>Connected Users: {count.length}</h3>
            <h4>Total Salary: {total}</h4>
            <h3>
            {
                count.map(con => <p>{con.name},<span> </span></p>)
            }
            </h3>
        </div>
    );
};

export default Connect;