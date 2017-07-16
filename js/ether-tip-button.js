


var tipButton = document.querySelector('.btn-donate-ether');

tipButton.addEventListener('click', function() {
  if (typeof web3 === 'undefined') {
    return renderErrorMessage('You need to install MetaMask to use this feature.  <a href="https://metamask.io" target="_blank"> https://metamask.io </a>' )
  }

  var dev_address = '0x7132C9f36abE62EAb74CdfDd08C154c9AE45691B';
  var user_address = web3.eth.accounts[0]

  if (typeof user_address === 'undefined') {
    return renderErrorMessage('You need to login to MetaMask to use this feature.  <a href="https://metamask.io" target="_blank"> https://metamask.io </a>' )
  }

  web3.eth.sendTransaction({
    to: dev_address,
    from: user_address,
    value: web3.toWei('0.1', 'ether'),
  }, function (err, transactionHash) {
    if (err) return renderMessage('Oh no!: ' + err.message)

    // If you get a transactionHash, you can assume it was sent,
    // or if you want to guarantee it was received, you can poll
    // for that transaction to be mined first.
    renderMessage('Thanks for donating Eth to my cause!')
  })
})



function renderErrorMessage(msg)
{
  $(".error-message-title").html("Woah! That was unexpected.")
  $('.error-modal-message').html(msg);
  $('.error-modal').modal('show')
}
