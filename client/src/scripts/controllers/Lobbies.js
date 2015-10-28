(function(){
    'use strict';

	angular
		.module('clientApp')
	    .controller('LobbiesCtrl', controller);

    controller.$inject = ['$scope', '$http', 'LobbyService'];
	function controller($scope, $http, LobbyService)
	{
        var vm = this;

        //Lobbies are resolved by ui-router before state change

        vm.refresh = refresh;

        vm.lobbyService = LobbyService;

        activate();
        function activate()
        {
            //refresh();
        }


        function refresh(){
            LobbyService.refreshLobbies();
        }
	}

})();