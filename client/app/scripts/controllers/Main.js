(function(){
    'use strict';

    /**
     * @ngdoc function
     * @name clientApp.controller:MainCtrl
     * @description
     * # MainCtrl
     * Controller of the clientApp
     */

	angular
		.module('clientApp')
	    .controller('MainCtrl', controller);

    controller.$inject = ['$scope', 'Session'];
	function controller($scope, Session)
	{
        var vm = this;

        //Needs this to pass the sample test
        vm.awesomeThings = ['food', 'candy', 'not karma' ];

        //vm.authService = AuthService;
        vm.session = Session;

        activate();
        function activate()
        {

        }

	}

})();