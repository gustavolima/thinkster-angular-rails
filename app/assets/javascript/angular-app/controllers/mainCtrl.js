angular.module('flapperNews')
.controller('MainCtrl', [
'$scope', 'Post',
function($scope, Post){
  $scope.posts = Post.posts;

  // $scope.addPost = function(){
  //   if(!$scope.title || $scope.title === '') {return;}
  //   $scope.posts.push({
  //     title: $scope.title,
  //     link: $scope.link,
  //     upvotes: 0,
  //     comments: [
  //       {author: 'Joe', body: 'Cool post!', upvotes: 0},
  //       {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
  //     ]
  //   });
  //   $scope.title = '';
  //   $scope.link = '';
  // };

  $scope.addPost = function(){
    if(!$scope.title || $scope.title === '') { return; }
    Post.create({
      title: $scope.title,
      link: $scope.link,
    });
    $scope.title = '';
    $scope.link = '';
  };

  $scope.incrementUpvotes = function(post) {
    Post.upvote(post);
  };
}])