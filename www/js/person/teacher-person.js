/**
 * Created by sls on 16/5/9.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.person_teacher',{
        url:'/person_teacher',
        views:{'person':{
          templateUrl: 'templates/person/teacher-person.html',
          controller: 'terPersonCtrl'
        }}
      });
  })
  .controller('terPersonCtrl',function($rootScope, $scope, $state, $ionicPopup, userInfo, $http){

    var update = function(){
      var url = rootUrl + "/teacher_info/get_info?TeacherId=" + userInfo._id;

      $http.get(url)
        .success(function(result){
          console.log(JSON.stringify(result));
          var data = result.data;
          data.PicAvatarRef.Url = rootPicUrl + data.PicAvatarRef.Url;
          data.PicBgRef.Url = rootPicUrl + data.PicBgRef.Url;
          $scope.teacherInfo = data;
          console.log($scope.teacherInfo);
        })
        .error(function(err){
          console.log("获取个人信息失败");
        })
    }

    $scope.$on('$ionicView.beforeEnter',function(){
      update();
    })

    $scope.edit = function(){

      $state.go('date-editor');
    };

    $scope.addPraise = function(){
      $scope.teacherPerson.praise +=1;
    }
    $scope.addFlower = function(){
      $scope.teacherPerson.flower +=1;
    }
    $scope.exit = function(){
      $state.go('login');
    }
    $scope.goMyStyle = function(){
      $state.go('my-style');
    }
    $scope.goMyDynamic = function(type){
      $state.go('my-dynamic',{type:type});
    }

    $scope.goWorksLog = function(){
      $state.go('my-works');
    }

    $scope.goTerSetting = function(teacher){
      $state.go('setting',{type:teacher});
    }

    $scope.outLogin = function(){
      $ionicPopup.confirm({
        title: "退出当前账号",
        template: "退出账号将收不到任何信息，是否继续？",
        buttons:[
          {
            text:"是",
            onTap:function(e){
              $rootScope.user = {};
              $state.go('login');
            }
          },
          {text:"否"}
        ]
      })

    }

  })


