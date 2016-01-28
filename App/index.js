var main = function() {
	window.player = new Player();
  //window.player.play('we9jeU76Y9E');
  window.search = new Search();
  window.track_que = new TrackQue();
}


function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}
