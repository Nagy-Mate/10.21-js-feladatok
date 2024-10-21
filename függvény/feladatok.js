const numbers = [2,13,3,7,17,5,11,19,9];
const odds = [5,7,9,11,21,33,3,1];
const names = ['Eva', 'Adel', 'Cedric', 'Dior', 'Frank', 'Bob'];
const fruits = ['pineapple', 'kiwi', 'banana', 'pear', 'cherry'];

// String tömböt a szavak hossza szerint rendezi és a rendezett tömböz adja vissza
function sortByLength(array) {
    return array.sort((a,b) => a.length - b.length);
}
console.log(sortByLength(names),sortByLength(fruits));

//- String tömböt a szavak hossza szerint rendezi ABC sorrendbe és a rendezett tömböz adja vissza
function sortByLengthAsc(array) {
    return array.sort((a,b) => b.length - a.length);
}
console.log(sortByLengthAsc(names),sortByLengthAsc(fruits));

//- számokat rendez a 15-től való távolság alapján és a rendezett tömböt adja vissza
function sortFrom15(numbers) {
    return numbers.sort((a, b) => Math.abs(a - 15) - Math.abs(b - 15));
}
console.log(sortFrom15(numbers));


//- String tömb mindegy elemének az elejére és végére egy csillagot tesz és visszaadja a módosított tömböt
function addAsterisk(stings) {
    return stings.map(item => `*${item}*`);
}
console.log(addAsterisk(names), addAsterisk(fruits));


//- számokat tartalmazó tömb 5 és 15 közötti elemeit adja vissza egy tömbben
function between5And15(numbers) {
    return numbers.filter(item => item > 5 && item < 15);
}
console.log(between5And15(numbers));

// - számokat tartalmazó tömb minden eleme páratlan-e. Visszatérési érték true vagy false
function isAllOdd(numbers){
    return numbers.every(item => item % 2 == 1);
}
console.log(isAllOdd(numbers), isAllOdd(odds));


//- számokat tartalmazó tömb tartalmaz-e páros elemet. Visszatérési érték true vagy false
function hasEven(numbers) {
    return numbers.some(item => item % 2 == 0);
}
console.log(hasEven(numbers), hasEven(odds));


//-  számokat tartalmazó tömb elemeit összeszorozza és a szorzatot adja vissza 
function sigma(numbers) {
    return numbers.reduce((total, item ) => total * item);
}
console.log(sigma(numbers));


let number = 3
const increase = (number) => number+1 ;

//A kód nem működik a várt módon, mert a number++ kifejezés csak a increase függvényen belül növeli meg a number változót, de a külső number változóra nem hat.
