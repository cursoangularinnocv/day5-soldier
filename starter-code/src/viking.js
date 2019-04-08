// Soldier
class Soldier {
    xAxisAdvance = 10

    constructor (health = 120, strength = 120) {
        this.x = 100
        this.y = 200
        this.health = health;
        this.strength = strength;

        if (health < 0) {
            this.health = 100
        }

        if (strength < 0) {
            this.strength = 100
        }
    }

    die() {
        this.health = 0
    }

    getData() {
        return {
            x: this.x,
            y: this.y,
            strength: this.strength,
            health: this.health
        }
    }

    moveLeft() {
        this.x -= this.xAxisAdvance
    }

    moveRight() {
        this.x += this.xAxisAdvance
    }
}