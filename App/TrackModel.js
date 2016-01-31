

var TrackModel = function () {
	var self = this;

	var thumbnail;
	var thumbnail_medium;
	var title;
	var yt_id;

	self.queued = ko.observable(false);
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
TrackModel.prototype.setThumbnailMedium = function (thumbnail) {
	this.thumbnail_medium = thumbnail;
};