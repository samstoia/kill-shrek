export class Warrior {
  constructor(name, strength, intelligence, health) {
    this.name = name;
    this.strength = strength;
    this.intelligence = intelligence;
    this.health = health;
    this.type = "Warrior";
    this.item = null;
  };

  physicalAttack(){
    if(this.item === null){
      return this.strength * .5;
    }
    else{
      let damage = this.strength * this.item.physicalMultiplier;
      return damage;
    }
  };

  magicalAttack(){
    if(this.item === null){
      return this.intelligence * .5;
    }
    else{
      let damage = this.intelligence * this.item.magicalMultiplier;
      return damage;
    }
  };

  takeDamage(num){
    this.health -= num;
  };

  isDead(){
    if(this.health <= 0){
      return true;
    }
    return false;
  };

  arm(item){
    this.item = item;
  };
}

export class Wizard {
  constructor(name, strength, intelligence, health) {
    this.name = name;
    this.strength = strength;
    this.intelligence = intelligence;
    this.health = health;
    this.type = "Wizard";
    this.item = null;
  };

  physicalAttack(){
    if(this.item === null){
      return this.strength * .5;
    }
    else{
      let damage = this.strength * this.item.physicalMultiplier;
      return damage;
    }
  };

  magicalAttack(){
    if(this.item === null){
      return this.intelligence * .5;
    }
    else{
      let damage = this.intelligence * this.item.magicalMultiplier;
      return damage;
    }
  };

  takeDamage(num){
    this.health -= num;
  };

  isDead(){
    if(this.health <= 0){
      return true;
    }
    return false;
  };

  arm(item){
    this.item = item;
  };
}

export class Monster{
  constructor(name, health, damage){
    this.name = name;
    this.health = health;
    this.damage = damage;
  };

  monsterAttack(){
    return this.damage;
  };

  takeDamage(num){
    this.health -= num;
  };

  isDead(){
    if(this.health <= 0){
      return true;
    }
    return false;
  };
}
