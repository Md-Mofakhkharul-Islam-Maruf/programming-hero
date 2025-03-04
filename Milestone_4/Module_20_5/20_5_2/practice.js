let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(number.reverse());



let number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let revnumber = []
for (num of number2) {
    revnumber.unshift(num)
}
console.log(revnumber)



let number3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let revnum = []
for (let i = 0; i < number3.length; i++) {
    let num = number3[i];
    revnum.unshift(num);
}
console.log(revnum);



let number4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let re_num=[]
for (let i = number4.length - 1; i >= 0; i--) {
    let num=number4[i]
     re_num.push(num)  // re_num variable a akta akta kore push kora hocche num er moddhe thaka value

}
console.log(re_num)
