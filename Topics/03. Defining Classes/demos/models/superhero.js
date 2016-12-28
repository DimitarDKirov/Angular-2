"use strict";
const Creature_1 = require("./Creature");
class Superhero extends Creature_1.Creature {
    constructor(name, secretIdentity, damage, health, ...powers) {
        super(name, damage, health);
        this.secretIdentity = secretIdentity;
        this.powers = powers;
    }
    usePower(powerName, target) {
        let power = this.powers.find(p => p.name.toLowerCase() == powerName.toLowerCase());
        if (!power) {
            throw new Error(`${this.name} cannot user ${powerName}`);
        }
        if (target) {
            target.takeHit(power.damage);
        }
        return `${this.name} uses ${power.name}`;
    }
    hit(other) {
        other.takeHit(this.damage);
        return `${this.name} hits`;
    }
    takeHit(damage) {
        this.health -= damage;
    }
}
exports.Superhero = Superhero;
//# sourceMappingURL=superhero.js.map