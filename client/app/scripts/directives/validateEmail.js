(function(){
  'use strict';

	angular
		.module('clientApp')
	    .directive('validateEmail', directive);

  directive.$inject = [];
	function directive()
	{
      var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

      return {
        require: 'ngModel',
        restrict: '',
        link: function(scope, elm, attrs, ctrl) {
              // only apply the validator if ngModel is present and Angular has added the email validator

            ctrl.$validators.email = function(modelValue) {
              return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
            };

        }
      };
	}

})();