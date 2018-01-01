(function() {
    'use strict';

    angular
        .module('myApp')
        .directive('poller', ($http) => {
            return {
                restrict: 'E',
                scope: {
                    name: "@name",
                    endpoint: "@endpoint"
                },
                template: '<div class="ui segment"><label>{{name}}</label><i class="glyphicon glyphicon-ok" ng-show="working"></i><i class="glyphicon glyphicon-remove" ng-hide="working"></i></div>',
                link: ($scope, element, atttributes) => {
                    $scope.working = true;
                    $http({
                        method: 'GET',
                        url: $scope.endpoint
                    }).then(response => {
                        if (response.status == 200)
                            $scope.working = true;
                        else
                            $scope.working = false;
                    }, err => {
                        $scope.working = false;
                    })
                }
            }
        });
})();