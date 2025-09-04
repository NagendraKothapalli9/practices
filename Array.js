var a=["ramu","venu","swami","ravi"];
console.log(a[0]);
var b=new Array('ramu',"venu","swami",)
console.log(b[0]);
b[2]="nagendra"; //change array[]
console.log(b);
var c= new Array(4);
c[0]=0;
c[1]=1;         //c.length   n<4 array place
c[2]=2;
c[3]=3;

console.log(c)
console.log("using loop")
//for (n=0;n<4;n++)
for (n=0;n<c.length;n++)
{
 console.log(c[n]);
}
console.log("array length is "+ c.length);

var d= a.concat(c);
console.log(d)
console.log(typeof(d))
console.log(typeof(a))
d.pop(2);
console.log(d)
d.push('nagendra');
console.log(d)
d.shift(3);
delete d[3];
console.log(d)




