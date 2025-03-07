//Callback function 
function ghotok(patroNo, patroName){
    patroNo(patroName)    
}
function patro1(patroName){
    console.log(`Ami no 1 patro ${patroName}`);
}
function patro2(patroName){
    console.log(`Ami no 2 patro ${patroName}`);
}
function patro3(patroName){
    console.log(`Ami no 3 patro ${patroName}`);
}
ghotok(patro1,'Maruf'); // Here patro1 function passes as an argument of ghotok function