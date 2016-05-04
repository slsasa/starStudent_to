/**
 * Created by apple-ty on 16-5-4.
 */
angular.module('starter')
  .controller('outcomeDetailCtrl',function($scope,$stateParams,Base){
    $scope.outcomeDetail = Base.getOutcomeDetail($stateParams.outcomeId);
  })
