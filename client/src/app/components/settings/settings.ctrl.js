(function(){
    'use strict';

	angular
		.module('clientApp')
	    .controller('SettingsCtrl', controller);

    controller.$inject = ['$scope', 'UserService', 'user', '$timeout'];
	function controller($scope, UserService, user, $timeout)
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
            var updateUser = function(user)
                {
                    return UserService.updateUser(user);
                },
                printResult = function(result)
                {
                    setAlert('success', 'Profile updated!', 2000);
                    return UserService.getUser();
                },
                exceptions = function(e)
                {
                    setAlert('danger', e.message, 3000);
                };

            updateUser(user)
                .then(printResult)
                .catch(exceptions);
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