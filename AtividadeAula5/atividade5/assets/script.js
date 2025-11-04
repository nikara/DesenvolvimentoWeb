/* 
Um supermercado está com uma promoção – Para aumentar suas vendas no setor de higiene, cada 
etiqueta de produto deve exibir uma mensagem anunciando 50% de desconto (para um item) na compra de 
três unidades do produto. Elaborar um programa que leia descrição e preço de um produto. Após, 
apresente as mensagens indicando a promoção.

*/

 const botao = document.getElementById('button');

    botao.addEventListener('click', function() {
      const descricao = document.getElementById('descricao').value;
      const preco = Number(document.getElementById('preco').value);

      if (!descricao || preco <= 0) {
        alert("Preencha os campos corretamente!");
        return;
      }

      // cálculo da promoção
      const total = preco * 2.5; 

      const resultado = document.getElementById('resultado');
      resultado.innerHTML = `
        <p><strong>Produto:</strong> ${descricao}</p>
        <p>Preço Unitário: R$ ${preco.toFixed(2)}</p>
        <p><strong>Promoção:</strong> Leve 3 unidades por R$ ${total.toFixed(2)}</p>
        <p>(Na compra de 3, o 3º sai com 50% de desconto!)</p>
      `;
    });
