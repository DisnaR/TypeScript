"use strict";
// Arquivo main.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
/**
 * Função de multiplicação que recebe dois números e retorna a multiplicação deles.
 * @param num1 O primeiro número a ser multiplicado.
 * @param num2 O segundo número a ser multiplicado.
 * @returns O resultado da multiplicação de num1 e num2 com duas casas decimais.
 */
function multiplicacao(num1, num2) {
    return +(num1 * num2).toFixed(2);
}
/**
 * Função de saudação que recebe um nome e retorna a concatenação "Olá " + nome.
 * @param nome O nome para o qual a saudação será construída.
 * @returns A saudação construída.
 */
function saudacao(nome) {
    return "Olá " + nome;
}
// Função para verificar se uma string contém apenas letras
function contemSomenteLetras(str) {
    return /^[a-zA-Z]+$/.test(str);
}
// Função para verificar se uma string contém apenas números decimais
function contemSomenteNumeros(str) {
    return /^\d*\.?\d+$/.test(str);
}
// Solicitar os números ao usuário
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
            // Exibir o resultado da multiplicação
            console.log(`O resultado da multiplicação é: ${multiplicacao(num1, num2).toFixed(2)}`);
            // Solicitar o nome ao usuário
            solicitarNome();
        });
    });
}
// Solicitar o nome ao usuário
function solicitarNome() {
    rl.question('Digite o seu nome: ', (nomeInput) => {
        if (!contemSomenteLetras(nomeInput)) {
            console.log('Por favor, digite apenas letras.');
            solicitarNome();
            return;
        }
        const nome = nomeInput;
        // Exibir a saudação
        console.log(saudacao(nome));
        // Fechar a interface de leitura
        rl.close();
    });
}
// Iniciar a solicitação dos números
solicitarNumeros();
