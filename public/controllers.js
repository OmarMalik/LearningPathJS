console.log('controlelrs');
angular.module('app.controllers', [])

.controller('AppController', function($scope, $http) {
  $scope.topics = [];
  $http.get('/topics')
  .then(function(resp) {
    console.log('AppController', resp);
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
  $scope.topicName = $routeParams.name;
  var curr = 0;

  $http.get('/topics/' + $scope.name)
  .then(function(resp) {
    console.log(resp.data.topic);
  });

  $scope.pathName = '';
  $scope.steps = [{
    index: curr
  }];
  $scope.createPath = function() {
    console.log($scope.topicName);
    console.log($scope.pathName);
    console.log($scope.steps);

    $http.post('/topics/' + $scope.topicName + '/paths', {
      name: $scope.pathName,
      steps: $scope.steps
    })
    .then(function(resp) {
      console.log('resp', resp);
    });
  };

  $scope.addStep = function() {
    curr++;
    $scope.steps.push({
      index: curr
    });
  }

  $scope.deleteStep = function(index) {
    for(var i = 0; i < $scope.steps.length; i++) {
      if($scope.steps[i].index === index) {
        $scope.steps.splice(i, 1);
      }
    }
    console.log('deleting', index);
    console.log('new steps:', $scope.steps);
  }
});
