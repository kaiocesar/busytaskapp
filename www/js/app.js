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

app.controller('mainController', function($scope, $ionicPopup){
  var tasks = new getTasks();
  $scope.tasks = tasks.items;
  $scope.showMarked = false;
  $scope.showDeleteButton = false;

  $scope.onMarkTask = function(item){
      item.status = !item.status;
  };

  $scope.showAddTask = function(){

    $scope.data = {};

    $ionicPopup.show({
      title: "Add a new task",
      scope: $scope,
      template: "<input type='text' placeholder='Task name' autofocus='true' ng-model='data.newTask' />",
      buttons: [
        {text: "Ok",
          onTap: function(e){
              var task = {name: $scope.data.newTask, status: false};
              tasks.addTasks(task);
          }},
        {text: "Cancel"}
      ]
    });
  };

  $scope.showTask = function(item) {
    return item.status && !$scope.showMarked;
  };

  $scope.removeTask = function(item) {
    tasks.removeTasks(item);
  };

  $scope.showDeleteButtons = function() {
    $scope.showDeleteButton = !$scope.showDeleteButton;
  };

});
