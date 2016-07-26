console.log('index');
angular.module('app', [
  'app.controllers', 'ngRoute'
]).
config(function ($routeProvider, $locationProvider) {
  console.log('routes');
  $routeProvider
  // Sets routes and
  // Decides which html file to load up in the main part of the view
  .when('/', {
    templateUrl: 'templates/home.html',
    controller: 'AppController'
  })
  .when('/new-topic', {
    templateUrl: 'templates/new-topic.html',
    controller: 'NewTopicController'
  })
  .when('/topics/:name', {
    templateUrl: 'templates/topic.html',
    controller: 'TopicController'
  })
  .when('/topics/:name/new-path', {
    templateUrl: 'templates/new-path.html',
    controller: 'NewPathController'
  })
  .otherwise({
    redirectTo: '/'
  });

  // not working..?
  // Changes it so there is no # in the url bar as long as html5 is supported by the browser
  if(window.history && window.history.pushState) {
    //$locationProvider.html5Mode(true);
  }
});