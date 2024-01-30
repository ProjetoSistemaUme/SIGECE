**Como instalar e rodar o SIGECE**

O SIGECE é um Sistema de Gestão dos Centros Espíritas desenvolvido em Angular e Docker. Para instalá-lo, siga estas etapas:

1. Clone o repositório do SIGECE:

```
git clone https://github.com/ProjetoSistemaUme/SIGECE.git
```

2. Alterne para a branch "config":

```
git checkout config
```

3. Entre na pasta "SIGECE" pelo terminal:

```
cd SIGECE
```

4. Abra o terminal do VS Code:

```
code .
```

5. Rode o comando do Docker:

```
docker-compose up --build --no-deps -d
```

6. No VS Code, abra o devcontainer usando o atalho "shift + control +p" e selecione "Dev Containers: Rebuild and Reopen in Container".

7. Na próxima opção, deixe vazio e dê "Enter".

8. Ao abrir o dev container, entre na pasta "SIGECE-APP" e rode o comando "npm install" para instalar as dependências do Angular.

9. Execute o comando "ng serve --show" para iniciar o servidor de desenvolvimento.

O site estará disponível no endereço http://localhost:4200.

**Detalhes de cada etapa**

**Clonar o repositório**

O comando `git clone` clona um repositório Git para o seu computador. O primeiro argumento é o URL do repositório que você deseja clonar.

**Alternar para a branch "config"**

O comando `git checkout` alterna para uma branch específica do repositório. No caso do SIGECE, a branch "config" contém a configuração de produção do sistema.

**Entrar na pasta "SIGECE"**

O comando `cd` muda o diretório de trabalho atual. No caso do SIGECE, o diretório de trabalho atual é a pasta "SIGECE".

**Abrir o terminal do VS Code**

O atalho "shift + control +p" abre o menu de comandos do VS Code. No menu, digite "code ." para abrir o terminal do VS Code na pasta atual.

**Rodar o comando do Docker**

O comando `docker-compose up` inicia os serviços Docker definidos no arquivo `docker-compose.yml`. No caso do SIGECE, o comando inicia o serviço do back-end e o serviço do front-end.

**Abrir o devcontainer**

O comando "Dev Containers: Rebuild and Reopen in Container" recria o devcontainer do VS Code e o abre dentro de um container Docker.

**Instalar as dependências do Angular**

O comando `npm install` instala as dependências do Angular. As dependências são necessárias para compilar e executar o aplicativo Angular.

**Iniciar o servidor de desenvolvimento**

O comando `ng serve --show` inicia o servidor de desenvolvimento do Angular. O servidor de desenvolvimento compila o aplicativo Angular em tempo real e o serve em um endereço local.

**Após a instalação**

Após seguir estas etapas, o SIGECE estará instalado e rodando em seu computador. Você pode acessar o site no endereço http://localhost:4200.

**Para obter mais informações**

Para obter mais informações sobre o SIGECE, consulte a documentação do projeto. A documentação está disponível no repositório do SIGECE, na pasta `docs`.
