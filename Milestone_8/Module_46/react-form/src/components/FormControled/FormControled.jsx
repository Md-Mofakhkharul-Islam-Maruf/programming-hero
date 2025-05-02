import React, { useState } from 'react';

const FormControled = () => {

    const handleFormControled = (parameter) => {
        parameter.preventDefault()
        console.log('submit works')
    }

    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleFormPassword = parameter => {
        console.log(parameter.target.value)
        setPassword(parameter.target.value)
        if (password.length <= 5) {
            setError('Password must be 6 or more than character')
        } else {
            setError('')
        }
    }
    return (
        <div>
            <form onSubmit={handleFormControled}>
                <input defaultValue={password} onChange={handleFormPassword} type="password" name="password" />
                <input type="submit" value="Submit" />
            </form>
            <p style={{ color: 'red' }}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default FormControled;