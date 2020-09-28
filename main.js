//Aula de Programacao-para-internet-com-JavaScropt

//Funções
var texto = "Japão é o melhor time do mundo";
//função replace substitui palavra por nova.
console.log(texto.replace("Japão", "Brasil"));
//deixa todo texto em letra maiuscula
console.log(texto.toUpperCase());
//deixa texto em letra minúscula
console.log(texto.toLowerCase());

var frutas = ["maça", "banana", "abacaxi"];
console.log(frutas);
//adiciona elemento no final do array
frutas.push("pêra");
console.log(frutas);
//retira último elemento da lista
frutas.pop();
console.log(frutas);
//tamanho da lista
console.log(frutas.length);
//inverte ordem
console.log(frutas.reverse());
//converte para string
console.log(frutas.toString());
//converte para string e separa com caracter escolhido
console.log(frutas.join(" - "));

//dicionário, usa a estrutura json
var fruta = {nome: "Maçã", cor: "verde"};
console.log(fruta);
alert(fruta.cor);

var frutas = [{nome: "Maçã", cor: "verde"}, {nome: "Uva", cor: "roxo"}];
console.log(frutas);
alert(frutas[1].nome);

//exibe uma pergunta para o usuário e recebe resposta
var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("Maior de idade");
} else{
    alert("Menor de idade");
}

//trabalhar com datas
var date = new Date();
alert(date);
alert(date.getMonth()+1);
alert(date.getDate());
alert(date.getHours());
alert(date.getMinutes());

//função
function clicou(){
    //passa texto para id agradecimento
    document.getElementById('agradecimento').innerHTML = "<b>Obrigado por clicar!</b>";
}

function redirecionar(){
    //redireciona para outra página
    window.open("https://github.com/tamiresv");
    //redireciona para outro site na mesma página
    window.location.href = "https://www.linkedin.com/in/tamires-silveira/";
}

function trocar(elemento){
    //document.getElementById('mouseMove').innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Obrigado por passar o mouse!";
}

function voltar(elemento){
    //document.getElementById('mouseMove').innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";

}

function load(){
    alert("Página carregada");
}

function change(elemento){
    console.log(elemento.value);
}