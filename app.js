let amigos = [];

function inserirAmigos() {
    let nomeAmigos = document.querySelector('input').value;
    
    amigos.push(nomeAmigos);
    console.log(amigos);
    mostrarAmigos()

    if(nomeAmigos == ''){
        alert('Por favor insira um nome!');
        amigos.pop(nomeAmigos);
    }

    let botaoReiniciar = document.getElementById('reiniciar');
    botaoReiniciar.textContent = 'Limpar Lista';

    limparCampo();
}

function limparCampo() {
    nomeAmigos = document.querySelector('input');
    nomeAmigos.value = '';
}

function mostrarAmigos() {
    
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = '';

    for(let amigo of amigos){
        let item = document.createElement('li');
        item.textContent = amigo;

        lista.appendChild(item);
    }
}

function sortearAmigo() {
    
    if(amigos.length == ''){
        alert('Lista de amgos vazia. Insira ao menos um nome de amigo!');
        return;
    }

    let nomeEscolhido = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[nomeEscolhido];
    
    let resultado = document.getElementById('resultado');
    resultado.textContent = `O amigo sorteado foi ${amigoSorteado}. Parabéns!`;
}

function limparLista() {
    amigos = [];

    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    let botaoReiniciar = document.getElementById('reiniciar');
    botaoReiniciar.disable = false;
    botaoReiniciar.textContent = 'Lista Limpa!';
}