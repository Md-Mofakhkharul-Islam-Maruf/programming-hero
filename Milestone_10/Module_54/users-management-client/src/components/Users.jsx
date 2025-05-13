import React, { use } from 'react';


const Users = ({ usersPromise }) => {
    const users = use(usersPromise)
    console.log(users)

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email }
        console.log(user)
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