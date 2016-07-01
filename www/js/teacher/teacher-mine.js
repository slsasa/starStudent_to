/**
 * Created by sls on 16/5/11.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teacher-mine',{
        url:'/teacher-mine',
        cache: true,
        templateUrl:'templates/teacher/teacher-mine.html',
        controller:'teacherMineCtrl'

      });
  })
  .controller('teacherMineCtrl',function($scope, $state, $http, $ionicLoading,userInfo, $ionicPopup){
    var update = function(){
      $ionicLoading.show();
      var url = rootUrl + "/teacher_style/get_all_list";

      $http.get(url)
        .success(function(result){
          var data = result.data;

          data.forEach(function(item){

            item['__v'] = item['FlowerListRef'].length*0.6 + item['LikeListRef'].length*0.4;

            item['TeacherAvatarRef']['Url'] = rootPicUrl + item['TeacherAvatarRef']['Url'];
          });
          $scope.teachers = data;
          $ionicLoading.hide();
        })
        .error(function(err){
          $ionicLoading.hide();
          $ionicPopup.alert({
            title:'提醒',
            template:'获取数据出错'+err
          });

        })
    };




    $scope.objChat = document.getElementById('chat');
    $scope.objCharm = document.getElementById('charm');
    $scope.objChatClick = document.getElementById('chatClick');
    $scope.objCharmClick = document.getElementById('charmClick');

    $scope.objChatClick.style.backgroundColor = "#F96A9F";
    $scope.objChatClick.style.color = "#fff";

    $scope.showChat = function(){
      $scope.objCharm.style.display = "none";
      $scope.objChat.style.display = "";
      update();
      if($scope.objChat.style.display == ""){
        changeCololBgClick("#F96A9F","");
        changeColorFont("#fff","black");

      }
    }

    $scope.showCharm = function(){
      $scope.objChat.style.display = "none";
      $scope.objCharm.style.display = "";
      update();
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

    $scope.goPersonalMine = function(teacher){
      userInfo.teacherInfo = teacher;
      $state.go('teacher-style');
    }
    $scope.goWorks = function(teacher){
      userInfo.teacherInfo = teacher;
      $state.go('works-centre');
    }

    $scope.showChat();

  })
