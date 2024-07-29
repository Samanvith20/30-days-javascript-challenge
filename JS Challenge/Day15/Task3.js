function generateUniqueIds(){
    let id = 0;
    return function(){
         id++;
         return id

    }
}

let generateId = generateUniqueIds();
console.log(generateId());