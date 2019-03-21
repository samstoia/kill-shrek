import {Warrior, Wizard, Monster} from "./../src/characters.js";
import {Item} from "./../src/items.js";

describe('Warrior', function() {

  let reusableWarrior;

  beforeEach(function(){
    reusableWarrior = new Warrior("Bob", 90, 60, 1000);
  });

  it('should create a warrior object', function() {
    expect(reusableWarrior instanceof Warrior).toEqual(true);
  });

  it('should do a physical attack with .5 multiplier if it has no item', function() {
    expect(reusableWarrior.physicalAttack()).toEqual(45);
  });

  it('should do a physical attack with an item multiplier if it has an item', function() {
    reusableWarrior.arm(Item.createSword());
    expect(reusableWarrior.physicalAttack()).toEqual(180);
  });

  it('should do a magical attack with .5 multiplier if it has no item', function() {
    expect(reusableWarrior.magicalAttack()).toEqual(30);
  });

  it('should do a magical attack with an item multiplier if it has an item', function() {
    reusableWarrior.arm(Item.createStaff());
    expect(reusableWarrior.magicalAttack()).toEqual(120);
  });

  it('should be able to take a specified amount of damage', function() {
    reusableWarrior.takeDamage(300);
    expect(reusableWarrior.health).toEqual(700);
  });

  it('should be able to tell that its dead when its hp is less than or equal to 0', function() {
    reusableWarrior.takeDamage(1000);
    expect(reusableWarrior.isDead()).toEqual(true);
  });

  it('should be able to arm itself with an item', function() {
    reusableWarrior.arm(Item.createStaff());
    expect(reusableWarrior.item.itemName).toEqual("Staff");
  });
});

describe('Wizard', function(){
  var reusableWizard;

  beforeEach(function() {
    reusableWizard = new Wizard("Jermiah", 50, 90, 1000);
  });

  it('should create instance of Wizard object', function(){
    expect(reusableWizard instanceof Wizard).toEqual(true);
  });

  it('should test if physical attack does .5 damage with no item equipped', function(){
    expect(reusableWizard.physicalAttack()).toEqual(25);
  })

  it('should test if physical attack does double damage with item equipped', function(){
    reusableWizard.arm(Item.createSword());
    expect(reusableWizard.physicalAttack()).toEqual(100);
  })

  it('should test if magical attack does .5 damage with no item equipped', function(){
    expect(reusableWizard.magicalAttack()).toEqual(45);
  })

  it('should test if magical attack does double damage with item equipped', function(){
    reusableWizard.arm(Item.createStaff());
    expect(reusableWizard.magicalAttack()).toEqual(180);
  })

  it('should test if wizard takes damage when hit', function() {
    reusableWizard.takeDamage(200);
    expect(reusableWizard.health).toEqual(800);
  })

  it('should test if wizard is dead if health is 0 or under', function() {
    reusableWizard.takeDamage(1000);
    expect(reusableWizard.isDead()).toEqual(true);
  })

  it('should test if wizard has armed an item', function(){
    reusableWizard.arm(Item.createSword());
    expect(reusableWizard.item.itemName).toEqual("Sword");
  })
});

describe('Monster', function(){
  var reusableMonster;

  beforeEach(function(){
    reusableMonster = new Monster("Jeff", 1000, 100);
  });

  it('should test if a monster has been created', function(){
    expect(reusableMonster instanceof Monster).toEqual(true);
  })

  it('should test that monsters attack does 100 damage', function() {
    expect(reusableMonster.monsterAttack()).toEqual(100);
  })

  it('should test that monster takes damage', function(){
    reusableMonster.takeDamage(400);
    expect(reusableMonster.health).toEqual(600);
  })

  it('should check if monster is dead if heath is less than or equal to 0', function(){
    reusableMonster.takeDamage(1500);
    expect(reusableMonster.isDead()).toEqual(true);
  })
});
