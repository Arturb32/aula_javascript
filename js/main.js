function button(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar")
}
function redirecionar() {
    window.open("https://www.liberato.com.br/");
    window.location.href = "https://www.liberato.com.br/";
}
function trocar (elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}
function voltar (elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
function load(){
    alert("Página carregada");
}
function Change(elemento){
    console.log(elemento.value)
}
/*var nome = "Artur Bernardo";
var n1 = "4";
var n2 = "3";
var frase = "Japão é o melhor time do mundo"
//alert(nome + "tem" + idade);
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
//console.log(frase.replace("Japão","Brasil"));
*/


//var lista = ["maça","pera","laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.reverse());
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "))


//var fruta = {nome:"maça", cor:"vermelha"};
//console.log(fruta.cor);
//var fruta = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"azul"}];
//console.log(frutas);
//alert(frutas[1].nome);
/*var idade = prompt("Qual a sua idade?");
if(idade >= 18) {
    alert("maior de idade");
}
else
{
    alert("menor de idade");
};*/

/*var count = 0;
while (count<5) {
    console.log(count);
    count++;
}*/

/*var count;
for(count=0; count <=5; count++)
{
    console.log(count);
}*/

//var d = new Date();
//alert(d.getTime());
/*var validar;
function soma (n1,n2){
    return n1 + n2;
}
function validaIdade(idade){
    
    if (idade >= 18){
        validar= true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
//alert(soma(5, 10));*/

