function isEven(number) {
    if (number < 0) {
        return 'No negatives, Nancy';
    }
    if (number < 2) {
        return (number === 0);
    }
    return isEven(number - 2);
}

console.log(isEven(37));
