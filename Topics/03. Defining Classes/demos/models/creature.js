"use strict";
class Creature {
    constructor(name, damage, health) {
        this.name = name;
        this.damage = damage;
        this.health = health;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        if (Creature.IsNameValid(newName) === false) {
            throw new Error("Invalid Superhero name");
        }
        this._name = newName;
    }
    static IsNameValid(name) {
        if (name === null ||
            name.length < 3 ||
            name.length > 30) {
            return false;
        }
        return true;
    }
}
exports.Creature = Creature;
//# sourceMappingURL=creature.js.map