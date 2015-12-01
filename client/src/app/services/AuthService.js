(function(){
    'use strict';

	angular
		.module('clientApp')
	    .factory('AuthService', service);

    service.$inject = ['$state', 'Session'];
	function service($state, Session)
	{
        var authService = {};

        authService.logout = function()
        {
            Session.remove().then(function(){
                $state.go('front');
            })
        };

        authService.getCurrentUser = function()
        {
            return Session.getUser();
        }

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