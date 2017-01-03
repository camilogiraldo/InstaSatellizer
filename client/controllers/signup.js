angular.module('Instagram')
    .controller('SignupCtrl', function($scope, $auth, $location) {

      $scope.signup = function() {
        var user = {
          email: $scope.email,
          password: $scope.password
        };
        // Satellizer
        $auth.signup(user)
          .then(function (response) {
            $auth.setToken(response);
            $location.path('/');
          })
          .catch(function(response) {
            console.log(response.data);
          });
      };
    });
