angular.module('flapperNews')
.controller('PostsCtrl',
['$scope', '$stateParams', 'Post', 'post',
function($scope, $stateParams, Post, post){
  $scope.post = post;

  $scope.addComment = function(){
    if($scope.body === '') { return; }
    Post.addComment(post.id, {
      body: $scope.body,
      author: 'user',
    }).success(function(comment) {
      $scope.post.comments.push(comment);
    });
    $scope.body = '';
  };

  $scope.incrementUpvotes = function(comment){
    Post.upvoteComment(post, comment);
  };
}])