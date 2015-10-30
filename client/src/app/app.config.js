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
                templateUrl: 'app/components/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'contentVm',
                data: {
                }
            })
            .state('nopermission',{
                title: "No permission",
                url: '/nopermission',
                templateUrl: 'app/common/templates/nopermission.html'
            })
            .state('404',{
                title: "404 Not found",
                url: '/404',
                templateUrl: 'app/common/templates/404.html'
            })
            .state('lobbies',{
                title: "Lobbies",
                url: '/lobbies',
                templateUrl: 'app/components/lobbies/lobbies.html',
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
                templateUrl: 'app/components/teams/teams.html',
                controller: 'TeamsCtrl',
                controllerAs: 'contentVm',
                data: {
                }
            })
            .state('forums',{
                title: "Forums",
                url: '/forums',
                templateUrl: 'app/components/forums/forums.html',
                controller: 'ForumsCtrl',
                controllerAs: 'contentVm',
                data: {
                }
            })
            .state('support',{
                title: "Support",
                url: '/support',
                templateUrl: 'app/components/support/support.html',
                controller: 'SupportCtrl',
                controllerAs: 'contentVm',
                data: {
                }
            })
            .state('about',{
                title: "About",
                url: '/about',
                templateUrl: 'app/components/about/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'contentVm',
                data: {
                }
            })
            .state('profile',{
                title: "Profile",
                url: '/profile?id',
                templateUrl: 'app/components/profile/profile.html',
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
                templateUrl: 'app/components/team/team.html',
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
                templateUrl: 'app/components/ladders/ladders.html',
                controller: 'LaddersCtrl',
                controllerAs: 'contentVm',
                resolve: {
                    auth: ['AuthResolver', function resolveAuthentication(AuthResolver) { 
                        return AuthResolver.resolve();
                    }],
                }
            })
            .state('examplethread',{
                title: "Example thread",
                url: '/exthread',
                templateUrl: 'app/components/examplethread/examplethread.html',
                controller: 'ThreadCtrl',
                controllerAs: 'contentVm',
                resolve: {
                    auth: ['AuthResolver', function resolveAuthentication(AuthResolver) { 
                        return AuthResolver.resolve();
                    }],
                }
            })
            .state('settings',{
                title: "Settings",
                url: '/settings',
                templateUrl: 'app/components/settings/settings.html',
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