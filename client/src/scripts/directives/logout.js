(function(){
    'use strict';

    angular
        .module('clientApp')
        .directive('logout', directive);

    directive.$inject = ['AuthService'];
    function directive(AuthService)
    {
        return {

            scope: {
                    },
            replace: true,
            restrict: 'A',

            link: function(scope, element, attrs) {
                element.bind('click', function(){
                    AuthService.logout();
                });
            }
        };
    }

})();