(function(){
    'use strict';

	angular
		.module('clientApp')
	    .controller('SettingsCtrl', controller);

    controller.$inject = ['$scope', 'user', '$timeout', 'ApiService', '$resource'];
	function controller($scope, user, $timeout, ApiService, $resource)
	{
        var vm = this;

        vm.user = user;
        vm.alert = null;

        activate();
        function activate()
        {

        }


        vm.save = function(user)
        {
            //user.$update()
            ApiService.users(user).update()
                .then(function(res){
                    setAlert('success', 'Profile updated!', 2000);
                })
                .catch(function(e){
                    //console.log(e)
                })
        };


        var timeoutPromise = null;
        function setAlert(type, msg, time)
        {
            if(timeoutPromise)
            {
                $timeout.cancel(timeoutPromise);
            }
            vm.alert = { type: type, msg: msg };
            timeoutPromise = $timeout(function(){
                vm.alert = null;
            }, time);
        }
	}

})();