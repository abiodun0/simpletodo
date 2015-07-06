'use strict';
angular.module('todoapp').controller('loginCtrl',loginCtrl);

function loginCtrl($scope,$http,todoUser){

$scope.login = function(){
		var form = {
		username: $scope.username,
		password: $scope.password,
	};
	todoUser.authenticate(form);
}

}