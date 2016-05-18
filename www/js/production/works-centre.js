/**
 * Created by sls on 16/5/11.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('works-centre',{
        url:'/works-centre',
        templateUrl:'templates/production/works-centre.html',
        controller:'worksCentreCtrl'

      });
  })
  .controller('worksCentreCtrl',function($scope,$state,$stateParams,$http,$ionicPopup,userInfo){

    $scope['teacher'] = userInfo.teacherInfo;



    var getLog = function(){
      var url_log = rootUrl +'/teacher_article/get_all_list?ArticleType=log';

      $http.get(url_log)
        .success(function(result){
          var data = result.data;

          $scope['teacherLog'] = data;
        })
        .error(function(err){
          $ionicPopup.alert({
            title:'err',
            template:'读取数据失败'
          });
          //console.log(JSON.stringify(err));
        })

    }

    var getPaper = function(){
      var url_paper = rootUrl + '/teacher_article/get_all_list?ArticleType=paper';

      $http.get(url_paper)
        .success(function(result){
          var data = result.data;
          $scope['teacherPaper'] = data;

        })
        .error(function(err){
          $ionicPopup.alert({
            title:'err',
            template:'读取数据失败'
          });
        })
    }


    $scope.$on('$ionicView.beforeEnter',function(){
      getLog();
      getPaper();
    });

    $scope['goLogDetails'] = function(log){
      userInfo['log'] = log;
      $state.go('works-detail');
    }



    $scope.objCentreLog = document.getElementById('logCentre');
    $scope.objCentrePaper = document.getElementById('paperCentre');
    $scope.objCentreLogClick = document.getElementById('centreLogClick');
    $scope.objCentrePaperClick = document.getElementById('centrePaperClick');

    $scope.objCentreLogClick.style.backgroundColor = '#F96A9F';
    $scope.objCentreLogClick.style.color = "#fff";
    $scope.showCentreLog= function(){

         $scope.objCentrePaper.style.display = "none"
         $scope.objCentreLog.style.display = "";

      if($scope.objCentreLog.style.display == ""){
        changeClickLogBgColor("#f96a9f","");
        changeClickFontColor("#fff","black");
      }

    }
    $scope.showCentrePaper = function(){


      $scope.objCentreLog.style.display = "none";
      $scope.objCentrePaper.style.display = ""
      if($scope.objCentrePaper.style.display == ""){
        changeClickLogBgColor("","#f96a9f");
        changeClickFontColor("black","#fff");
      }

    }




    var changeClickLogBgColor = function(log,paper){
      $scope.objCentreLogClick.style.backgroundColor = log;
      $scope.objCentrePaperClick.style.backgroundColor = paper;
    }

    var changeClickFontColor = function(log,paper){
      $scope.objCentreLogClick.style.color= log;
      $scope.objCentrePaperClick.style.color = paper;
    }


  })
