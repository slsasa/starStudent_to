/**
 * Created by sls on 16/5/30.
 */
angular.module('starter')
  .factory('UserService',['$q',function($q){
    var _DBUsers;
    var _users;
    var onDatabaseChange = function(change){
      var index = findIndex(_users,change.id);
      var user = _users[index];

      if(change.deleted){
        if(user){
          _users.splice(index,1); //delete
        }
      }else{
        if(user && user._id === change.id){
          _users[index] = change.doc; //update
        }else{
          _users.splice(index,0,change.doc); //insert
        }
      }
    };
    var findIndex =function(array,id){
      var low = 0, high = array.length, mid;
      while (low < high) {
        mid = (low + high) >>> 1;
        array[mid]._id < id ? low = mid + 1 : high = mid
      }
      return low;
    }

    return{
      initDB:function(){
        _DBUsers = new PouchDB('users_db');
      },
      getAllUsers:function(){
        if(! _users){
          return $q.when(_DBUsers.allDocs({include_docs: true}))
            .then(function(docs){
              _users = docs.rows.map(function(row){

                return row.doc;
              });
              _DBUsers.changes({ live: true, since: 'now', include_docs: true})
                .on('change', onDatabaseChange);

              return _users;

            });
        } else {
          // Return cached data as a promise
          return $q.when(_users);
        }
      },
      addUser:function(user){
        return $q.when(_DBUsers.post(user));
      },
      updateUser:function(user){
        return $q.when(_DBUsers.put(user));
      },
      deleteUser:function(user){
        return $q.when(_DBUsers.remove(user));

      }

    }
  }])
