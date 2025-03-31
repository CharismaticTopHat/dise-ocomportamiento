import { WeaponBehavior } from './WeaponBehavior.mjs';
export class BowAndArrow extends WeaponBehavior {
  attack() {
    return "Disparó una Flecha.";
  }
}
