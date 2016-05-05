/**
 * Created by sls on 16/4/29.
 */
angular.module('starter')
  .config(function($stateProvider){
    $stateProvider
      .state('tabs.dynamic-tabs.school-dyncdetails',{
        url:'/school-dynamic/:schoolDynsId',
        views:{'dyschool':{
          templateUrl:'templates/dynamic/school-dyncdetails.html',
          controller:'dynamicDetailsCtrl'
        }}
      })
  })
  .controller('dynamicDetailsCtrl',function($scope,$stateParams){
      var dynamics =  [
      {
        id:0,
        title:'2016年港澳校董迎春座谈会举行',
        content:'1月7日和13日，我校分别在澳门和香港两地举行了2016年校董迎春座谈会',
        time:'1461340799000'
      },{
        id:1,
        title:'澳门特区行政长官崔世安会见胡军校长',
        content:'1月7日，澳门特别行政长官，我校董事会副董事长崔世安在特区政府礼宾府会见胡军校长',
        time:'1461340799531'
      },{
        id:2,
        title:'我校优秀学子抵澳开启参访之旅',
        content:'5月4日，我校2014年优秀学生访澳团一行32人抵达澳门，开始了为期4天的参访之旅。',
        time:'1461350799000'
      }
    ];
    var getDaynmic = function(dynsId){
      for(var i = 0; i < dynamics.length;i++){
        if( dynamics[i].id == parseInt(dynsId)){
          return dynamics[i];
        }
      }
    }
    $scope.dynamic = getDaynmic($stateParams.schoolDynsId);
  })
