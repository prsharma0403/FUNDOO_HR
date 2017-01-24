'use strict';


angular.module('mainApp').controller('DashCtrl', function($scope, $location, $stateParams, $state, $auth, $http, localStorageService, restService) {

      var token=localStorageService.get('token');
      // console.log(token);
      $scope.today=new Date();



    var date = new Date();
    date.setDate(date.getDate() - 1);
    $scope.yesterday = date;
    var timeStamp = date.getTime();
    var query={
      token:localStorage.getItem("satellizer_token"),
      timeStamp: timeStamp
    };
    var promise = restService.getRequest('readDashboardData', query);
  promise.then(function(data) {
      // console.log(data.data);

        $scope.attendanceFallout = data.data.attendanceFallout;
        // console.log($scope.attendanceFallout);
        $scope.attendanceSummary = data.data.attendanceSummary;
        $scope.leaveSummary = data.data.leaveSummary;

        //  console.log(data.data.attendanceSummary);

        $scope.attendenceLeave = data.data.attendenceLeave;
    }).catch(function (error) {
      console.log(error);
    })
});
