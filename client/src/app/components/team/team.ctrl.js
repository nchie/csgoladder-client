(function(){
    'use strict';
    
	angular
		.module('clientApp')
	    .controller('TeamCtrl', controller);

	controller.$inject = ['team', 'ApiService', 'AuthService', '$uibModal', '$state'];
	function controller(team, ApiService, AuthService, $uibModal, $state)
	{
	    var self = this;
	    self.team = team;
	    self.currentUser = AuthService.getCurrentUser;

	    self.kick = kick;
	    self.promote = promote;
	    self.leave = leave;
	    self.remove = remove;


	    var currentUser = AuthService.getCurrentUser;

		var leaveDialog = {
			animation: true,
			templateUrl: 'app/components/team/leave-dialog.html',
			controller: 'DialogCtrl',
			size: 'md'
	    }

		var deleteDialog = {
			animation: true,
			templateUrl: 'app/components/team/delete-dialog.html',
			controller: 'DialogCtrl',
			size: 'md'
	    }

	    var leaveFailLeader = {
			animation: true,
			templateUrl: 'app/components/team/leave-fail-leader.html',
			controller: 'DialogCtrl',
			size: 'md'
	    }


	    activate();
	    function activate()
	    {

	    }

	    function promote(user){
	    	ApiService.teams({id: team.id, leader_id: user.id}).update()
	    	.then(function(res){
	    		self.team.leader_id = res.leader_id;
	    	})
	    }

	    function kick(user){
	    	console.log(user);
	    	ApiService.teams(team).users(user).remove().then(function(){
	    		if(user.id === currentUser().id)
	    		{
	    			currentUser().team_id = null;
	    		}

	    		var index = team.users.indexOf(user);
	    		team.users.splice(index, 1)
	    	})
	    }

	    function leave(){

	    	function cont(result)
	    	{
		    	if(result === 'yes')
		    	{
			    	ApiService.teams(team).users(currentUser()).remove().then(function(){
			    		currentUser().team_id = null;
			    		//TODO: Is this ok? v
			    		var index = team.users.findIndex(function(e){return e.id == currentUser().id;});
			    		team.users.splice(index, 1)
			    	})
			    	.catch(function(e){
						$uibModal.open(leaveFailLeader);
			    	})
		    	}
	    	}

			$uibModal.open(leaveDialog).result.then(cont);
	    }

	    function remove()
	    {
	    	function cont(result)
	    	{
		    	if(result === 'yes')
		    	{
			    	ApiService.teams(team).remove().then(function(e)
			    	{
			    		currentUser().team_id = null;
			    		$state.go('home');
			    		
			    	})
			    	.catch(function(e){
						console.log('Couldn\'t delete')
			    	})
		    	}
	    	}

			$uibModal.open(deleteDialog).result.then(cont);
	    }
	}

})();