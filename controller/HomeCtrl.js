/*
 * FileName:HomeCtrl.js
* bind the controller with the module and inject the services
*/
angular.module('mainApp').controller('HomeCtrl', function($scope,
  $location, $stateParams, $state, $auth)
  {
    $scope.isAuth = function() {
    return $auth.isAuthenticated();
  };
    $scope.today=new Date();
    $scope.name = "Prashant ";
  // $state.go('home.DashBoard')
    $scope.isActive = function(destination) {
    return destination === $location.path();
  }
});
