function outerFunction(){
    function innerFunction(){
        // console.log("this is the inner function");  
    }
    return innerFunction;
}

const result = outerFunction();
result()
// console.log("In the outsie:" , result);


function counter(owner){
    let count = 0;
    function increment(){
        count += 1;   
        console.log("value of counter:",owner, count);
    }
    return increment;
}

// const count1 = counter();
// count1()
// count1()
// count1()
// count1()

const rahimCounter = counter("Rahim");
rahimCounter()
rahimCounter()
rahimCounter()

const karimCounter = counter("Karim");
karimCounter()
karimCounter()
rahimCounter()


