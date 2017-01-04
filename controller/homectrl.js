angular.module('mainApp').controller('HomeCtrl', function ($scope, $location, $stateParams, $state, $auth) {
  $scope.isAuth = function () {
    console.log("autentication")
    return $auth.isAuthenticated();
  };
  $scope.today = new Date();
  $scope.name = "PRASHANT ";
  $state.go('home.DashBoard')
});
