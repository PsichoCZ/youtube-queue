

var TrackModel = function () {
	var thumbnail;
	var title;
	var yt_id;
};

TrackModel.prototype.setTitle = function (title) {
	this.title = title;
};
TrackModel.prototype.setYtId = function (id) {
	this.yt_id = id;
};
TrackModel.prototype.setThumbnail = function (thumbnail) {
	this.thumbnail = thumbnail;
};