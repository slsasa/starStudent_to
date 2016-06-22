/**
 * Created by sls on 16/5/10.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('my-dynamic', {
        url: '/my-dynamic',
        cache:false,
        templateUrl: 'templates/dynamic/my-dynamic.html',
        controller: 'myDynamicCtrl'

      });
  })
  .controller('myDynamicCtrl', function ($scope, $ionicPopup,$state, $http, userInfo, $ionicLoading) {

    $scope.rootPicUrl =  rootPicUrl;
    $scope.type = userInfo.personType;

    var update = function () {
      $ionicLoading.show();

      var url = rootUrl + '/dynamic/get_self_list';
      var query = {UserId: userInfo._id};


      $http.get(url, {params: query})
        .success(function (result) {
          $ionicLoading.hide();

          var data = result.data;


          $scope.myDynamics = data;
        })
        .error(function (err) {
          $ionicLoading.hide();

          $ionicPopup.alert({
            title:'提醒',
            template:'数据获取失败'+err
          });

        });

    }

    $scope.likeAdd = function(index,Id){
      $scope.objClick = document.getElementById(index + 'MyDynamic');
      var url = rootUrl + "/dynamic/add_like";

      var data = {
        UserId: userInfo._id,
        DynamicId:Id
      };
      $http.post(url, data)
        .success(function(result){
          $ionicPopup.alert({
            title:'成功',
            template:'点赞成功'
          });
          $scope.objClick.style.display = "none";

        })
        .error(function(err){
          $ionicPopup.alert({
            title:'失败',
            template:'点赞失败'+err
          });
          $scope.objClick.style.display = "none";
        });
    }



    var searchIndex = function(arr,Id){
      for(var i = 0; i < arr.length;i++){
        if(arr[i]._id == Id){
          return arr[i];
        }
      }
    };

    $scope.shareWeChat = function(index,id){
      $scope.objClick = document.getElementById(index + 'MyDynamic');
      $scope.objClick.style.display = "none";
      isInstalleagdWeChat();
      var myDynamic = searchIndex($scope.myDynamics,id);
      Wechat.share({
        text: myDynamic['Content'],
        scene:  Wechat.Scene.TIMELINE  // share to Timeline
      }, function () {
        $ionicPopup.alert({
          title:'提示' ,
          template:'成功'
        });
      }, function (reason) {
        $ionicPopup.alert({
          title:'Failed' ,
          template:reason
        });
      });


    }


    $scope.$on('$ionicView.beforeEnter', function () {
      update();
    })

    $scope.showClickDynamic = function (index) {
      $scope.objClick = document.getElementById(index + 'MyDynamic');
      if ($scope.objClick.style.display == "none") {
        $scope.objClick.style.display = "";
      } else {
        $scope.objClick.style.display = "none";
      }
    }

    $scope.showContent = function (index) {
      var objMoreContent = document.getElementById(index + "moreContentMyDynamic");
      var objContentSchool = document.getElementById(index + "contentMyDynamic");
      var objContentState = document.getElementById(index +'dynamicMyContentState');
      if (objMoreContent.style.display == "none") {
        objContentSchool.style.display = "none";
        objMoreContent.style.display = "";
        objContentState.innerHTML = '收起';


      } else {
        objMoreContent.style.display = "none";
        objContentSchool.style.display = "";
        objContentState.innerHTML = '全文';
      }
    }


    $scope.goIssue = function () {
      $state.go('issue')
    }

  })
