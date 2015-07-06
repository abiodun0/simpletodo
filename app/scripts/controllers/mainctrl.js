/**
 * Created by Abiodun on 7/5/15.
 */
'use strict';
angular.module('todoapp').controller('mainCtrl',mainCtrl);

function mainCtrl($scope,$http,$state,$filter,todoTask){
    var info = Parse.User.current();
    if(info) $scope.main = info.attributes;

    $scope.todos = $scope.main.todo || [];

    $scope.logout = function(){

        Parse.User.logOut();
        $state.go('login');
    }

    $scope.addtask = function(){

        var form = {
            name: $scope.taskname,
            date: $filter('date')($scope.dt,'dd-MM-yy'),
            done: false
        }
        console.log(form);
        $scope.todos.push(form);
        //console.log($scope.todos);
        $scope.taskname = "";

    }
    $scope.update = function(){

        todoTask.updateTask(angular.copy($scope.todos));
    }
    $scope.completed = function(item){
        if(item.done) return item;

    }
    $scope.pending = function(item){
        if(!item.done) return item;

    }
    /*$scope.$watch($scope.todos,function(){
    	$scope.pending = $filter('todofilter')($scope.todos,false);
    	$scope.completed = $filter('todofilter')($scope.todos,true)
    });*/
    //$scope.pending = $filter('todofilter')($scope.todos,false);
    //$scope.completed = $filter('todofilter')($scope.todos,true);
    $scope.donetask = function(task){

        if(task.done) task.done = false;
        else task.done = true;

        //console.log(task);
    }
    $scope.deletetask = function(item){

        var i = $scope.todos.indexOf(item);
        $scope.todos.splice(i,1);
    }
    $scope.changePassword = function(){
        //console.log($scope.password);
        todoTask.changePassword(angular.copy($scope.password));
    }
    $scope.today = function () {
        $scope.dt = new Date();

    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    $scope.toggleMin = function () {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened ? $scope.opened = false: $scope.opened = true;
        //console.log($scope.dt)
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy','shortDate','dd-MM-yyyy'];
    $scope.format = $scope.formats[4];



}