   function fn()
   {
    let a=10;                //value a not use outside flower brakets for function scope
    console.log(a);
   } 
  fn();
                                                

 function fnn()  
     {                             
       a=100;                                       // give direct varible  not using var and let const  become global{a=100;
    console.log('value inside of '+a);
    }
     fnn();
     console.log('value outside '+a);