
function playVoice(string)
{

  var msg = new SpeechSynthesisUtterance( string );
  window.speechSynthesis.speak(msg);
  console.log( string );
}


function init()
  {
    setInterval(function () { playVoice("voice it") }  , 3000);

  }

  window.onload=init;
