
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
        return `${this.name} | Level: ${this.level}\nHealth: ${this.health}\nStamina: ${this.stamina}\nDps: ${this.damage}`;
    }
}

let player1 = new playerStats("Hollow Knight", 3, 10, 5, 4);
console.log(player1.toString());