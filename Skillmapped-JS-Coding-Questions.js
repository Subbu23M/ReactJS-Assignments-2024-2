// 1)What is the output of the following Javascript code?
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}

// 2)What is the output of the following Javascript code?
function recursiveFunction(n) {
    if (n <= 1) {
        return n;
    }
    return n * recursiveFunction(n - 1);
}
console.log(recursiveFunction(5));

// 3)What is the output of the following Javascript code?
function outerFunction() {
    let x = 10;

    function innerFunction() {
        console.log(x);
        let y = 20;
        console.log(y);
    }
    innerFunction()
    console.log(y);
}
console.log(outerFunction());

// 4)What is the output of the following Javascript code?
async function complexComputation(array) {
    let result = 0;
    const computations = array.map(async (num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                result += num * num;
                resolve();
            }, 1000);
        });
    });
    await Promise.all(computations);
    return result;
}

async function main() {
    const array = [1, 2, 3];
    const result = await complexComputation(array);
    console.log(result);
}
main();

// 5)What is the output of the following Javascript code?
function asyncMultiply(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(a * b), 100);
    });
}

async function recursiveSum(arr, index = 0, sum = 0) {
    if (index > arr.length) {
        return sum;
    }
    for (let i = 0; i < arr.length; i++) {
        sum += await asyncMultiply(arr[i], arr[i]);
    }
    return recursiveSum(arr, index + 1, sum);
}

async function mainTwo() {
    const array = [1, 2, 3];
    const result = await recursiveSum(array);
    console.log(result);
}
mainTwo();