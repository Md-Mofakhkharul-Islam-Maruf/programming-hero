import React, { use } from 'react';
import User from '../User/user';

const Users2 = ({ users2Promise }) => {
    const user2Data = use(users2Promise);
    // console.log(user2Data)
    return (
        <div>
            <h2>this is user 2</h2>
            <div>
                {
                    user2Data.map(user => <User user={user} key={user.id}></User>)
                }
            </div>
        </div>
    );
};

export default Users2;