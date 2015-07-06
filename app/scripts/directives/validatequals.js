'use strict';
angular.module('todoapp').directive('validateEquals',validateEquals);

function validateEquals(){

	return {
		require: "ngModel",
		link: function(scope,el,attr,ngCtrl){

			function validate(value){
				var valid = (value === scope.$eval(attr.validateEquals));
				ngCtrl.$setValidity('equal',valid);
				return valid ? value: undefined;
			}
			ngCtrl.$parsers.push(validate);
			ngCtrl.$formatters.push(validate);
			scope.$watch(attr.validateEquals, function(){
				ngCtrl.$setViewValue(ngCtrl.viewValue);
			})
		}
	}
}