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
    if (!intervals || intervals.length === 0) {
        return [];
    }

    // Step 1: Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    // Step 2: Initialize merged list
    const merged = [];
    merged.push(intervals[0]);

    // Step 3: Merge overlapping intervals
    for (let i = 1; i < intervals.length; i++) {
        const lastMerged = merged[merged.length - 1];
        const current = intervals[i];

        // Check for overlap
        if (current[0] <= lastMerged[1]) {
            // Merge intervals
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            // No overlap, add new interval
            merged.push(current);
        }
    }

    return merged;
}


function main() {
    // const intervalsRows = parseInt(readLine().trim(), 10);

    // const intervalsColumns = parseInt(readLine().trim(), 10);

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