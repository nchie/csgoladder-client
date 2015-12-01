(function(){
    'use strict';

	angular
		.module('clientApp')
	    .run(run);

    run.$inject = ['$rootScope', '$state', 'AuthService', 'Session'];
	function run($rootScope, $state, AuthService, Session)
	{

        /*UserService.getUser().then(function(result){
            //If logged in, set $rootScape.currentUser to userdata
            $rootScope.currentUser = result;
        }, function(){
            //If not logged in, set $rootScape.currentUser to null
            $rootScope.currentUser = null;
        });*/

        //AuthService.fetchUser();
        Session.get();


        $rootScope.page = {
            setTitle: function(title) {
                this.title = title + ' - Placeholder';
            },
            loading: false
        };


        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            //TODO: Show loading
            $rootScope.page.loading = true;
        });

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            //TODO: Hide loading
            $rootScope.page.loading = false;

            $rootScope.page.setTitle(toState.title || '?');
        });


        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){ 
                //TODO: Hide loading
                $rootScope.page.loading = false;

                event.preventDefault();

                switch (error) {
                    case 'INVALID_USER':
                        $state.go('404');
                        break;
                    case 'INVALID_TEAM':
                        $state.go('404');
                        break;
                    case 'NO_LOGIN':
                        $state.go('nopermission');
                        break;
                    default:
                        console.log(error);
                        $state.go('home');
                        break;

                }


        });

	}

})();