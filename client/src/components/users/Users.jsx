import React from 'react';

const Users = (props) => {
    return (
        <div className='user_bar'>
            <p>{props.name} {props.surname}</p>
            <p>DOB: {props.dob.slice(0,10)}. Coolness lvl: {props.cool}</p>
            <p>Phone: +37{props.phone}. E-mail: {props.email}</p>
        </div>
    );
}

export default Users;
