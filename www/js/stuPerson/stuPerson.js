/**
 * Created by apple-ty on 16-5-4.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.person_stu',{
        url:'/person_stu',
        cache: false,
        views:{'person':{
          templateUrl: 'templates/stuPerson/stuPerson.html',
          controller: 'stuPersonCtrl'
        }}
      });
  })
  .controller('stuPersonCtrl',function($rootScope, $scope, $state, $ionicPopup, userInfo, $http, $ionicHistory,$cordovaFileTransfer,$cordovaImagePicker){

    $scope.rootPicUrl = rootPicUrl;
    var update = function(){
      var url = rootUrl + "/student_info/get_info?StudentId=" + userInfo._id;

      $http.get(url)
        .success(function(result){
          console.log(JSON.stringify(result));
          var data = result.data;
          data['PicAvatarRef']['Url'] = rootPicUrl +  data['PicAvatarRef']['Url'];
          data.PicBgRef.Url = rootPicUrl + data.PicBgRef.Url;
          $scope.studentInfo = data;
          console.log($scope.studentInfo);
        })
        .error(function(err){

          $ionicPopup.alert({
            title:'提醒',
            template:'数据获取失败'+err
          });
        })
    }

    $scope.$on('$ionicView.beforeEnter' ,function(){
      //setTimeout(update,500);
      update();
    });

    //资料编辑
    $scope.editor = function () {
      $state.go('personage-msg');
    }
    //学习情况
    $scope.learnSits = function(){
      $state.go('student-state');
      //$state.go('learn-situation');
    }
    //学员荣耀
    $scope.studentHons = function(){
      $state.go('student-honor');
    }
    //教师评语
    $scope.techerCom = function(){
      $state.go('techer-comment');
    }

    $scope.goSetting = function(){
      $state.go('setting');
    }

    $scope.goStuMyDynamic = function(type){
      $state.go('my-dynamic',{type:type});
    }

    $scope.outlogin = function(){
      $ionicPopup.confirm({
        title: "退出当前账号",
        template: "退出账号将收不到任何信息，是否继续？",
        buttons:[
          {
            text:"是",
            onTap:function(e){
              //remember();
              $ionicHistory.clearHistory();
              $state.go('login');
            }
          },
          {text:"否"}]
      });
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
           var photo_id = $scope.studentInfo['PicAvatarRef']['_id'];

           $scope.studentInfo['PicAvatarRef']['Url'] = results[0];
            var fileName = $scope.studentInfo['PicAvatarRef']['Url'].split('/').pop();
            var fileURL = $scope.studentInfo['PicAvatarRef']['Url'];
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
                StudentId: userInfo._id,
                PicAvatarRef:photo_id

              }

              var url = rootUrl + "/student_info/edit";

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
    }


  })
