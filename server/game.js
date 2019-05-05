class Position {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    } 
}

class Enemy {
    constructor(id, name, enemyClass, startingPosition) {

        this.id = id;
        this.name = name;
        this.enemyClass = enemyClass;
        this.setupEnemy();
        this.position = startingPosition;
    }

    setupEnemy() {
        if (this.enemyClass === "fighter") {
            this.hp = 10;
            this.mp = 0;
            this.specialAttack = "slash";
            this.attack = 5;
            this.defense = 5;
            this.magicAttack = 0;
            this.magicDefense = 0;
        } else { // this.enemyClass === "mage"
            this.hp = 5;
            this.mp = 10;
            this.specialAttack = "fireball";
            this.attack = 0;
            this.defense = 0;
            this.magicAttack = 5;
            this.magicDefense = 5;
        }
    }
}

class Player {
    constructor(id, name, playerClass, startingPosition) {
        this.id = id;
        this.name = name;
        this.playerClass = playerClass;
        this.setupPlayer();
        this.position = startingPosition;
    }

    setupPlayer() {
        //        playerClass = fighter
        if (this.playerClass === "fighter") {
            this.hp = 25;
            this.mp = 10;
            this.specialAttack = "slash";
            this.attack = 15;
            this.defense = 15;
            this.magicAttack = 5;
            this.magicDefense = 5;
        } else { // this.playerClass === "mage"
            this.hp = 15;
            this.mp = 25;
            this.specialAttack = "fireball";
            this.attack = 5;
            this.defense = 5;
            this.magicAttack = 15;
            this.magicDefense = 15;
        }
    }
}

const attackOpponent = (opponent1, opponent2) => {
    if (player.specialAttack === "slash") {
        let attack = this.attack + this.magicAttack * 0.1;
        let block = this.defense + this.magicDefense * 0.2;
        let damage = Math.max(attack - block, 0);
        opponent2.hp = Math.max(opponent2.hp - damage);

    } else { // fireball
        let attack = this.magicAttack + this.attack * 0.1;
        let block = this.magicDefense + this.defense * 0.2;
        let damage = Math.max(attack - block, 0);
        opponent2.hp = Math.max(opponent2.hp - damage);
    }

    if (opponent2.hp === 0) {
        opponent1.items = opponent1.items.concat(opponent2.items);
    }
};

const clamp = (min, max, value) => {
    return Math.min(max, Math.max(value, min));
}
const move = (moveable, direction) => {
    moveable.position.x = clamp(0, 50, direction.x + moveable.position.x);
    moveable.position.y = clamp(0, 50, direction.y + moveable.position.y);
}

class Game {
    constructor() {
        this.players = [];
        this.enemies = [];
        this.width = 50; 
        this.height = 50;
        this.grid = [];
        this.initialize();
    }
    initialize() {
        for (let i = 0; i < this.width * this.height; ++i) {
            this.grid.push(0);
        }
    }
    setGridPosition(pos, value) {
        this.grid[this.width * pos.y + pos.x] = value;
    }
    getGridPosition(pos) {
        return this.grid[this.width * pos.y + pos.x];
    }
}