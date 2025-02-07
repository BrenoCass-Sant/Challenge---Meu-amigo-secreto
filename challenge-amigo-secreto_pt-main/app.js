//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


// Criação de um array vazio chamado 'nome', que será utilizado para armazenar os nomes dos amigos.
let nome = [];

// Seleção de elementos do DOM (Document Object Model) que interagem com a interface do usuário.
// 'textoInserido' se refere ao campo de input onde o nome do amigo será digitado.
const textoInserido = document.getElementById('amigo');

// 'itemLista' se refere à lista (<ul> ou <ol>) onde os amigos serão adicionados.
const itemLista = document.getElementById('listaAmigos');

// 'addButton' se refere ao botão para adicionar um novo amigo à lista.
const addButton = document.querySelector('.button-add');

// 'buttonSorteio' se refere ao botão para sortear um amigo da lista.
const buttonSorteio = document.querySelector('.button-draw');

// Função que adiciona um novo amigo à lista.
function adicionarAmigo() {
    // 'valorCampo' armazena o valor inserido no campo de texto (input).
    const valorCampo = textoInserido.value;

    // Verifica se o campo de entrada não está vazio (removendo espaços extras com 'trim()').
    // Se o campo de entrada não estiver vazio, adiciona o nome ao array e à lista na interface.
    if (valorCampo.trim() !== "") {
        // Adiciona o nome digitado ao array 'nome'.
        nome.push(valorCampo);

        // Cria um novo elemento de lista (<li>) para adicionar à interface.
        const listaAmigos = document.createElement('li');
        
        // Atribui o nome digitado como o conteúdo do novo item da lista.
        listaAmigos.textContent = valorCampo;

        // Adiciona o novo item à lista existente na interface.
        itemLista.appendChild(listaAmigos);

        // Limpa o campo de entrada de texto após o nome ser adicionado.
        textoInserido.value = '';
    // Caso contrário, exibe um alerta informando que o campo está vazio.
    } else {
        alert('O campo de texto está vazio!');
    }
};

// Função que sorteia um amigo aleatório da lista.
function sortearAmigo() {
    // Verifica se a lista está vazia (o array 'nome' não contém nenhum nome).
    if (nome.length === 0) {
        // Se estiver vazia, exibe um alerta informando que a lista está vazia.
        alert('A lista está vazia!');
    // Se a lista não estiver vazia, realiza o sorteio de um amigo aleatoriamente.
    } else {
        // Gera um índice aleatório baseado no tamanho do array 'nome'.
        const indiceSorteado = Math.floor(Math.random() * nome.length);

        // Acessa o nome do amigo sorteado utilizando o índice gerado aleatoriamente.
        const amigoSorteado = nome[indiceSorteado];

        // Seleciona o elemento onde o resultado do sorteio será exibido.
        const resultado = document.getElementById('resultado');

        // Limpa o conteúdo anterior exibido no elemento de resultado (se houver).
        resultado.innerHTML = '';

        // Cria um novo item de lista (<li>) para exibir o nome do amigo sorteado.
        const listItem = document.createElement('li');

        // Atribui o texto com o resultado do sorteio ao novo item da lista.
        listItem.textContent = `O amigo sorteado é: ${amigoSorteado}`;

        // Adiciona o item com o resultado ao elemento 'resultado' na interface.
        resultado.appendChild(listItem);
    }
};