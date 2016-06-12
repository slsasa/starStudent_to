/**
 * Created by sls on 16/6/8.
 */
angular.module('starter')
  .factory ( "UserService", function($cordovaSQLite) {
  var db = null;
  return {
    initDB: function() {
      db = $cordovaSQLite.openDB({ name: "user_db" });
      //$cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)");
      $cordovaSQLite.execute(db,
        "create table if not exists t_user " +
        "(id integer primary key, " +
        " account text " +
        " pws text " +
        " checked integer)");
      console.log('init db----------->>>');
    },
    addUser: function(user){
      var query = "insert into t_user(account, pwd, check) values(?,?,?)";
      $cordovaSQLite.execute(db, query, [user.account, user.pwd, user.checked == undefined ? 0 : user.checked] )
        .then( function (res) {
          console.log ( "success in insert " + JSON.stringify(res));
        }, function(err) {
          console.error(err);
        });
      },
      getAllUsers: function(callback) {
        var query = "select * from t_user";
        $cordovaSQLite.execute(db, query, [])
          .then(function(res) {
            callback(res);
          }, function(err) {
            console.error(err);
          });
      }
    }
  })



