//hero, can have multiple items
function Hero(name) {
	this.name = name;
	this.items = [];
}

Hero.prototype.addItem = function(item) {
	this.items.push(item);
}

//item
function Item(damage, armor, speed) {
	this.damage = damage;
	this.armor = armor;
	this.speed = speed;
}

Item.prototype.toString = function() {
	return "Damage: " + this.damage + ", Armor: " + this.armor + ", Speed: " + this.speed + ".";
}

//there's a limited set of items but multiple heroes can have the same item
//instead of creating multiple instances of each item, we create one instance and share it between heroes
var ItemFactory = (function() {

	var items = [], item;

	function BootsOfSpeed() {
		return new Item(0, 0, 5);
	}

	function SwordOfRevange() {
		return new Item(10, 1, 0);
	}

	return {
		getItem: function(name) {
			
			//if an items already exists, we return it
			item = items[name];
			if (!!item)
				return item;

			//if it doesn't exist, we first need to create it, then return it
			switch(name.toLowerCase()) {
				case 'bootsofspeed':
					items[name.toLowerCase()] = BootsOfSpeed();
					break;
				case 'swordofrevange':
					items[name.toLowerCase()] = SwordOfRevange();
					break;
			}
			return items[name];
		}
	}
}());

var pandaren = new Hero("Pandaren");
var boots1 = ItemFactory.getItem('bootsofspeed');
pandaren.addItem(boots1);

var lich = new Hero("Lich");
var boots2 = ItemFactory.getItem('bootsofspeed');
lich.addItem(boots2);

boots1.armor = 1;
boots2.damage = 1;

//both heroes share the same reference to the boots of speed, so the boots will be the same
alert(boots1.toString());
alert(boots2.toString());
