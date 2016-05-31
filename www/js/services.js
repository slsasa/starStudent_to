angular.module('starter.services', [])


.factory('userService',function ($rootScope) {
    $rootScope.appUrl = 'http://112.124.118.133:3000/';
    $rootScope.imageUrl = 'http://115.159.115.145:3000/upload/';

  })
  //本地存储数据===================================
  .factory('locals',['$window',function($window){
    return{
      //存储单个属性
      set :function(key,value){
        $window.localStorage[key]=value;
      },
      //读取单个属性
      get:function(key,defaultValue){
        return  $window.localStorage[key] || defaultValue;
      },
      //存储对象，以JSON格式存储
      setObject:function(key,value){
        $window.localStorage[key]=JSON.stringify(value);
      },
      //读取对象
      getObject: function (key) {
        return JSON.parse($window.localStorage[key] || '{}');
      }

    }
  }]);
