/**
 * Created by sls on 16/5/11.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('honor-area', {
        url: '/honor-area',
        templateUrl: 'templates/honorUp/honor-area.html',
        controller: 'honorAreaCtrl'
      })
  })
  .controller('honorAreaCtrl',function($scope, $http,$ionicLoading){

    $ionicLoading.show();
    var getStarData = function(){
      var url = rootUrl + "/honor/get_all_list";

      $http.get(url)
        .success(function(result){
          console.log(JSON.stringify(result));
          var data = result.data;
          data.forEach(function(item){
            item.pic_avatar_url = rootPicUrl + item.pic_avatar_url;
          });
          $scope.starList = data;
          $ionicLoading.hide();
        })
        .error(function(err){
          $ionicLoading.hide();
          $ionicPopup.alert({
            title:'err',
            template:'数据加载失败'
          });
          console.log("获取明星榜信息失败");
        })
    };

    var getHonorData = function(){
      var url = rootUrl + "/teacher_honor/get_all_list";

      $http.get(url)
        .success(function(result){

          console.log(JSON.stringify(result));
          var data = result.data;
          data.forEach(function(item){
            item.pic_avatar_url = rootPicUrl + item.pic_avatar_url;
          })
          $scope.honorWall = data;
          $ionicLoading.hide();
        })
        .error(function(err){
          $ionicLoading.hide();
          console.log("获取荣誉榜信息失败");
        })
    }


    $scope.objStarClick = document.getElementById('starClick');
    $scope.objHonorClick = document.getElementById('honorClick');

    $scope.objStarClick.style.backgroundColor = "#F96A9F";
    $scope.objStarClick.style.color = "#fff";

    $scope.showStar = function(){

      var objStar = document.getElementById('star');
      var objHonor = document.getElementById('honor');
      objHonor.style.display = "none";
      objStar.style.display = "";
      getStarData();

      if(objStar.style.display == ""){

        changeClickBg("#F96A9F","");
        changeClickFontColor("#fff","black");

      }
    }

    $scope.showHonor = function(){
      var objStar = document.getElementById('star');
      var objHonor = document.getElementById('honor');
      objStar.style.display = "none";
      objHonor.style.display = "";
      getHonorData();
      if(objHonor.style.display == ""){

        changeClickBg("","#F96A9F");
        changeClickFontColor("black","#fff");

      }
    }


    var changeClickBg = function(star,honor){
      $scope.objStarClick.style.backgroundColor = star;
      $scope.objHonorClick.style.backgroundColor = honor;
    }

    var changeClickFontColor = function(star,honor){

      $scope.objStarClick.style.color = star;
      $scope.objHonorClick.style.color = honor;
    }

    //一进来先显示明星榜
    $scope.showStar();

  })
