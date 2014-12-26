angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
    g1 = new JustGage({
      id: "tempmeter",
      value: 0,
      min: 0,
      max: 100,
      title: "Temperature",
      label: "",
      levelColorsGradient: true
    });
    g2 = new JustGage({
      id: "lightmeter",
      value: 0,
      min: 0,
      max: 100,
      title: "Light",
      label: "",
      levelColorsGradient: true
    });
    g3 = new JustGage({
      id: "pirmeter",
      value: 0,
      min: 0,
      max: 1,
      title: "PIR Sensor",
      label: "",
      levelColors: ["#006600"]
    });
    g5 = new JustGage({
      id: "sleepmeter",
      value: 0,
      min: 0,
      max: 1,
      title: "Sleep",
      label: "",
      levelColors: ["#006600"]
    });
    var socket = io('192.168.1.50:3000');
    socket.on('meterupdate', function(data){
      g1.refresh(data.temp);
      g2.refresh(data.light);
      g3.refresh(data.pir);
      g4.refresh(data.sleep);
    });
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
