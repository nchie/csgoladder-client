(function(){
    'use strict';

	angular
		.module('clientApp')
	    .factory('UserService', service);

    service.$inject = ['$http', '$q'];
	function service($http, $q)
	{
        var userService = {};

        userService.get = getUser;
        userService.update = updateUser;


        function getUser(id) {
            if(id)
            {
                return $http
                    .get('/api/users/' + id)
                        .then(function (res) {
                            return res.data;
                        });
            }
            else
            {
                return $http
                    .get('/api/my/user')
                        .then(function (res) {
                            return res.data;
                        });
            }
        }

        function updateUser(user)
        {
            return $http
                .put('/api/users/' + user.id, user)
                    .then(function (res) {
                        return res.data;
                    });
        }



        return userService;
	}

})();