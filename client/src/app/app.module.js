(function(){

	'use strict';

	/**
	 * @ngdoc overview
	 * @name clientApp
	 * @description
	 * # clientApp
	 *
	 * Main module of the application.
	 */
	angular
	  .module('clientApp', [
	    'ngAnimate', 'ui.bootstrap', 'ui.router', 'smart-table', 'socket.io', 'ngResource'
	  ]);
  
})();