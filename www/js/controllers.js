function AppCtrl($scope, $ionicModal, $timeout, $state, AppService, $ionicLoading) {

    $scope.dashboard = function() {
        $state.go('app.dashboard');
    }

    $scope.showLoader = function(loaderMessage) {
        $ionicLoading.show({
            template: loaderMessage
        }).then(function(){});
    };

    $scope.hideLoader = function(){
        $ionicLoading.hide().then(function(){});
    };
}

function DashboardCtrl($scope, AppService, MongoService) {

    $scope.showLoader('Loading..');
    var dashboardPromise = MongoService.fetchDashboardData();
    var _this = this;

    dashboardPromise.then(function(data) {
        $scope.dashboardData = _this.buildDashboardData(data.data[0]);
        $scope.hideLoader();
    }, function(err) {
        console.log('error while resolving promise, dashboardPromise');
        console.info(err);
        $scope.hideLoader();
    });

    this.buildDashboardData = function(data) {

        return [
            { id: data.id, title: 'Expense - Mom', value: data.exp_mom },
            { id: data.id, title: 'Expense - Tai', value: data.exp_tai },
            { id: data.id, title: 'Expense - Private', value: data.exp_private },
            { id: data.id, title: 'Rent - Room', value: data.rent_room },
            { id: data.id, title: 'Rent - Shop', value: data.rent_shop },
            { id: data.id, title: 'EBill - Home', value: data.ehome },
            { id: data.id, title: 'EBill - Shop', value: data.eshop },
            { id: data.id, title: 'Month', value: 0 }
        ];
    }
}

function PlaylistCtrl($scope, $stateParams) {
    // Body here
};