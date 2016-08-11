function getTasks(){
  this.items = [
    {name: "Item name 01", status: true},
    {name: "Item name 02", status: false},
    {name: "Item name 03", status: true},
    {name: "Item name 04", status: false},
    {name: "Item name 05", status: true}
  ];

  this.addTasks = function(item){
    this.items.push(item);
  };

  this.removeTasks = function(item) {
      var pos = this.items.indexOf(item);
      this.items.splice(pos,1);
  };


}
