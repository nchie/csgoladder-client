(function(){
    'use strict';
    
	angular
		.module('clientApp')
	    .controller('TeamCtrl', controller);

	controller.$inject = ['$scope', 'team'];
	function controller($scope, team)
	{
	    var vm = this;
	    vm.team = team;
	}

})();