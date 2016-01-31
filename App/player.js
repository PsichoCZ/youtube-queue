function Player(){
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

Player.prototype.initPlayer = function(ytplayer){
  this.ytplayer = ytplayer;
  this.ytplayer.addEventListener('onReady', this.onPlayerReady.bind(this), false);
  this.ytplayer.addEventListener('onStateChange', this.stateChange.bind(this), false);
  this.ytplayer.addEventListener('onError', this.onPlayerError.bind(this), false);
}

Player.prototype.play = function(yt_id){
  this.track = {
    yt_id: yt_id
  };
  if(typeof(this.ytplayer) === "undefined"){
    return;
  }
  this.ytplayer.cueVideoById(yt_id);
}

Player.prototype.onPlayerReady = function(event) {
  if(typeof(this.track) !== "undefined"){
    this.ytplayer.cueVideoById(this.track.yt_id);
  }
};
Player.prototype.onPlayerError = function(event){
  console.log(event);
};
Player.prototype.stateChange = function(event) {
  var view = this;
  if(event.data == 5){
    view.ytplayer.playVideo();
    window.similar.fetch(view.track.yt_id);
  }
  if(event.data == 0){
    view.playNext();
  }
};
Player.prototype.getStatus = function() {
  if(typeof(this.ytplayer) === "undefined"){
    return -2;
  }else{
    return this.ytplayer.getPlayerState();
  }
};

Player.prototype.onQueUpdate = function() {
  var view = this;
  if(typeof(view.track) === "undefined" || view.getStatus() == 0){
    view.playNext();
  }
};

Player.prototype.playNext = function() {
  var view = this;
	var track = MYAPP.getNextTrack();//window.track_que.getNextTrack();
  if(track){
    view.play(track.yt_id);
  }
}

//===================== Definition ==============================



function onYouTubeIframeAPIReady() {
  ytplayer = new YT.Player('yt_player', {
    height: '390',
    width: '640'
  });
  window.player.initPlayer(ytplayer);
}
