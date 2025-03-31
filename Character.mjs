export class Character {
    constructor(WeaponBehavior, MoveBehavior ) {
      this.WeaponBehavior = WeaponBehavior;
      this.MoveBehavior = MoveBehavior;
    }
  
    performMove() {
      return this.MoveBehavior.move();
    }
  
    performAttack() {
      return this.WeaponBehavior.attack();
    }
  
    setMoveBehavior(m) {
      this.MoveBehavior = m;
    }
  
    setWeaponBehavior(w) {
      this.WeaponBehavior = w;
    }

    showCharacter(){
        return this.display();
    }
  
    display() {
      return "Soy un personaje genérico.";
    }
  }
  