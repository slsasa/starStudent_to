/**
 * Created by sls on 16/5/3.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('personal-style',{
        url:'/teacher-mine/personal-style:teacherId',
        templateUrl:'templates/teacherstyle/personal-style.html',
        controller:'personalCtrl'

      });
  })
  .controller('personalCtrl',function($scope,$stateParams,$state,Base){
      $scope.like = 0;
      var teachers =  [{
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
      styleImg:[{
          time:1482994422123,
          imgs:['img/img2.png','img/mebk.jpeg','img/img3.png','img/apply.jpeg']
      },{
          time:1483064422123,
          imgs:['img/img1.png','img/mebk.jpeg','img/img3.png']
      },{
          time:1482934422123,
          imgs:['img/img4.png','img/mebk.jpeg','img/img3.png']
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
      }]

    },{
      id:1,
      name:'白老师',
      longevity:'大专学历,小学一级教师。1999年参加工作,爱岗敬业,有才艺,有理想,。',
      honor:[{
        time:147231131331,
        reward:'广东省逗比比赛一等奖',
        rewardDetail:'在2016年的广东省教育局组织的拉丁舞比赛中荣获一等奖'
      },{
        time:146821130331,
        reward:'全国神经比赛优秀奖',
        rewardDetail:'全部自由街舞竞技中国荣获优秀奖'
      }],
      Detail:'计算机应用技术专业工学博士，计算机工程技术学院教授。软件技术与工程中心副主任。中国计算机学会高级会员，IEEE会员。广东省科技咨询专家库专家，广东省综合评标专家库专家，珠海市政府采购评审专家，广东企业科技特派员。',
      headImg:'img/img3.png',
      styleImg:[{
        time:1482994422123,
        imgs:['img/img2.png','img/mebk.jpeg','img/img3.png','img/apply.jpeg']
      },{
        time:1483064422123,
        imgs:['img/img1.png','img/mebk.jpeg','img/img3.png']
      },{
        time:1482934422123,
        imgs:['img/img4.png','img/mebk.jpeg','img/img3.png']
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
      }]
    }];



    var getTeacher = function(teacherId){
      for(var i = 0; i < teachers.length;i++){
        if( teachers[i].id == parseInt(teacherId)){
          return teachers[i];
        }
      }
    }

    $scope.teacher = getTeacher($stateParams.teacherId);

      //点赞
    $scope.clickLike = function(){
        $scope.like += 1;
    }

    $scope.goImgs = function(){
      $state.go('style-img',{teacherId:$stateParams.teacherId});
    }

   $scope.showImgLen = 0;

   $scope.goPaper = function(teacherId){
     $state.go('works-centre',{teacherId:teacherId})
   }


  })
