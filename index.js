

window.onload = () => {

   // let aleatorio = Match.random() *10;
   document.querySelector("#boton").addEventListener("click",() => 
   {
       document.querySelector ('#motivo').innerHTML = generaExcusa();
   });
    
      console.log ("Prueba");
    
};

let generaExcusa = () => {


let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

let indexwho     = Math.floor(Math.random() * who.length);
let indexaction  = Math.floor(Math.random() * action.length);
let indexwhat  = Math.floor(Math.random() * what.length);
let indexwhen  = Math.floor(Math.random() * whwhenat.length);

return who[indexwho] + ' ' + action[indexaction] +' ' + what[indexwhat] +' ' + when[indexwhen];

};
