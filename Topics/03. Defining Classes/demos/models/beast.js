"use strict";
const Creature_1 = require("./Creature");
class Beast extends Creature_1.Creature {
    constructor(name, power, health) {
        super(name, power, health);
    }
    get power() {
        return this.damage;
    }
    set power(power) {
        this.damage = power;
    }
    hit(other) {
        let creatureHit = `${this.name} hits with power ${this.power}`;
        other.takeHit(this.power);
        return creatureHit;
    }
    takeHit(damage) {
        this.health += damage;
    }
}
exports.Beast = Beast;
//# sourceMappingURL=beast.js.map