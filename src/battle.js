export class Battle{
  constructor(player, monster){
    this.player = player;
    this.monster = monster;
  };

  checkDead(name){
    if(name === "player"){
      return this.player.isDead();
    }
    else {
      return this.monster.isDead();
    }
  }

  executeTurn(typeOfAttack){
      if(typeOfAttack === "physical"){
        this.monster.takeDamage(this.player.physicalAttack());
        if(this.checkDead("monster")){
          return "Player has won!"
        }
      }
      else{
        this.monster.takeDamage(this.player.magicalAttack());
        if(this.checkDead("monster")){
          return "Player has won!"
        }
      }
      this.player.takeDamage(this.monster.monsterAttack());
      if(this.checkDead("player")){
        return "Player has died.";
      }
      return `The battle continues. The player has ${this.player.health} health and the monster has ${this.monster.health} health.`
  }
}
