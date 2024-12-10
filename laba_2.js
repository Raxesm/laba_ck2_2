var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BallType;
(function (BallType) {
    BallType[BallType["Football"] = 0] = "Football";
    BallType[BallType["Basketball"] = 1] = "Basketball";
    BallType[BallType["Tennis"] = 2] = "Tennis";
})(BallType || (BallType = {}));
var myBall = {
    type: BallType.Football,
    brand: "Nike",
    size: 5,
    weight: 410
};
console.log(JSON.stringify(myBall, null, 2));
function getMaxFromArray(arr) {
    return Math.max.apply(Math, arr);
}
console.log(getMaxFromArray([1.5, 2.3, 3.7]));
function hasNegative(matrix) {
    for (var _i = 0, matrix_1 = matrix; _i < matrix_1.length; _i++) {
        var row = matrix_1[_i];
        if (row.some(function (num) { return num < 0; })) {
            return true;
        }
    }
    return false;
}
console.log(hasNegative([[1, 2, 3], [-1, 5, 6]])); // Выведет: true
var tupleThreeNumbers = [1, 2, 3];
function sumTuple(tuple) {
    return tuple[0] + tuple[1] + tuple[2];
}
console.log(sumTuple(tupleThreeNumbers)); // Выведет: 6
var exampleBall = { type: BallType.Football, brand: "Nike" };
console.log(BallType.Football);
console.log(JSON.stringify(exampleBall)); // Вывод в формате JSON
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish!";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
function printPetInfo(pet) {
    console.log("Name: ".concat(pet.name, ", Age: ").concat(pet.age, ", Speak: ").concat(pet.speak()));
}
var myDog = new Dog();
var myCat = new Cat();
printPetInfo(myDog); // Выведет информацию о собаке
printPetInfo(myCat); // Выведет информацию о кошке
