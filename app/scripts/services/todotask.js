'use strict';
angular.module('todoapp').factory('todoTask',todoUser);



function todoUser($http,$state,$rootScope){


  return {
   changePassword:function(password){
    $rootScope.msg = "";
      var user = new Parse.User.current();
      user.setPassword(password);
       user.save(null, {
        success: function(task) {
          //$scope.msg = "Your tasks have been succesfully updated";
          console.log("successfully updated password");
          $rootScope.$apply(function(){
            $rootScope.passwordchanged = "Your Password Has Been Changed Successfully";
        });
        },
        error: function(userData, errorData) {
         $rootScope.$apply(function(){
            $rootScope.errormsg = errorData.message; 
            console.log(errorData);
          });

           }
    });


        },


    updateTask: function(task)
    {
      $rootScope.msg = "";
      var user = new Parse.User.current();
    	user.set("todo", task);	
    	 user.save(null, {
      	success: function(task) {
      		//$scope.msg = "Your tasks have been succesfully updated";
          console.log("successfully updated");
          $rootScope.$apply(function(){
            $rootScope.msg = "Successfully Updated";
        });
        },
        error: function(userData, errorData) {
         $rootScope.$apply(function(){
        		$rootScope.errormsg = errorData.message; 
            console.log(errorData);
        	});

           }
    });    
  }
    }
  }