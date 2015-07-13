
function playVoice(string)
{

  var msg = new SpeechSynthesisUtterance( string );
  window.speechSynthesis.speak(msg);
  console.log( string );
}

function test()
{
  var url = "http://reddit.com/r/all.json";
 $.getJSON( url, {
   tags: "mount rainier",
   tagmode: "any",
   format: "json"
 })
   .done(function( data ) {

     console.log(data);
     /*
     $.each( data.items, function( i, item ) {
       $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
       if ( i === 3 ) {
         return false;
       }
     });
     */
   });


}
function init()
  {
    setInterval(function () { playVoice("voice it") }  , 3000);

    test();

  }

  window.onload=init;
