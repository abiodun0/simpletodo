'use strict';
angular.module('todoapp').factory('alertService',alertService);

function alertService($rootScope,$timeout){

	var alertTimeout;

	return function(message,type,timeout)
	{
		$rootScope.alert = {

			msg: message,
			type: type,
			show: true

		}
		$timeout.cancel(alertTimeout);
		alertTimeout = $timeout(function(){
			$rootScope.alert.show = false;
		},timeout || 3000);

	}
}