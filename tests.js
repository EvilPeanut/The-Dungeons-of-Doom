QUnit.test("Monster and Item Existence test", function( assert ) {
	assert.notEqual(world.items["The Amulet Ur Hekau Setcheh"], undefined, "The Amulet Ur Hekau Setcheh is defined.");
	assert.notEqual(world.items["The Sword of Damocles"], undefined, "The Sword of Damocles is defined.");
	assert.notEqual(world.items["A curious rock"], undefined, "A curious rock is defined.");
	assert.notEqual(world.items["An empty bottle"], undefined, "An empty bottle is defined.");
	
	assert.notEqual(world.monsters["Babbage the Dragon"], undefined, "Babbage the Dragon is defined.");
	assert.notEqual(world.monsters["A sinister grue"], undefined, "A sinister grue is defined.");
});

QUnit.test("Monster and Item Property Value test", function( assert ) {
	assert.equal(world.items["The Amulet Ur Hekau Setcheh"].location, 3, "The Amulet Ur Hekau Setcheh location property has correct value.");
	assert.equal(world.items["The Sword of Damocles"].location, 2, "The Sword of Damocles location property has correct value.");
	assert.equal(world.items["A curious rock"].location, 3, "A curious rock location property has correct value.");
	assert.equal(world.items["An empty bottle"].location, 0, "An empty bottle location property has correct value.");
	
	assert.equal(world.monsters["Babbage the Dragon"].location, 1, "Babbage the Dragon location property has correct value.");
	assert.equal(world.monsters["Babbage the Dragon"].life, 3, "Babbage the Dragon life property has correct value.");
	assert.equal(world.monsters["A sinister grue"].location, 2, "A sinister grue location property has correct value.");
	assert.equal(world.monsters["A sinister grue"].life, 1, "A sinister grue life property has correct value.");
});

QUnit.test("Monster and Item Count test", function( assert ) {
	assert.equal(world.itemCount(), 4, "The global item count is correct.");
	assert.equal(world.monsterCount(), 2, "The global monster count is correct.");
});

QUnit.test("Strike test", function( assert ) {
	world.items["The Amulet Ur Hekau Setcheh"].strike(world.items["The Sword of Damocles"]);
	world.items["The Amulet Ur Hekau Setcheh"].strike(world.monsters["Babbage the Dragon"]);
	assert.equal(world.monsters["Babbage the Dragon"].life, 2, "Babbage the Dragon's life value after being hit by item is correct.");
	world.monsters["A sinister grue"].strike(world.items["The Amulet Ur Hekau Setcheh"]);
	assert.equal(world.monsters["A sinister grue"].life, 0, "A sinister grue's life value after hitting an item is correct.");
});

QUnit.test("Alive Monster Count test", function( assert ) {
	assert.equal(world.aliveMonsterCount(), 1, "The count of monsters with a life value above 0 is correctly affected by the 'strike' function.");
});