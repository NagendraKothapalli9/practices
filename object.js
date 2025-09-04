// var person ={ name:'nagendra',age:'18',color:'green'};
// console.log(typeof(person));
// console.log(person.name);
// console.log(person.age);                  //object method
// console.log(person.color.length);
     


function person(name,age,color){
    this.name=name;
    this.age=age;
    this.color=color;
}                                             //object constructer
var p1=new person("nagendra",32,"white");
var p2=new person("navisha",6,"white");
console.log(p1.name);
console.log(p2.color);