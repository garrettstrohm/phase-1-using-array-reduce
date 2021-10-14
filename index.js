const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function batteries(runningTotal, currentValue) {
    return runningTotal + currentValue;
}
let totalBatteries = batteryBatches.reduce(batteries, 0);