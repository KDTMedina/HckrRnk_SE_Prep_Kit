'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'countResponseTimeRegressions' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY responseTimes as parameter.
 */

function countResponseTimeRegressions(responseTimes) {
    var rtLength = responseTimes.length;
    var count = 0; 
    const average = array => array.reduce((a, b) => a + b) / array.length;
    var aveArray = [];
    var aveArrayResult;
    
    // return count of elmeents with greater than
    
    for (let i=0; i<responseTimes.length; i++) {
        if (responseTimes[0] == 1) {
            aveArray.push(responseTimes[i]);
            break;
        } else {
            aveArray.push(responseTimes[i]);
            if (responseTimes[i] > average(aveArray)) {
                count += 1;
                console.log("curr count: " + count);
            } 
        }
    }
    console.log("count is: " + count);
    return count;
}

function main() {
    // const responseTimesCount = parseInt(readLine().trim(), 10);

    let responseTimes = [100, 200, 150, 300];

    // for (let i = 0; i < responseTimesCount; i++) {
    //     const responseTimesItem = parseInt(readLine().trim(), 10);
    //     responseTimes.push(responseTimesItem);
    // }   

    const result = countResponseTimeRegressions(responseTimes);

    process.stdout.write(result + '\n');
}


main();
// console.log(count);
