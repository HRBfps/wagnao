// Capturando os dados do formulário
const dados = document.querySelector('#forms');

// Criando um monitor do evento submit e função anônima
dados.addEventListener('submit', function (event) {
    // Previne o evento padrão do submit
    event.preventDefault();

    monstraResultado("msgsgs");

    function monstraResultado(mensagem) {
        //Pega o ID
        let frase = document.querySelector('#resultado');
        //Cria uma classe no id pra poder mudar no css
        frase.classList.add('msg');
        let p = `<p>${mensagem}</p>`
        //Cria o elemento P
        let p1 = document.createElement(p)
        //Cria o P
        frase.appendChild(p1)
        //Põe a info na P
        p.innerHtml = `${mensagem}`
    }
});
    // Captura os dados dos inputs
   



    // Validade dos valores que atendem à condição
    

    // Chamada da função que calcula o IMC
    

    // Chamada da função que traz a mensagem da classificação do IMC
   

    // Monta a mensagem para ser enviada
    

    // Chama a função do resultado (mensagem) e seta como True
    

// Função para calcular o IMC

// Função que gera a classificação do IMC


// Função que cria o resultado


// Função para criar o elemento p


// Captura o evento 'reset' e limpa o resultado
