// synchronous programming

function doStep1(num) {
    return num + 1;
}

function doStep2(num) {
    return num + 2;
}

function doStep3(num) {
    return num + 3;
}

function addToTheNumber() {
    let result = 0;

    result = doStep1(result);
    result = doStep2(result);
    result = doStep3(result);

    console.log('\n*************** synchronous programming **************')
    console.log(`The final result is ${result}`);
}

addToTheNumber();

// asynchronous programming using callbacks

function step1(num, callbackFunc) {
    const newResult = num + 1;
    callbackFunc(newResult);
}

function step2(num, callbackFunc) {
    const newResult = num + 2;
    callbackFunc(newResult);
}

function step3(num, callbackFunc) {
    const newResult = num + 3;
    callbackFunc(newResult);
}

function mainAddFunc() {
    step1(0, (result1) => {
        step2(result1, (result2) => {
            step3(result2, (result3) => {
                console.log('\n*************** synchronous programming **************')
                console.log(`The final result is ${result3}`);
            })
        })
    })
}

mainAddFunc();