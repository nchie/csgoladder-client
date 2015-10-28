(function(){
    'use strict';

    angular
        .module('clientApp')
        .config(config);

    config.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];
    function config($urlRouterProvider, $stateProvider, $locationProvider)
    {
        $urlRouterProvider.otherwise("/");

        // use the HTML5 History API to fix URLs
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('home',{
                title: "Home",
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'contentVm',
                data: {
                }
            })
            .state('nopermission',{
                title: "No permission",
                url: '/nopermission',
                templateUrl: 'views/nopermission.html'
            })
            .state('404',{
                title: "404 Not found",
                url: '/404',
                templateUrl: 'views/404.html'
            })
            .state('lobbies',{
                title: "Lobbies",
                url: '/lobbies',
                templateUrl: 'views/lobbies.html',
                controller: 'LobbiesCtrl',
                controllerAs: 'contentVm',
                data: {
                },
                resolve: {
                    auth: ['AuthResolver', function resolveAuthentication(AuthResolver) { 
                        return AuthResolver.resolve();
                    }],
                    lobbies: ['$stateParams', 'LobbyService', function($stateParams, LobbyService)
                    {
                        return LobbyService.refreshLobbies();
                    }]
                }

            })
            .state('teams',{
                title: "Teams",
                url: '/teams',
                templateUrl: 'views/teams.html',
                controller: 'TeamsCtrl',
                controllerAs: 'contentVm',
                data: {
                }
            })
            .state('forums',{
                title: "Forums",
                url: '/forums',
                templateUrl: 'views/forums.html',
                controller: 'ForumsCtrl',
                controllerAs: 'contentVm',
                data: {
                }
            })
            .state('support',{
                title: "Support",
                url: '/support',
                templateUrl: 'views/support.html',
                controller: 'SupportCtrl',
                controllerAs: 'contentVm',
                data: {
                }
            })
            .state('about',{
                title: "About",
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'contentVm',
                data: {
                }
            })
            .state('profile',{
                title: "Profile",
                url: '/profile?id',
                templateUrl: 'views/profile.html',
                controller: 'ProfileCtrl',
                controllerAs: 'contentVm',
                resolve: {
                    auth: ['AuthResolver', function resolveAuthentication(AuthResolver) { 
                        return AuthResolver.resolve();
                    }],
                    user: ['$stateParams', 'UserService', function($stateParams, UserService)
                    {
                        return UserService.getUser($stateParams.id);
                    }]
                }
            })

            .state('team',{
                title: "Team",
                url: '/team?id',
                templateUrl: 'views/team.html',
                controller: 'TeamCtrl',
                controllerAs: 'contentVm',
                resolve: {
                    auth: ['AuthResolver', function resolveAuthentication(AuthResolver) { 
                        return AuthResolver.resolve();
                    }],
                    team: ['$stateParams', 'TeamService', function($stateParams, TeamService)
                    {
                        return TeamService.getTeam($stateParams.id);
                    }]
                }
            })
            .state('ladders',{
                title: "Ladder",
                url: '/ladders',
                templateUrl: 'views/ladders.html',
                controller: 'LaddersCtrl',
                controllerAs: 'contentVm',
                resolve: {
                    auth: ['AuthResolver', function resolveAuthentication(AuthResolver) { 
                        return AuthResolver.resolve();
                    }],
                }
            })
            .state('loading',{
                title: "Loading",
                url: '/loading',
                template: 'loading',
                controller: 'LaddersCtrl',
                resolve: {
                    auth: ['AuthResolver', function resolveAuthentication(AuthResolver) { 
                        return AuthResolver.resolve();
                    }],
                }
            })
            .state('settings',{
                title: "Settings",
                url: '/settings',
                templateUrl: 'views/settings.html',
                controller: 'SettingsCtrl',
                controllerAs: 'contentVm',
                resolve: {
                    auth: ['AuthResolver', function resolveAuthentication(AuthResolver) { 
                        return AuthResolver.resolve();
                    }],
                    user: ['UserService', function(UserService)
                    {
                        return UserService.getUser();
                    }]
                }
            });
            

    }

})();