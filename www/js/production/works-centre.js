/**
 * Created by sls on 16/5/11.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('works-centre', {
        url: '/works-centre',
        templateUrl: 'templates/production/works-centre.html',
        controller: 'worksCentreCtrl'

      });
  })
  .controller('worksCentreCtrl', function ($scope, $state, $stateParams, userInfo, $http,$ionicPopup) {


    var url = rootUrl + '/teacher_article/get_self_list';

    $scope.teacher = userInfo.teacherInfo;
    //userInfo['TeacherRef']
    var update = function () {
      $http.get(url, {params: {TeacherId: $scope.teacher['_id'], ArticleType: 'log'}})
        .success(function (result) {
          var data = result['data'];

          $scope.TeacherLogList = data;
        })
        .error(function (err) {
          $ionicPopup.alert({
            title:'err',
            template:'获取数据失败'+ err
          });
        });

      //$http.get(url, {params: {TeacherId: $scope.teacher['_id'], ArticleType: 'paper'}})
      //  .success(function (result) {
      //    var data = result['data'];
      //    $scope.TeacherPaperList = data;
      //  })
    };

    update();

    $scope['goLogDetail'] = function (log) {
      userInfo.log = log;
      $state.go('works-detail');
    }
    //
    //$scope['goPaperDetails'] = function (paper) {
    //  userInfo.paper = paper;
    //  $state.go('paper-detail');
   // }


    //$scope.objCentreLog = document.getElementById('logCentre');
    //$scope.objCentrePaper = document.getElementById('paperCentre');
    //$scope.objCentreLogClick = document.getElementById('centreLogClick');
    //$scope.objCentrePaperClick = document.getElementById('centrePaperClick');
    //
    //$scope.objCentreLogClick.style.backgroundColor = '#F96A9F';
    //$scope.objCentreLogClick.style.color = "#fff";
    //$scope.showCentreLog = function () {
    //
    //  $scope.objCentrePaper.style.display = "none";
    //  $scope.objCentreLog.style.display = "";
    //
    //  if ($scope.objCentreLog.style.display == "") {
    //    changeClickLogBgColor("#f96a9f", "");
    //    changeClickFontColor("#fff", "black");
    //  }
    //
    //};
    //$scope.showCentrePaper = function () {
    //
    //  $scope.objCentreLog.style.display = "none";
    //  $scope.objCentrePaper.style.display = "";
    //  if ($scope.objCentrePaper.style.display == "") {
    //    changeClickLogBgColor("", "#f96a9f");
    //    changeClickFontColor("black", "#fff");
    //  }
    //};
    //
    //
    //var changeClickLogBgColor = function (log, paper) {
    //  $scope.objCentreLogClick.style.backgroundColor = log;
    //  $scope.objCentrePaperClick.style.backgroundColor = paper;
    //};
    //
    //var changeClickFontColor = function (log, paper) {
    //  $scope.objCentreLogClick.style.color = log;
    //  $scope.objCentrePaperClick.style.color = paper;
    //};

  });
