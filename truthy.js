let data;
data = 0;
data = '';
data = '0';
data = null
if (data) {
    console.log("truthy");
}
else {
    console.log("falsy");
}


let price = true;
if(!price){
    console.log("price is falsy"); 
}

let value = 0;
if(!!value){
    console.log("price is truty");
    
}