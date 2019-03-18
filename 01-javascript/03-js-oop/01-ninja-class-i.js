function Ninja(name){
    this.name = name;
    var health = 100;
    var speed = 3;
    var strength = 3;
    this.showStats = function(){
    console.log("Name: " + this.name + ", Health: " +health + ", Speed: " + speed + ", Strength: " + strength);
    return this;
    }
}

Ninja.prototype.sayName = function(){
    console.log("My name is " + this.name + "!");
    return this;
}
Ninja.prototype.drinkSake = function(){
    this.health += 10;
    return this;    
}
var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();