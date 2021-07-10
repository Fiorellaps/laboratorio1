// 1. DADO TRUNCADO

// Todos tiene la misma probabilidad (1/6)
var rollDice = () => Math.floor(Math.random() * 6) + 1;

console.log(rollDice());

// Distintas probabilidades

var results = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6];
var rollDice = () => results[Math.floor(Math.random() * 10)];

console.log(rollDice());

// altenativa --> 

var diceProbs = [5, 5, 5, 10, 10, 65];

var calcAccumulatedProbs = prob => {
    var accumulatedProb = [];
    for (var i = 0, accumulated = 0; i < prob.length; i++) {
        accumulated += prob[i];
        accumulatedProb.push(accumulated);
    }
    return accumulatedProb;
};
var accumulatedProbs = calcAccumulatedProbs(diceProbs);
console.log(accumulatedProbs);

var rollDice = () => {
    var rnd = Math.random() * 100; // [0, 100);
    for (var i = 0; i < accumulatedProbs.length; i++) {
        if (rnd <= accumulatedProbs[i]) {
            console.log(rnd);
            console.log(accumulatedProbs[i]);
            return i + 1;
        }
    }
};
console.log(rollDice())
    /*
    setInterval(() => {
        console.log('${Date.now()} |', rollDice());
    }, 400);
    */

// 2. TRIÁNGULO DE BILLAR

var billardBalls = [];

var generateUnsortedBalls = array => {
    while (array.length < 15) {
        var newBall = Math.floor(Math.random() * 15) + 1;
        if (array.indexOf(newBall) === -1) {
            array.push(newBall);
        }
    }
    return array;
};

console.log(generateUnsortedBalls(billardBalls));


var printTriangle = array => {
    for (var row = 1, index = 0; index < array.length; row++) {
        var show = "";
        for (var ballToShow = 1; ballToShow <= row; ballToShow++) {
            show += ' ${array[index++]}';
        }
        console.log(show);
    }
};

//printTriangle(billardBalls);

var swap = (array, a, b) => {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
};
var bubbleSort = array => {
    var size = array.length;
    for (var temp = 1; temp < size; temp++) {
        for (var left = 0; left < size - temp; left++) {
            var right = left + 1;
            if (array[left] > array[right]) {
                swap(array, left, right);
            }
        }
    }
    return array;
};

printTriangle(bubbleSort(billardBalls));