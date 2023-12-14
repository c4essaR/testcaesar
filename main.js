function addTenToEachElement(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(arr[i] + 10);
    }
    return result;
}
function test() {
    let result = [11, 20, 30];
    let realResult = increaseByTen([1,10,20]);
    const compareArrays = (a, b) => {
        return JSON.stringify(a) === JSON.stringify(b);
    };

    if(compareArrays(result,realResult)) {
        console.log('test passed');
    } else {
        console.error('test not passed');
    }
}