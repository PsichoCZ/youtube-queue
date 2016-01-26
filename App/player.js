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
  this.ytplayer.loadVideoById(yt_id);
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
  if(event.data == 5){
    this.ytplayer.playVideo();
  }
};

//===================== Definition ==============================



function onYouTubeIframeAPIReady() {
  ytplayer = new YT.Player('yt_player', {
    height: '390',
    width: '640'
  });
  window.player.initPlayer(ytplayer);
}
