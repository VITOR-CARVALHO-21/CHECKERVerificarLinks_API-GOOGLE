# 🛡️ Verificador de Links Seguros (Google Safe Browsing)

Este é um projeto simples em HTML/JavaScript que utiliza a API do Google Safe Browsing para verificar se um link é malicioso (malware, phishing, etc).

## 🚀 Como testar o projeto
Como este projeto utiliza uma API Key privada do Google Cloud, por questões de segurança, a chave original não foi enviada para este repositório.

Para rodar o projeto localmente:
1. Clone o repositório.
2. Crie um arquivo chamado `config.js` na raiz do projeto.
3. Obtenha uma chave gratuita no [Google Cloud Console](https://console.cloud.google.com/).
4. No seu `config.js`, adicione: `const MINHA_CHAVE = 'SUA_CHAVE_AQUI';`.
5. Abra o `index.html` no seu navegador.

## 🛠️ Tecnologias
- HTML5 / CSS3
- JavaScript (Fetch API / Async/Await)
- Google Safe Browsing API

## 🔒 Segurança
O projeto foi estruturado seguindo boas práticas de segurança, mantendo as credenciais sensíveis fora do controle de versão via `.gitignore`.