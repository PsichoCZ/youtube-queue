var MYAPP = MYAPP || {
	viewModel: {}
};
MYAPP.addTrack = function (track) {
	MYAPP.viewModel.addTrack(track);
}
MYAPP.setResults = function (results) {
	MYAPP.viewModel.setResults(results);
}
MYAPP.getNextTrack = function () {
	return MYAPP.viewModel.getNextTrack();
}
MYAPP.addSearchResult = function (track) {
	return MYAPP.viewModel.addSearchResult(track);
}
MYAPP.addSimilarItem = function (track) {
	return MYAPP.viewModel.addSimilarItem(track);
}
MYAPP.clearResults = function () {
	MYAPP.viewModel.clearResults();
}
MYAPP.clearSimilarItems = function() {
	MYAPP.viewModel.clearSimilarItems();
}

var main = function () {
	window.player = new Player();
	//window.player.play('we9jeU76Y9E');
	window.search = new Search();
	window.track_que = new TrackQue();
	window.similar = new Similar();
}


function removeA(arr) {
	var what, a = arguments, L = a.length, ax;
	while (L > 1 && arr.length) {
		what = a[--L];
		while ((ax = arr.indexOf(what)) !== -1) {
			arr.splice(ax, 1);
		}
	}
	return arr;
}

$('#search_button').on('click', function () {

	//var track = new TrackModel();
	//track.setTitle("random text");
	//MYAPP.addTrack(track);

	window.search.fetch();
	return false;
});


$('#search_form').on('submit', function () {
	window.search.fetch();
	return false;
});




MYAPP.viewModel = new AppViewModel();
MYAPP.viewModel.queue.subscribe(function (changes) {

	changes.forEach(function (change) {
		if (change.status === 'added') {
			console.log("Added new track to queue! The added element is:", change.value.title);
			window.player.onQueUpdate();
		}
	});

}, null, "arrayChange");
ko.applyBindings(MYAPP.viewModel);
