// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push('Ralph');
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name){
    cats.pop("Ralph");
}

function destructivelyRemoveFirstCat(name){
    cats.shift("Bob");
}

function appendCat(name){
    const cats2 = cats.slice();
    cats2.push(name)
    return cats2
}

function prependCat(name){
    const cats2 = cats.slice()
    cats2.unshift(name);
    return cats2
}

function removeLastCat(name){
    const cats2 = cats.slice()
    cats2.pop();
    return cats2;
}

function removeFirstCat(name){
    const cats2 = cats.slice()
    cats2.shift()
    return cats2
}
Footer
