angular.module('Instagram')
    .controller('DetailCtrl', function($scope, $rootScope, $location, API) {
        var mediaId = $location.path().split('/').pop();

        API.getMediaById(mediaId)
            .then(function(media) {
                $scope.hasLiked = media.data.user_has_liked;
                $scope.photo = media.data;
            })
            .catch(function(error) {
                console.log('Error getting media. Error desc: ' + error);
            })


        $scope.like = function() {
            $scope.hasLiked = true;
            API.likeMedia(mediaId)
                .catch(function(error) {
                    sweetAlert('Error', data.message, 'error');
                })
        }
    })
