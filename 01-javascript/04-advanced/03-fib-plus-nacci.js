function fib(){
    var first = 0;
    var second = 1;
    function nacci() {
        const temp = first;
        first = second;
        console.log(second);
        second +=  temp;
       
    }
    return nacci;
}

var fibCounter = fib();

fibCounter() 
fibCounter() 
fibCounter() 
fibCounter()
fibCounter() 
fibCounter() 
