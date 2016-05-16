/**
 * Created by sls on 16/5/12.
 */
angular.module('starter')
  .config(function($stateProvider){
    $stateProvider
      .state('school-dynamic',{
        url:'/school-dynamic',
        templateUrl:'templates/school/school-dynamic.html',
        controller:'schoolDynamicCtrl'

      })
  })
  .controller('schoolDynamicCtrl',function($scope, $state, $http, $ionicSlideBoxDelegate) {
    $scope.schoolDynamic = [
      {
        id: 0,
        title: '2016年港澳校董迎春座谈会举行',
        content: '1月7日和13日，我校分别在澳门和香港两地举行了2016年校董迎春座谈会',
        time: 1461340799000,
        img:'img/img1.png'
      }, {
        id: 1,
        title: '澳门特区行政长官崔世安会见胡军校长',
        content: '1月7日，澳门特别行政长官，我校董事会副董事长崔世安在特区政府礼宾府会见胡军校长',
        time: 1461340799531,
        img:'img/img2.png'
      }, {
        id: 2,
        title: '我校优秀学子抵澳开启参访之旅',
        content: '5月4日，我校2014年优秀学生访澳团一行32人抵达澳门，开始了为期4天的参访之旅。',
        time: 1461350799000,
        img:'img/img3.png'
      }
    ];

    var update = function(){
      var url = rootUrl + "/school_dynamic/get_list";



      $http.get(url)
        .success(function(result){
          console.log(JSON.stringify(result));
          var pic_arr = [];
          var data = result.data;
          data.forEach(function(item){
            item.school_head_url = "http://115.159.115.145:3000/" + item.school_head_url;
            item.pic_url_list.forEach(function(img){
              img = rootPicUrl + img;
              pic_arr.push(img);
            })
          });
          $scope.schoolDynamics = data;
          $scope.pic_arr = pic_arr;
          console.log($scope.pic_arr);
          $ionicSlideBoxDelegate.update();
          $ionicSlideBoxDelegate.loop(true);
        })
        .error(function(err){
          console.log("获取数据失败");
        })
    }

    $scope.$on('$ionicView.beforeEnter',function(){
      update();
    })

    $scope.goDetail = function(dynamicId){
      $state.go('school-dyncdetails',{dynamicId:dynamicId})
    }
  })
