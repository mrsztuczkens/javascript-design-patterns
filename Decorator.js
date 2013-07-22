//base class to be decorated
function Hero(damage, armor, speed) {
	this.damage = damage;
	this.armor = armor;
	this.speed = speed;
}

Hero.prototype.toString = function() {
	return "I'm a hero. My stats are: DMG: " + this.damage + ", Armor: " + this.armor + ", Speed: " + this.speed + "." +
		"\n" + "My equipment:" + "\n" + this.Equipment();
}

Hero.prototype.Equipment = function() {
	return "";
}

//first decorator
function BootsOfSpeed( hero ) {
	hero.speed += 2;

	var oldEquipment = hero.Equipment();

	hero.Equipment = function() {
		return oldEquipment + "Boots of Speed" + "\n";
	};
}

//second decorator
function SwordOfRevange( hero ) {
	hero.damage += 8;

	var oldEquipment = hero.Equipment();

	hero. Equipment = function() {
		return oldEquipment + "Sword of Revange" + "\n";
	};
}
	

var panda = new Hero(10, 5, 3);
alert(panda.toString());

BootsOfSpeed(panda);
alert(panda.toString());

SwordOfRevange(panda);
alert(panda.toString());
