angular.module('Instagram')
  .controller('HomeCtrl' , function($scope, $window, $rootScope, $auth) {
    $scope.isAuthenticated = function() {
      //check if logged in
      return $auth.isAuthenticated();
    };

    $scope.linkInstagram = function () {
      //Connect email account with insta
        $auth.link('instagram')
          .then(function(response){
            $window.localStorage.currentUser = JSON.stringify(response.data.user);
            $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
          });
    };
  });
