/**
 * Created by sls on 16/5/11.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('honor-area', {
        url: '/honor-area',
        templateUrl: 'templates/honorUp/honor-area.html',
        controller: 'honorAreaCtrl'
      })
  })
  .controller('honorAreaCtrl',function($scope){
    $scope.honorWall = [{
      id:0,
      name:'李德老师',
      img:'img/img1.png',
      honorDetail:'荣获湖南省教育局舞蹈类比赛拉丁舞的冠军'
    },{
      id:1,
      name:'彭而老师',
      img:'img/img2.png',
      honorDetail:'荣获全国书法比赛一等奖'
    },{
      id:2,
      name:'吴杜尔老师',
      img:'img/img3.png',
      honorDetail:'大专学历,小学一级教师。1999年参加工作,爱岗敬业,有才艺,有理想,。'
    },{
      id:3,
      name:'李老师',
      img:'img/img4.png',
      honorDetail:'大专学历,小学一级教师。1999年参加工作,爱岗敬业,有才艺,有理想,。'
    }];

    $scope.starList  = [{
      id:0,
      name:'张三',
      img:'img/img3.png',
      honorDetail:'2015年下半年年级一等经，语文119、数学110、英语120、综合280'
    },{
      id:1,
      img:'img/img1.png',
      name:'王五',
      honorDetail:'2015年下半年年级一等经，语文119、数学110、英语120、综合280'
    },{
      id:2,
      img:'img/img2.png',
      name:'moumou',
      honorDetail:'2015年下半年年级一等经，语文119、数学110、英语120、综合280'
    },{
      id:3,
      img:'img/img4.png',
      name:'moumou',
      honorDetail:'2015年下半年年级一等经，语文119、数学110、英语120、综合280'
    }];

    $scope.objStarClick = document.getElementById('starClick');
    $scope.objHonorClick = document.getElementById('honorClick');

    $scope.objStarClick.style.backgroundColor = "#F96A9F";
    $scope.objStarClick.style.color = "#fff";

    $scope.showStar  = function(){

      var objStar = document.getElementById('star');
      var objHonor = document.getElementById('honor');
      objHonor.style.display = "none";
      objStar.style.display = "";

      if(objStar.style.display == ""){

        changeClickBg("#F96A9F","");
        changeClickFontColor("#fff","black");

      }
    }

    $scope.showHonor = function(){
      var objStar = document.getElementById('star');
      var objHonor = document.getElementById('honor');
      objStar.style.display = "none";
      objHonor.style.display = "";
      if(objHonor.style.display == ""){

        changeClickBg("","#F96A9F");
        changeClickFontColor("black","#fff");

      }
    }


    var changeClickBg = function(star,honor){
      $scope.objStarClick.style.backgroundColor = star;
      $scope.objHonorClick.style.backgroundColor = honor;
    }

    var changeClickFontColor = function(star,honor){

      $scope.objStarClick.style.color = star;
      $scope.objHonorClick.style.color = honor;
    }

  })
