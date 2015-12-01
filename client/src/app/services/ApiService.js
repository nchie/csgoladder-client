(function(){
    'use strict';

	angular
		.module('clientApp')
	    .factory('ApiService', service);

    service.$inject = ['$resource', '$http'];
	function service($resource, $http)
	{
        var apiService = {};

        apiService.users = function(user)
        {  
            var users = {
                query: query,
                get: get,
                update: update,
                create: create,

                friendrequests: friendrequests,
                teaminvites: teaminvites,
            };
            function query()
            {
                //TODO: Implement
            };
            function get()
            {
                return $http
                    .get('/api/users/'+ user.id)
                        .then(function (res) {
                            return res.data
                        });
            };
            function update()
            {
                //if(!userid) { userid = user.id; }

                return $http
                    .put('/api/users/' + user.id, user)
                        .then(function (res) {
                            return res.data
                        });
            };
            function create()
            {
                //TODO: Implement
            };
            function remove()
            {
                //if(!userid) { userid = user.id; }
                return $http
                    .delete('/api/users/'+user.id)
                        .then(function (res) {
                            return res.data
                        });
            };

            function friendrequests()
            {
                var friendrequests = {
                    create: createFriendrequest,

                }

                function createFriendrequest()
                {
                    return $http
                        .post('/api/users/'+user.id+'/friendrequests')
                            .then(function (res) {
                                return res.data
                            });
                };
                return friendrequests;
            };

            function teaminvites(team)
            {
                var teaminvites = {
                    create: createTeaminvite,

                }

                function createTeaminvite()
                {
                    return $http
                        .put('/api/users/'+user.id+'/teaminvites/'+team.id)
                            .then(function (res) {
                                return res.data
                            });
                };
                return teaminvites;
            };

            return users;
        }


        apiService.teams = function(team)
        {  
            var teams = {
                query: teamsQuery,
                get: teamsGet,
                update: teamsUpdate,
                create: teamsCreate,
                remove: teamsRemove,

                users: users,
            }
            function teamsQuery()
            {
                //TODO: Implement
            };
            function teamsGet()
            {
                return $http
                    .get('/api/teams/'+ team.id)
                        .then(function (res) {
                            return res.data
                        });
            };
            function teamsUpdate()
            {
                //if(!teamid) { teamid = team.id; }

                return $http
                    .put('/api/teams/' + team.id, team)
                        .then(function (res) {
                            return res.data
                        });
            };
            function teamsCreate()
            {
                return $http
                    .post('/api/teams/', team)
                        .then(function (res) {
                            return res.data
                        });
            };
            function teamsRemove()
            {
                return $http
                    .delete('/api/teams/'+team.id)
                        .then(function (res) {
                            return res.data
                        });
            };


            function users(user){
                var users = {
                    query: usersQuery,
                    remove: usersRemove,
                }

                function usersQuery()
                {
                    return $http
                        .get('/api/teams/' +team.id+ "/users/")
                            .then(function (res) {
                                return res.data
                            });
                };

                function usersRemove()
                {
                    //if(!userid) { userid = user.id; }
                    return $http
                        .delete('/api/teams/' +team.id+ "/users/" + user.id)
                            .then(function (res) {
                                return res.data
                            });
                };

                return users;
            }

            return teams;
        }

        apiService.session = function()
        {  
            var session = {
                get: get,
                update: update,
                remove: remove
            };
            function get()
            {
                return $http
                    .get('/api/session')
                        .then(function (res) {
                            return res.data;
                        });
            };
            function update()
            {
                //if(!userid) { userid = user.id; }


            };
            function create()
            {
                //TODO: Implement
            };
            function remove()
            {
                return $http
                    .delete('/api/session')
                        .then(function (res) {
                            return res.data;
                        });
            };

            return session;
        }


        apiService.my   = {
            session: $resource('/api/my/user', {}, 
                {
                    //update:   {method:'PUT'},
                    get:    {method:'GET'},
                    delete: {method:'DELETE'},
                    remove: {method:'DELETE'}
                }),
        };



        /*apiService.teams = {
            get: function get(teamid) {
                return $http
                    .get('/api/teams/'+teamid)
                        .then(function (res) {
                            return res.data
                        });
            },
            update: function update(team) {
                return $http
                    .put('/api/teams/' + team.id, team)
                        .then(function (res) {
                            return res.data
                        });
            },
            create: function create(team) {
                return $http
        users            .post('/api/teams/', team)
                        .then(function (res) {
                            return res.data
                        });
            },
            users:{
                get: function get(teamid) {
                    return $http
                        .get('/api/teams/'+teamid+'/users/')
                            .then(function (res) {
                                return res.data
                            });
                },
                delete: function del(teamid, userid) {
                    return $http
                        .delete('/api/teams/'+teamid+'/users/'+userid)
                            .then(function (res) {
                                return res.data
                            });
                },
            }
        }*/

        /*
        apiService.teams = $resource('/api/teams/:teamid', {teamid: '@id'}, 
                              {
                                update:     {method:'PUT'},
                                get:        {method:'GET'},
                                create:     {method:'POST'}
                              });

        apiService.teams_users = $resource('/api/teams/:teamid/users/:userid', {teamid: '@team_id', userid: '@id'}, 
                              {
                                query:      {method:'GET', isArray: true},
                                create:     {method:'POST'},
                                delete:     {method:'DELETE'},
                                remove:     {method:'DELETE'}
                              });*/
        /*apiService.users = $resource('/api/users/:id', {id: '@id'}, 
                              {
                                update:   {method:'PUT'},
                                get:    {method:'GET'},
                                friendrequest:  {method:'POST', url: '/api/users/:id/friendrequest'}

                              });*/



        /*apiService.users = {
            get: function (userid) {
                return $http
                    .get('/api/users/'+userid)
                        .then(function (res) {
                            return res.data
                        });
            },
            update: function (user) {
                return $http
                    .put('/api/users/' + user.id, user)
                        .then(function (res) {
                            return res.data
                        });
            },
            create: function (user) {
                return $http
                    .post('/api/users/', user)
                        .then(function (res) {
                            return res.data
                        });
            },
            friendrequest:{
                create: function (userid) {
                    return $http
                        .post('/api/users/'+userid+'/friendrequest')
                            .then(function (res) {
                                return res.data
                            });
                }
            },
            teaminvite:{
                create: function (userid) {
                    return $http
                        .post('/api/users/'+userid+'/teaminvite')
                            .then(function (res) {
                                return res.data
                            });
                }
            }
        }*/

        return apiService;
	}

})();