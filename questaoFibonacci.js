function fibonacci(numero) {
    let a = 0;
    let b = 1;

    if (numero === 0 || numero === 1) {
        return true;
    }

    while (b <= numero) {
        if (b === numero) {
            return true;
        }
        let temp = a + b;
        a = b;
        b = temp;
    }

    return false;
}

let numeroFornecido = 1;

if (fibonacci(numeroFornecido)) {
    console.log(numeroFornecido + " pertence à sequência de Fibonacci.");
} else {
    console.log(numeroFornecido + " não pertence à sequência de Fibonacci.");
}
