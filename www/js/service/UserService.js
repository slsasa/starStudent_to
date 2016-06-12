/**
 * Created by sls on 16/6/8.
 */
angular.module('starter')
  .factory ( "UserService", function(locals) {
  var users = [];
  return {
    loadUsers:function(){
      users =  locals.getObject('users');
    },
    addUser:function(user){
      var users= locals.getObject('users')
      if(users == null)
        users =[];
      if(users.filter(function(e,i,a){

          if(e._id == user._id)
            return true;
        }) == 0)
      {
        users.push(user);
      }
      locals.setObject("users",users);
    },
    deleteUser:function(user){
      var users= locals.getObject('users')
      users= users.filter(function(e,i,a){
        if(e._id != user._id)
          return true;
      });
      locals.setObject("users",users);
    },
    getUsers:function(){
      var users= locals.getObject('users');
      return users;
    }
  }

  });



