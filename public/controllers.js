console.log('controlelrs');
angular.module('app.controllers', [])

.controller('AppController', function($scope) {
  $scope.abc = '123123';
})

.controller('NewTopicController', function($scope) {
  $scope.test = 'hello';
});