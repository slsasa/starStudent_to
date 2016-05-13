/**
 * Created by sls on 16/5/10.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('my-dynamic',{
        url:'/my-dynamic:type',
        templateUrl: 'templates/person/my-dynamic.html',
        controller: 'myDynamicCtrl'

      });
  })
  .controller('myDynamicCtrl',function($scope,$stateParams){

    $scope.terDynamics = [{
      id:0,
      time: 1462281859141,
      name: '李4四',
      img: 'img/dy1.jpeg',
      content: '五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了',
    },{
      id:1,
      time: 1462081859141,
      name: '李3我',
      img: 'img/img2.png',
      content: '五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了',
    }];

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


  })
