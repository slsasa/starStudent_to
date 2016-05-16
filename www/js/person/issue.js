/**
 * Created by sls on 16/5/12.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('issue',{
        url:'/issue',
        templateUrl:'templates/person/issue.html',
        controller:'issueCtrl'
      });
  })
<<<<<<< HEAD
  .controller('issueCtrl',function($scope,$cordovaImagePicker,$cordovaFileTransfer){
    $scope.contents;

    $scope.photos = ['img/img2.png'];
    $scope.img_id = [];
    $scope.clickPhoto = function (index) {

      var item = $scope.photos[index];
      if (item != 'img/img2.png') {
        $ionicLoading.show();


      } else {
        //
        var options = {
          maximumImagesCount: 9,
          width: 500,
          height: 500,
          quality: 80
        };

        $cordovaImagePicker.getPictures(options)
          //以下为选好图片后的方法
          // @type: results [1, 2, 3]
          .then(function (results) {


            results.forEach(function (item) {
              if (item != undefined) {
                //$scope.imgSrc_after = item;
                $scope.photos.push(item);
                var fileName = item.split('/').pop();
                var fileURL = item;

                var options = {
                  fileKey: "image",
                  fileName: fileName,
                  mimeType: "image/jpeg"
                };

                $cordovaFileTransfer.upload(encodeURI('http://115.159.115.145:3000/upload/'), fileURL, options)
                  .then(function (result) {
                    //
                    alert(JSON.stringify(result));
                    console.log(result);
                    $ionicLoading.hide();
                    $scope.img_id = result._id
                  });
              }
            });

          }, function (error) {
          })
      }
=======
  .controller('issueCtrl',function($scope, userInfo, $http, $ionicHistory, $ionicPopup){
    $scope.msg = {
      content: '',
      img: []
    }

    $scope.onSubmit = function(){

      var data = {
        issuer_id: userInfo._id,
        content: $scope.msg.content
      }
      console.log(data);

      if(userInfo.personType == "_stu"){
        var url = rootUrl + "/student_dynamic/add";
      }else if(userInfo.personType == "_teacher"){
        var url = rootUrl + "/teacher_dynamic/add";
      }

      $http.post(url, data)
        .success(function(result){
          console.log(JSON.stringify(result));

          if(result.ret_code == 0){
            console.log(JSON.stringify(result));
            $ionicPopup.alert({
              title: '提醒',
              template: '发布成功'
            })
            $ionicHistory.goBack(-1);
          }
        })
        .error(function(err){
          console.log("提交表单错误");
        })

>>>>>>> b0cb63814b31b19c785f70a196c47484e7710c60
    }
  })
