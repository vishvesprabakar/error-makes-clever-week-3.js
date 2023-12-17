var person = {
    name: 'Lee',
    age: 20,
    place: 'Seoul',   
}
delete person.age;
console.log(person['name'] + " - name" + "\n" + person['age'] + " - age" + "\n" + person['place'] + " - place");

// Path: 18_object.js - for in loop
var person = {
    name: 'Rock',
    age: 28,
    place: 'USA'
}
for (var key in person) {
    console.log(key + " - key");
    console.log(person[key] + " - value");
}

// Path: 18.2_object+arrays.js - 
var student=[
    {
        name:"Ivan",
        age:20,
        department:"CSE"
    },
    {
        name:"Elena",
        age:25,
        department:"IT"
    },
]
for (var count=0; count<student.length; count=count+1)
{
    console.log(student[count].name + " - name");
}

//Path 18.2_practice.js
var recipes=[
    {
        name: "pizza",
        ingredients: ["Bread", "Tomato", "Cheese"],
        instruction: ["Place it in oven for 120 degree for 10 minutes"]
    },
    {
        name: "burger",
        ingredients: ["Bread", "Patty", "Salad", "Cheese"],
        instruction: ["Place the patty salad then cheese inside the burger"]
    }
]
console.log(recipes [0].name + " - name");
console.log(recipes [0].ingredients + " - ingredients");
console.log(recipes [0].instruction + " - instruction");