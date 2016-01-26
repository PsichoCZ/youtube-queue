function Player(ytplayer){
  this.ytplayer = ytplayer;
  this.ytplayer.addEventListener('onReady', this.onPlayerReady.bind(this), false);
  this.ytplayer.addEventListener('onStateChange', this.stateChange.bind(this), false);
  this.ytplayer.addEventListener('onError', this.onPlayerError.bind(this), false);
}

Player.prototype.onPlayerReady = function(event) {
};
Player.prototype.onPlayerError = function(event){
  console.log(event);
};
Player.prototype.stateChange = function(event) {
  console.log(event);
};

//===================== Definition ==============================

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  ytplayer = new YT.Player('yt_player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE'
  });
  console.log(ytplayer);
  window.player = new Player(ytplayer);
}
