/**
 * Created by apple-ty on 16-5-4.
 */

angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.apply',{
        url:'/apply',
        views:{'apply':{
          cache: false,
          templateUrl: 'templates/apply/apply.html',
          controller: 'ApplyCtrl'
        }}
      });
  })

  .controller('ApplyCtrl',function($scope, $state, $http,$ionicLoading,userInfo){
    var update = function(){
      $ionicLoading.show();
      var url = rootUrl + "/sign_up_intro/get_list";
      $http.get(url)
        .success(function(result){
          console.log(JSON.stringify(result));
          var data = result.data;

          data.forEach(function(item){
            var begin_date = new Date(item['begin_time']).getTime();
            var end_date = new Date(item['end_time']).getTime();
            item['begin_time'] = begin_date;
            item['end_time'] = end_date;
            item['PicRef']['Url'] = rootPicUrl + item['PicRef']['Url'];

            $ionicLoading.hide();
          });

          $scope.applys = data;
        })
        .error(function(err){
          console.log("获取数据失败");
        })
    };

    $scope.$on('$ionicView.beforeEnter',function(){
      update();
    });

    $scope.goApplyDetail = function(apply){
      userInfo.apply = apply;

      $state.go('applyDetail');
    }
  });
