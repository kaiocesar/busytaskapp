var app = angular.module('starter', ['ionic']);
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.controller('mainController', function($scope){
  var tasks = new getTasks();
  $scope.tasks = tasks.items;
  $scope.showMarked = false;

  $scope.onMarkTask = function(item){
      item.status = !item.status;
  };

  $scope.showTask = function(item) {
    return item.status && !$scope.showMarked;
  };

  $scope.removeTask = function(item) {
    tasks.removeTasks(item);
  }

});
