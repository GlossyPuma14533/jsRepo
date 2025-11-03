class CalendarDay {
    // Private fields
    #month;
    #day;
    #year;
    // Constructor
    constructor(month, day, year) {
        this.month = month;
        this.day = day;
        this.year = year;
    }
    // Public Method
    toString() {
        return `${this.year}-${this.month}-${this.day}`;
    }
}

// Using our new class
let day1 = new CalendarDay(2,12,2022);
console.log(day1.toString());