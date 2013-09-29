//Setting up route
window.app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/teams/:teamId',
    {
        templateUrl: 'views/myteam/myteam.html'
    })
    .when('/teams/create',
    {
        templateUrl: 'views/myteam/create.html'
    })
    .when('/players',
    {
        templateUrl: 'views/players/players.html'
    })
    .when('/players/create',
    {
        templateUrl: 'views/players/create.html'
    })
    .when('/players/:playerId/edit',
    {
        templateUrl: 'views/players/edit.html'
    })
    .when('/players/:playerId',
    {
        templateUrl: 'views/players/view.html'
    }).when('/', {
            templateUrl: 'views/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider',
    function($locationProvider) { 
        $locationProvider.hashPrefix("!");
    }
]);