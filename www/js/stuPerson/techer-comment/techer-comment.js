/**
 * Created by apple-ty on 16-5-6.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('techer-comment',{
        url:'/techer-comment',
          templateUrl: 'templates/stuPerson/techer-comment/techer-comment.html',
          controller:'techerComCtrl'
      });
  })
  .controller('techerComCtrl',function($scope, $http, userInfo,$ionicLoading){

    var updata = function(){
      //var url = rootUrl + "/student_teacher_com/get_info?student_id=" + userInfo._id;
      var url = rootUrl + '/teacher_remark/get_self_list';
      $ionicLoading.show();
      $http.get(url,{params:{StudentId:userInfo._id}})
        .success(function(result){
          console.log(JSON.stringify(result));
          var data = result.data;
          data.forEach(function(item){
            item['TeacherAvatarRef']['Url'] = rootPicUrl +  item['TeacherAvatarRef']['Url'];
          })
          $scope.comments = data;
          $ionicLoading.hide();
        })
        .error(function(err){
          $ionicLoading.hide();
          console.log(JSON.stringify(err));
        })
    }

    $scope.$on('$ionicView.beforeEnter',function(){
      updata();
    })

    //$scope.comments = [
    //  {
    //    id:0,
    //    name: '吴都',
    //    position:'舞蹈教师',
    //    introduce:'性格沉静,常常不拘小节,待人接物却稳重大方。',
    //    img:'img/img1.png',
    //  },
    //
    //  {
    //    id:1,
    //    name: '李德',
    //    position:'创意口才教师',
    //    img:'img/img3.png',
    //    introduce:'平日里言语不多,但我知道你心志高远，骨子里一种倔强和坚韧。平日里言语不多,但我知道你心志高远，骨子里一种倔强和坚韧。平日里言语不多,但我知道你心志高远，骨子里一种倔强和坚韧。'
    //  }
    //];
  })
