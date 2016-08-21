function LocalStorageService() {
	this.setItem = function(key, value) {
		localStorage.setItem(key, value);
	}

	this.getItem = function(key) {
		return localStorage.getItem(key)
	}
}

function MongoService($http) {

	var _this = this;
	this.endpoint = "https://api.mlab.com/api/1/databases/";
	this.apiKey = "YwBnGCqr4r-D9wxMYhFxJVGiiCV3ezV5";

	var dashboard_query = '&q={"id": 1}';
	this.endPointDashboard = this.endpoint + 'sheets_data/collections/sheets?apiKey=' + this.apiKey + dashboard_query;

	this.endPointDashboard_ = 'https://api.myjson.com/bins/348bv';
	
	this.fetchDashboardData = function() {
		return $http.get(_this.endPointDashboard);
	}
}

function AppService(MongoService, LocalStorageService) {
	var _this = this;

	this.parseJson = function(data) {
		if( !data ) {
			return {};	
		} else {
			return JSON.parse(data);
		}
	}
}


