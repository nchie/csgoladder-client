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
            template: '<input type="text" class="form-control" autocomplete="off" placeholder="Search" name="search" ng-model="asyncSelected" uib-typeahead="user as user.name for user in searchUsers($viewValue)" typeahead-template-url="app/components/topbar/usersearch-dropdown.tpl.html" typeahead-focus-first="false" typeahead-loading="loadingLocations">',

            link: function(scope, element, attrs) {
        //TODO: Filter results serverside so that email and such aren't sent
                scope.searchUsers = function(val) {
                return $http.get('/api/search/' + val).then(function(res){
                  var results = [];
                  angular.forEach(res.data, function(item){
                    results.push({
                        id: item.id,
                        name: item.steam_name,
                        avatar: item.avatar_small
                    });
                  });
                  return results;
                });
                };
            }
        };
    }

})();