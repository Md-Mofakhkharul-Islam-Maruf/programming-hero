import React from 'react';
import useInputField from '../../hooks/UseInputFields/useInputField';

const HookForm = () => {
    const [name, nameOnchange] = useInputField('')
    const [email, emailOnchange] = useInputField('')
    const handleSubmit = e => {
        e.preventDefault()
        console.log('submit', name, email)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="" defaultValue={name} onChange={nameOnchange} /><br />
                <input type="email" name="" defaultValue={email} onChange={emailOnchange} /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;