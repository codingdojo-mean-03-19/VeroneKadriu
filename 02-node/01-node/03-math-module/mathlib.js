module.exports = function (){
    return {
      add: function(num1, num2) { 
        num = num1+num2;
        console.log(num);
      },
      multiply: function(num1, num2) {
        num = num1*num2;
        console.log(num); 
      },
      square: function(num) {
        num  = num*num;
        console.log(num); 
      },
      random: function(num1, num2) {
        num = Math.floor(Math.random() * num2) + num1;
        console.log(num);

      }
    }
  };
  