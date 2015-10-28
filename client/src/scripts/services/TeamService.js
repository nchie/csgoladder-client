(function(){
    'use strict';

	angular
		.module('clientApp')
	    .factory('TeamService', service);

    service.$inject = ['$http', '$q'];
	function service($http, $q)
	{
        var teamService = {};

        teamService.getTeam = getTeam;
        teamService.updateTeam = updateTeam;


        function getTeam(id) {
            if(id)
            {
                return $http
                    .get('/api/teams/' + id)
                        .then(function (res) {

                            if(res.data.status === 'success')
                            {
                                return res.data.data;
                            }
                            else if(res.data.status === 'error')
                            {
                                return $q.reject(res.data.message);
                            }
                        });
            }
            else
            {
                return $http
                    .get('/api/users/me')
                        .then(function (res) {
                            if(res.data.status === 'success')
                            {
                                return res.data.data;
                            }
                            else if(res.data.status === 'error')
                            {
                                return $q.reject(res.data.message);
                            }
                        });
            }
        }

        function updateTeam(team)
        {
            return $http
                .put('/api/teams', team)
                    .then(function (res) {

                        if(res.data.status === 'success')
                        {
                            return res.data.data;
                        }
                        else if(res.data.status === 'error')
                        {
                            return $q.reject(res.data.message);
                        }
                    });
        }

        return teamService;
	}

})();