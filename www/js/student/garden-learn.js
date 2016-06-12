/**
 * Created by sls on 16/6/4.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('garden-learn', {
        url: '/garden-learn',
        cache:true,
        templateUrl: 'templates/student/garden-learn.html',
        controller: 'learnGardenCtrl'

      });
  })
  .controller('learnGardenCtrl',function($scope, $ionicPopup,$state, $http, userInfo, $ionicLoading){

    $scope.rootPicUrl = rootPicUrl;

    var update = function(){
      var url = rootUrl +'/learn_garden/get_list';
      $ionicLoading.show();
      $http.get(url)
        .success(function(result){

           $scope.learns = result['data'];
          $ionicLoading.hide();
        })
        .error(function(err){
          $ionicLoading.hide();
          $ionicPopup.alert({
            title:'err',
            template:'获取数据出错:'+err
          });
        })
    };

    $scope.$on('$ionicView.beforeEnter',function(){
      update();
    });


    $scope.goAddGarden = function(){
      $state.go('post-garden');
    };

    $scope.showMoreContent = function(index){
      var objContent = document.getElementById(index+'contentLearn');
      var objMoreContent = document.getElementById(index+'moreContentLearn');
      var objContentState = document.getElementById(index+'state');
      if(objContent.style.display == "none"){
        objMoreContent.style.display = "none";
        objContent.style.display = "";
        objContentState.innerHTML = '全文';
      }else{
        objContent.style.display = "none";
        objMoreContent.style.display = "";
        objContentState.innerHTML = '收起'
      }

    }
  })
