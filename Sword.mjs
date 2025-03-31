import { WeaponBehavior } from './WeaponBehavior.mjs';
export class Sword extends WeaponBehavior {
  attack() {
    return "Atacó con una Espada.";
  }
}
