const numeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < numeros.length; i = i + 2) {
    console.log(numeros[i]);
}

// ABAIXO UMA FORMA MAIS ESTRUTURADA DO CÓDIGO ACIMA

const lista = [20, 10,11,15,16,18,14,22,33];

for (let i = 0; i < lista.length; i++) {
    const numero = lista[i];

    if (numero % 2 === 0) {
        console.log(numero);
    }
}

// DUAS FORMAS DE REALIZAR, UMA USANDO UMA CONDIÇÃO E OUTRA USANDO APENAS UMA ESTRUTURA DE REPETIÇÃO. 
