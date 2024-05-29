function imprimir(nome: string) {
    return `Olá ${nome}`;
};

const imprimir2 = (idade: number): boolean => {
    if (idade < 18) {
        return false;
    }

    return true;
}

function imprimirUsuario(usuario: {nome: string, idade: number}): string {
    return `Olá ${usuario}`
}

function imprimirArrays(array: string[]):string {
    return array[0]
}
