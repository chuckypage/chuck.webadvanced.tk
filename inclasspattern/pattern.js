console.log("hello world");
var timer = 0;
var counter = 0;
var numbers= []

for (var x = 0; x < 100; x++) {
    numbers.push(x);
}

console.log(numbers);

for (var i = 0; i < 100; i++) {
    setTimeout(function() {
        console.log(numbers.shift());
        console.log(i);
    }, timer);
    timer += 100;
    counter++;
}

setTimeout(function() {
    console.log("You made it...");
    
}, (Math.random()*5000));


