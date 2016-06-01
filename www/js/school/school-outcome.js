/**
 * Created by apple-ty on 16-4-28.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('school-outcome', {
        url: '/school-outcome',
        cache:false,
        templateUrl: 'templates/school/school-outcome.html',
        controller: 'outcomeCtrl'
      });
  })

  .controller('outcomeCtrl',function($scope, $http,$state,$ionicLoading,userInfo){

    $ionicLoading.show();

    var update = function () {

      var url = rootUrl + "/school_achieve/get_list";

      $http.get(url)
        .success(function (result) {
          console.log(JSON.stringify(result));

          var data = result.data;
          data.forEach(function (item) {
            item.img = rootPicUrl + item['PicRef']['Url'];
          });

          $scope.schOutcomes = data;

          $ionicLoading.hide();
        })
        .error(function (err) {
          $ionicLoading.hide();
          console.log(JSON.stringify(err));
        })
    };

    $scope.$on('$ionicView.beforeEnter', function () {
      update();
    });

    //$scope.doRefresh = function () {
    //  update();
    //  $scope.$broadcast('scroll.infiniteScrollComplete');
    //  $scope.$broadcast('scroll.refreshComplete');
    //};


    $scope.goDetailOutcome = function(outcome) {
      userInfo.outComeDetail = outcome;
      $state.go('outcome-detail')
    }

  });
