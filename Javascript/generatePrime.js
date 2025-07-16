function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <=num/2; i++) {
        if (num % i === 0) return false; 
    }
    return true;
}
function genaratePrim(l) {
    for (let i = 0; i <= l; i++) {
        if (isPrime(i)) {
        console.log(i);
        }
    }
}
generatePrime(1000);
