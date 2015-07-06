'use strict';
angular.module('todoapp').factory('todoTask',todoUser);



function todoUser($http,$state,$rootScope,alertService){


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
            alertService("Successfully Updated Password",'success',5000); 
        });
        },
        error: function(userData, errorData) {
         $rootScope.$apply(function(){
            alertService(errorData.message,'danger',5000); 
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
            alertService("Successfully Updated",'success',5000); 
        });
        },
        error: function(userData, errorData) {
         $rootScope.$apply(function(){
        		alertService(errorData.message,'danger',5000); 
            console.log(errorData);
        	});

           }
    });    
  }
    }
  }