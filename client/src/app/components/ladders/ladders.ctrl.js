(function(){
	'use strict';

	angular
		.module('clientApp')
	    .controller('LaddersCtrl', controller);

    controller.$inject = ['$scope'];
	function controller($scope)
	{
	        var vm = this;

	        vm.rowCollection = [
	        {
	            rank: "1",
	            name: "Team2",
	            wins: "7",
	            losses: "2",
	            rating: "1670"
	        },
	        {
	            rank: "3",
	            name: "Team1",
	            wins: "4",
	            losses: "4",
	            rating: "1507"
	        },
	        {
	            rank: "2",
	            name: "Team3",
	            wins: "2",
	            losses: "1",
	            rating: "1522"
	        },
	        {
	            rank: "4",
	            name: "Team4",
	            wins: "0",
	            losses: "0",
	            rating: "1500"
	        },
	        {
	            rank: "5",
	            name: "Team5",
	            wins: "0",
	            losses: "0",
	            rating: "1500"
	        }];
}

})();