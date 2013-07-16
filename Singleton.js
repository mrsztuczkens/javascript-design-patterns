var driversSingleton = (function() {

	//instance holder
	var instance;

	//constructor of the singleton itself
	function Singleton() {
		
		//private variable
		var drivers = [];

		//private functions
		function addDriver(name) {
			drivers.push(name);
		}

		function printDrivers() {
			var result = "";

			for(var i = 0; i < drivers.length; i++) {
				result += drivers[i] + "\n";
			}

			alert(result);
		}

		//returns object that reveals needed functions (Revealing Module pattern)
		return {
			addDriver: addDriver,
			printDrivers: printDrivers
		}

	}

	//returns an object with only one method - getInstance
	return {
		getInstance: function() {
			if (instance === undefined)
				instance = new Singleton();
			return instance;
		}
	}
}());

//adds few drivers to the list
var firstVariable = driversSingleton.getInstance();
firstVariable.addDriver("Marek");
firstVariable.addDriver("Jarek");
firstVariable.addDriver("Kucharek");

//let's print them using another variable, so we're sure the getInstance function always returns the same object
var secondVariable = driversSingleton.getInstance();
secondVariable.printDrivers();
