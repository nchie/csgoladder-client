(function(){
    'use strict';

	angular
		.module('clientApp')
	    .controller('ProfileCtrl', controller);

    controller.$inject = ['$scope', 'user'];
	function controller($scope, user)
	{
        var vm = this;

        vm.user = user;


        activate();
        function activate()
        {

        }

	}

})();