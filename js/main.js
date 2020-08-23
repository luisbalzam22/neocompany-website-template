//Youtube API Code
(function(){
  if (!$("#youtube-api-player")) return;
  let availablePlayer = false;
    //This function handles The youtube <iframe> API:
    //Asyncronously load API
    function youtubeAPI(){
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    //Setting player configuration for when API is loaded
    window.player = undefined;
    window.onYouTubeIframeAPIReady = function() {
      player = new YT.Player('youtube-api-player', {
        videoId: 'zecueq-mo4M',
        events: {
          'onReady': onPlayerReady /*,
          'onStateChange': onPlayerStateChange */
        }
      });
    }

    window.onPlayerReady = function (event) {
        availablePlayer = true;
      }
    }

  //This function makes use of jQuery to control the video player when activating/deactivating the modal
    function videoModal(){
        $("#what-we-do-modal").on("show.bs.modal", function(){
            if (availablePlayer) window.player.playVideo();
        });
        
        $("#what-we-do-modal").on("hide.bs.modal", function(){
          if (availablePlayer) window.player.pauseVideo();
        });
    }


   youtubeAPI();
   videoModal();
})();

//Photo Gallery Code
(function(){
  if (!$("#photo-gallery-modal")) return;

  $("#photo-gallery-holder").click(function(e){
    if (e.target.src){
      $("#photo-gallery-modal .modal-body").html('<img src="' + e.target.src + '" class="img-fluid" />');
    }
  })

})();

//Home Carousel Code
