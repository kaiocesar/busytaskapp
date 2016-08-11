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

  function getItemTask(item, type) {
    $scope.data = {};
    $scope.data.newTask = (!type) ? item.name : "";

    $ionicPopup.show({
      title: "Add a new task",
      scope: $scope,
      template: "<input type='text' placeholder='Task name' autofocus='true' ng-model='data.newTask' />",
      buttons: [
        {text: "Ok",
          onTap: function(e){
              item.name = $scope.data.newTask;
              var task = {name: item.name, status: false};
              if (type) {
                tasks.addTasks(task);
              }
          }},
        {text: "Cancel"}
      ]
    });
  }

  $scope.showAddTask = function(){
    var item = {};
    getItemTask(item, true);
  };

  $scope.showTask = function(item) {
    return item.status && !$scope.showMarked;
  };

  $scope.editTask = function(item) {
    getItemTask(item, false);
  };

  $scope.removeTask = function(item) {
    tasks.removeTasks(item);
  };

  $scope.showDeleteButtons = function() {
    $scope.showDeleteButton = !$scope.showDeleteButton;
  };

});
