// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
}

function destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
}

function destructivelyRemoveLastCat() {
    cats.pop(-1);
} 

function destructivelyRemoveFirstCat() {
    cats.shift();
} 

function appendCat(name) {
    const appendCats = [...cats,name];
    return appendCats;
} 

function prependCat(name) {
    const prependCat = [name, ...cats];
    return prependCat;
} 

function removeLastCat() {
    const removeLastCat = cats.slice(0,-1);
    return removeLastCat;
} 
function removeFirstCat() {
    const removeFirstCat = cats.slice(1);
    return removeFirstCat;
} 