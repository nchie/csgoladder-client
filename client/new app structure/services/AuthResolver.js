(function(){
  'use strict';

	angular
		.module('clientApp')
	    .factory('AuthResolver', service);

  service.$inject = ['$q', '$rootScope', '$state', 'Session'];
	function service($q, $rootScope, $state, Session)
	{
      return {
        resolve: function () {
          var deferred = $q.defer();
          var unwatch = $rootScope.$watch(function() { return Session.user; }, function (currentUser) {
            if (angular.isDefined(currentUser)) {
              if (currentUser) {
                deferred.resolve(currentUser);
              } else {
                deferred.reject();
                $state.go('nopermission');
              }
              unwatch();
            }
          });
          return deferred.promise;
        }
      };
	}

})();