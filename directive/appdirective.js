
angular.module("mainApp").directive("calendar", function() {
    return {
        restrict: "E",
        templateUrl: "templates/calendar.html",
        link: function(scope) {

                //for calculating and changes the values up to changes
            scope.$watch("attendance",function(oldData,newData){
                if(scope.called===undefined){
              scope.selected = _removeTime(scope.selected || moment());
              scope.month = scope.selected.clone();

              var start = scope.selected.clone();
              start.date(1);
              _removeTime(start.day(0));
              _buildMonth(scope, start, scope.month);
<<<<<<< HEAD

            }
            else if (scope.called===0) {
=======
>>>>>>> e5ec9a74556ad854cf72b0adb746685febac3b68

              var next = scope.month.clone();
                  _removeTime(next.month(next.month() + 1).date(1));
              scope.month.month(scope.month.month() + 1);
              _buildMonth(scope, next, scope.month);
            }
               else if (scope.called===1) {

              var previous = scope.month.clone();
              _removeTime(previous.month(previous.month() - 1).date(1));
              scope.month.month(scope.month.month() - 1);
              console.log(scope.month);
              _buildMonth(scope, previous, scope.month);
            }


            });

<<<<<<< HEAD
=======

            scope.select = function(day) {
                scope.selected = day.date;
            };
>>>>>>> e5ec9a74556ad854cf72b0adb746685febac3b68
            scope.next = function() {
              scope.called=0;
                var next = scope.month.clone();
                next.month(next.month() + 1);
                _removeTime(next.month(next.month() + 1).date(1));
               var timeStamp1=next.unix();
                scope.readUnmark(timeStamp1*1000);
              };

            scope.previous = function() {
              scope.called=1;
                var previous = scope.month.clone();
<<<<<<< HEAD

                var timeStamp2=(previous.month(previous.month() - 1).unix()*1000);
               scope.readUnmark(timeStamp2);
=======
                // scope.month.month(scope.month.month() - 1);
                var timeStamp2=(previous.month(previous.month() - 1).unix()*1000);
                console.log(timeStamp2);
                // _buildMonth(scope, previous, scope.month);
                scope.readUnmark(timeStamp2);
>>>>>>> e5ec9a74556ad854cf72b0adb746685febac3b68


          };
        },
        controller:function ($http,$scope,$stateParams,$state,restService,$filter,$rootScope) {
          $scope.day = moment();
          $scope.bkey=localStorage.getItem('satellizer_token');
          var date = new Date();
<<<<<<< HEAD
          date.setDate(date.getDate() - 1);
          var timeStamp = Date.now();//date.getTime();
          $scope.clickDay=function (date) {
            $rootScope.viewDay = date.calendar();

            var timeStamp = date.unix()*1000;

=======
           date.setDate(date.getDate() - 1);
           var timeStamp = Date.now();//date.getTime();
           $scope.clickDay=function (date) {
             var timeStamp = date.unix()*1000;
             console.log(timeStamp);
>>>>>>> e5ec9a74556ad854cf72b0adb746685febac3b68
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

          $scope.readUnmark=function (timeStamp) {
            var query ={token:"ddfksdn",timeStamp};
            restService.getRequest('readMonthlyAttendanceSummary', query).then(function (data) {
              $scope.attendance={};
              data.data.attendance.forEach(function(value, key){
                $scope.attendance[value.day]={"unmarked":value.unmarked,"totalEmployee":data.data.totalEmployee};
<<<<<<< HEAD

=======
                // $scope.attendance[value.day]={};
>>>>>>> e5ec9a74556ad854cf72b0adb746685febac3b68
              });

            }).catch(function (error) {
              console.log(error);
            })
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

<<<<<<< HEAD
=======
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
>>>>>>> e5ec9a74556ad854cf72b0adb746685febac3b68

function _buildWeek(date, month,scope) {
  var days = [];
  if (scope.attendance !== undefined) {
      for (var i = 0; i < 7; i++) {

          if (date.month() === month.month() && (scope.attendance[date.date()] !== undefined)) {
              if (scope.attendance[date.date()] !== undefined)
                  days.push({
                      name: date.format("dd").substring(0, 1),
                      number: date.date(),
                      isCurrentMonth: date.month() === month.month(),
                      isToday: date.isSame(new Date(), "day"),
                      timeStamp: date.unix(),
                      date: date,
                      unmarked:scope.attendance[date.date()].unmarked,
                      totalEmployee:scope.attendance[date.date()].totalEmployee



                  });
          } else if (date.month() === month.month())
              days.push({
                  name: date.format("dd").substring(0, 1),
                  number: date.date(),
                  isCurrentMonth: date.month() === month.month(),
                  timeStamp: date.unix(),
                  isToday: date.isSame(new Date(), "day"),
                  date: date,
                  unmarked:scope.attendance[date.date()].unmarked,
                  totalEmployee:scope.attendance[date.date()].totalEmployee
                  });
              else
              days.push({});

          date = date.clone();
          date.add(1, "d");
      }
  }
  return days;
}

});
