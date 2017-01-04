angular.module('mainApp').controller('calCtrl', function ($scope, $location, $stateParams, $state, $auth) {
  $state.go('home.calendar');
});
