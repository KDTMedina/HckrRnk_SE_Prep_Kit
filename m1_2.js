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
 * Complete the 'mergeHighDefinitionIntervals' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts 2D_INTEGER_ARRAY intervals as parameter.
 */

function mergeHighDefinitionIntervals(intervals) {
    // sample input: [[1, 3], [2, 6], [8, 10], [15, 18]];
    
    var sortedMultiDimen[2][2] = intervals;

    for (let i=0; i < 2; i++) {
        for (let j=0; j < ) {
            
        }
    }

}

function main() {
    const intervalsRows = parseInt(readLine().trim(), 10);

    const intervalsColumns = parseInt(readLine().trim(), 10);

    // let intervals = Array(intervalsRows);
    let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];

    // for (let i = 0; i < intervalsRows; i++) {
    //     intervals[i] = readLine().replace(/\s+$/g, '').split(' ').map(intervalsTemp => parseInt(intervalsTemp, 10));
    // }

    const result = mergeHighDefinitionIntervals(intervals);

    process.stdout.write(result.map(x => x.join(' ')).join('\n') + '\n');

    // console.log("test");

}


main();