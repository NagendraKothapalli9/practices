
 function person(name,age){
  this.name=name;
 this.age=age;
  this.changename=function cn(name){
      this.name=name
   }
    this.changeage=function ca(age){          //method constructer 1
         this.age=age
    }
 }
 var p1= new person("nag",24);
console.log(p1.name);
console.log(p1.age);
p1.changename("navisha");
p1.changeage("6");
console.log(p1.name);
console.log(p1.age);