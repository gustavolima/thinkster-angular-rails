angular.module('flapperNews', ['ui.router', 'templates', 'Devise'])
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
    })

    .state('login', {
      url: '/login',
      templateUrl: 'auth/login.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('home');
        })
      }]
    })
    .state('register', {
      url: '/register',
      templateUrl: 'auth/register.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('home');
        })
      }]
    });

  $urlRouterProvider.otherwise('home');
}])
