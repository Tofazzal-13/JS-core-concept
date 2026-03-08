function add(num1, num2){
    console.log(arguments, arguments[2]);
    const arr = [...arguments]
    console.log(arr)
    return num1, num2;
    
}

add(2, 5, 8, 45)