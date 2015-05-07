angular.module('flapperNews', ['ui.router', 'templates'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/home.html',
      controller: 'MainCtrl',
      resolve: {
        postPromise: ['Post', function(Post){
          return Post.getAll();
        }]
      }
    })

    .state('posts', {
      url: '/posts/{id}',
      templateUrl: 'posts/posts.html',
      controller: 'PostsCtrl',
      resolve: {
        post: ['$stateParams', 'Post', function($stateParams, Post) {
          return Post.get($stateParams.id);
        }]
      }
    });

  $urlRouterProvider.otherwise('home');
}])
