 var person={name:"nagendra",age:33,changename:function cn(a){this.name=a ;console.log('fun call')}}
console.log('before function call');
console.log(person.name);
 console.log('after function call');
 person.changename("nirmala");                     //method
console.log(person.name);

