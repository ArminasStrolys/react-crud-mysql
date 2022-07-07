import React from 'react';

const Users = (props) => {


    const handleEdit = (e) => {
            e.preventDefault()
            console.log('edit')
    }
    const handleDelete = (e) => {
            e.preventDefault()
            console.log('delete')
    }

    return (
        <div className='user_bar'>
            <p><b>{props.name} {props.surname}</b></p>
            <p>DOB: {props.dob.slice(0,10)}. Coolness lvl: {props.cool}</p>
            <p>Phone: +37{props.phone}. E-mail: {props.email}</p>
            <div>
                <form>
                    <button onClick={handleEdit} className='edit_btn'>Edit</button>
                    <button onClick={handleDelete} className='delete_btn'>Delete</button>
                </form>
            </div>
        </div>
    );
}

export default Users;
