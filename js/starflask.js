 


function renderErrorMessage(msg)
{
  $(".error-message-title").html("Woah! That was unexpected.")
  $('.error-modal-message').html(msg);
  $('.error-modal').modal('show')
}
