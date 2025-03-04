document.getElementById('cash-out-btn').addEventListener('click',
    function (event) {
        event.preventDefault()
        const account = get_input_value_by_id('account-number')
        if (account.length === 11) {
            console.log(account)
        }
        else {
            alert('not ok')
        }
    })