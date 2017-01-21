'use strict';



angular.module('mainApp')
    .controller('empCtrl', empCtrl)
localStorage.setItem('tom', 'prashant');


/* Controllers */

function empCtrl($scope, $http,$stateParams,restService) {
    var token = localStorage.getItem('satellizer_token');
    console.log(token);
     $scope.dataLoading = true;
     $scope.today = new Date();

     var date = new Date();
     date.setDate(date.getDate() - 1);
     $scope.yesterday = date;
     var timeStamp = date.getTime();

    console.log(timeStamp);
    var query={
      token: localStorage.getItem("satellizer_token"),
      timeStamp: timeStamp
  };
  console.log(query);
  var promise = restService.getRequest('readFalloutAttendanceEmployee', query);
   promise.then(function(data) {
      //  console.log(data);



            console.log(data.data);
            $scope.items = data.data.falloutEmployee;
            $scope.fall = data.data.falloutNumber;
            $scope.totalEmployee = data.data.totalEmployee;
            console.log("fall");
             $scope.dataLoading = false;
        }).catch(function (error) {
          console.log(error);
        })
        



    $scope.cardItems = [];

    $scope.employees = function(employeeName, employeeStatus, company, mobile, emailId) {
        var objAdded = {

            employeeName: employeeName,
            employeeStatus: employeeStatus,
            company: company,
            mobile: mobile,
            emailId: emailId
        };
        $scope.cardItems.push(objAdded);
    };

}
/* Directives */

angular.module('mainApp')

.directive('itemCard', function() {
    // return the directive definition object
    return {
        scope: {
            item: "="
        },
        controller: function($scope, $element, $attrs, $location) {
            $scope.addToCart = function(value, key) {
                var mainScope = angular.element("#main").scope();
                mainScope.employees(value, key);
                return false;
            };
        },
        replace: true,


      template:  '<a href=""><div class="item" style="height:auto;"></img><div class="item-int"><h3>{{item.employeeName}}</h3>\
                       <div class="data"><img src="images/1024x1024.jpg"/>\
                       <span class="left">{{item.employeeStatus}}</span>\
                       <span class="left">{{item.company}}</span>\
                       <span class="left">{{item.mobile}}</span>\
                       <span class="left">{{item.emailId}}</span></div></div></div></a>'
           };

});
