/**
 * Created by sls on 16/5/6.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('logs-detail',{
        url:'/logs:index',
        templateUrl:'templates/production/works-detail.html',
        controller:'logsDetailCtrl'
      });
  })

  .controller('logsDetailCtrl', function ($scope,$stateParams) {
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
        time:146131231331,
        flower:10,
        praise:32,
        share:311
      },{
        title:'全自主型智能网络磁盘存储系统',
        content:'全自主型智能网络磁盘存储系统的存储管理方法研究，主要研究方向为计算机系统结构、网络存储、移动计算与云计算等',
        type:'教学日志',
        time:146775554442,
        flower:10,
        praise:32,
        share:311
      }],
      thesis:[{
        title:'这是个论文',
        content:'我们探讨理方法研究，主要研究方向为计算机系统结构、网络存储、移动计算与云计算等',
        type:'学术论文',
        time:146131231331,
        flower:10,
        praise:32,
        share:311
      },{
        title:'还是论文',
        content:'探讨怎样不挂科盘存储系统的存储管理方法研究，主要研究方向为计算机系统结构、网络存储、移动计算与云计算等',
        type:'学术论文',
        time:146775554442,
        flower:10,
        praise:32,
        share:311
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
        title:'主型系统',
        content:'全自主型智能网络磁盘存储系统的存储管理方法研究，主要研究方向为计算机系统结构、网络存储、移动计算与云计算等',
        type:'教学日志',
        time:146131231331,
        flower:10,
        praise:32,
        share:311
      },{
        title:'全自主型智能网络磁盘存储系统',
        content:'全自主型智能网络磁盘存储系统的存储管理方法研究，主要研究方向为计算机系统结构、网络存储、移动计算与云计算等',
        type:'教学日志',
        time:146775554442,
        flower:10,
        praise:32,
        share:311
      }],
      thesis:[{
        title:'论文',
        content:'神经病是怎样炼成的，主要研究方向为计算机系统结构、网络存储、移动计算与云计算等',
        type:'学术论文',
        time:146131231331,
        flower:10,
        praise:32,
        share:311
      },{
        title:'哇哈哈论文',
        content:'探讨猪是怎么吃饭的系统的存储管理方法研究，主要研究方向为计算机系统结构、网络存储、移动计算与云计算等',
        type:'学术论文',
        time:146775554442,
        flower:10,
        praise:32,
        share:311
      }]
    }];


    $scope.teacherLog = $scope.teacher.tearchingLog[parseInt($stateParams.index)];
  })
