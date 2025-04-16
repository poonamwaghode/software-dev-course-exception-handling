const readlineSync = require('readline-sync');

let animals = [];
let fees = [];

// Function to add animals
function addAnimal(name, fee) {
    if (!name || fee < 0) {
        throw new Error("Invalid animal name or adoption fee!");
    }
    animals.push(name);
    fees.push(fee);
}

// Function to retrieve adoption fees
function getAdoptionFee(animalName) {
    let index = animals.indexOf(animalName);
    if (index === -1) {
        throw new Error("Animal not found in records!");
    }
    return fees[index];
}

// Main program logic
console.log("Welcome to the Pet Shelter System");

while (true) {
    try {
        let action = readlineSync.question("Choose an action: 'add', 'fee', or 'exit': ").toLowerCase();

        if (action === "exit") {
            console.log("Goodbye!");
            break;
        }

        if (action === "add") {
            try {
                let animal = readlineSync.question("Enter the animal's name: ");
                let fee = Number(readlineSync.question("Enter the adoption fee: "));
                addAnimal(animal, fee);
                console.log(`${animal} added with a fee of $${fee}.`);
            } catch (err) {
                console.log("Error adding animal:", err.message);
            }

        } else if (action === "fee") {
            try {
                let animal = readlineSync.question("Enter the animal's name to find its adoption fee: ");
                let fee = getAdoptionFee(animal);
                console.log(`${animal}'s adoption fee is $${fee}.`);
            } catch (err) {
                console.log("Error retrieving fee:", err.message);
            }

        } else {
            console.log("Invalid action. Please choose 'add', 'fee', or 'exit'.");
        }

    } catch (err) {
        console.log("Unexpected error:", err.message);
    }
}