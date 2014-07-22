angular.module("bijs", []).directive("toolbar", function(){
	return {
		restrict: 'E',
		link: function($scope, $element, $attributes){
			debugger;
			/*var wrapper = angular.element($element);
			var h1 = angular.element("<h1>THIS IS CUSTOM</h1>");
			h1.wrap(wrapper);*/
			$element.html("<h1>THIS IS CUSTOM</h1>");
		}
	}
})