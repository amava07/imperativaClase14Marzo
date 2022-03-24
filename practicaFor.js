function tresEntres(){
    for(let i= 5; i<=20; i=i+3){
        console.log(i);
    }
}
tresEntres()

let x = 0

for (let i= 0; i<=100; i++){
   x = x + i  
}
console.log(x);

//punto 4//

function entero (num){
    let x = 1
    for( let i =1; i<=num; i++ ){
        x = x * i;
    }
    return x 
}
console.log(entero (6))