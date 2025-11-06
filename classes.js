// declare constants
const newLineChar = "\n";


// declare classes
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

class playerStats {
    #name;
    #level;
    #health;
    #stamina;
    #damage;

    constructor(name, level, health, stamina, damage) {
        this.name = name;
        this.level = level;
        this.health = health;
        this.stamina = stamina;
        this.damage = damage;
    }
    toString() {
        return `${this.name} | Level: ${this.level}${newLineChar}Health: ${this.health}${newLineChar}Stamina: ${this.stamina}${newLineChar}Dps: ${this.damage}`;
    }
}

// code execution

// Using our playerStats class
let player1 = new playerStats("Hollow Knight", 3, 10, 5, 4);
console.log(player1.toString());

// Using our new CalendarDay class
let day1 = new CalendarDay(2,12,2022);
console.log(day1.toString());