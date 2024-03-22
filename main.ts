import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function multiplicacao(num1: number, num2: number): number {
    return +(num1 * num2).toFixed(2);
}

function saudacao(nome: string): string {
    return "Olá " + nome;
}

function contemSomenteLetras(str: string): boolean {
    return /^[a-zA-Z]+$/.test(str);
}

function contemSomenteNumeros(str: string): boolean {
    return /^\d*\.?\d+$/.test(str);
}

function solicitarNumeros() {
    rl.question('Digite o primeiro número: ', (num1Input) => {
        if (!contemSomenteNumeros(num1Input)) {
            console.log('Por favor, digite apenas números ou números decimais.');
            solicitarNumeros();
            return;
        }
        
        const num1 = parseFloat(num1Input);

        rl.question('Digite o segundo número: ', (num2Input) => {
            if (!contemSomenteNumeros(num2Input)) {
                console.log('Por favor, digite apenas números ou números decimais.');
                solicitarNumeros();
                return;
            }

            const num2 = parseFloat(num2Input);
            console.log(`O resultado da multiplicação é: ${multiplicacao(num1, num2).toFixed(2)}`);
            solicitarNome();
        });
    });
}

function solicitarNome() {
    rl.question('Digite o seu nome: ', (nomeInput) => {
        if (!contemSomenteLetras(nomeInput)) {
            console.log('Por favor, digite apenas letras.');
            solicitarNome();
            return;
        }
        
        const nome = nomeInput;
        console.log(saudacao(nome));
        rl.close();
    });
}

solicitarNumeros();