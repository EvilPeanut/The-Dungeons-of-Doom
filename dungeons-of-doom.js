class World {
	constructor() {
		this.items = [];
		this.monsters = [];
	}
	
	itemCount() {
		return Object.keys(this.items).length;
	}
	
	monsterCount() {
		return Object.keys(this.monsters).length;
	}
	
	aliveMonsterCount() {
		var count = 0;
		
		for (var i = 0; i < this.monsterCount(); i++) {
			if (Object.values(this.monsters)[i].life > 0) {
				count++;
			}
		}
		
		return count;
	}
}

class WorldObject {
	constructor(description, location) {
		this.description = description;
		this.location = location;
	}
}

class Item extends WorldObject {
	constructor(description, location) {
		super(description, location);
		
		world.items[description] = this;
	}
	
	strike(target) {
		if (target.constructor.name == "Monster") {
			target.life--;
		}
	}
}

class Monster extends WorldObject {
	constructor(description, location, life) {
		super(description, location);
		
		this.life = life;
		
		world.monsters[description] = this;
	}
	
	strike(target) {
		if (target.constructor.name == "Item") {
			this.life--;
		}
	}
}

// Declare our world
var world = new World();

// Constructor adds new Monster/Item to world's list
new Item("The Amulet Ur Hekau Setcheh", 3);
new Item("The Sword of Damocles", 2);
new Item("A curious rock", 3);
new Item("An empty bottle", 0);

new Monster("Babbage the Dragon", 1, 3);
new Monster("A sinister grue", 2, 1);