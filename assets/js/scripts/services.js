var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('/api/phones/:phoneId', {}, {
      query: {method:'GET', params:{phoneId:''}, isArray:true}
    });
  }]);
