  window.angular.module('ngff.services.myTeam', [])
  .factory('MyTeam', ['$resource',
    function($resource){
      return $resource(
        '/teams/:teamId',
        {
          teamId:'@_id'
        },
        {
          update: {method: 'PUT'}
        }
      )
    }]);