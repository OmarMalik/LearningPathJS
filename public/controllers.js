console.log('controlelrs');
angular.module('app.controllers', [])

.controller('AppController', function($scope, $http) {
  $scope.topics = [];
  $http.get('/topics')
  .then(function(resp) {
    console.log(resp);
    $scope.topics = resp.data.topics;
  });
})

.controller('NewTopicController', function($scope, $http, $location) {
  $scope.createNewTopic = function(name) {
    console.log(name);
    $http.post('/topics', {name: name})
    .then(function(resp) {
      console.log('success', resp.success);
      $location.path('#/');
    }, function(resp) {
      // how do i get this error function to run from what i send back from express?
      console.log('error', resp.success);
      alert('Topic failed to be added');
    });
  };
})

.controller('TopicController', function($scope, $http, $routeParams) {
  $scope.name = $routeParams.name;

  $http.get('/topics/' + $scope.name)
  .then(function(resp) {
    console.log(resp.data.topic);
  });
})

.controller('NewPathController', function($scope, $http, $routeParams) {
  $scope.name = $routeParams.name;

  $http.get('/topics/' + $scope.name)
  .then(function(resp) {
    console.log(resp.data.topic);
  });

  $scope.path = {};
  $scope.steps = [{}];
  $scope.createPath = function() {
    console.log($scope.steps);
  };

  $scope.addStep = function() {
    $scope.steps.push({});
  }

  $scope.deleteStep = function(step) {
    console.log('deleting', step);
  }
});
