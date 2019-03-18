function Ninja(name){
    this.name = name;
    var health = 100;
    var speed = 3;
    var strength = 3;
    this.showStats = function(){
        console.log("Name: " + this.name + ", Health: " +health + ", Speed: " + speed + ", Strength: " + strength);
        return this;
    
    }
    this.kick = function(ninja){
        
        ninja.health -= 15;
        console.log(ninja.name + " was kicked by " + this.name + " and lost 15 Health!");
        return this;
    }

}

Ninja.prototype.punch = function(ninja){
    ninja.health -= 5;
    console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
    return this;
}


Ninja.prototype.sayName = function(){
    console.log("My name is " + this.name + "!");
    return this;
}
Ninja.prototype.drinkSake = function(){
    this.health += 10;
    return this;    
}
var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);