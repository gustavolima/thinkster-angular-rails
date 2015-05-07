angular.module('flapperNews')
.controller('PostsCtrl', ['$scope', '$stateParams', 'Post', function($scope, $stateParams, Post){
  $scope.post = Post.posts[$stateParams.id];

  $scope.addComment = function(){
    if($scope.body === '') { return; }
    $scope.post.comments.push({
      body: $scope.body,
      author: 'user',
      upvotes: 0
    });
    $scope.body = '';

  };
}])