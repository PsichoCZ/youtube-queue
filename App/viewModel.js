// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
	var self = this;
	this.queue = ko.observableArray([]);
	this.searchResults = ko.observableArray([]);
	this.similarItems = ko.observableArray([]);

	// Operations
	self.addTrack = function (track) {
		self.queue.push(track);
	};


	self.getNextTrack = function() {
		return self.queue.shift();
	}

	self.addSearchResult = function (track) {
		self.searchResults.push(track);
	}

	self.clearResults = function() {
		self.searchResults([]);
	}

	self.addTrackToQueue = function (model, event) {
		model.queued(true);
		self.searchResults.remove(model);
		self.queue.push(model);
	};

	self.addSimilarItem = function(track) {
		self.similarItems.push(track);
	};
	
	self.clearSimilarItems = function (){
		self.similarItems([]);
	}
}