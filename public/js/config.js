//Setting up route
window.app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/teams/:teamId',
    {
        templateUrl: 'views/myteam/myteam.html'
    })
    .when('/rank',
    {
        templateUrl: 'views/rank/view.html'
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
        templateUrl: 'views/splash.html'
    }).otherwise({
        redirectTo: window.user == null ? '/' : '/teams/' + window.user.team
    });
    }
]).run(['Global', '$location', function(Global, $location){

        if(!Global.authenticated)
        {
            $location.path('/');
        }
        else
        {
            $location.path('/teams/' + Global.user.team);
        }
    }]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider','$httpProvider',
    function($locationProvider, $httpProvider) {

        var interceptor = ['$rootScope', '$q', function (scope, $q) {
            function success(response) {
                return response;
            }

            function error(response) {
                var status = response.status;

                if (status == 401) {
                    window.location = "./";
                    return;
                }
                // otherwise
                return $q.reject(response);
            }

            return function (promise) {
                return promise.then(success, error);
            }

        }];
        $httpProvider.responseInterceptors.push(interceptor);

        $locationProvider.hashPrefix("!");
    }
]);