function length_ofString(str){
    return str.length;
}
console.log(length_ofString('Maruf')) 



function string_array(str){
    return str.length ;
}
console.log(string_array([10,50]))



function strEvenorNot(str){
      let lengt=str.length
      if(lengt%2==0){
        return true
      }
      else{
        return false
      }
}
console.log(strEvenorNot('kilogra'))


function doDubble(number, doubble){
    if(doubble== true){
        return number*2;
    }else{
        return number*3
    }
}
console.log(doDubble(5, true))
console.log(doDubble(5, false))