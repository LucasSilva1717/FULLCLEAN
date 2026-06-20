# 🚀 FULL CLEAN (Aplicação Web)

## 📌 Sobre o Projeto
O projeto Full Clean é focado em proporcionar uma experiência de interface (UI) de alto nível para o setor de higienização de estofados. Desenvolvido com o objetivo de unir performance, autoridade técnica e conversão, o site utiliza uma abordagem de design focada em transmitir confiança e profissionalismo ao usuário final.

### 🏠 Funcionalidades da Aplicação
* **Painel de Apresentação**: Banner principal com a proposta de valor da empresa e botão de chamada para ação (CTA).
* **Vitrine de Destaques**: Seção dedicada a mostrar as principais soluções e diferenciais dos serviços de limpeza oferecidos.
* **Seção de Depoimentos**: Espaço estruturado para exibir avaliações de clientes e construir credibilidade no mercado.

---

## 🛠️ Tecnologias Utilizadas

### 🌐 Front-end & Interface do Usuário
* **HTML5** — Utilizado para garantir a semântica correta e a acessibilidade da interface.
* **CSS3** / **TailwindCSS** — Adotado para criar um design totalmente responsivo com estilização rápida via classes utilitárias, otimizando a performance visual.
* **JavaScript** — Aplicado no front-end para manipular o DOM e realizar as requisições assíncronas (fetch) para a API do backend.

### ⚙️ Execução & Linguagem do Back-end
* **Node 20 LTS** — Escolhido como ambiente de execução no ecossistema do backend por sua estabilidade a longo prazo e ótima eficiência no tratamento de requisições E/S.
* **TypeScript 5.5** — Implementado para trazer tipagem estática ao projeto, mitigando comportamentos inesperados em tempo de execução e acelerando o desenvolvimento com o autocomplete da IDE.

### 🛡️ Roteamento, Integração & Segurança HTTP
* **Express 4.18** — Utilizado como framework de roteamento minimalista para estruturar os endpoints da API de forma escalável e sem dependências ocultas.
* **CORS** — Configurado especificamente para permitir que a interface construída em HTML puro se comunique com o servidor de forma segura e controlada.
* **Helmet** — Integrado como camada de segurança inicial, mitigando vulnerabilidades web comuns através da configuração correta dos cabeçalhos HTTP.

### 🗄️ Persistência de Dados & Modelagem (ORM)
* **PostgreSQL (via Supabase)** — Banco de dados relacional escolhido pela robustez na consistência de dados, hospedado na nuvem para facilitar a gerência por meio de um painel integrado.
* **Prisma 5.17 ORM** — Utilizado para abstrair a camada de dados com consultas seguras (*type-safe*). Toda a criação e alteração de tabelas foi automatizada via migrações estruturadas (ex: `prisma.orcamento.create()`).

### 🔍 Validação de Dados & Consistência de Tipos
* **Zod** — Aplicado para validação rigorosa de payloads nas requisições. Garante a integridade dos dados no *runtime* e barra entradas inválidas (ex: strings onde deveriam ser números) logo na entrada da API, antes mesmo de tocar o banco de dados.

### 📧 Comunicação & Disparos de E-mail Transacional
* **Resend** — Integrado à aplicação para automatizar o envio de orçamentos diretamente para o e-mail do usuário final, garantindo excelente entregabilidade e uso eficiente de APIs externas.

### 📊 Monitoramento, Rastreabilidade & Logs
* **Pino** — Centralizador de logs de alta velocidade em formato JSON estruturado, essencial para auditoria em produção e para monitorar a saúde da aplicação.
* **Pino-Pretty** — Ferramenta auxiliar acionada apenas em modo de desenvolvimento para formatar os logs do Pino, facilitando o rastreamento de erros visualmente.

### 🚀 Produtividade, Automatização & Compilação (Build)
* **ts-node-dev** — Configurado no ambiente local para habilitar o reinício automático (*hot reload*) do servidor a cada alteração de código, otimizando o fluxo de trabalho.
* **tsup** — Utilizado para compilar o código TypeScript em JavaScript puro altamente otimizado dentro do diretório `dist/`, preparando a aplicação de forma limpa para produção.
* **PNPM** — Escolhido como gerenciador de dependências por sua velocidade de instalação superior e armazenamento eficiente de pacotes via links físicos, economizando espaço em disco.

