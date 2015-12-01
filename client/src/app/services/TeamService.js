(function(){
    'use strict';

	angular
		.module('clientApp')
	    .factory('TeamService', service);

    service.$inject = ['$http', '$q'];
	function service($http, $q)
	{
        var teamService = {
            get: getTeam,
            update: updateTeam,
            create: createTeam
        };


        function getTeam(id) {
            return $http
                .get('/api/teams/' + id)
                    .then(function (res) {
                        return res.data
                    });
        }

        function updateTeam(team)
        {
            return $http
                .put('/api/teams', team)
                    .then(function (res) {
                        return res.data
                    });
        }

        function createTeam(team)
        {
            return $http
                .post('/api/teams', team)
                    .then(function (res) {
                        return res.data
                    });
        }

        return teamService;
	}

})();