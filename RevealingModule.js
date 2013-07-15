//represents a single driver
function Driver(name, number) {
	this.name = name;
	this.number = number;
}

Driver.prototype.toString = function() {
	return this.number + ": " + this.name;
}

var raceModule = (function() {

	//private variable
	var drivers = [];

	//private function
	function getNextNumber() {
		
		if ( drivers.length == 0)
			return 1;
		
		return drivers[drivers.length-1].number + 1;
	}

	//private function
	function addDriver(name) {
		var newDriver = new Driver(name, getNextNumber());
		drivers.push(newDriver);
	}

	//private function
	function printDrivers() {
		var driversLineup = "";
		
		for(var i = 0; i < drivers.length; i++)
			driversLineup += drivers[i].toString() + "\n";

		alert(driversLineup);
	}
	
	//returns public "API"
	return {
		addDriver: addDriver,
		printDrivers: printDrivers
	}

})();

raceModule.addDriver("John");
raceModule.addDriver("Josh");
raceModule.addDriver("Joe");

raceModule.printDrivers();
