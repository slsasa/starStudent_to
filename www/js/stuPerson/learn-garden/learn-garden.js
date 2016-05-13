/**
 * Created by apple-ty on 16-5-8.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('learn-garden',{
        url:'/learn-garden',
          templateUrl: 'templates/stuPerson/learn-garden/learn-garden.html',
          controller: 'learnGardenCtrl'
      });
  })
  .controller('learnGardenCtrl',function($scope){
    $scope.leagardens = [{
      id:0,
      time: 1462281859141,
      name: '李四',
      img: 'img/learn-garder/header.png',
      content: '五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了',
    },{
      id:1,
      time: 1462281859141,
      name: '李我',
      img: 'img/learn-garder/header.png',
      content: '五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了,五一过得真快，没感觉，就过了，五一过得真快，',
    }];
    $scope.showleagarden = function(stuId){
      var objMoreContent = document.getElementById(stuId+"moreContentLea");
      var objContentLearn = document.getElementById(stuId+"contentLea");
      if(objMoreContent.style.display == "none"){
        objContentLearn.style.display = "none";
        objMoreContent.style.display = "";


      }else{
        objMoreContent.style.display = "none";
        objContentLearn.style.display = "";

      }
    }
  })
