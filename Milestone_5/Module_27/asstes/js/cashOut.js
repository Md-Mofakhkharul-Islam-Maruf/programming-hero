// document.getElementById('cash-out-btn').addEventListener('click',
//     function (event) {
//       event.preventDefault()
//       const ammount = document.getElementById('cashout-ammount').value
//       const newammount = parseFloat(ammount)
//       const pin = document.getElementById('cashout-pin').value
//       const newpin = parseFloat(pin)
//       const accountNo = document.getElementById('account-number').value
//       const oldBalance = document.getElementById('main-balance').innerText
//       const validBalance= parseFloat(oldBalance)

//       if (newpin === 1234 && accountNo.length === 11) {
//         const out = validBalance -  newammount;
//         document.getElementById('main-balance').innerText= out

//        }
//     }
//   ) 


  
// document.getElementById('cash-out-btn').addEventListener('click',
//   function (event) {
//     event.preventDefault()
//     const agentNO = document.getElementById('account-number').value
//     const ammount = get_input_value_by_id('cashout-ammount')
//     const pin = get_input_value_by_id('cashout-pin')
//     const mainBalance = get_input_value_by_id('main-balance')

//     if (agentNO.length === 11) {
//       console.log(typeof pin)
//       if (pin === 1234) { 
//         const sub = mainBalance - ammount
//         set_innerText_by_id_and_value('main-balance', sub)
//       } else {
//         alert('pin is not valid')
//       }
//     }
//     else {
//       alert('Agent number is not valid')
//     }
//   }
// )