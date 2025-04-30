import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    const user = use(userPromise);
    console.log(user)
    return (
        <div>
            <h4>{user.name}</h4>
            <h4>{user.email}</h4>
        </div>
    );
};

export default UserDetails2;