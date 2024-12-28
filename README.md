<div align="center">
  <img height="150em" length="50em" alt="Header" src="/src/assets/task-management-logo.png"/>
</div>

# 📝 EasyTask
EasyTask é uma aplicação web simples e eficiente para gerenciar tarefas, onde você pode adicionar tasks para cada usuário e marcar se estão concluídas.

## 🛠️ Tecnologias Utilizadas
Framework: Angular
Curso Base: Este projeto foi desenvolvido seguindo o curso The Complete Guide to Angular 2 de Maximilian Schwarzmüller.


## 🚀 Funcionalidades
Adicionar tarefas para diferentes usuários.
Atualizar o status de conclusão das tarefas.
Interface intuitiva e fácil de usar.


## 📦 Como Instalar e Executar o Projeto:

### Clone este repositório:

Navegue para o diretório do projeto:

```bash
git clone https://github.com/seu-usuario/easytask.git
```

Instale as dependências:

```bash
cd easytask
```

Inicie o servidor de desenvolvimento:

```bash
npm install
```

Acesse a aplicação em http://localhost:4200.

```bash
ng serve
```

## 📖 Estrutura do Projeto

```plaintext
src/
├── app/                 # Diretório principal da aplicação
│   ├── header/          # Componente de cabeçalho
│   ├── shared/          # Componentes compartilhados
│   │   └── card/        # Componente de cartão reutilizável
│   ├── tasks/           # Funcionalidades relacionadas a tarefas
│   │   ├── new-task/    # Componente para criar uma nova tarefa
│   │   └── task/        # Componente para exibir uma tarefa
│   └── user/            # Funcionalidades relacionadas aos usuários
└── assets/              # Arquivos estáticos da aplicação
    └── users/           # Dados ou recursos relacionados aos usuários
````

## 🏫 Sobre o Curso
O projeto foi inspirado nas seções 1 e 2 do curso The Complete Guide to Angular 2, onde os fundamentos do Angular e as boas práticas de desenvolvimento foram abordados.
