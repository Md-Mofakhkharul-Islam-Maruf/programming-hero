import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log('submited');
        console.log(event.target.email.value)
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input type="text" name='name' placeholder='type your name'/>
                <br />
                <input type="email" name="email" placeholder='enter your email' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;