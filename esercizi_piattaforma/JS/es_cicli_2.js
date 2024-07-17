for (let i = 0; i <= 20; i++) {
    if (isEven(i)) {
        console.log(i);
    }
}

function isEven(num) {
    return num % 2 === 0;
}