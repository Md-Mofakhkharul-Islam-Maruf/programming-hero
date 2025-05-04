import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div>
            <h2>Login with</h2>
            <div className='flex flex-col gap-2 mt-4'>
                <button className='btn btn-outline btn-secondary'><FaGoogle size={'25'} />Login with Google</button>
                <button className='btn btn-outline btn-primary'><FaGithub size={'25'}/>Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;