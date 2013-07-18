(function($) {
  			
	var raceModule = (function() {	
		//private variable
		var drivers = [];


		//private function
		function AddDriver(name) {
			drivers.push(name);
			
      $(this).triggerHandler('addName', [ name, drivers.length ]);
		}

		//returns public "API", revealing module pattern 
		return {
			AddDriver: AddDriver
		}

	})();

	$(raceModule).bind('addName', function (event, name, length) {
		alert("New driver: " + name + ". Number of drivers: " + length + ".");
	});

	$(raceModule).bind('addName', function (event, name) {
		console.log("New driver: " + name);
	});

	raceModule.AddDriver("John");
	raceModule.AddDriver("Josh");
	raceModule.AddDriver("Joe");

}(jQuery));
