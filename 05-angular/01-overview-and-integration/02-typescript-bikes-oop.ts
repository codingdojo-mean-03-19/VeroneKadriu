class Bike {
   price: number;
   max_speed: string;
   miles: number;
   constructor(price: number, max_speed: string) {
       this.price = price;
       this.max_speed = max_speed;
       this.miles = 0;
       }
   displayInfo = () => {
       return console.log("the price is $" + this.price + ", the max speed is " + this.max_speed + ", the total miles are " + this.miles);
   }
   ride = () => {
       this.miles = this.miles + 10;
       console.log("Riding");
       return this;
   }
   reverse = () => {
       if (this.miles >= 5) {
           this.miles = this.miles - 5;
       }
       console.log("Reversing");
       return this;
   }
}

let bike1 = new Bike(1000, "25mph");
bike1.ride().ride().ride().reverse().displayInfo()

let bike2 = new Bike(3500, "75mph");
bike2.ride().ride().reverse().reverse().displayInfo()

let bike3 = new Bike(5000, "120mph");
bike3.reverse().reverse().reverse().displayInfo()