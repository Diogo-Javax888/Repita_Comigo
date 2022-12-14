//1 - Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.
function ex1() {
    function Inicio() {
        var num1 = parseInt(prompt("Digite o primeiro valor:"));
        var num2 = parseInt(prompt("Digite o segundo valor:"));
        while (num2 <= 0) {
            alert("Digite o segundo valor maior que zero.");
            num2 = parseInt(prompt("Digite o segundo valor:"));
        }
        var divisao = num1 / num2;
        document.write("O resultado é: " + divisao);
    }
    Inicio();
}

//2 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".
function ex2() {
    var contagem = 30;
    while (contagem >= 0) {
        document.write("Explode em: " + contagem + " segundos. <br>");
        contagem--;
        if (contagem < 0) {
            document.write("Explosão");
        }
    }
}

// 3 - Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente. Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
function ex3() {
    var contagem = 10;
    while (contagem >= 1) {
        document.write(contagem + "<br>");
        contagem--;
    }
}

//4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).
function ex4() {
    var num = 15;
    while (num <= 100) {
        num += 1;
        if (num > 100) {
            var media = num / 85;
        }
    }
    document.write("O valor da média aritmética é: " + media);
}

//5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. 
//Considere que o primeiro sempre será menor que o segundo.
function ex5() {
    var num1 = parseInt(prompt("Digite o primeiro número:"));
    var num2 = parseInt(prompt("Digite o segundo número:"));
    var valMedia = num2 - num1;
    var media1 = (num1 + num2) / 2;
    while (num1 <= num2) {
        num1 += 1;
        if (num1 > num2) {
            var media2 = num1 / valMedia;
        }
    }
    document.write("O valor da média aritmética é: " + media1);
    document.write("<br> O valor da segunda média aritmética é: " + media2);
}

//6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a 
// mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário 
// deve ser encerrado exibindo a quantidade de alunos aprovados.
function ex6() {
    var opcao = prompt("Quer calcular outra média? S ou N");
    while (opcao == "S") {
        var a = parseInt(prompt("Primeira nota: "));
        var b = parseInt(prompt("Segunda nota: "));

        var media = (a + b) / 2;
        if (media >= 9.5) {
            document.write("A média é: " + media + " - Aluno aprovado <br>");
        } else {
            document.write("A média é: " + media + " - Aluno reprovado <br>");
        }
        var opcao = prompt("Quer calcular outra média? S ou N");
    }
}

//7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos 
//durante a leitura (0 a 10) para cada nota. São 6 notas ao total. Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, 
//deve ser solicitado um novo valor ao usuário.
function ex7() {
    var n1 = prompt("Primeira nota");
    var n2 = prompt("Segunda nota");
    var n3 = prompt("Terceira nota");
    var n4 = prompt("Quarta nota");
    var n5 = prompt("Quinta nota");
    var n6 = prompt("Sexta nota");
    var media = (n1 + n2 + n3 + n4 + n5 + n6) / 6;
    if (n1, n2, n3, n4, n5, n6 <= 10) {
        alert("sua média é: " + media);
    } else {
        (n1, n2, n3, n4, n5, n6 < 0);
        alert("Informe outro número");
    }
}

//8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. N  é um valor 
//informado pelo usuário
function ex8() {
    function inicio() {
        var valor = 1;
        var valorUsu = parseInt(prompt("Digite um valor maior que 1:"));
        if (valorUsu <= 1) {
            alert("Digite um valor válido");
            inicio();
        }
        while (valor <= valorUsu) {
            document.write(valor + "<br>");
            valor++
        }
    }
    inicio();
}

//9 - Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.
function ex9() {
    var valor = 101;
    while (valor < 111) {
        document.write(valor + "<br>");
        valor++;
    }
}

//10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.
function ex10() {
    var n = parseInt(prompt("Digite um número"));
    var multiplicação = 0;
    var começo = 1;

    while (começo <= n) {

        while (multiplicação <= 10) {
            document.write(começo + " X " + multiplicação + " = " + (começo * multiplicação) + "<br>");
            multiplicação++;
        }
        começo++;
        multiplicação = 0;
        document.write("<br><br>");
    }
}

//11 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) 
function ex11() {
    var numeros = [];
    var numerosNoIntervalo = [];
    var numerosFora = [];
    for (var i = 0; i < 10; i++) {
        var numero = parseInt(prompt("Digite um número"));
        numeros[i] = numero;
    }

    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] >= 24 && numeros[i] <= 42) {
            numerosNoIntervalo.push(" " + numeros[i]);
        } else {
            numerosFora.push(" " + numeros[i]);
        }
    }

    if (numerosNoIntervalo.length == 0) {
        document.write("Os valores entre 24 e 42 foram <b>" + numerosNoIntervalo.length + "</b> <br>");
    } else {
        document.write("Os valores entre 24 e 42 foram <b>" + numerosNoIntervalo.length + "</b> (" + numerosNoIntervalo + ")<br>");
    }

    if (numerosFora.length == 0) {
        document.write("Os valores menores que 24 ou maiores que 42 foram <b>" + numerosFora.length + "</b>");
    } else {
        document.write("Os valores menores que 24 ou maiores que 42 foram <b>" + numerosFora.length + "</b> (" + numerosFora + ")");
    }
}

function comeco() {
    var x = prompt("Qual exercício você quer visualizar? (Use os números de 1 a 11)");
    if (x == 1) {
        ex1();
    } else if (x == 2) {
        ex2();
    } else if (x == 3) {
        ex3();
    } else if (x == 4) {
        ex4();
    } else if (x == 5) {
        ex5();
    } else if (x == 6) {
        ex6();
    } else if (x == 7) {
        ex7();
    } else if (x == 8) {
        ex8();
    } else if (x == 9) {
        ex9();
    } else if (x == 10) {
        ex10();
    } else if (x == 11) {
        ex11();
    } else {
        alert("Insira um valor válido!");
        comeco();
    }
}
comeco();