import { WeaponBehavior } from './WeaponBehavior.js';
export class Knife extends WeaponBehavior {
  attack() {
    return "Atacó con un Cuchillo.";
  }
}