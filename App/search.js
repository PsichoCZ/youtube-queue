function Search(){
  this.$input = $("#search_q");
  this.$results = $("#search_results");
  this.$button = $("serach_button");
}

Search.prototype.fetch = function(){
  var view = this;
  this.q = this.$input.val();
  this.url = "https://www.googleapis.com/youtube/v3/search?part=snippet"+
                                         "&q="+ this.q +
                                         "&type=video"+
                                         "&key=AIzaSyCbpPpyXTQj0If-84-a4e6JoWk-GWS3k1k";
  $.ajax({
    url: view.url,
    type: "GET",
    success: function(data){
      view.$results.html("");
      $.each(data.items, function(key,video){
        view.render(video);
      });
    },
    dataType: "json"
  });
}

Search.prototype.render = function(video){
  var view = this;
  var track = {
    thumbnail: video.snippet.thumbnails.default.url,
    title: video.snippet.title,
    yt_id: video.id.videoId
  };
  var $template = $(Handlebars.templates["video.hbs"](track));
  view.$results.append($template);
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

