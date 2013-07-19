var raceModule = (function() {
	//private variables
	var drivers = [];

	var f = {
		AddDriver: function (name) {
			drivers.push(name);
		},

		PrintDrivers: function () {
			var str = "";
			for (var i = 0; i < drivers.length; i++)
				str += drivers[i] + "\n";

			alert(str);
		}
	}

	//returns public "API", revealing module pattern 
	return {
		Execute: function(command) {
			return f[command] && f[command].apply(this, Array.prototype.slice.call(arguments, 1) );
		}
	}

})();

raceModule.Execute("AddDriver", "John");
raceModule.Execute("AddDriver", "Josh");
raceModule.Execute("AddDriver", "Joe");

raceModule.Execute("PrintDrivers");
