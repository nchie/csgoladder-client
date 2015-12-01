(function(){
    'use strict';
    
	angular
		.module('clientApp')
	    .controller('DialogCtrl', controller);


    controller.$inject = ['$scope', '$uibModalInstance'];
	function controller($scope, $uibModalInstance)
	{
	    var vm = this;

	    $scope.close = function(result){
	    	$uibModalInstance.close(result);
	    }
	}

})();