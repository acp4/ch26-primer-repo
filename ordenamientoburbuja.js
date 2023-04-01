const numeros = [5, 8 , 1, 10, 15];

function Burbuja(numeros) {
    let n, i, k, aux;
    n = numeros.length;
    for (i = 1; i < n; i++) {
        for (j = 0; j < (n - i) ; j++) {
            if (numeros[j] > numeros[j + 1]) {
                aux = numeros[j];
               numeros[j] = numeros[j + 1];
               numeros[j + 1] = aux;
            }
        }
    }
    return numeros;
}

console.log(Burbuja(numeros));
