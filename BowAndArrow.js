import { WeaponBehavior } from './WeaponBehavior.js';
export class BowAndArrow extends WeaponBehavior {
  attack() {
    return "Disparó una Flecha.";
  }
}
