
function person(name,age)
{
    this.name=name;
    this.age=age;
    this.changename= cn;
}
     
    function cn(name)
    {
        this.name=name
    }
var p1= new person("nag",24);
console.log(p1.name);
p1.changename("navisha");
console.log(p1.name);
