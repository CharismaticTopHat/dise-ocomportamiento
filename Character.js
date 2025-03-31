export class Character {
    constructor(WeaponBehavior, MoveBehavior ) {
      this.WeaponBehavior = WeaponBehavior;
      this.MoveBehavior = MoveBehavior;
    }
  
    performMove() {
      return this.MoveBehavior.weapon();
    }
  
    performAttack() {
      return this.WeaponBehavior.move();
    }
  
    setMoveBehavior(m) {
      this.flyBehavior = m;
    }
  
    setWeaponBehavior(w) {
      this.quackBehavior = w;
    }

    showCharacter(){
        return this.display();
    }
  
    display() {
      return "Soy un personaje genérico.";
    }
  }
  