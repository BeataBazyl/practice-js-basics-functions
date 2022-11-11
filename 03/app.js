const sum = function (maxNumber) {
    console.log(maxNumber);
    
    let result = 0;
    for(let i=0; i<=maxNumber; i++) {
        result= result + i;
    }
    return result;
}

const res = sum(4);
console.log(res);
