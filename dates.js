// Creating dates
let date1 = new Date("2022-02-12");
console.log(`Date 1: ${date1}`);
let date2 = new Date("February 12, 2022");
console.log(`Date 2: ${date2}`);
let date3 = new Date(); // Current time
console.log(`Date 3: ${date3}`);
let date4 = new Date("2022-02-12T02:30:04.312-05:00")
console.log(`Date 4: ${date4}`);
let date5 = new Date(2023, 0, 1, 2, 30, 4); // yr , index month (0 = jan), day, hour , minutes, seconds
console.log(`Date 2: ${date5}`);

// Accessing elements from a date
console.log(`Full Year: ${date5.getFullYear()}`);
console.log(`Month (zero-indexed): ${date5.getMonth()}`);
console.log(`Day of month: ${date5.getDate()}`);
console.log(`Hours: ${date5.getHours()}`);

//  Milliseconds from the epoch
console.log(`Time: ${date5.getTime()}`);
let date6 = new Date(0);
console.log(date6.toUTCString());