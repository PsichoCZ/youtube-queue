function Similar(){
  this.$container = $("#similar_container");
}

Similar.prototype.fetch = function(yt_id){
  var view = this;
  view.url = "https://www.googleapis.com/youtube/v3/search?part=snippet"+
                                         "&relatedToVideoId="+ yt_id +
                                         "&type=video"+
                                         "&maxResults=25"+
                                         "&key=AIzaSyCbpPpyXTQj0If-84-a4e6JoWk-GWS3k1k";
  $.ajax({
    url: view.url,
    type: "GET",
    success: function(data){
      view.$container.html("");
      console.log(data);
      $.each(data.items, function(key,video){
        view.render(video);
      });
    },
    dataType: "json"
  });
}

Similar.prototype.render = function(video){
  console.log(video);
  var view = this;
  var track = {
    thumbnail: video.snippet.thumbnails.medium.url,
    title: video.snippet.title,
    yt_id: video.id.videoId
  };
  var $template = $(Handlebars.templates["similar.hbs"](track));
  view.$container.append($template);
  track.thumbnail = video.snippet.thumbnails.default.url;
  $template.find("#que_button").on("click", function(){
    window.track_que.addTrack(track);
    return false;
  });
  $template.find("#play_button").on("click", function(){
    window.player.play(track.yt_id);
    return false;
  });

}

//===================== Definition ==============================

