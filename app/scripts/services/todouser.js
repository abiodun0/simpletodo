'use strict';
angular.module('todoapp').factory('todoUser',todoUser);



function todoUser($http,$state,$rootScope){

  var dataObject = null;

  return {
    get: function()
    {
      var tmpData = Parse.User.current();
      console.log(tmpData);

      if(tmpData && dataObject == null)
      {
        dataObject = tmpData;
      }
      return dataObject;
    },

    authenticate: function(form)
    {
      Parse.User.logIn(form.username, form.password, {
        success: function(userData) {
        	$state.go('main');
          dataObject = userData;
        },
        error: function(userData, errorData) {
        	$rootScope.$apply(function(){
        		$rootScope.errormsg = errorData.message; 
        	});
        	
        }
      });
    },

    logOut: function()
    {
      Parse.User.logOut();
      dataObject = Parse.User.current();
    },

    doRegister: function(form)
    {
      var user = new Parse.User();
    	user.set("email", form.email);
   		 user.set("username", form.username);
    	user.set("password", form.password);
    
    	user.signUp(null, {
      	success: function(userData) {
      		$state.go('main');
          
        },
        error: function(userData, errorData) {
         $rootScope.$apply(function(){
        		$rootScope.errormsg = errorData.message; 
        	});

           }
    });    
  }
    }
  }