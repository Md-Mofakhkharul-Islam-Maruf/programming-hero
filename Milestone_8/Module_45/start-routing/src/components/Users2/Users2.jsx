import React, { use } from 'react';

const Users2 = ({users2Promise}) => {
    const user2Data= use(users2Promise);
    console.log(user2Data)
    return (
        <div>
            <h2>this is user 2</h2>
        </div>
    );
};

export default Users2;