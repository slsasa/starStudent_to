/**
 * Created by sls on 16/5/10.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('my-dynamic',{
        url:'/my-dynamic_:type',
        templateUrl: 'templates/person/my-dynamic.html',
        controller: 'myDynamicCtrl'

      });
  })
  .controller('myDynamicCtrl',function($scope,$stateParams,$state, $http, userInfo){

    var update = function(){

      if(userInfo.personType == "_stu"){
        var url = rootUrl + "/student_dynamic/get_self_list";
      }else if(userInfo.personType == '_teacher'){
        var url = rootUrl + "/teacher_dynamic/get_self_list";
      }


      var query = {
        issuer_id: userInfo._id
      }

      $http.get(url, {params:query})
        .success(function(result){
          console.log(JSON.stringify(result));
          var data = result.data;
          data.forEach(function(item){
            var data2 = []
            item.pic_url_list.forEach(function(img){
              data2.push(rootPicUrl + img)
            })
            item.pic_url_list = data2
          })
          $scope.terDynamics = data;
          console.log($scope.terDynamics);
        })
        .error(function(err){
          console.log("获取数据错误")
        })

    }

    $scope.$on('$ionicView.beforeEnter',function(){
      update();
    })

    $scope.showClickTeacher = function(teacherId){
      var objClick = document.getElementById(teacherId + 'teacher');
      if(objClick.style.display == "none"){
        objClick.style.display = "";
      }else{
        objClick.style.display = "none";
      }
    }

    $scope.showContentTer = function(teacherId) {
      var objMoreContent = document.getElementById(teacherId + "moreContentTer");
      var objContentSchool = document.getElementById(teacherId + "contentTer");
      if (objMoreContent.style.display == "none") {
        objContentSchool.style.display = "none";
        objMoreContent.style.display = "";


      } else {
        objMoreContent.style.display = "none";
        objContentSchool.style.display = "";

      }
    }

    $scope.type = $stateParams.type;

    $scope.goIssue = function(){
      $state.go('issue')
    }

  })
