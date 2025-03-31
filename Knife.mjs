import { WeaponBehavior } from './WeaponBehavior.mjs';
export class Knife extends WeaponBehavior {
  attack() {
    return "Atacó con un Cuchillo.";
  }
}