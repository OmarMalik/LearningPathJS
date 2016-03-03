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
  $scope.createNewTopic = function(title) {
    console.log(title);
    $http.post('/topics', {title: title})
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
  $scope.title = $routeParams.title;

  $http.get('/topics/' + $scope.title)
  .then(function(resp) {
    console.log(resp.data.topic);
  });
})

.controller('NewPathController', function($scope, $http, $routeParams) {
  $scope.title = $routeParams.title;

  $http.get('/topics/' + $scope.title)
  .then(function(resp) {
    console.log(resp.data.topic);
  });

  $scope.createPath = function(name, link, desc) {
    console.log(name, link, desc);
  };
});
