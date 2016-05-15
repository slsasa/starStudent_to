angular.module('starter.services', [])


.factory('userService',function ($rootScope,$scope) {

    $rootScope.imageUrl = 'http://115.159.115.145:3000/upload/';
    var user = {
      type:'学生',
      userName:'',
      pwd:''
    }
  })
