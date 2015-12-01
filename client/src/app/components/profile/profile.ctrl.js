(function(){
    'use strict';

	angular
		.module('clientApp')
	    .controller('ProfileCtrl', controller);

    controller.$inject = ['user', 'ApiService', 'AuthService'];
	function controller(user, ApiService, AuthService)
	{
        var vm = this;
        vm.user = user;
        vm.invite = invite;

        activate();
        function activate()
        {
            
        }

        function invite(){
            ApiService.users(user).teaminvites(AuthService.getCurrentUser().team).create()
            .then(function(res){
                console.log('Invited');
            })
            .catch(function(e){
                console.log(e.data.message);
            })
        }

	}

})();