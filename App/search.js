function Search() {
	this.$input = $("#search_q");
	this.$results = $("#search_results");
	this.$button = $("serach_button");
}

Search.prototype.fetch = function () {
	var view = this;
	this.q = this.$input.val();
	this.url = "https://www.googleapis.com/youtube/v3/search?part=snippet" +
										   "&q=" + this.q +
										   "&type=video" +
										   "&key=AIzaSyCbpPpyXTQj0If-84-a4e6JoWk-GWS3k1k";
	$.ajax({
		url: view.url,
		type: "GET",
		success: function (data) {
			MYAPP.clearResults();
			view.$results.html("");
			$.each(data.items, function (key, video) {
				view.render(video);
			});
		},
		dataType: "json"
	});
}

Search.prototype.render = function (video) {
	var view = this;

	var track = new TrackModel();
	track.setThumbnailMedium(video.snippet.thumbnails.medium.url);
	track.setThumbnail(video.snippet.thumbnails.default.url);
	track.setTitle(video.snippet.title);
	track.setYtId(video.id.videoId);
	MYAPP.addSearchResult(track);

	//var $template = $(Handlebars.templates["video.hbs"](track));
	//view.$results.append($template);
	//$template.find("#que_button").on("click", function () {
	//	window.track_que.addTrack(track);
	//	return false;
	//});
	//$template.find("#play_button").on("click", function () {
	//	window.player.play(track.yt_id);
	//	return false;
	//});

}

//===================== Definition ==============================

