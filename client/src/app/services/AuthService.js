(function(){
    'use strict';

	angular
		.module('clientApp')
	    .factory('AuthService', service);

    service.$inject = ['$http', '$q', '$state', 'Session'];
	function service($http, $q, $state, Session)
	{
        var authService = {};

        authService.logout = function()
        {
            return $http
                .post('/logout')
                .then(function (res) {
                    Session.destroy();
                    $state.go('home');
                });
        };

        authService.isAuthorized = function (authorizedRoles) {
            if (!angular.isArray(authorizedRoles)) 
            {
                authorizedRoles = [authorizedRoles];
            }
            return (authService.isAuthenticated() &&
                authorizedRoles.indexOf(Session.userRole) !== -1);
        };
     
        return authService;
	}

})();