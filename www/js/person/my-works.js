/**
 * Created by sls on 16/5/12.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('my-works', {
        url: '/works',
        templateUrl: 'templates/person/my-works.html',
        controller: 'myWorksCtrl'

      });
  })
  .controller('myWorksCtrl', function ( $scope, $state, $ionicModal, $cordovaImagePicker, $cordovaFileTransfer, $ionicLoading, $http, $filter, $ionicPopup, userInfo) {


    //$ionicLoading.show();
    var getLogInfo = function(){


      $scope.userId =userInfo._id;
      var url = rootUrl + "/teacher_article/get_self_list";

      $http.get(url,{params:{TeacherId:userInfo._id,ArticleType:'log'}})
        .success(function(result){

          var data = result.data;
          $scope.logs = data;

          $ionicLoading.hide();
        })
        .error(function(err){
          $ionicLoading.hide();
          console.log("获取作品失败");
        })
    }



    var getPaperInfo = function(){

      $scope.teacher = userInfo.teacherInfo;
      console.log(">>>>>>>>>>>>>teahcer",JSON.stringify($scope.teacher));

      var url = rootUrl + "/teacher_article/get_self_list";

      $http.get(url,{params:{TeacherId:$scope.teacher['TeacherRef'] ,ArticleType:'paper'}})
        .success(function(result){

          var data = result.data;
          $scope.papers = data;
        })
        .error(function(err){
          console.log("获取作品失败");
        })
    }


    $scope.goLogsDetail = function (log) {
      userInfo.mgLog = log
      $state.go('myLogs-detail');
    };

    $scope.goPaperDetail = function (paper) {
      userInfo.myPaper = paper;
      $state.go('myPapers-detail');
    };


    //提交文章选择器
    $ionicModal.fromTemplateUrl('templates/person/submit-log.html',
      function (modal) {
        $scope.editmodal_star = modal;
      }, {
        scope: $scope,
        animation: 'slide-in-up'
      }
    );

    //打开选择器
    $scope.openModel_start = function () {
      $scope.editmodal_star.show();
    };

    $scope.close = function () {
      $scope.editmodal_star.hide();
    };

    $scope.articleType = '教学日志';






    //按钮状态
    var changeClickLogBgColor = function (log, paper) {
      $scope.objLogClick.style.backgroundColor = log;
      $scope.objPaperClick.style.backgroundColor = paper;
    };

    var changeClickFontColor = function (log, paper) {
      $scope.objLogClick.style.color = log;
      $scope.objPaperClick.style.color = paper;
    };

    $scope.objLog = document.getElementById('log');
    $scope.objPaper = document.getElementById('paper');
    $scope.objLogClick = document.getElementById('logClick');
    $scope.objPaperClick = document.getElementById('paperClick');

    $scope.objLogClick.style.backgroundColor = "#f96a9f";
    $scope.objLogClick.style.color = '#fff';
    $scope.showLog = function () {
      $scope.objPaper.style.display = "none";
      $scope.objLog.style.display = "";
      getLogInfo();
      if ($scope.objLog.style.display == "") {
        changeClickLogBgColor("#f96a9f", "");
        changeClickFontColor("#fff", "black");
      }
    };

    $scope.showPaper = function () {
      $scope.objLog.style.display = "none";
      $scope.objPaper.style.display = "";
      getPaperInfo();
      if ($scope.objPaper.style.display == "") {
        changeClickLogBgColor("", "#f96a9f");
        changeClickFontColor("black", "#fff");
      }
    };

    $scope.showLog();


    $scope.onSubmit = function (article, articleContent) {
      $scope.articleType = article;
      $scope.$scope.articleContent = articleContent;
      if (article) {
        $ionicLoading.show();

        $http.post('http://115.159.115.145:3000/upload/', data)
          .success(function () {
            $ionicLoading.hide();
            $ionicPopup.alert({
              title: '提示',
              template: '提交申请成功'
            }).then(function () {
              $ionicHistory.goBack();
            });
          }).error(function () {

          });
      }
    };


    $scope.photos = ['img/personal/FB.png'];
    $scope.img_id = [];
    $scope.clickPhoto = function (index) {

      var item = $scope.photos[index];
      if (item != 'img/personal/FB.png') {
        $ionicLoading.show();
        //$http.post('http://115.159.115.145:3000/upload/', {file: item}).success(function () {
        //  $ionicLoading.hide();
        //  $scope.photos.splice(index, 1);
        //});

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
                    //$scope.img_id
                  });
              }
            });

          }, function (error) {
          })
      }
    }
  })

