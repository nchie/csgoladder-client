(function(){
    'use strict';

	angular
		.module('clientApp')
	    .factory('LobbyService', service);

    service.$inject = ['$http', '$q', '$socket', '$rootScope'];
	function service($http, $q, $socket, $rootScope)
	{
        var lobbyService = {};
        var lobbies = null;

        lobbyService.getLobbies = getLobbies;
        lobbyService.refreshLobbies = refreshLobbies;

        $socket.on('addLobby', addLobby);
        $socket.on('delLobby', delLobby);

        function getLobbies(id) {
            return lobbies;

        }

        function refreshLobbies() {
            return $http
                .get('/api/lobbies')
                    .then(function (res) {
                        if(res.data.status === 'success')
                        {
                            lobbies = res.data.data;
                            $rootScope.$broadcast('lobbyUpdate');
                            return;
                        }
                        else if(res.data.status === 'error')
                        {
                            return $q.reject(res.data.message);
                        }
                    });
        }


        function addLobby(lobby){
            $rootScope.$broadcast('lobbyUpdate');
            for (var i = 0; i < lobbies.length; i++) {
                if(lobbies[i].name === lobby.name)
                {
                    lobbies[i] = lobby;
                    return;
                }
            }
            lobbies.push(lobby);
        }

        function delLobby(lobby)
        {
            $rootScope.$broadcast('lobbyUpdate');
            for (var i = 0; i < lobbies.length; i++) {
                if(lobbies[i].name === lobby.name)
                {
                    lobbies.splice(i, 1);
                    return;
                }
            }
        }





        return lobbyService;
	}

})();