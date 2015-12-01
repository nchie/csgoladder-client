(function(){
    'use strict';

	angular
		.module('clientApp')
	    .service('Session', service);

    service.$inject = ['$http'];
	function service($http)
	{
        var self = this;

        var user;

        //self.create = create;
        //self.destroy = destroy;
        self.get = get;
        self.remove = remove;
        self.getUser = getUser;

        function get()
        {
            return $http
                .get('/api/session')
                    .then(function (res) {
                        user = res.data;
                        return res.data;
                    })
                    .catch(function (res){
                        user = null;
                    })
        }

        function remove()
        {
            return $http
                .delete('/api/session')
                    .then(function (res) {
                        user = null;
                        return res.data;
                    });
        }

        function getUser()
        {
            return user;
        }
	}

})();