(function(){
  'use strict';

	angular
		.module('clientApp')
	  .controller('UserSearchCtrl', controller);

  controller.$inject = ['$scope', '$http'];
	function controller($scope, $http)
	{
        //TODO: Filter results serverside so that email and such aren't sent
        $scope.searchUsers = function(val) {
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

})();