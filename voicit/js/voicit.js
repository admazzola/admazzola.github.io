

function playVoice(string)
{



  var msg = new SpeechSynthesisUtterance( string );
  window.speechSynthesis.speak(msg);
  console.log( string );


}

var postIndex = 0;
var posts;

function readNextPost()
{
  console.log(posts);
  if(typeof posts[postIndex] !== 'undefined' && posts[postIndex] !== null)
  {
    currentPost = posts[postIndex].data;
    playVoice( currentPost.title );

    postIndex++;
  }

}
function test()
{



  var url = "http://reddit.com/r/all.json?jsonp=?";
 $.getJSON( url, {
   datatype: "jsonp",
   crossDomain: true,
   format: "json"
 })
   .done(function( json ) {

     console.log(json);

     posts = json.data.children;

     /*
     $.each( posts, function( i, item ) {
       $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
       if ( i === 3 ) {
         return false;
       }
     });*/

   });


}
function init()
  {
    setInterval(function () { readNextPost() }  , 3000);

    test();

  }

  window.onload=init;
