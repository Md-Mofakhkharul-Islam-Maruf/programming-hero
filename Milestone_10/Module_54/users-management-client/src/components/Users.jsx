import React, { use, useState } from 'react';


const Users = ({ usersPromise }) => {
    const initialUsers = use(usersPromise)
    const [users, setUser] = useState(initialUsers)

    console.log(users)

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email }
        console.log(user)


        //create user for the server

        // fetch('http://localhost:3000/users',{
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(user)
        // })
        // .then(res=>res.json())
        // .then(data => {
        //     console.log('Data after post', data)
        // })

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('New users from server', data)
                const newUsers= [...users, data]
                setUser(newUsers)
                e.target.reset()
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" /><br />
                <input type="email" name="email" id="" /><br />
                <input type="submit" value='Add user' id="" /><br />
            </form>
            {
                users.map(user => <p key={user.id}>{user.name} : {user.email}</p>)
            }
        </div>
    );
};

export default Users;