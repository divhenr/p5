  window.angular.module('mean.team').factory('Team', ['$resource', function($resource){
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