//superclass
function Person(name) {
	this.name = name;
}

Person.prototype.toString = function() {
	return "I'm a person. My name is " + this.name + ".";
}

Person.prototype.doWork = function() {
	alert("I'm working!");
}


//subclass
function Worker(name, profession) {
	Person.call(this, name);
	this.profession = profession || "";
}

Worker.prototype = Object.create(Person.prototype);

//function override
Worker.prototype.toString = function() {
	return "I'm a worker. My profession is " + this.profession + ".";
}


var person = new Person("Mike");
alert(person.toString());
person.doWork();


var mechanic = new Worker("Alex", "mechanic");
alert(mechanic.toString());
mechanic.doWork();
