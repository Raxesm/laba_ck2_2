
enum BallType {
    Football,
    Basketball,
    Tennis
}type SportBall = {
    type: BallType; // Используем перечисление как тип поля
    brand: string;
    size: number;
    weight: number;
};
const myBall: SportBall = {
    type: BallType.Football,
    brand: "Nike",
    size: 5,
    weight: 410
};
console.log(JSON.stringify(myBall, null, 2));

function getMaxFromArray(arr: number[]): number {
    return Math.max(...arr);
}

console.log(getMaxFromArray([1.5, 2.3, 3.7]));

function hasNegative(matrix: number[][]): boolean {
    for (const row of matrix) {
        if (row.some(num => num < 0)) {
            return true;
        }
    }
    return false;
}
console.log(hasNegative([[1, 2, 3], [-1, 5, 6]])); // Выведет: true


let tupleThreeNumbers: [number, number, number] = [1, 2, 3];

function sumTuple(tuple: [number, number, number]): number {
    return tuple[0] + tuple[1] + tuple[2];
}

console.log(sumTuple(tupleThreeNumbers)); // Выведет: 6

let exampleBall: { type: BallType, brand: string } = { type: BallType.Football, brand: "Nike" };

console.log(BallType.Football);

console.log(JSON.stringify(exampleBall)); // Вывод в формате JSON
class Pet {
    name: string = 'Some pet';
    age: number = -1;
    speak(): string {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak(): string {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak(): string {
        return "Miyau!";
    }
}

function printPetInfo<T extends Pet>(pet: T) {
    console.log(`Name: ${pet.name}, Age: ${pet.age}, Speak: ${pet.speak()}`);
}

const myDog = new Dog();
const myCat = new Cat();
printPetInfo(myDog); // Выведет информацию о собаке
printPetInfo(myCat); // Выведет информацию о кошке