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
	    .controller('HomeCtrl', controller);

    controller.$inject = ['$scope', 'TeamService'];
	function controller($scope, TeamService)
	{
	    var vm = this;

	    
	}

})();