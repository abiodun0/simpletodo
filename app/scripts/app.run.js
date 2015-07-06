'use strict';

angular.module('todoapp').run(authService);


function authService($rootScope,$state){
$rootScope.$on("$stateChangeStart", function(ev, to, toParams, from, fromParams){
//$rootScope.alert.msg = "";
 var currentUser = Parse.User.current();
	//$rootScope.logintext ="";
	//console.log(currentUser);
 if(to.authenticate && !currentUser){
 	//$rootScope.logintext = "You have to be logged in to view that page";
 	$state.go('login');
 	ev.preventDefault();
 }
 if(!to.authenticate && currentUser){

 	$state.go('main');
 	ev.preventDefault();
 }

});
}