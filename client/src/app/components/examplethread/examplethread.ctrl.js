(function(){
    'use strict';

	angular
		.module('clientApp')
	    .controller('ThreadCtrl', controller);

	controller.$inject = ['$scope'];
	function controller($scope)
	{
	    var self = this;


	    self.examplePosts = [
	    	{
	    		id: 1,
	    		timestamp: 0,
	    		user: {
	    			id: 1,
	    			name: "atte",
	    			avatar: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4a/4a5353948b7a6f0bfd0a31dee5b5b1b1b99c7632.jpg",
					isMod: true,
	    		},
	    		text: 'DET HÄR ÄR POST1'
	    	},{
	    		id: 2,
	    		timestamp: 123,
	    		user: {
	    			id: 1,
	    			name: "atte",
	    			avatar: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4a/4a5353948b7a6f0bfd0a31dee5b5b1b1b99c7632.jpg",
					isMod: true,
	    		},
	    		text: 'DET HÄR ÄR POST2'
	    	},{
	    		id: 3,
	    		timestamp: 123123,
	    		user: {
	    			id: 1,
	    			name: "atte",
	    			avatar: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4a/4a5353948b7a6f0bfd0a31dee5b5b1b1b99c7632.jpg",
					isMod: true,
	    		},
	    		text: 'DET HÄR ÄR POST3'
	    	},{
	    		id: 4,
	    		timestamp: 234234,
	    		user: {
	    			id: 1,
	    			name: "atte",
	    			avatar: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4a/4a5353948b7a6f0bfd0a31dee5b5b1b1b99c7632.jpg",
					isMod: true,
	    		},
	    		text: 'DET HÄR ÄR POST4'
	    	},{
	    		id: 5,
	    		timestamp: 345345,
	    		user: {
	    			id: 1,
	    			name: "atte",
	    			avatar: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4a/4a5353948b7a6f0bfd0a31dee5b5b1b1b99c7632.jpg",
					isMod: true,
	    		},
	    		text: 'DET HÄR ÄR POST5'
	    	},{
	    		id: 6,
	    		timestamp: 456456,
	    		user: {
	    			id: 1,
	    			name: "atte",
	    			avatar: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4a/4a5353948b7a6f0bfd0a31dee5b5b1b1b99c7632.jpg",
					isMod: true,
	    		},
	    		text: 'DET HÄR ÄR POST6'
	    	},{
	    		id: 7,
	    		timestamp: 567567,
	    		user: {
	    			id: 1,
	    			name: "atte",
	    			avatar: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4a/4a5353948b7a6f0bfd0a31dee5b5b1b1b99c7632.jpg",
					isMod: true,
	    		},
	    		text: 'DET HÄR ÄR POST7'
	    	},{
	    		id: 8,
	    		timestamp: 678678,
	    		user: {
	    			id: 1,
	    			name: "atte",
	    			avatar: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4a/4a5353948b7a6f0bfd0a31dee5b5b1b1b99c7632.jpg",
					isMod: true,
	    		},
	    		text: 'DET HÄR ÄR POST8'
	    	},{
	    		id: 9,
	    		timestamp: 789789,
	    		user: {
	    			id: 1,
	    			name: "atte",
	    			avatar: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4a/4a5353948b7a6f0bfd0a31dee5b5b1b1b99c7632.jpg",
					isMod: true,
	    		},
	    		text: 'DET HÄR ÄR POST9'
	    	},{
	    		id: 10,
	    		timestamp: 1123123,
	    		user: {
	    			id: 1,
	    			name: "atte",
	    			avatar: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4a/4a5353948b7a6f0bfd0a31dee5b5b1b1b99c7632.jpg",
					isMod: true,
	    		},
	    		text: 'DET HÄR ÄR POST10'
	    	},{
	    		id: 11,
	    		timestamp: 1234234,
	    		user: {
	    			id: 1,
	    			name: "atte",
	    			avatar: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4a/4a5353948b7a6f0bfd0a31dee5b5b1b1b99c7632.jpg",
					isMod: true,
	    		},
	    		text: 'DET HÄR ÄR POST11'
	    	},{
	    		id: 12,
	    		timestamp: 1345345,
	    		user: {
	    			id: 1,
	    			name: "atte",
	    			avatar: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4a/4a5353948b7a6f0bfd0a31dee5b5b1b1b99c7632.jpg",
					isMod: true,
	    		},
	    		text: 'DET HÄR ÄR POST12'
	    	},{
	    		id: 13,
	    		timestamp: 1456456,
	    		user: {
	    			id: 1,
	    			name: "atte",
	    			avatar: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4a/4a5353948b7a6f0bfd0a31dee5b5b1b1b99c7632.jpg",
					isMod: true,
	    		},
	    		text: 'DET HÄR ÄR POST13'
	    	},{
	    		id: 14,
	    		timestamp: 1567567,
	    		user: {
	    			id: 1,
	    			name: "atte",
	    			avatar: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4a/4a5353948b7a6f0bfd0a31dee5b5b1b1b99c7632.jpg",
					isMod: true,
	    		},
	    		text: 'DET HÄR ÄR POST14'
	    	},{
	    		id: 15,
	    		timestamp: 1678678,
	    		user: {
	    			id: 1,
	    			name: "atte",
	    			avatar: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4a/4a5353948b7a6f0bfd0a31dee5b5b1b1b99c7632.jpg",
					isMod: true,
	    		},
	    		text: 'DET HÄR ÄR POST15'
	    	}
	    ]

	    
	}

})();