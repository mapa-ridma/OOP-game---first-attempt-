var rooms = {
    "start": {
        "description": "You begin in the main halls of castle Linovan. You can feel ominous energy coming from the <b>south</b> and you can smell the stench of garlic to the <b>west</b>.",
        "directions": {
            "south": "dungeon",
            "west": "kitchen",
        }
    },
    "dungeon": {
        "description": "You enter a large dungeon complex. You see a cute fluffy kitten in a cage. You free the fluffy kitty and it becomes your best friend. There are no other exits in this room.",
        "directions": {
            "north": "start",
        }
    },
    "kitchen": {
        "description": "You have entered the castles kitchen. There is nothing left in the pantries apart from a single clove of stinky garlic which you put it your pocket just in case. You can see the armoury to the <b>north</b>.",
        "directions": {
            "east": "start",
            "north": "armoury",
        }
    },
    "armoury": {
        "description": "Entering the armoury, you can now see the Vampire that has taken over the castle.",
        "directions": {
            "south": "kitchen",   
        }
    },
}
