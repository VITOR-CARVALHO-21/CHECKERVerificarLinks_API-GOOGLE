// Pegar elementos do HTML
const input = document.getElementById('urllink');
const botao = document.getElementById('botaoverificar');
const statusElement = document.getElementById('textoResultado');

const ACHAVE = 'SUA_CHAVE_AQUI';

// Função
async function verificarLink() {
    // .trim() remove espaços vazios antes e depois do texto
    const linkUsuario = input.value.trim(); 

    // Se não tiver um ponto, não é uma URL válida para o Google analisar
    if (!linkUsuario || !linkUsuario.includes('.') || linkUsuario.length < 4) {
        statusElement.innerText = "Por favor, insira um link válido (ex: google.com)";
        statusElement.style.color = "orange";
        return;
    }

    statusElement.innerText = "Consultando o Google...";
    statusElement.style.color = "gray";

    try {
        const url = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${ACHAVE}`;

        const resposta = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                client: { clientId: "meu-app", clientVersion: "1.0" },
                threatInfo: {
                    threatTypes: ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE"],
                    platformTypes: ["ANY_PLATFORM"],
                    threatEntryTypes: ["URL"],
                    threatEntries: [{ url: linkUsuario }]
                }
            })
        });

        const dados = await resposta.json();

        // Se o Google encontrar ameaças, ele retorna o objeto "matches"
        if (dados.matches && dados.matches.length > 0) {
            statusElement.innerText = "ATENÇÃO: Este link é suspeito!"
            statusElement.style.color = "red";
        } else {
            statusElement.innerText = "Nenhuma ameaça encontrada nos registros do Google.";
            statusElement.style.color = "green"
        }

    } catch (erro) {
        statusElement.innerText = "Erro ao conectar com a API.";
        console.error(erro)
    }
}

// Mandar o botao ouvir o clique e chamar a função
botao.addEventListener('click', verificarLink);