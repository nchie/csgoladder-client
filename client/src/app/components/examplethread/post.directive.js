(function(){
    'use strict';

    angular
        .module('clientApp')
        .directive('post', directive);

    directive.$inject = [];
    function directive()
    {
        return {

            scope: {
                postdata: '='
            },
            restrict: 'E',
            templateUrl: 'app/components/examplethread/post.tpl.html',
            link: function(scope, element, attrs) {
                
            }
        };
    }



})();