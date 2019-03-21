export class Item {
  constructor(itemName, physicalMultiplier, magicalMultiplier) {
    this.itemName = itemName;
    this.physicalMultiplier = physicalMultiplier;
    this.magicalMultiplier = magicalMultiplier;
  }

  static createSword(){
    let sword = new Item("Sword", 2, 1);
    return sword;
  }

  static createStaff(){
    let staff = new Item("Staff", 1, 2);
    return staff;
  }
}
