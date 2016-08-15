function LocalStorageService() {
	this.setItem = function(key, value) {
		localStorage.setItem(key, value);
	}

	this.getItem = function(key) {
		return localStorage.getItem(key)
	}
}

function MongoService($http) {

	this.endpoint = "https://api.mlab.com/api/1/databases/";
	this.apiKey = "YwBnGCqr4r-D9wxMYhFxJVGiiCV3ezV5";

	var dashboard_query = '&q={"id": 1}';
	this.endPointDashboard = this.endpoint + 'sheets_data/collections/sheets?apiKey=' + this.apiKey + dashboard_query;

	var _this = this;
	
	this.fetchDashboardData = function() {
		/*var response = '[ { "_id" : { "$oid" : "57a5d0d9dcba0f71400fc4e8"} , "id" : 1 , "exp_mom" : 9514 , "exp_tai" : 5184 , "exp_private" : 80 , "ehome" : 1200 , "eshop" : 5370 , "rent_shop" : "" , "rent_room" : "4_8_2016"} ]';*/
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
	/*[ { "_id" : { "$oid" : "57a5d0d9dcba0f71400fc4e8"} , "id" : 1 , "exp_mom" : 9514 , "exp_tai" : 5184 , "exp_private" : 80 , "ehome" : 1200 , "eshop" : 5370 , "rent_shop" : "" , "rent_room" : "4_8_2016"} ]*/
}


