//first  object
function Driver(options) {
	this.name = options.name || "DefaultName";
	this.status = options.status || "Active";
}

Driver.prototype.toString = function() {
	return "I am " + this.name + " and my status is " + this.status;
};


//second object
function Pilot(options) {
	this.name = options.name || "John";
	this.militaryRank = options.militaryRank || "Sergeant";
}

Pilot.prototype.toString = function() {
	return "I am " + this.name + " and my rank is " + this.militaryRank;
};


//object factory
function Factory() {}

Factory.prototype.createObject = function(name, options) {

	switch(name) {
		case 'Driver':
			return new Driver(options);
		case 'Pilot':
			return new Pilot(options);
		default:
			return null;
	}
};

var factory = new Factory();

var driver = factory.createObject("Driver", {
	name: "John"
});

alert(driver.toString());

var pilot = factory.createObject("Pilot", {
	name: "Josh",
	militaryRank: "major"
});

alert(pilot.toString());
