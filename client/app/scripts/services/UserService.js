(function(){
    'use strict';

	angular
		.module('clientApp')
	    .factory('UserService', service);

    service.$inject = ['$http', '$q'];
	function service($http, $q)
	{
        var userService = {};

        userService.getUser = getUser;
        userService.updateUser = updateUser;
        userService.saveUser = saveUser;


        function getUser(id) {
            if(id)
            {
                return $http
                    .get('/api/users/' + id)
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

        function updateUser(user)
        {
            return $http
                .put('/api/users', user)
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

        function saveUser(user)
        {
            return $http
                .put('/api/users', user)
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

        return userService;
	}

})();