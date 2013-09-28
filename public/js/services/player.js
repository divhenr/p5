window.angular.module('mean.player').factory('Player', ['$resource', function($resource){
      return $resource(
        'players/:playerId',
        {
          playerId:'@_id'
        },
        {
          update: {method: 'PUT'}
        }
      )
    }]);