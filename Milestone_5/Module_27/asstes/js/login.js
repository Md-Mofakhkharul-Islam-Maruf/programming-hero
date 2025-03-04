document.getElementById('login-btn').addEventListener('click', 
  function(event){
    event.preventDefault();
    const accountNumber= document.getElementById('account-number').value;
    const pinNumber= document.getElementById('pin-number').value;

    if(accountNumber.length===11){
      if(parseInt(pinNumber)===1234){
        window.location.href="main.html"
      }
      else{
        alert('Pin thik nai')
      }
    }
    else{
      alert('Account number length must have 11')
    }
  }
)