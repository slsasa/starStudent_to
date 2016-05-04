/**
 * Created by apple-ty on 16-4-28.
 */
angular.module('starter')
  .controller('OutcomeCtrl',function($scope,Base){
    $scope.schOutcomes = Base. getAllschOutcome();
  });
