/**
*restServices rest call with baseurl*/
angular.module('mainApp').service('restService', function ($http, $log, $q) {
   var baseUrl = "http://192.168.0.16:3000/";
   /**
   *  function for GET */
   this.getRequest = function (path, query,config) {

/* Deferred creates a new instance of the promise to be returned*/
       var deferred = $q.defer();

       $http({
           method: "GET",
           url: baseUrl + path,
           params: query,
           headers:config

       }).then(function (data) {
           /* To fulfil a promise, use .resolve*/
           deferred.resolve(data);
       }), function (msg, code) {
         /* To reject a promise, use .reject*/
           deferred.reject(msg);

           $log.error(msg, code);
       };
       return deferred.promise;
   };

    /**
    * function to POST*/
       this.postRequest = function (path,query,config) {
         /* Deferred creates a new instance of the promise to be returned*/
          var deferred = $q.defer();

         $http ({
           method:"POST",
           url:baseUrl + path,
           data:query,
           headers:config
         }).then(function(data) {
           /*To fulfil a promise, use .resolve*/
           deferred.resolve(data);
         }),function(msg,code) {
            /* To reject a promise, use .reject*/
           deferred.reject(msg);
           $log.error(msg,code);
         };
         return deferred.promise;
       };
 });
