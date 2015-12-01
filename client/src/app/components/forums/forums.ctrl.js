(function(){
	'use strict';

    angular
        .module('clientApp')
        .controller('ForumsCtrl', controller);

    controller.$inject = ['$scope' ,'ApiService'];
    function controller($scope, ApiService)
    {
        var vm = this;
    }

})();