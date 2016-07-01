/**
 * Created by sls on 16/5/10.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('my-dynamic', {
        url: '/my-dynamic',
        cache:true,
        templateUrl: 'templates/dynamic/my-dynamic.html',
        controller: 'myDynamicCtrl'

      });
  })
  .controller('myDynamicCtrl', function ($scope, $ionicPopup,$state, $http, userInfo,$ionicModal, $ionicLoading) {

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
          update();
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
      if(myDynamic['Content']!='  '){
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
          title:'提示' ,
          template:'分享失败'+reason
        });
      });
    }else{
        var message = {
          title: "This is a Title",
          description: "Sending from test application",
          //text: "分享是什么鬼 ",
          //mediaTagName: "TEST-TAG-001",
          messageExt: "这是第三方带的测试字段",
          messageAction: "<action>dotalist</action>",
          media: {
            type: Wechat.Type.IMAGE,
            image:rootPicUrl+ myDynamic['PicListRef'][0]['Url']
          }
        };
        Wechat.share({
          message:message,
          scene: Wechat.Scene.TIMELINE   // share to Timeline
        }, function () {
          $ionicPopup.alert({
            title:'成功',
            template:'分享成功'
          });
        }, function (reason) {
          $ionicPopup.alert({
            title:'失败',
            template:'分享失败:'+reason
          });
        });
      }
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
      $state.go('issue');
    };

    //显示大图
    var showBigImage= function(imageUrl){
      $scope.imageUrl = imageUrl;
      $scope.bigImage = true;
    };
    $scope.bigImage = false;    //初始默认大图是隐藏的
    var hideBigImage = function () {
      $scope.bigImage = false;
    };


    //显示大图选择器
    $ionicModal.fromTemplateUrl('templates/teacher/showBigImage.html',
      function(modal){
        $scope.showBigImage_star = modal;
      },{
        scope:$scope,
        animation:'slide-in-up'
      }
    );

    //打开选择器
    $scope.openBigImage_star = function(modal){
      showBigImage(modal);
      $scope.showBigImage_star.show();
    };

    //关闭选择器
    $scope.closeBigImage_hide = function(){
      hideBigImage();
      $scope.showBigImage_star.hide();
    };

  })
