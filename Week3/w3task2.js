//string array 
const cats = ["Tabby", "Tortie", "Calico"];

//number array 
const ages = [2, 7, 11, 25, 18];

//method 1 - tostring - prints array as string
console.log(cats.toString());

//method 2 - push() - adds element to the end of an array
cats.push("Short Hair");
console.log(cats.toString());

//method 3 -  sort alphabetically
cats.sort();
console.log(cats.toString());

//method 4 - filter
const oddAges = ages.filter(isOdd);
function isOdd(value){
    return value %2 == 1;
}
console.log(oddAges.toString());

//method 5 - for loop, length
let cLen = cats.length;
const catAges = [];

for (let i = 0; i < cLen; i++){
    catAges.push(cats[i], ages[i]);
}
console.log(catAges.toString());
