'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('TaskCtrl', ['$scope', function($scope) {
  	$scope.tasks = [
  		{
  			name: "Learn Angular",
  			date: "8/29/14",
  			isComplete: false,
  			dateCompleted: "",
  			categories: ["program"]
  		},
  		{
  			name: "Learn Polymer",
  			date: "8/27/14",
  			isComplete: false,
  			dateCompleted: "",
  			categories: ["program","food"]
  		}
  	];

  	$scope.addNewTask = function(newTaskName, newCategory) {
  		var newCategories = newCategory.replace(" ","").split(","),
  			newTask = {
  			name: newTaskName,
  			date: new Date(),
  			isComplete: false,
  			dateCompleted: "",
  			categories: []
  		};
  		
  		newTask.categories = newCategories;

  		$scope.tasks.push(newTask);
  	};


  	$scope.completeTask = function(task) {
  		if (task.isComplete === false) {
  			task.isComplete = true;
  			task.dateCompleted = new Date();
  		}
  	};

  	$scope.showCat = function(cat) {
  		return function( item ) {
  			var results;
  				for (var j = 0; j < item.categories.length; j++){
  					if (item.categories[j].indexOf(cat) > -1){
  						return true;
  					}
  				};
  		   return false;
			};
		};

  }]);















