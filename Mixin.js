//furst object
function Cuboid(a, b, c) {
	this.a = a;
	this.b = b;
	this.c = c;
}

Cuboid.prototype.height = function() {
	return this.c;
};

Cuboid.prototype.baseArea = function() {
	return this.a * this.b;
};

//second object
function Cube(a) {
	this.a = a;
}

Cube.prototype.height = function() {
	return this.a;
};

Cube.prototype.baseArea = function() {
	return this.a * this.a;
};


function VolumeMixin() {}

VolumeMixin.prototype.volume = function() {
	return this.baseArea() * this.height();
};

//if there are more functions in the mixin, use extend function from an existing library or implement one
Cuboid.prototype.volume = VolumeMixin.prototype.volume;
Cube.prototype.volume = VolumeMixin.prototype.volume;


var cube = new Cube(5);
alert(cube.volume());

var cuboid = new Cuboid(5, 10, 2);
alert(cuboid.volume());
