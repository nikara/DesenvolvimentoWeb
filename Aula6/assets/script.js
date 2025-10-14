// Seleciona o botão de calcular e o corpo da tabela onde os resultados serão exibidos
const btn = document.querySelector("#calcular");
const tabela = document.querySelector("#tabela tbody");

// Adiciona um ouvinte de evento ao botão para executar a função quando clicado
btn.addEventListener('click', () => {
    // Lê os valores dos inputs e converte para número
    const numero1 = Number(document.querySelector("#numero1").value);
    const numero2 = Number(document.querySelector("#numero2").value);

    // Verifica se os valores são válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, insira dois números válidos.");
        return;
    }

    // Verifica se o segundo número é zero para evitar divisão por zero
    if (numero2 === 0) {
        alert("O segundo número não pode ser zero, pois não é possível dividir por zero.");
        return;
    }

    // Realiza as operações aritméticas
    const soma = numero1 + numero2;
    const produto = numero1 * numero2;
    const divisao = numero1 / numero2;
    const resto = numero1 % numero2;

    // Limpa o conteúdo anterior da tabela
    tabela.innerHTML = "";

    // Função auxiliar para criar uma linha na tabela
    function criarLinha(nomeOperacao, resultado) {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${nomeOperacao}</td>
            <td>${resultado}</td>
        `;
        tabela.appendChild(linha);
    }

    // Adiciona as linhas com os resultados na tabela
    criarLinha("Soma", soma);
    criarLinha("Multiplicação", produto);
    criarLinha("Divisão", divisao.toFixed(2)); // Arredonda para 2 casas decimais
    criarLinha("Resto da Divisão", resto);
});
