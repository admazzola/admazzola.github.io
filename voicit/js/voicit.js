

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

      //addTextToCarousel( currentPost.title );
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

  if(post.preview !== null)
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

//  $('.owl-carousel').trigger('add.owl.carousel', [imagediv] ).trigger('refresh.owl.carousel');
  $('#content-carousel').data('owlCarousel').addItem( imagediv );

}


function connect()
{



  var url = "http://reddit.com/r/all.json?jsonp=?";
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

function init()
  {
    initCarousel();

    connect();

  }

  $(document).ready(function() {

    init();



  });
