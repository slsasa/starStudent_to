/**
 * Created by sls on 16/5/9.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.person_teacher',{
        url:'/person_teacher',
        views:{'person':{
          templateUrl: 'templates/teacher/teacher-person.html',
          controller: 'terPersonCtrl'
        }}
      });
  })
  .controller('terPersonCtrl',function($rootScope, $scope, $state, $ionicPopup, userInfo, $http,$cordovaImagePicker,$cordovaFileTransfer){

    var update = function(){
      var url = rootUrl + "/teacher_info/get_info?TeacherId=" + userInfo._id;
      var teacherStyleUrl = rootUrl + "/teacher_style/get_self_style";

      $http.get(url)
        .success(function(result){
          console.log(JSON.stringify(result));
          var data = result.data;
          data.PicAvatarRef.Url = rootPicUrl + data.PicAvatarRef.Url;
          data.PicBgRef.Url = rootPicUrl + data.PicBgRef.Url;
          $scope.teacherInfo = data;
          console.log('teacher----------->',$scope.teacherInfo);
        })
        .error(function(err){
          $ionicPopup.alert({
            title:'数据获取失败',
            template:'失败:'+err
          });
        });
      $http.get(teacherStyleUrl,{params:{TeacherId:userInfo._id}})
      .success(function(result){
         var styleData = result.data;


           if(styleData['LikeListRef']){
             $scope.likeList = styleData['LikeListRef'].length;
           }else{
             $scope.likeList = 0;
           }
          if(styleData['FlowerListRef']) {
            $scope.flowerList = styleData['FlowerListRef'].length;
          }else{
            $scope.flowerList = 0;
          }
      })
      .error(function(error){
          alert(error);
      })
    }

    $scope.replaceImage = function(){

      var options = {
        maximumImagesCount: 1,
        width: 500,
        height: 500,
        quality: 80
      };
      $cordovaImagePicker.getPictures(options)
        .then(function (results) {
          var photo_id = $scope.teacherInfo['PicAvatarRef']['_id'];

          $scope.teacherInfo['PicAvatarRef']['Url'] = results[0];
          var fileName = $scope.teacherInfo['PicAvatarRef']['Url'].split('/').pop();
          var fileURL = $scope.teacherInfo['PicAvatarRef']['Url'];
          var options = {
            fileKey: "image",
            fileName: fileName,
            mimeType: "image/jpeg"
          };

          $cordovaFileTransfer.upload(encodeURI(rootUrl + '/upload'), fileURL, options)
            .then(function (result) {

              result.response = JSON.parse(result.response);
              var id = result['response']['data']['_id'];


              if(photo_id != id) {
                postAvatar(id);
              }

            });


          var postAvatar = function(photo_id){
            var data = {
              TeacherId: userInfo._id,
              PicAvatarRef:photo_id

            }

            var url = rootUrl + "/teacher_info/edit";

            $http.post(url, data)
              .success(function(){
                $ionicPopup.alert({
                  title:'成功',
                  template:'头像修改成功'
                });
              })
              .error(function(err){
                $ionicPopup.alert({
                  title:'失败',
                  template:'头像修改失败'+err
                });
              });
          }

        }, function (error) {
          $ionicPopup.alert({
            title: '提醒',
            template: '选择出错:' + error
          });

        });
    };


    $scope.$on('$ionicView.beforeEnter',function(){
      update();
    });



    $scope.edit = function(){

      $state.go('date-editor');
    };


    $scope.exit = function(){
      $state.go('login');
    };

    $scope.goMyStyle = function(){
      $state.go('my-style');
    };

    $scope.goMyDynamic = function(type){
      $state.go('my-dynamic',{type:type});
    };

    $scope.goWorksLog = function(){
      userInfo.teacher = $scope.teacherInfo ;
      $state.go('my-works');
    };

    $scope.goSetting = function(){
      $state.go('setting');
    };

    $scope.outLogin = function(){
      $ionicPopup.confirm({
        title: "退出当前账号",
        template: "退出账号将收不到任何信息，是否继续？",
        buttons:[
          {
            text:"是",
            onTap:function(e){
              $state.go('login');
            }
          },
          {text:"否"}
        ]
      });
    };

    //

  });


