//very simple observer object, allows only adding new subscribers and notifying them
function ObserverList() {
	this.observers = [];
}

ObserverList.prototype.AddObserver = function(eventName, observer) {
	if (typeof this.observers[eventName] === "undefined")
		this.observers[eventName] = [];

	this.observers[eventName].push(observer);
};

ObserverList.prototype.Notify = function(eventName, data) {
	if (typeof this.observers[eventName] === "undefined")
		return;

	for(var i = 0; i < this.observers[eventName].length; i++)
		this.observers[eventName][i].Update(data);
};


var raceModule = (function() {	
	//private variables
	var drivers = [];
	var observerList = new ObserverList();

	//private function
	function AddDriver(name) {
		drivers.push(name);
		observerList.Notify('addName', name);
	}

	//returns public "API", revealing module pattern 
	return {
		AddDriver: AddDriver,
		AddObserver: function(eventName, observer) {
			observerList.AddObserver(eventName, observer);
		}
	}

})();

//let's add a simple observer to alert names of new drivers
raceModule.AddObserver('addName', 
	{
		Update: function(name) {
			alert("New driver: " + name);
		}
	}
);

raceModule.AddDriver("John");
raceModule.AddDriver("Josh");
raceModule.AddDriver("Joe");
