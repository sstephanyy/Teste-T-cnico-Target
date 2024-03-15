function inverterString(str) {
    let reversedString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }

    return reversedString;
}

// Exemplo de uso do programa
let minhaString = 'Olá, mundo!';
let stringInvertida = inverterString(minhaString);
console.log('String original:', minhaString);
console.log('String invertida:', stringInvertida);