### ☁️ Infraestrutura, Deploy & Configurações Globais
* **Railway** — Plataforma de nuvem utilizada para o deploy contínuo (CD) do backend, configurada para automatizar novos deploys a cada atualização na branch principal do GitHub.
* **Variáveis de Ambiente (`.env`)** — Arquivo estratégico utilizado para isolar e proteger credenciais sensíveis de infraestrutura, tais como a `DATABASE_URL` e a `RESEND_API_KEY`.


---

## 📸 Demonstração
Aqui está a aparência atual da página "Inicio":
<br>
<p align="center">
  <img width="1904" height="992" alt="0" src="https://github.com/user-attachments/assets/96624f77-ef55-4402-8d5e-420ada19ba86" />
</p>
<br>
Aqui está a aparência atual da página "Serviços":
<br>
<p align="center">
  <img width="1919" height="991" alt="1" src="https://github.com/user-attachments/assets/c8c1338e-40b9-4c22-9fbf-7ca6ea8581b0" />
</p>
<br>
<br>
<p align="center">
  <img width="1905" height="992" alt="2" src="https://github.com/user-attachments/assets/6242b085-3408-4e7d-a275-269e32fe439b" />
</p>
<br>
<br>
<p align="center">
  <img width="1904" height="993" alt="3" src="https://github.com/user-attachments/assets/366cc0e1-7805-4d42-a7e0-556ba653c563" />
</p>
<br>
<br>
<p align="center">
  <img width="1905" height="992" alt="4" src="https://github.com/user-attachments/assets/c9f91b05-e22f-4a67-92d0-f8eac6c00c3b" />
</p>
<br>
<br>
<p align="center">
  <img width="1905" height="990" alt="5" src="https://github.com/user-attachments/assets/fdeceb87-315b-4c98-9c97-1d2d53b3ba35" />
</p>
<br>
<br>
<p align="center">
  <img width="1903" height="991" alt="6" src="https://github.com/user-attachments/assets/7ff33fe9-1545-4216-bb57-01867818a776" />
</p>
<br>
<br>
<p align="center">
  <img width="1904" height="993" alt="7" src="https://github.com/user-attachments/assets/4cddfb73-ad22-4a67-9d94-6659ea99c49c" />
</p>
<br>
<br>
<p align="center">
  <img width="1906" height="993" alt="8" src="https://github.com/user-attachments/assets/6aea5645-81a8-406c-814c-acba3bc2d97b" />

</p>
<br>
<br>
<p align="center">
  <img width="1906" height="991" alt="1" src="https://github.com/user-attachments/assets/9b698f5b-50ab-441c-b175-0889b84c073f" />

</p>
<br>
<br>
<p align="center">
  <img width="1901" height="990" alt="2" src="https://github.com/user-attachments/assets/40efeeb9-301b-40a4-b15f-42db9eb7e475" />

</p>
<br>
<br>
<p align="center">
  <img width="1902" height="993" alt="3" src="https://github.com/user-attachments/assets/e9631e1d-3b16-43e7-b502-8d05e680c21e" />

</p>
<br>
<br>
<p align="center">
  <img width="1902" height="992" alt="4" src="https://github.com/user-attachments/assets/be1810c2-bb31-49e9-a571-c29ad3fece1d" />

</p>
<br>

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
Você vai precisar apenas de um navegador web atualizado ou do [Live Server](https://visualstudio.com) no VS Code.

### Passo a Passo
1. Clone este repositório:
   ```bash
   git clone https://github.com
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd seu-repositorio
   ```
3. Abra o arquivo `index.html` no seu navegador.

---

## 📅 Próximos Passos & Roadmap de Desenvolvimento

### 🎨 Front-end (Concluído)
- [x] Criação da página de serviços oferecidos com design responsivo.
- [x] Otimização inicial de SEO e semântica HTML.
- [x] Estruturação dos scripts JavaScript para captação de dados da interface.

### ⚙️ Back-end & Infraestrutura (Em Andamento)
- [x] Configuração do servidor Express com TypeScript e middlewares de segurança (`Helmet`, `CORS`).
- [x] Modelagem do banco de dados PostgreSQL via Prisma ORM e execução das primeiras migrações.
- [x] Implementação de esquemas de validação de dados com `Zod` nos endpoints de entrada.
- [ ] Integração do serviço externo `Resend` para disparo automatizado de e-mails transacionais.
- [x] Configuração de proteção contra abusos e ataques de força bruta com `express-rate-limit`.
- [x] Acoplamento final: Integração completa da interface Front-end com a API/Banco de dados.
- [ ] Configuração de variáveis de ambiente seguras e deploy contínuo na plataforma `Railway`.

---
Desenvolvido por Lucas Silva ✨
