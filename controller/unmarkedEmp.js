angular.module('mainApp').controller('unmarkedEmp', function($scope, $location, $stateParams, $state, $auth, $http, localStorageService, restService) {


    var token = localStorageService.get('token');
    // console.log(token);
    $scope.today = new Date();
    var timeStamp = $stateParams.timeStamp;
    console.log(timeStamp);
    var query = {
        token: "1a285sdffd8do8fd",
        timeStamp: timeStamp
    };

    var promise = restService.getRequest('readUnmarkedAttendanceEmployee', query);
    promise.then(function(data) {
        console.log(data);

        $scope.totalEmployee = data.data.totalEmployee;
        $scope.unmarkedNumber = data.data.unmarkedNumber;
        $scope.display = "umarkedEmployee";
        $scope.items = data.data.umarkedEmployee;
        console.log($scope.items);
        $scope.display = "umarkedEmployee";
    });
    var date = new Date();
    date.setDate(date.getDate() - 1);
    $scope.yesterday = date;

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

});

/* Directives */

angular.module('mainApp')

    .directive('itemCard1', function() {
        // return the directive definition object
        return {
            scope: {
                item: "="
            },
            controller: function($scope, $element, $attrs, $location) {
                $scope.addToCart = function(value, key) {
                    var mainScope = angular.element("#main1").scope();
                    mainScope.employees(value, key);
                    return false;
                };
            },
            replace: true,


            template: '<a href=""><div class="item" style="height:auto;"></img><div class="item-int"><h3>{{item.employeeName}}</h3>\
                         <div class="data"><img src="images/1024x1024.jpg"/>\
                         <span class="left">{{item.employeeStatus}}</span>\
                         <span class="left">{{item.company}}</span>\
                         <span class="left">{{item.mobile}}</span>\
                         <span class="left">{{item.emailId}}</span></div></div></div></a>'

        };

    });
