/**
 * Created by apple-ty on 16-5-4.
 */

angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.apply',{
        url:'/apply',
        views:{'apply':{
          templateUrl: 'templates/apply/apply.html',
          controller: 'ApplyCtrl'
        }}
      });
  })

  .controller('ApplyCtrl',function($scope, $state, $http, $rootScope){
    //$scope.applys = [
    //  {
    //    id:0,
    //    title: '汽车之家试驾捷豹F-PACE',
    //    cost:2000,      //报名费
    //    awardIntegral:50,   //奖励积分
    //    stopTime:1461340799000,
    //    beginTime:1461340789000,
    //    img:'img/img1.png',
    //    content:'在这个SUV风起云涌的年代，没有一款有小豹子在车头霸气坐镇的SUV始终感到遗憾，但是现在他们可以了此情结了。“每款捷豹都能在200米外就吸引您的注意，而我相信与同级车型相比，全新捷豹F-PACE在道路上的魅力首屈一指。 全新捷豹F-PACE是全天候、全路况的捷豹跑车型SUV。”'
    //  },
    //  {
    //    id:1,
    //    title: '飞机之家试驾捷豹F-PACE',
    //    cost:1000,      //报名费
    //    awardIntegral:50,   //奖励积分
    //    stopTime:1461340799000,
    //    beginTime:1461340689000,
    //    img:'img/img3.png',
    //    content:'在这个SUV风起云涌的年代，没有一款有小豹子在车头霸气坐镇的SUV始终感到遗憾，但是现在他们可以了此情结了。“每款捷豹都能在200米外就吸引您的注意，而我相信与同级车型相比，全新捷豹F-PACE在道路上的魅力首屈一指。 全新捷豹F-PACE是全天候、全路况的捷豹跑车型SUV。”'
    //  }, {
    //    id:2,
    //    title: '火车之家试驾捷豹F-PACE',
    //    cost:400,      //报名费
    //    awardIntegral:150,   //奖励积分
    //    stopTime:1461340799000,
    //    beginTime:1461340889000,
    //    img:'img/img1.png',
    //    content:'在这个SUV风起云涌的年代，没有一款有小豹子在车头霸气坐镇的SUV始终感到遗憾，但是现在他们可以了此情结了。“每款捷豹都能在200米外就吸引您的注意，而我相信与同级车型相比，全新捷豹F-PACE在道路上的魅力首屈一指。 全新捷豹F-PACE是全天候、全路况的捷豹跑车型SUV。”'
    //  }];

    var update = function(){
      var url = rootUrl + "/sign_up_intro/get_list";

      $http.get(url)
        .success(function(result){
          console.log(JSON.stringify(result));
          var data = result.data;
          data.forEach(function(item){
            var begin_date = new Date(item['begin_time']).getTime();
            var end_date = new Date(item['end_time']).getTime();
            item['begin_time'] = begin_date;
            item['end_time'] = end_date;
            item.pic_url = rootPicUrl + item.pic_url;
          })
          $scope.applys = data;
        })
        .error(function(err){
          console.log("获取数据失败");
        })
    }

    $scope.$on('$ionicView.beforeEnter',function(){
      update();
    })

    $scope.goApplyDetail = function(apply){
      //userInfo.apply = apply;
      $rootScope.apply = apply;
      $state.go('applyDetail');
    }

  });
