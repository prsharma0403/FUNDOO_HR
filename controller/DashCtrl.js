'use strict';


angular.module('mainApp').controller('DashCtrl', function ($scope, $location, $stateParams, $state, $auth,$http) {
  $scope.akey=localStorage.getItem('satellizer_token');
  // $scope.yesterday = new Date().setDate(new Date().getDate()-1);
  // $scope.yesterday =new Date($scope.yesterday);
  var date = new Date();
   date.setDate(date.getDate() - 1);
   $scope.yesterday=date;
   var timeStamp = date.getTime();
  $http({
            "url": "http://192.168.0.171:3000/readDashboardData?token=" + $scope.akey + "&timeStamp=" + timeStamp,
            "method": "GET"
        }).then(function(data) {
            console.log(data.data);
             $scope.attendanceFallout= data.data.attendanceFallout;
             console.log($scope.attendanceFallout);
             $scope.attendanceSummary = data.data.attendanceSummary;

            //  console.log(data.data.attendanceSummary);

              $scope.attendenceLeave=data.data.attendenceLeave;
});
});
