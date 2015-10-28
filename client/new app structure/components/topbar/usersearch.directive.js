(function(){
    'use strict';

    angular
        .module('clientApp')
        .directive('userSearch', directive);

    directive.$inject = ['$http'];
    function directive($http)
    {
        return {

            scope: {},
            replace: true,
            restrict: 'E',
            template: '<input type="text" ng-model="asyncSelected" placeholder="Search" typeahead="user as user.name for user in searchUsers($viewValue)" typeahead-template-url="templates/topbar-typeahead.html" typeahead-loading="loadingLocations" class="typeahead form-control">',

            link: function(scope, element, attrs) {
        //TODO: Filter results serverside so that email and such aren't sent
                scope.searchUsers = function(val) {
                return $http.get('/api/search/' + val).then(function(res){
                  var results = [];
                  angular.forEach(res.data, function(item){
                    results.push({
                        id: item.id,
                        name: item.displayName,
                        avatar: item.avatarSmall
                    });
                  });
                  return results;
                });
                };
            }
        };
    }

})();