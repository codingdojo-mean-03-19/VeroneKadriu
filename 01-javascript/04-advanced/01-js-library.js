var _ = {

    map: function(arr, callback) {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]);
      }
    },

    reduce: function(arr, callback, memo){
        let el = 0;
        if (!memo){
          memo = arr[0];
          el = 1;
        }
        for (let i = el; i < arr.length; i++) {
          memo = callback(arr[i], memo);
        }
        return memo;
    },

    filter: function(arr, callback) {
        const temparr = [];
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                temparr.push(arr[i]);
            }
        }
      
        return temparr;
    },

    find: function(arr, callback) {
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i])){
            return arr[i];
            }
        }
    },

    reject: function(arr, callback) {
        const temparr = [];
        for (let i = 0; i < arr.length; i++) {
            if (!callback(arr[i])) {
                temparr.push(arr[i]);
            }
        }
      
        return temparr;
    },
  }
  
  var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  console.log(evens);