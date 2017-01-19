angular.module("mainApp").directive("calendar", function() {
    return {
        restrict: "E",
        templateUrl: "templates/calendar.html",
        link: function(scope) {

            scope.$watch("attendance",function(oldData,newData){
              scope.selected = _removeTime(scope.selected || moment());
              scope.month = scope.selected.clone();
              console.log("we are watching");
              var start = scope.selected.clone();
              start.date(1);
              _removeTime(start.day(0));
              _buildMonth(scope, start, scope.month);
            });



            scope.next = function() {
              console.log("next..");
                var next = scope.month.clone();
                _removeTime(next.month(next.month() + 1).date(1));
                scope.month.month(scope.month.month() + 1);
                // console.log(scope.month.unix());
               var timeStamp1=(scope.month.unix());
               console.log(timeStamp1);
                _buildMonth(scope, next, scope.month);
                scope.readUnmark(timeStamp1);

            };
            scope.previous = function() {
                var previous = scope.month.clone();
                _removeTime(previous.month(previous.month() - 1).date(1));
                scope.month.month(scope.month.month() - 1);
                var timeStamp2=(scope.month.unix())
                console.log(timeStamp2);

                _buildMonth(scope, previous, scope.month);
                scope.readUnmark(timeStamp2);


          };
        },
        controller:function ($http,$scope,$stateParams,$state,restService) {
          $scope.day = moment();
          $scope.bkey=localStorage.getItem('satellizer_token');
          var date = new Date();
           date.setDate(date.getDate() - 1);
           var timeStamp = Date.now();//date.getTime();
           $scope.clickDay=function (date) {
             var time = new Date();
              time.setDate(date.date.dates());
              time.setMonth(date.date.months());
              time.setYear(date.date.years());
              var timeStamp = time.getTime();
             $state.go("home.unmarkedEmp",{timeStamp});
           }
           var query ={token:"ddfksdn",timeStamp};
           restService.getRequest('readMonthlyAttendanceSummary', query).then(function (data) {
             console.log(data);
             $scope.attendance={};
             data.data.attendance.forEach(function(value, key){

               $scope.attendance[value.day]={"unmarked":value.unmarked,"totalEmployee":data.data.totalEmployee};
               // $scope.attendance[value.day]={};

             });

           }).catch(function (error) {
             console.log(error);
           })
          // $http({
          //   "url": "http://192.168.0.144:3000/readMonthlyAttendanceSummary?token="+$scope.bkey+"&timeStamp="+timeStamp,
          //   "method":"GET"
          // }).then(function(data){
          //
          // });
          $scope.readUnmark=function (timeStamp) {
        //     $http({
        //       "url": "http://192.168.0.144:3000/readMonthlyAttendanceSummary?token="+$scope.bkey+"&timeStamp="+timeStamp,
        //       "method":"GET"
        //     }).then(function(data){
        //       $scope.attendance={};
        //       data.data.attendance.forEach(function(value, key){
        //
        //         $scope.attendance[value.day]={"unmarked":value.unmarked,"totalEmployee":data.data.totalEmployee};
        //         // $scope.attendance[value.day]={};
        //
        //       });
        //
        // });
          };
        }


    };

    function _removeTime(date) {
        return date.day(0).hour(0).minute(0).second(0).millisecond(0);
    }

    function _buildMonth(scope, start, month) {
        scope.weeks = [];
        var done = false,
            date = start.clone(),
            monthIndex = date.month(),
            count = 0;
        while (!done) {
            scope.weeks.push({
                days: _buildWeek(date.clone(), month,scope)
            });
            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }
    }

    function _buildWeek(date, month,scope) {
        var days = [];
        for (var i = 0; i < 7; i++) {

          // console.log(scope.attendance[date.date()].unmarked,date.date());
            days.push({
                name: date.format("dd").substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isToday: date.isSame(new Date(), "day"),
                date: date,
                unmarked:scope.attendance[date.date()].unmarked,
                totalEmployee:scope.attendance[date.date()].totalEmployee

            });
            date = date.clone();
            date.add(1, "d");
        }
        return days;
    }

});
