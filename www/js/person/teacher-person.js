/**
 * Created by sls on 16/5/9.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.person_teacher',{
        url:'/person_teacher',
        views:{'person':{
          templateUrl: 'templates/person/teacher-person.html',
          controller: 'terPersonCtrl'
        }}
      });
  })
  .controller('terPersonCtrl',function($rootScope, $scope, $state, $ionicPopup, userInfo, $http,$cordovaImagePicker,$cordovaFileTransfer){

    var update = function(){
      var url = rootUrl + "/teacher_info/get_info?TeacherId=" + userInfo._id;

      $http.get(url)
        .success(function(result){
          console.log(JSON.stringify(result));
          var data = result.data;
          data.PicAvatarRef.Url = rootPicUrl + data.PicAvatarRef.Url;
          data.PicBgRef.Url = rootPicUrl + data.PicBgRef.Url;
          $scope.teacherInfo = data;
          console.log($scope.teacherInfo);
        })
        .error(function(err){
          console.log("获取个人信息失败");
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
                alert('修改成功');

              })
              .error(function(err){
                alert('修改失败:'+err);
              })
          }

        }, function (error) {
          $ionicPopup.alert({
            title: '提醒',
            template: '选择出错:' + error
          });

        });
    }


    $scope.$on('$ionicView.beforeEnter',function(){
      update();
    });



    $scope.edit = function(){

      $state.go('date-editor');
    };

    $scope.addPraise = function(){
      $scope.teacherPerson.praise +=1;
    }
    $scope.addFlower = function(){
      $scope.teacherPerson.flower +=1;
    }
    $scope.exit = function(){
      $state.go('login');
    }
    $scope.goMyStyle = function(){
      $state.go('my-style');
    }
    $scope.goMyDynamic = function(type){
      $state.go('my-dynamic',{type:type});
    }

    $scope.goWorksLog = function(){
      $state.go('my-works');
    }

    $scope.goTerSetting = function(teacher){
      $state.go('setting',{type:teacher});
    }

    $scope.outLogin = function(){
      $ionicPopup.confirm({
        title: "退出当前账号",
        template: "退出账号将收不到任何信息，是否继续？",
        buttons:[
          {
            text:"是",
            onTap:function(e){

              remember();
              $state.go('login');
            }
          },
          {text:"否"}
        ]
      })

    }
    var remember =function(){
      if(userInfo.checked ==true){
        $rootScope.user.num  =  userInfo.userNum;
        $rootScope.user.pwd  =  userInfo.userPwd;
      }else{
        $rootScope.user.pwd = '';
      }
    }

  })


