
  window.angular.module('ngff.services.player', [])
  .factory('Player', ['$resource',
    function($resource){
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