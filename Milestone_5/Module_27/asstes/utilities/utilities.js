// function getInputValueByID(id) {
//     const value = document.getElementById(id).value;
//     const convertedValue = parseFloat(value);
//     return convertedValue;
    
// }

// function getInnerTextByID(id) {
//     const value = document.getElementById(id).innerText;
//     const convertedValue = parseFloat(value);
//     return convertedValue;
    
// }

// function setInnerTextByIDandValue(id,value){
//     document.getElementById(id).innerText = value;
    
// }


// function handleToggle(id,status){
//     document.getElementById(id).style.display = status;
// }
function get_input_value_by_id(take){
    const value =document.getElementById(take).value
    return validValue= parseFloat(value)
}
function get_inputInnerText_by_id(take){
    const value = document.getElementById(take).innerText;
    return validValue= parseFloat(value)
}

function set_innerText_by_id_and_value(take, set){
    const innerText= document.getElementById(take).innerText=set
    return innerText;
}