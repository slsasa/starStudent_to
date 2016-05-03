angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('resumeService',[function () {
    var R = {
      Resume:[
        {title:'学校简介'},
        {text:'广东科学技术职业学院是省政府批准设立的普通高等学校，正厅级建制，成立于1985年，前身是广东省科技干部学院' +
        '2003年正式改制为普通高等学校，同时保留了承担科技干部培训的重要功能，形成了高等教育和干部培训“双轮驱动”的办学特色。'},
        {txt:'广东科学技术职业学院是省政府批准设立的普通高等学校，正厅级建制，成立于1985年，前身是广东省科技干部学院，' +
        '2003年正式改制为普通高等学校，同时保留了承担科技干部培训的重要功能，形成了高等教育和干部培训“双轮驱动”的办学特色。'}
      ]
    };return{
      getR:function(){return R;}
    }
  }])
.factory('dyschoolService',[function(){
    var dy1 = {
      schpost:[
        {name: '李四'},
        //显示文段部分
        {mypost:'五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了'},
        {dispost:''},
        {time:'30分钟前'},
      ]

    };
    return{
      getdy1:function(){return dy1;}
    }
  }])
  .factory('dystutentService',[function(){
    var dystu1 = {
      stupost:[
        {name: '李四'},
        //显示文段部分
        {mypost:'五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了'},
        {dispost:''},
        {time:'30分钟前'},
      ]

    };
    return{
      getdystu1:function(){return dystu1;}
    }
  }])
  .factory('dyteacherService',[function(){
    var dyteach1 = {
      teachpost:[
        {name: '李四'},
        //显示文段部分
        {mypost:'五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了'},
        {dispost:''},
        {time:'30分钟前'},
      ]

    };
    return{
      getdydyteach1:function(){return dyteach1;}
    }
  }])
