'use strict';
var mq = window.matchMedia( "(max-width: 720px)" );
angular.module('todoapp').directive('showtab',showtab);

function showtab(){

	return {
		link: function (scope,el,attrs){

			el.click(function(e){

				e.preventDefault();
				el.siblings().removeClass('active');
				el.addClass('active').tab('show');
				if(mq.matches) $("#menu").collapse('toggle');
			})


		}
}}