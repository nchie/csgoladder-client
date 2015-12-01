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

    controller.$inject = ['$scope', 'Session', 'AuthService'];
	function controller($scope, Session, AuthService)
	{
        var self = this;

        //Needs this to pass the sample test
        self.awesomeThings = ['food', 'candy', 'not karma' ];

        self.user = AuthService.getCurrentUser;
        self.logout = AuthService.logout;

        activate();
        function activate()
        {

        }

	}

})();