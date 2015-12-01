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
            .state('front',{
                title: "Frontpage",
                url: '/',
                templateUrl: 'app/components/front/front.html',
                controller: 'FrontCtrl',
                controllerAs: 'contentVm',
                data: {
                }
            })
            .state('home',{
                title: "Home",
                url: '/home',
                templateUrl: 'app/components/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'contentVm',
                data: {
                }
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
                    auth: resolveAuth,
                    lobbies: refreshLobbies
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
                url: '/profile/:id',
                templateUrl: 'app/components/profile/profile.html',
                controller: 'ProfileCtrl',
                controllerAs: 'contentVm',
                resolve: {
                    auth: resolveAuth,
                    user: getUser
                }
            })

            .state('team',{
                title: "Team",
                url: '/team/:id',
                templateUrl: 'app/components/team/team.html',
                controller: 'TeamCtrl',
                controllerAs: 'contentVm',
                resolve: {
                    auth: resolveAuth,
                    team: getTeam
                }
            })
            .state('registerteam',{
                title: "Register new team",
                url: '/registerteam',
                templateUrl: 'app/components/team/register.html',
                controller: 'RegisterTeamCtrl',
                controllerAs: 'contentVm',
                resolve: {
                    auth: resolveAuth
                }
            })
            .state('ladders',{
                title: "Ladder",
                url: '/ladders',
                templateUrl: 'app/components/ladders/ladders.html',
                controller: 'LaddersCtrl',
                controllerAs: 'contentVm',

            })
            .state('examplethread',{
                title: "Example thread",
                url: '/exthread',
                templateUrl: 'app/components/examplethread/examplethread.html',
                controller: 'ThreadCtrl',
                controllerAs: 'contentVm',
                resolve: {
                    auth: resolveAuth
                }
            })
            .state('settings',{
                title: "Settings",
                url: '/settings',
                templateUrl: 'app/components/settings/settings.html',
                controller: 'SettingsCtrl',
                controllerAs: 'contentVm',
                resolve: {
                    auth: resolveAuth,
                    user: getMe
                }
            })
            .state('404',{
                title: "Page does not exist",
                url: '/404',
                templateUrl: 'app/common/templates/404.html'
            })
            .state('401',{
                title: "Unauthorized",
                url: '/401',
                templateUrl: 'app/common/templates/401.html'
            });
            

    }

    resolveAuth.$inject = ['AuthResolver'];
    function resolveAuth(AuthResolver){
        return AuthResolver.resolve();
    }

    getUser.$inject = ['ApiService', '$stateParams'];
    function getUser(ApiService, $stateParams){
        //return UserService.get($stateParams.id);
        var params = {};
        if($stateParams.id)
        {
            params.id = $stateParams.id
        }
        else
        {
            params.id = 0;
        }

        return ApiService.users(params).get();
    }

    getMe.$inject = ['ApiService'];
    function getMe(ApiService){
        return ApiService.session().get();
    }

    refreshLobbies.$inject = ['LobbyService'];
    function refreshLobbies(LobbyService){
        return LobbyService.refreshLobbies();
    }


    getTeam.$inject = ['ApiService', '$stateParams'];
    function getTeam(ApiService, $stateParams){
        var params = {};
        if($stateParams.id)
        {
            params.id = $stateParams.id
        }
        else
        {
            params.id = 0;
        }
        return ApiService.teams(params).get();
    }

    /*getTeam.$inject = ['TeamService', '$stateParams'];
    function getTeam(TeamService, $stateParams){
        return TeamService.get($stateParams.id);
    }*/


})();