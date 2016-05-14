/**
 * Created by sls on 16/5/11.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teacher-mine',{
        url:'/teacher-mine',
        templateUrl:'templates/teacherstyle/teacher-mine.html',
        controller:'teacherMineCtrl'

      });
  })
  .controller('teacherMineCtrl',function($scope,$state){
    $scope.teachers =  [{
      id:0,
      name:'李老师',
      longevity:'大专学历,小学一级教师。1999年参加工作,爱岗敬业,有才艺,有理想,。',
      honor:[{
        time:146131131331,
        reward:'广东省舞蹈比赛一等奖',
        rewardDetail:'在2016年的广东省教育局组织的拉丁舞比赛中荣获一等奖'
      },{
        time:146121131331,
        reward:'全国街舞比赛优秀奖',
        rewardDetail:'全部自由街舞竞技中国荣获优秀奖'
      }],
      Detail:'网络工程技术专业工学博士，计算机工程技术学院教授。软件技术与工程中心副主任。中国计算机学会高级会员，IEEE会员。广东省科技咨询专家库专家，广东省综合评标专家库专家，珠海市政府采购评审专家，广东企业科技特派员。',
      headImg:'img/img1.png',
      imgs:[{
        time:146131231331,
        img:'img/img1.png'
      },{
        time:146131231331,
        img:'img/img2.png'
      }],
      tearchingLog:[{
        title:'主型智能网络磁盘存储系统',
        content:'全自主型智能网络磁盘存储系统的存储管理方法研究，主要研究方向为计算机系统结构、网络存储、移动计算与云计算等',
        type:'教学日志',
        time:146131231331
      },{
        title:'全自主型智能网络磁盘存储系统',
        content:'全自主型智能网络磁盘存储系统的存储管理方法研究，主要研究方向为计算机系统结构、网络存储、移动计算与云计算等',
        type:'教学日志',
        time:146775554442
      }],
      praise:34,
      flower:32

    },{
      id:1,
      name:'白老师',
      longevity:'大专学历,小学一级教师。1999年参加工作,爱岗敬业,有才艺,有理想,。',
      honor:[{
        time:147231131331,
        reward:'广东省逗比比赛一等奖',
        rewardDetail:'在2016年的广东省教育局组织的拉丁舞比赛中荣获一等奖'
      },{
        time:146921131331,
        reward:'全国神经比赛优秀奖',
        rewardDetail:'全部自由街舞竞技中国荣获优秀奖'
      }],
      Detail:'计算机应用技术专业工学博士，计算机工程技术学院教授。软件技术与工程中心副主任。中国计算机学会高级会员，IEEE会员。广东省科技咨询专家库专家，广东省综合评标专家库专家，珠海市政府采购评审专家，广东企业科技特派员。',
      headImg:'img/img3.png',
      imgs:[{
        time:146111231331,
        img:'img/img4.png'
      },{
        time:146231231331,
        img:'img/img1.png'
      }],
      tearchingLog:[{
        title:'主型智能网络磁盘存储系统',
        content:'全自主型智能网络磁盘存储系统的存储管理方法研究，主要研究方向为计算机系统结构、网络存储、移动计算与云计算等',
        type:'教学日志',
        time:146131231331
      },{
        title:'全自主型智能网络磁盘存储系统',
        content:'全自主型智能网络磁盘存储系统的存储管理方法研究，主要研究方向为计算机系统结构、网络存储、移动计算与云计算等',
        type:'教学日志',
        time:146775554442
      }],
      praise:34,
      flower:32
    }];


    //$scope.count =0;
    //$scope.countFlower = function() {
    //  for (var i = 0; i < $scope.teachers.length; i++) {
    //    $scope.count += $scope.teachers[i].flower;
    //  }
    //  return $scope.count;
    //}


    $scope.objChat = document.getElementById('chat');
    $scope.objCharm = document.getElementById('charm');
    $scope.objChatClick = document.getElementById('chatClick');
    $scope.objCharmClick = document.getElementById('charmClick');

    $scope.objChatClick.style.backgroundColor = "#F96A9F";
    $scope.objChatClick.style.color = "#fff";

    $scope.showChat = function(){
      $scope.objCharm.style.display = "none";
      $scope.objChat.style.display = "";
      if($scope.objChat.style.display == ""){
        changeCololBgClick("#F96A9F","");
        changeColorFont("#fff","black");

      }
    }

    $scope.showCharm = function(){
      $scope.objChat.style.display = "none";
      $scope.objCharm.style.display = "";

      if($scope.objCharm.style.display == ""){
        changeCololBgClick("","#F96A9F");
        changeColorFont("black","#fff");


      }
    }

    var changeCololBgClick = function(chatBgClick,charmClick){
      $scope.objChatClick.style.backgroundColor = chatBgClick;
      $scope.objCharmClick.style.backgroundColor = charmClick;
    }

    var changeColorFont = function(chatClick,charmClick){
      $scope.objChatClick.style.color =chatClick;
      $scope.objCharmClick.style.color =charmClick;

    }

    $scope.goPersonalMine = function(teacherId){
      $state.go('personal-style',{teacherId:teacherId});
    }
    $scope.goWorks = function(teacherId){
      $state.go('works-centre',{teacherId:teacherId});
    }

  })
