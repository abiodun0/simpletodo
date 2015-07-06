'use strict';
angular.module('todoapp').controller('registerCtrl',registerCtrl);

function registerCtrl($scope,todoUser,$filter){


$scope.register = function (){
	var form = {
		username: $scope.username,
		password: $scope.password,
		email: $scope.email
	};
	console.log(form);
	todoUser.doRegister(form)
}

}