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
	    .controller('FrontCtrl', controller);

    controller.$inject = ['$scope', '$uibModal'];
	function controller($scope, $uibModal)
	{
	    var vm = this;


		/*$uibModal.open({
	      animation: true,
	      //backdrop: 'static',
	      template: '<p> hej </p> <button class="btn btn-primary" type="button" ng-click="close()">Close</button>',
	      controller: 'NoCtrl',
	      size: 'lg'
	    });*/

	    
	}
})();