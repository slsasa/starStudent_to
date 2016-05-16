/**
 * Created by sls on 16/5/9.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('style-img',{
        url:'/personal-style:teacherId/style-img',
        templateUrl:'templates/teacherstyle/style-img.html',
        controller:'styleImgCtrl'
      });
  })
<<<<<<< HEAD
  .controller('styleImgCtrl',function($scope,$stateParams){
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
        imgs:['img/personal/p1.png','img/personal/p2.png','img/personal/p3.png']
      },{
        time:1483064422123,
        imgs:['img/personal/p1.png','img/personal/p2.png','img/personal/p3.png']
      },{
        time:1482934422123,
        imgs:['img/personal/p1.png','img/personal/p2.png','img/personal/p3.png']
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
        imgs:['img/personal/p1.png','img/personal/p2.png','img/personal/p3.png']
      },{
        time:1483064422123,
        imgs:['img/personal/p1.png','img/personal/p2.png','img/personal/p3.png']
      },{
        time:1482934422123,
        imgs:['img/personal/p1.png','img/personal/p2.png','img/personal/p3.png']
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
=======
  .controller('styleImgCtrl',function($scope, $stateParams, userInfo, $http){

    $scope.teacher = userInfo.teacherInfo;
    userInfo.teacherInfo = '';


    var getSelfInfo = function(){
      var data_arr = [];

      $scope.teacher.style_item.forEach(function(item){
        var url = rootUrl + "/teacher_style/get_style_item?style_item_id=" + item;
        $http.get(url)
          .success(function(result){
            var data = result.data;
            var pic_arr = [];
            data.pic_url_list.forEach(function(item){
              pic_arr.push(rootPicUrl + item);
            })
            data.pic_url_list = pic_arr;
            data_arr.push(data);
          })
          .error(function(err){
            console.log("获取照片数据失败");
          })
      })

      $scope.Imgs = data_arr;
      console.log($scope.Imgs);
>>>>>>> b0cb63814b31b19c785f70a196c47484e7710c60
    }

    $scope.$on('$ionicView.beforeEnter',function(){
      getSelfInfo();
    })

    //var getSelfInfo = function(){
    //  var url = rootUrl + "/teacher_style/get_style_item?style_item_id=" + $scope.teacher.style_item[0];
    //  $http.get(url)
    //    .success(function(result){
    //      console.log(JSON.stringify(result));
    //      var data = result.data;
    //      var pic_arr = [];
    //      data.pic_url_list.forEach(function(item){
    //        pic_arr.push(rootPicUrl + item);
    //      });
    //      data.pic_url_list = pic_arr;
    //      $scope.teacher.info = data;
    //    })
    //    .error(function(err){
    //      console.log("获取教师数据失败");
    //    })
    //}





    //var teachers =  [{
    //  id:0,
    //  name:'李老师',
    //  longevity:'大专学历,小学一级教师。1999年参加工作,爱岗敬业,有才艺,有理想,。',
    //  honor:[{
    //    time:146131131331,
    //    reward:'广东省舞蹈比赛一等奖',
    //    rewardDetail:'在2016年的广东省教育局组织的拉丁舞比赛中荣获一等奖'
    //  },{
    //    time:146121131331,
    //    reward:'全国街舞比赛优秀奖',
    //    rewardDetail:'全部自由街舞竞技中国荣获优秀奖'
    //  }],
    //  Detail:'网络工程技术专业工学博士，计算机工程技术学院教授。软件技术与工程中心副主任。中国计算机学会高级会员，IEEE会员。广东省科技咨询专家库专家，广东省综合评标专家库专家，珠海市政府采购评审专家，广东企业科技特派员。',
    //  headImg:'img/img1.png',
    //  styleImg:[{
    //    time:1482994422123,
    //    imgs:['img/img2.png','img/mebk.jpeg','img/img3.png','img/apply.jpeg']
    //  },{
    //    time:1483064422123,
    //    imgs:['img/img1.png','img/mebk.jpeg','img/img3.png']
    //  },{
    //    time:1482934422123,
    //    imgs:['img/img4.png','img/mebk.jpeg','img/img3.png']
    //  }],
    //  tearchingLog:[{
    //    title:'主型智能网络磁盘存储系统',
    //    content:'全自主型智能网络磁盘存储系统的存储管理方法研究，主要研究方向为计算机系统结构、网络存储、移动计算与云计算等',
    //    type:'教学日志',
    //    time:146131231331
    //  },{
    //    title:'全自主型智能网络磁盘存储系统',
    //    content:'全自主型智能网络磁盘存储系统的存储管理方法研究，主要研究方向为计算机系统结构、网络存储、移动计算与云计算等',
    //    type:'教学日志',
    //    time:146775554442
    //  }]
    //
    //},{
    //  id:1,
    //  name:'白老师',
    //  longevity:'大专学历,小学一级教师。1999年参加工作,爱岗敬业,有才艺,有理想,。',
    //  honor:[{
    //    time:147231131331,
    //    reward:'广东省逗比比赛一等奖',
    //    rewardDetail:'在2016年的广东省教育局组织的拉丁舞比赛中荣获一等奖'
    //  },{
    //    time:146821130331,
    //    reward:'全国神经比赛优秀奖',
    //    rewardDetail:'全部自由街舞竞技中国荣获优秀奖'
    //  }],
    //  Detail:'计算机应用技术专业工学博士，计算机工程技术学院教授。软件技术与工程中心副主任。中国计算机学会高级会员，IEEE会员。广东省科技咨询专家库专家，广东省综合评标专家库专家，珠海市政府采购评审专家，广东企业科技特派员。',
    //  headImg:'img/img3.png',
    //  styleImg:[{
    //    time:1482994422123,
    //    imgs:['img/img2.png','img/mebk.jpeg','img/img3.png','img/apply.jpeg']
    //  },{
    //    time:1483064422123,
    //    imgs:['img/img1.png','img/mebk.jpeg','img/img3.png']
    //  },{
    //    time:1482934422123,
    //    imgs:['img/img4.png','img/mebk.jpeg','img/img3.png']
    //  }],
    //  tearchingLog:[{
    //    title:'主型智能网络磁盘存储系统',
    //    content:'全自主型智能网络磁盘存储系统的存储管理方法研究，主要研究方向为计算机系统结构、网络存储、移动计算与云计算等',
    //    type:'教学日志',
    //    time:146131231331
    //  },{
    //    title:'全自主型智能网络磁盘存储系统',
    //    content:'全自主型智能网络磁盘存储系统的存储管理方法研究，主要研究方向为计算机系统结构、网络存储、移动计算与云计算等',
    //    type:'教学日志',
    //    time:146775554442
    //  }]
    //}];




  })
