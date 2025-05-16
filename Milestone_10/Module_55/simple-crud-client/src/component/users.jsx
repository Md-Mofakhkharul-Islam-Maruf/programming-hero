import React, { use } from 'react';

const Users = ({promise}) => {
    const initialUser = use(promise)
    console.log(initialUser)

    
    const handleAddUser = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newUser = { name, email }
        console.log(newUser)

        // create user in the database
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Data after creating user in the db', data)
                if(data.insertedId){
                    alert('User added successfully')
                    e.target.reset()
                }

            })
    }
    return (
        <div>
            <div>
                <form action="" onSubmit={handleAddUser}>
                    <input type="text" name='name' /><br />
                    <input type="email" name='email' /><br />
                    <input type="submit" value="Add User" /><br />
                </form>
            </div>
        </div>
    );
};

export default Users;