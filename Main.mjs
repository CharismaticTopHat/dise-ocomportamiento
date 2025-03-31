import { King } from './King.mjs';
import { BowAndArrow } from './BowAndArrow.mjs';
import { SquatWalk } from './SquatWalk.mjs';
import { Knife } from './Knife.mjs';
import { ChestWalk } from './ChestWalk.mjs';

const king = new King(new BowAndArrow(), new SquatWalk());
console.log(king.display());
console.log(king.performAttack());
console.log(king.performMove());

king.setWeaponBehavior(new Knife());
king.setMoveBehavior(new ChestWalk());

console.log("\nDespués de cambiar movimiento y arma.");
console.log(king.performAttack());
console.log(king.performMove());
