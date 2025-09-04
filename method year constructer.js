function person(name,age){
    this.name=name;
    this.age=age;
    this.yearofbirth=bornyear;
}
   function bornyear() 
   {
    return 2025-this.age;
   }
   var p= new person("nagendra",34);
   console.log(p.yearofbirth());