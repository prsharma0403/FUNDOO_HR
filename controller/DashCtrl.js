'use strict';


angular.module('mainApp').controller('DashCtrl', function($scope, $location, $stateParams, $state, $auth, $http, localStorageService, restService) {
    //storing token in varible
    var token = localStorageService.get('token');

    $scope.today = new Date();



    var date = new Date();
    date.setDate(date.getDate() - 1);
    $scope.yesterday = date;
    var timeStamp = date.getTime();
    var query = {
        token: localStorage.getItem("satellizer_token"),
        timeStamp: timeStamp
    };
    //promising for getting request of readingDashboardData from restService
    var promise = restService.getRequest('readDashboardData', query);
    promise.then(function(data) {


        $scope.attendanceFallout = data.data.attendanceFallout;
        $scope.attendanceSummary = data.data.attendanceSummary;
        $scope.leaveSummary = data.data.leaveSummary;
        $scope.attendenceLeave = data.data.attendenceLeave;



    }).catch(function(error) {
        console.log(error);
    })
});
