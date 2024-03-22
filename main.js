"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
function multiplicacao(num1, num2) {
    return +(num1 * num2).toFixed(2);
}
function saudacao(nome) {
    return "Olá " + nome;
}
function contemSomenteLetras(str) {
    return /^[a-zA-Z]+$/.test(str);
}
function contemSomenteNumeros(str) {
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
