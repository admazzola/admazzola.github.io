

function playVoice(string)
{



  var msg = new SpeechSynthesisUtterance( string );
  window.speechSynthesis.speak(msg);
  console.log( string );


}




function getPostTimeLength( post )
{
  return Math.max(currentPost.title.split(" ").length * 500, 4000 );
}

var postIndex = 0;
var interval = 1000;
function showSlideshow( posts )
{

  if(typeof posts[postIndex] !== 'undefined' && posts[postIndex] !== null)
    {
      currentPost = posts[postIndex].data;

      playVoice(currentPost.title);


      imageURL = getImageURLFromPost( currentPost )

      if(imageURL !== null)
      {
      addImageToCarousel( imageURL );
      }else{

      addTextToCarousel( currentPost.title );
      }




      $(".owl-carousel").data('owlCarousel').goTo( postIndex );
      postIndex++;

      //callback to myself
       setTimeout(function(){ showSlideshow( posts ); }  , getPostTimeLength( currentPost)  );
  }
}


function getImageURLFromPost( post )
{
  if( post.domain == "i.imgur.com")
  {
    return post.url;
  }

  if(post.preview !== null && typeof post.preview !== 'undefined')
  {

    return currentPost.preview.images[0].source.url
  }

  return null;
}

function addImageToCarousel( imageurl )
{


  imagediv = document.createElement( "div" );
  imagediv.className = "item";

    content = document.createElement( "img" );
    content.src = imageurl;


  imagediv.appendChild( content );

  $('#content-carousel').data('owlCarousel').addItem( imagediv );

}

function addTextToCarousel( text)
{


    textdiv = document.createElement( "div" );
    textdiv.className = "item";

      content = document.createElement( "div" );
      content.innerHTML = text;


      textdiv.appendChild( content );

    $('#content-carousel').data('owlCarousel').addItem( textdiv );

}


function connect()
{

  postIndex = 0;

  var sub = getQueryParam("sub");

console.log(sub );
  if( typeof sub === 'undefined' || sub === null )
  {
    sub = "all";
  }



  var url = "http://reddit.com/r/" + sub + ".json?jsonp=?";
 $.getJSON( url, {
   datatype: "jsonp",
   crossDomain: true,
   format: "json"
 })
   .done(function( json ) {

     console.log(json);

     var posts = json.data.children;

     showSlideshow( posts );

     /*
     $.each( posts, function( i, item ) {
       $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
       if ( i === 3 ) {
         return false;
       }
     });*/

   });


}


function initCarousel()
{


    $('#content-carousel').owlCarousel({

      singleItem:true,
     lazyLoad : true,
     navigation : false
    });



}

function initButtons()
{
  $( "#searchButton" ).click(function() {
      search(  $("#searchField").val()  );
  });



}


function search( text )
{
  setQueryParam("sub", text );
}

function init()
  {


    initCarousel();

    connect();

    initButtons();


  }

  $(document).ready(function() {

    init();



  });



  //editing params

  function setQueryParam(key, value)
{
    key = encodeURI(key); value = encodeURI(value);

    var kvp = document.location.search.substr(1).split('&');

    var i=kvp.length; var x; while(i--)
    {
        x = kvp[i].split('=');

        if (x[0]==key)
        {
            x[1] = value;
            kvp[i] = x.join('=');
            break;
        }
    }

    if(i<0) {kvp[kvp.length] = [key,value].join('=');}

    //this will reload the page, it's likely better to store this until finished
    document.location.search = kvp.join('&');
}
function getQueryParam(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}
