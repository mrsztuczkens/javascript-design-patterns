function Rectangle(length, width) {
	this.length = length;
	this.width = width;
}

Rectangle.prototype.getArea = function() {
	return this.length * this.width;
}

Rectangle.prototype.printArea = function() {
	alert("The area of this rectangle equals: " + this.getArea().toString());
}

var newRectangle = new Rectangle(10, 20);
alert(newRectangle.getArea());

newRectangle.printArea();
