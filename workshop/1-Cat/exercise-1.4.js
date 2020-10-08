// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);

class Cat {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.species = 'cat';
        this.hunger = 30;
        this.loneliness = 30;
        this.happiness = 30;
        this.tiredness = 30;
    }

    wait = (minutes) => {
        this.tiredness = this.tiredness * (minutes * 2);
        this.hunger = this.hunger + (minutes * 3);
        this.loneliness = this.loneliness + (minutes + 5);
        this.happiness = this.happiness - (minutes * 0.5);
    } 

    sleep = (hours) => {
        this.tiredness = this.tiredness - (hours * 5);
        this.happiness = this.happiness + (hours * 1.5);
    }

    eat = (kibbles) => {
        this.hunger = this.hunger - (kibbles / 5);
        this.happiness = this.happiness + (kibbles * 2);
    }

    play = (minutes) => {
        this.loneliness = this.loneliness - (minutes * 3);
        this.happiness = this.happiness - (minutes * 2);
    }
}

let Boots = new Cat('Boots', 'Siamese');
console.log(Boots);