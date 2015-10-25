(function(){
    'use strict';

	angular
		.module('clientApp')
	    .service('Session', service);

    service.$inject = ['$http'];
	function service($http)
	{
        var self = this;

        self.create = create;
        self.destroy = destroy;
        self.get = get;

        function get()
        {
            $http
                .get('/api/users/me')
                    .then(function (res) {
                        if(res.data.status === 'success')
                        {
                            create(res.data.data);
                        }
                        if(res.data.status === 'error')
                        {
                            destroy();
                        }
                    });
        }

        function create(user)
        {
            self.user = user;
        }

        function destroy()
        {
            self.user = null;
        }
	}

})();