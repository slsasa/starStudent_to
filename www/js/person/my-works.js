/**
 * Created by sls on 16/5/12.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('my-works', {
        url: '/works',
        templateUrl: 'templates/person/my-works.html',
        controller: 'worksCtrl'

      });
  })
  .controller('worksCtrl', function ($rootScope, $scope, $state, $ionicModal, $cordovaImagePicker, $cordovaFileTransfer, $ionicLoading, $http, $filter, $ionicPopup, userInfo) {
    //$scope.teacher = {
    //  id: 0,
    //  name: '李老师',
    //  longevity: '大专学历,小学一级教师。1999年参加工作,爱岗敬业,有才艺,有理想,。',
    //  honor: [{
    //    time: 146131131331,
    //    reward: '广东省舞蹈比赛一等奖',
    //    rewardDetail: '在2016年的广东省教育局组织的拉丁舞比赛中荣获一等奖'
    //  }, {
    //    time: 146121131331,
    //    reward: '全国街舞比赛优秀奖',
    //    rewardDetail: '全部自由街舞竞技中国荣获优秀奖'
    //  }],
    //  Detail: '网络工程技术专业工学博士，计算机工程技术学院教授。软件技术与工程中心副主任。中国计算机学会高级会员，IEEE会员。广东省科技咨询专家库专家，广东省综合评标专家库专家，珠海市政府采购评审专家，广东企业科技特派员。',
    //  headImg: 'img/img1.png',
    //  imgs: [{
    //    time: 146131231331,
    //    img: 'img/img1.png'
    //  }, {
    //    time: 146131231331,
    //    img: 'img/img2.png'
    //  }],
    //  tearchingLog: [{
    //    title: '主型智能网络磁盘存储系统',
    //    content: '全自主型智能网络磁盘存储系统的存储管理方法研究，主要研究方向为计算机系统结构、网络存储、移动计算与云计算等',
    //    type: '教学日志',
    //    time: 146131231331
    //  }, {
    //    title: '全自主型智能网络磁盘存储系统',
    //    content: '全自主型智能网络磁盘存储系统的存储管理方法研究，主要研究方向为计算机系统结构、网络存储、移动计算与云计算等',
    //    type: '教学日志',
    //    time: 146775554442
    //  }],
    //  thesis: [{
    //    title: '这是个论文',
    //    content: '我们探讨理方法研究，主要研究方向为计算机系统结构、网络存储、移动计算与云计算等',
    //    type: '学术论文',
    //    time: 146131231331
    //  }, {
    //    title: '还是论文',
    //    content: '探讨怎样不挂科盘存储系统的存储管理方法研究，主要研究方向为计算机系统结构、网络存储、移动计算与云计算等',
    //    type: '学术论文',
    //    time: 146775554442
    //  }],
    //  flower: 10,
    //  praise: 32,
    //  share: 311
    //}

    var getLogInfo = function(){
      var url = rootUrl + "/teacher_article/get_all_list?article_type=log";

      $http.get(url)
        .success(function(result){
          console.log(JSON.stringify(result));
          var data = result.data;
          $scope.teacher = data;
        })
        .error(function(err){
          console.log("获取作品失败");
        })
    }


    var getPaperInfo = function(){
      var url = rootUrl + "/teacher_article/get_all_list?article_type=paper";

      $http.get(url)
        .success(function(result){
          console.log(JSON.stringify(result));
          var data = result.data;
          $scope.teacher = data;
        })
        .error(function(err){
          console.log("获取作品失败");
        })
    }


    $scope.goLogsDetail = function (index) {
      $state.go('myLogs-detail', {index: index});
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


    //var data = {
    //   articleType: $scope.articleType,
    //   articleContent: $scope.articleContent,
    //   photos: $scope.photos.forEach(function(item){
    //     return item
    //   })
    //}

    $scope.goPaperDetail = function (index) {
      $state.go('myPapers-detail', {index: index})
    };

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


    $scope.photos = ['img/img2.png'];
    $scope.img_id = [];
    $scope.clickPhoto = function (index) {

      var item = $scope.photos[index];
      if (item != 'img/img2.png') {
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
                    $scope.img_id = result._id
                  });
              }
            });

          }, function (error) {
          })
      }
    }
  })

