let person = {
    Name : 'Shubham',
    LastName: 'Tile',
    Age : 21,

    cars:{
        color:"White",
        brand: "Mustang"
    },

    favFood: function(){
        console.log("GulabJamun");
        
    }
    

};

console.log(person);

person.Age = 20;
console.log(person);

person['Name'] = 'Shiv';
console.log(person);

delete person.LastName;
console.log(person);

console.log(person.cars);
console.log(person.favFood());
