let bunnies = ["Ben", "Maria", "Lucy", "Ren", "Tope", "Frank"]

// Add to end of array
bunnies.push("Mario");

// Remove Lucy from array
bunnies = bunnies.filter(
    function (bunny){
        return bunny !== "Lucy";
    });



//Add Lugi to the beginning of an array
bunnies.unshift("Lugi");
console.log(bunnies)