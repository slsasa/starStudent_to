/**
 * Created by apple-ty on 16-5-8.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('learn-garden',{
        url:'/learn-garden',
          templateUrl: 'templates/stuPerson/learn-garden/learn-garden.html',
          controller: 'learnGardenCtrl'
      });
  })
  .controller('learnGardenCtrl',function($scope, $state, $http){

    $scope.rootPicUrl = rootPicUrl;

    var update = function(){
      var url = rootUrl + "/learn_garden/get_list";

      $http.get(url)
        .success(function(result){
          console.log(JSON.stringify(result));
          var data = result.data;
          $scope.leagardens = data;
        })
        .error(function(err){
          console.log("获取学习院数据失败");
        })
    }

    $scope.$on('$ionicView.beforeEnter',function(){
      update();
    })

    $scope.showleagarden = function(stuId){
      var objMoreContent = document.getElementById(stuId+"moreContentLea");
      var objContentLearn = document.getElementById(stuId+"contentLea");
      if(objMoreContent.style.display == "none"){
        objContentLearn.style.display = "none";
        objMoreContent.style.display = "";


      }else{
        objMoreContent.style.display = "none";
        objContentLearn.style.display = "";

      }
    }

    $scope.goAddGarden = function(){
      $state.go('post-garden');
    }
  })
