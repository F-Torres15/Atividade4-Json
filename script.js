
const objt = new XMLHttpRequest();
const corpo= document.querySelector("body")
const tec = corpo.querySelector(".tec")
objt.open("GET", "https://raw.githubusercontent.com/DS-Senai/json/refs/heads/main/tecnologias.json");
objt.responseType = "json";
objt.send();

objt.onload = () =>{
    let tecnologia = objt.response;

tecnologia.tecnologias. forEach((valor) => {

    for(let chave in valor){
if(chave != "bibliotecas_populares"){
    
    tec.innerHTML+=
    `<p>${chave}: ${valor[chave]}</p>`
     }
     else{

        valor.bibliotecas_populares.forEach((biblioteca)=>{
            for(let chave_biblioteca in biblioteca){
                tec.innerHTML+=`<ul>${chave_biblioteca}: ${biblioteca[chave_biblioteca]}</ul>`
            }
        })
     
    }
    } 
    tec.innerHTML+="<br>"

})



}


// bibioteca.forEach((tecnologias.bibliotecas_polpulares)){
//     if (bibioteca.)
// }




// // forEach() percorre os valores de um array.
// var obj = [{Nome: "João", Idade: 20 },{Nome: "Lucas", Idade: 19 }]; // Só pode ser utilizado em arrays 

// obj.forEach((objeto) => {
//   console.log(objeto.Nome + " " + objeto.Idade); // Exemplo: João 20 | Lucas 19
// })
