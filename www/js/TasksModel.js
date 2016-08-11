function getTasks(){

  this.items = [];

  var listTasks = localStorage.getItem("taskList");

  if (listTasks !== null) {
    this.items = angular.fromJson(listTasks);
  }

  this.saveTasks = function(item) {
      var listTask = angular.toJson(this.items);
      localStorage.setItem("taskList", listTask);
  };

  this.addTasks = function(item){
    this.items.push(item);
  };

  this.removeTasks = function(item) {
      var pos = this.items.indexOf(item);
      this.items.splice(pos,1);
  };

}
