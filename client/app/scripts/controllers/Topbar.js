(function(){
    'use strict';

	angular
		.module('clientApp')
	    .controller('TopbarCtrl', controller);

    controller.$inject = ['$scope', '$location'];
	function controller($scope, $location)
	{
        $scope.getClass = function (path) { 
            if ($location.path().substr(0, path.length) === path) { 
                if (path === "")
                {
                    return "";
                }
                else if (path === "/" && $location.path() === "/") { 
                    return "active"; 
                } else if (path === "/") { 
                    return ""; 
                } 
                return "active";
            } else { 
                return "";
            } 
        }; 
	}

})();