(function(){
    'use strict';

    angular
        .module('clientApp')
        .directive('topbarEntry', directive)
        .factory('TopbarService', service);

    directive.$inject = ['TopbarService'];
    function directive(TopbarService)
    {
        return {

            scope: {},
            restrict: 'A',
            link: function(scope, element, attrs) {
                TopbarService.addElement(element);
            }
        };
    }


    service.$inject = ['$rootScope'];
    function service($rootScope)
    {
        var service = {
            addElement : addElement
        };
        var topbarElements = [];
        var currentActive = null;

        var state = null;


        $rootScope.$on("$stateChangeStart", update);

        function update(event, toState, toParams, fromState, fromParams) {
            if(currentActive){setInactive(currentActive);}

            state = toState.name;
            for (var i = 0; i < topbarElements.length; i++) {

                var uiSref = topbarElements[i].attr('ui-sref');
                if(uiSref)
                {
                    if (uiSref.indexOf(toState.name) >= 0) {
                        setActive(topbarElements[i]);
                    }
                }
            }
        }

        function setActive(element)
        {
            element.parent().addClass("active");//parent to get the <li>
            currentActive = element;
        }

        function setInactive(element)
        {
            element.parent().removeClass("active");
        }


        function addElement(element) {
            var uiSref = element.attr('ui-sref');
            if (uiSref && uiSref.indexOf(state) >= 0) {
                setActive(element);
            }

            topbarElements.push(element)
        }

        return service;
    }




})();