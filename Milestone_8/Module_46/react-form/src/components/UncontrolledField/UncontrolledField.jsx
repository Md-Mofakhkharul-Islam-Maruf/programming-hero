import React, { useRef } from 'react';

const UncontrolledField = () => {
    
    const emailRef = useRef('')
    const passRef  = useRef('')
        const handleSubmit= e =>{
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passRef.current.value;
        console.log(email, password)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" ref={emailRef}/>
                <br />
                <input type="password" name="password" ref={passRef} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UncontrolledField;