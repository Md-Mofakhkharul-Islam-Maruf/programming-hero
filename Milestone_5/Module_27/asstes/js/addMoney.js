// document.getElementById('add-money-btn').addEventListener('click',
//   function (event) {
//     event.preventDefault()
//     const ammount = document.getElementById('ammount').value
//     const newammount = parseFloat(ammount)
//     const pin = document.getElementById('pin').value
//     const newpin = parseFloat(pin)
//     const accountNo = document.getElementById('account-number').value
//     const oldBalance = document.getElementById('main-balance').innerText
//     const validBalance= parseFloat(oldBalance)

//     if (newpin === 1234 && accountNo.length === 11) {
//       const sum = newammount + validBalance;
//       document.getElementById('main-balance').innerText= sum

//      }
//   }
// )
document.getElementById('add-money-btn').addEventListener('click',
  function (event) {
    event.preventDefault()
    const ammount = get_input_value_by_id('ammount')
    const pin = get_input_value_by_id('pin')
    const account = document.getElementById('account-number').value
    const oldBalance = get_inputInnerText_by_id('main-balance')

    if (account.length === 11) {
      if (pin === 1234) {
        const balance = ammount + oldBalance;
        set_innerText_by_id_and_value('main-balance',balance)
      } else {
        console.log('enter a valid pin')
      }
    }
    else {
      console.log('Give a correct account number')
    }
  }
)