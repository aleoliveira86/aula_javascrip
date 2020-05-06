//function clicou(){
//    alert("Obrigado por clicar");
//}

function clicou(){
    //direcionar para outra página
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"; //innerHTML pode injetar um html dentro 
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://digitalinnovation.one/");//abre uma nova pagina
    window.location.href = "https://www.global-lab.playblackdesert.com/";//abre na mesma página
}

function trocar(elemento){
    //com o document a função serviria somente para aquele paragrafo, criando um elemento posso locar ele para qualquer paragrafo
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar elemento");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //com o document a função serviria somente para aquele paragrafo, criando um elemento posso locar ele para qualquer paragrafo
    //document.getElementById("mousemove").innerHTML = "Volte o mouse agora!!!!";
    elemento.innerHTML = "Passe o mouse aqui!!!!";
}

function load(){ // vai exibir alerta quando a pagina for iniciada
    alert("pagina carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);//cria abas para selecionar e armazena sempre que os valores forem alterados.
}

/*function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    } else{
        validar = false
    }
    return validar;
}


var idade = prompt("Qual a sua idade?")
    console.log(validaIdade(idade));
*/
/*function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace( nome, novo_nome);
}*/

//alert(soma(5,10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));

/*var d = new Date();
alert(d.getMonth()+1);//getMonth sempre colocar mais 1, pq ele inicia no 0.
alert(d.getHours)
alert(d.getMinutes)
*/

/*var count;
for(count=0; count<5; count++){
    alert(count);
}*/

/*var count = 0;

while(count <= 5){
    console.log(count);
    count++;
}*/


/*var idade = prompt("Qual a sua idade");
if (idade>=18){
        alert("Maior de idade");
} else {
        alert ("Menor de idade");
}*/


/*var frutas = [{nome: "maça", cor: "vermelho"}, {nome:"uva", cor:"roxa"}];
console.log(frutas); // faz uma divisão de biblioteca traz td que estiver dentro das strings
alert(frutas[1].nome); 
*/
/*var fruta = {nome: "maça", cor: "vermelho"};
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);
*/

//var lista = ["Maça", "Pera", "Laranja"];
//lista.push("uva");//.push acresceta itens na lista
//lista.pop();//retira o ultimo elemento
//console.log(lista);
//console.log(lista[1]);// seleciona apenas o 1 da lista
//alert(lista[0]);
//console.log(lista.length)// tamanho da lista
//console.log(lista.reverse())//
//console.log(lista.toString());// traz como string em tudo em seguida
//console.log(lista.join(" - "));//faz divisorias entre as strings, o que tiver entre "" é acrescentado entre as strings


// áspas dupla usa-se para informar que é uma string,
// não precisa informar que tipo de variavel é
//var nome = "Alexandre Oliveira";
//var idade = 33;
//var idade2 = 10;
//var frase = "Japão é o melhor time";
//alert(nome + " tem " + idade);
//alert(idade + idade2)
//console.log(nome);
//console.log(idade+idade2);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão" , "Brasil"));
//console.log(frase.toLowerCase())//tudo fica minusculo
//console.log(frase. toUpperCase())//tudo fica maiusculo


<button id="eldritch_horror" onclick="detalhes(this)" onmouseover="mousesobre(this)" onmouseout="mousefora(this)">Eldritch Horror</button>
<select onchange="mostrarPoderes(this)"><option value="Humano"></option><option value="Elfo"></option><option value="Orc"></option></select>
