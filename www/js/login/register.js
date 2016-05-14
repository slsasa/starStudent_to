/**
 * Created by apple-ty on 16-5-6.
 */
/**
 * Created by apple-ty on 16-5-6.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: 'templates/login/register.html',
        controller:'registerCtrl'
      })
  })


  .controller('registerCtrl',function($scope){
    $scope.user = {
      num:'',
      pwd:'',
      type:'学生',
      numverify :''
    }
    $scope.loginbks = [
      {
        "img":"img/logobk.jpg"
      }
    ]
  })
