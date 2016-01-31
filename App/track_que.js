function TrackQue(){
  this.queue = [];
  this.$container = $("#que_container");
}

TrackQue.prototype.addTrack = function(track){
  var view = this;
  var $template = $(Handlebars.templates["video.hbs"](track));
  view.$container.append($template);
  $template.find("#que_button").hide();
  $template.find("#deque_button").show()
                                  .on("click", function(){
    window.track_que.removeTrack($template);
    return false;
  });
  $template.find("#play_button").removeClass("secondary").on("click", function(){
    window.player.play(track.yt_id);
    window.track_que.removeTrack($template);
    return false;
  });
  $template.data("track", track);
  this.queue.push($template);
  window.player.onQueUpdate();
};

TrackQue.prototype.removeTrack = function(track_tmpl){
  var view = this;
  removeA(view.queue, track_tmpl);
  track_tmpl.remove();
}
TrackQue.prototype.getNextTrack = function(){
  var view = this;
  var $template = view.queue.shift();
  if(typeof($template) !== 'undefined'){
    var track = $template.data('track');
    $template.remove();
    return track;
  }else{
    return undefined;
  }
}

//===================== Definition ==============================
