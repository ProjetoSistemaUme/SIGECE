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

instale as extensões no Vs Code: Docker e Dev Containers

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


**-----------**

**Instalar WSL2**

**Windows 10/11**
***Windows Update***
Verifique se seu Windows está atualizado, pois o WSL 2 depende de uma versão atualizada do Hyper-V. Verifique o Windows Update.

Atualizar o WSL
Com a versão 2004 do Windows 10 ou Windows 11, o WSL já está presente em sua máquina, execute o comando para pegar a versão mais recente do WSL:

```
wsl --update
```

E pegue a versão mais recente do WSL.

Atribuir a versão default do WSL para a versão 2
A versão 1 do WSL pode ser a padrão em sua máquina, execute o comando abaixo para definir como padrão a versão 2:

```
wsl --set-default-version 2
```

Instale o Ubuntu
Execute o comando:

```
wsl --install
```

Este comando irá instalar o Ubuntu como o Linux padrão.

Se você quiser instalar uma versão diferente do Ubuntu, execute o comando wsl -l -o. Será listado todas as versões de Linux disponíveis. Instale a versão escolhida com o comando wsl --install -d nome-da-distribuicao.

Sugerimos o Ubuntu (sem versão) por ser uma distribuição popular e que já vem com várias ferramentas úteis para desenvolvimento instaladas por padrão.

Após o término do comando, você deverá criar um nome de usuário que poderá ser o mesmo da sua máquina e uma senha, este será o usuário root da sua instância WSL.

Para abrir uma nova janela do Ubuntu, basta digitar Ubuntu no menu iniciar e clicar no ícone do Ubuntu.

Recomendamos o uso do Windows Terminal como terminal padrão para desenvolvimento no Windows. Ele agregará o shell do Ubuntu, assim como o PowerShell e o CMD em uma única janela.

(Opcional) Alterar a versão de uma distribuição do Linux de WSL 1 para WSL 2
Se a distribuição Linux que você instalou estiver na versão 1, você pode alterar para a versão 2 com o seguinte comando:

```
wsl --set-version <distribution name> 2
```


**Instalar o Docker com Docker Engine (Docker Nativo)**

*Instale os pré-requisitos:*

```
sudo apt update && sudo apt upgrade
sudo apt remove docker docker-engine docker.io containerd runc
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

Adicione o repositório do Docker na lista de sources do Ubuntu:

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

OBSERVAÇÃO: Se você estiver usando uma distribuição diferente do Ubuntu, substitua os endereços acima respectivamente: Exemplo: Instalando o docker-engine no Debian:

```
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo \
"deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian \
$(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```
Instale o Docker Engine

```
sudo apt-get update
```
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

Dê permissão para rodar o Docker com seu usuário corrente:

```
sudo usermod -aG docker $USER
```

Reiniciar o WSL via linha de comando do Windows para que não seja necessário autorização root para rodar o comando docker:

```
wsl --shutdown
```

Acessar novamente o Ubuntu e iniciar o serviço do Docker:

```
sudo service docker start
```

**Instalar Compose**
```
sudo curl -L "https://github.com/docker/compose/releases/download/v2.5.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
```
sudo chmod +x /usr/local/bin/docker-compose
```
```
docker-compose --version
```
