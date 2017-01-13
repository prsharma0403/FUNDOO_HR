'use strict';



angular.module('mainApp')
    .controller('empCtrl', empCtrl)
localStorage.setItem('tom', 'prashant');


/* Controllers */

function empCtrl($scope, $http) {
    $scope.key1 = localStorage.getItem('satellizer_token');
    console.log("fallout");
     $scope.dataLoading = true;
    console.log("token ::", $scope.key1);
    $scope.today = new Date();

    var date = new Date();

    date.setDate(date.getDate() - 1);
    var timeStamp = date.getTime();

    $http({
            "url": "http://192.168.0.171:3000/readFalloutAttendanceEmployee?token=" + $scope.key1 + "&timeStamp=" + timeStamp,
            "method": "GET"
        }).then(function(data) {
            console.log(data.data);
            $scope.items = data.data.falloutEmployee;
            $scope.fall = data.data.falloutNumber;
            $scope.totalEmployee = data.data.totalEmployee;
            console.log("fall");
             $scope.dataLoading = false;
        }).catch(function(err) {
            console.log(err);
        })
        // $scope.items = [{
        //         employeeName:'Naresh shanghvi',
        //         employeeStatus: 'Internship',1483771787396
        //         company: 'BridgeLabz',
        //         mobile:'1234567890',
        //         emailId :'artichabra@bridgelabz.com',
        //         src: 'images/pppp profilepic.jpg'
        //       },
        //       {
        //           employeeName:'Sohail taanveer',  // <div><span class="rectangle">2/100</span>&nbsp&nbsp<span class="unmarked">Unmarked</span></div>
        //           employeeStatus: 'Fellowship',
        //           company: 'BridgeLabz',
        //           mobile:'1234567890',
        //           emailId :'arti2793@bridgelabz.com',
        //           src: 'images/431.png'
        //         },{
        //             employeeName:'Amit arunthee',
        //             employeeStatus: 'Fellowship',
        //             company: 'BridgeLabz',
        //             mobile:'1234567890',
        //             emailId :'sushantsingh@bridgelabz.com',
        //             src: 'images/virat_kohli.png'
        //           },  {
        //                 employeeName:'Durga Mahtab',
        //                 employeeStatus: 'Fellowship',
        //                 company: 'BridgeLabz',
        //                 mobile:'1234567890',
        //                 emailId :'pp@bridgelabz.com',
        //                 src: 'images/ab_de_villiers.png'
        //               },{
        //                   employeeName:'Hamid Raza Noori',
        //                   employeeStatus: 'Fellowship',
        //                   company: 'BridgeLabz',
        //                   mobile:'1234567890',
        //                   emailId :'pp@bridgelabz.com',
        //                   src: 'images/IMG_20160217_125454.jpg'
        //                 },{
        //                       employeeName:'Shalini Reddy',
        //                       employeeStatus: 'Internship',
        //                       company: 'BridgeLabz',
        //                       mobile:'1234567890',
        //                       emailId :'pp@bridgelabz.com',
        //                       src: 'images/Screenshot from 2016-10-22 09:30:27.png'
        //                     },
        //                     {
        //                         employeeName:'Sharad bhai pawar',
        //                         employeeStatus: 'Fellowship',
        //                         company: 'BridgeLabz',
        //                         mobile:'1234567890',
        //                         emailId :'pp@bridgelabz.com',
        //                         src: 'images/pppp profilepic.jpg'
        //                       },{
        //                           employeeName:'Swati Dindule',
        //                           employeeStatus: 'Fellowship',
        //                           company: 'BridgeLabz',
        //                           mobile:'1234567890',
        //                           emailId :'pp@bridgelabz.com',
        //                           src: 'images/_20161230_100546.JPG'
        //                         }];




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
