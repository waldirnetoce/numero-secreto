 alert('Boas-vindas ao jogo do número secreto')
 let chute = prompt('Escolha um número de 1 e 100')

 let numeroSecreto = 4
//se o chute for ugual numero secreto
 // se chute for igual ao número secreto
if (chute == numeroSecreto) {
    //Template Strings crase e chaves pata insrtir a variável
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert('Você errou');
}
