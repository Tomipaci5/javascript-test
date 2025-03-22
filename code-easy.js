// oblast definice funkcí

// 1) Funkce co vrací boolean hodnotu zda stringInput, obsahuje v sobě stringToFind; je caseSensitive (defaultní chování)
function contains(stringInput, stringToFind) {}

// 2) Funkce co vrací délku pole poskytnutého v arrayInput
function size(arrayInput) {}

// 3) Funkce co vrací opak poskytnutého booleanu hodnoty v booleanInput
function negate(booleanInput) {}

// 4) Funkce co spojí dva string (bez žádného přidaného znaku) a vrátí je jako jeden string
function join(string1, string2) {}

// 5) Funkce vrací hodnotu z pole arrayInput na indexu indexInput
function get(arrayInput, indexInput) {}

// oblast volání funkcí
const fruits = ["apple", "banana", "kiwi", "orange", "strawberry"];

// 1)
const result1 = contains("Hello World", "Hello");
console.log(result1);

// 2)
const result2 = size(fruits);
console.log(result2);

// 3)
const result3 = negate(true);
console.log(result3);

// 4)
const result4 = join("Hello", "World");
console.log(result4);

// 5)
const result5 = get(fruits, 2);
console.log(result5);

// do kódu níže nezasahujte

module.exports = {
  contains,
  size,
  negate,
  join,
  get,
};
