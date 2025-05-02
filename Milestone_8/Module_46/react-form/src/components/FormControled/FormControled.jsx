import React, { use, useState } from 'react';

const FormControled = () => {

    const handleFormControled = (parameter)=>{
        parameter.preventDefault()
        console.log('submit works')        
    }

    const[password, setPassword]= useState('')

    const handleFormPassword = parameter =>{
        console.log(parameter.target.value)
    }
    return (
        <div>
            <form onSubmit={handleFormControled}>
                <input defaultValue={password} onChange={handleFormPassword} type="password" name="password"/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormControled;