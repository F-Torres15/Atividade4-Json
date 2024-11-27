
// Cria uma nova instância do objeto XMLHttpRequest para fazer requisições HTTP
const objt = new XMLHttpRequest();
// Seleciona o corpo da página (body) e um elemento com a classe "tec" dentro do corpo
const corpo = document.querySelector("body");
const tec = corpo.querySelector(".tec");
// Inicia uma requisição GET para buscar o arquivo JSON da URL especificada
objt.open("GET", "https://raw.githubusercontent.com/DS-Senai/json/refs/heads/main/tecnologias.json");
// Define que a resposta será interpretada como JSON
objt.responseType = "json";
// Envia a requisição
objt.send();
// Define o que deve ser feito quando a requisição for concluída
objt.onload = () => {
    // A resposta da requisição (JSON) é armazenada na variável 'tecnologia'
    let tecnologia = objt.response;
    // Acessa o array de tecnologias dentro do objeto 'tecnologia'
    tecnologia.tecnologias.forEach((valor) => {
        // Para cada item dentro do array de tecnologias, percorre suas chaves (propriedades)
        for (let chave in valor) { 
        // Se a chave não for "bibliotecas_populares", adiciona o conteúdo ao HTML
            if (chave != "bibliotecas_populares") {
                tec.innerHTML +=
                    `<p>${chave}: ${valor[chave]}</p>`;
            } else {
                // Caso contrário, se a chave for "bibliotecas_populares", percorre o array de bibliotecas
                valor.bibliotecas_populares.forEach((biblioteca) => {   
                    // Para cada biblioteca, percorre suas chaves e valores e os adiciona ao HTML
                    for (let chave_biblioteca in biblioteca) {
                        tec.innerHTML +=
                            `<ul>${chave_biblioteca}: ${biblioteca[chave_biblioteca]}</ul>`;
                    }
                });
            }
        }
        // Adiciona uma quebra de linha após cada tecnologia para separá-las visualmente
        tec.innerHTML += "<br>";
    });
};
