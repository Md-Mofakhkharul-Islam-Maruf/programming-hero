import React, { useState } from 'react';

const useInputField = (defaultValue) => {
    const [filedValue, setFieldValue]= useState(defaultValue)
    const handleFeildOnChange = e =>{
        setFieldValue(e.target.value)
    }
    return [filedValue, handleFeildOnChange]
};

export default useInputField;