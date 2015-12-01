(function(){
    'use strict';

	angular
		.module('clientApp')
	    .controller('RegisterTeamCtrl', controller);

    controller.$inject = ['ApiService', 'AuthService', '$state'];
	function controller(ApiService, AuthService, $state)
	{
        var self = this;

        self.create = function(team)
        {
            ApiService.teams(team).create()
            .then(function(result){
                //TODO: Make a service to handle current user with a method .setTeam(team) instead?
                AuthService.getCurrentUser().team_id = result.id;
                AuthService.getCurrentUser().team = result;
                $state.go('team', {id : result.id})
            })
            .catch(function(e){
                console.log(e);
            })

            /*var createTeam = function(team)
                {
                    return ApiService.team.create(team);
                },
                printResult = function(result)
                {
                    Session.user.team_id = result.id;
                    $state.go('team', {id : result.id})
                    //setAlert('success', 'Profile updated!', 2000);
                },
                exceptions = function(e)
                {
                    //setAlert('danger', e.message, 3000);
                };

            createTeam(team)
                .then(printResult)
                .catch(exceptions);*/
        };


	}

})();