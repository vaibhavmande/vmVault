function AppCtrl($scope, $ionicModal, $timeout, $state, AppService) {

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };

    $scope.dashboard = function() {
        $state.go('app.dashboard');
    }

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
            $scope.closeLogin();
        }, 1000);
    };
}

function DashboardCtrl($scope, AppService, MongoService) {

    var dashboardPromise = MongoService.fetchDashboardData();

    dashboardPromise.then(function(data) {
        console.log(data.data[0]);
    }, function(err) {
        console.log('error while resolving promise, dashboardPromise');
        console.info(err);
    });
    //$scope.expenseData

    this.buildDashboardData = function() {
        var data = $scope.expenseData[0];
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

    $scope.dashboardData = this.buildDashboardData();
}

function PlaylistCtrl($scope, $stateParams) {
    // Body here
};