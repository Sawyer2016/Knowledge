
function test (obj, deep = 0, result = []) {
    let arr = [];
    for (let key in obj) {
        arr.push(key);
        if (typeof obj[key] == 'object') {
            let temp  = deep + 1;
            let newArr = test(obj[key], temp, result);
        } 
    }
    if (typeof result[deep] != 'undefined') {
        result[deep] = result[deep].concat(arr);
    } else {
        result[deep] = arr;
    }
    return result;
}
let o= {
a: {
c: {
e: 'x'
}
},
b: {
d: {
f: 'y'
}
}
}
console.log(test(o))
