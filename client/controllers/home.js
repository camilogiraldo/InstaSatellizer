angular.module('Instagram')
    .controller('HomeCtrl', function($scope, $window, $rootScope, $auth, API) {

        if ($auth.isAuthenticated() && ($rootScope.currentUser && $rootScope.currentUser.username)) {
            API.getFeed()
                .then(function(data) {
                    $scope.photos = data;
                })
                .catch(function() {
                    console.log('linkeage failed1 ');
                })
        }

        $scope.isAuthenticated = function() {
            //check if logged in
            return $auth.isAuthenticated();
        };

        $scope.linkInstagram = function() {
            $auth.link('instagram')
                .then(function(response) {
                    $window.localStorage.currentUser = JSON.stringify(response.data.user);
                    $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
                    API.getFeed()
                        .then(function(data) {
                            $scope.photos = data;
                        });
                })
                .catch(function() {
                    console.log('linkeage failed2');
                })
        };
    });
