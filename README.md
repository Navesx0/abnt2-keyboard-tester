# Teclado ABNT2 Virtual - Testador de Teclado

Este projeto é um testador de teclado virtual que simula um teclado ABNT2 completo em uma interface web interativa. Ele permite aos usuários testar o funcionamento das teclas do teclado de forma visual e intuitiva.

## 🚀 Tecnologias Utilizadas

### Backend
- **Java 24**: Linguagem de programação principal
- **Spring Boot 3.5.5**: Framework para desenvolvimento da aplicação
  - Spring Boot Web: Para criar a aplicação web
  - Spring Boot Thymeleaf: Template engine para renderização das páginas HTML
  - Spring Boot Test: Para testes unitários e de integração

### Frontend
- **HTML5**: Estruturação da página web
- **CSS3**: Estilização e layout responsivo
  - Flexbox para organização do layout
  - Gradientes para efeitos visuais
  - Animações CSS para feedback visual
- **JavaScript**: Interatividade e manipulação do DOM
  - Eventos de mouse para simular pressionamento de teclas
  - Manipulação de classes CSS para efeitos visuais

## 🎯 Funcionalidades

- Representação visual completa do teclado ABNT2
- Simulação de pressionamento de teclas com feedback visual
- Layout responsivo que se adapta a diferentes tamanhos de tela
- Suporte a caracteres especiais do padrão ABNT2
- Feedback visual através de animações ao pressionar teclas
- Console log para registro de teclas pressionadas

## 🏗️ Arquitetura e Padrões

### Estrutura do Projeto
```
src/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── java/
│   │           └── aprendendo/
│   │               ├── AprendendoApplication.java
│   │               ├── controller/
│   │               │   └── PaginaController.java
│   │               └── entity/
│   │                   └── Usuario.java
│   └── resources/
│       ├── static/
│       │   └── css/
│       │       └── style.css
│       └── templates/
│           └── index.html
└── test/
    └── java/
        └── com/
            └── java/
                └── aprendendo/
                    └── AprendendoApplicationTests.java
```

### Padrões de Projeto
- **MVC (Model-View-Controller)**: Separação clara entre a lógica de negócio, apresentação e controle
- **Single Page Application**: Interface única e interativa
- **Responsive Design**: Design adaptativo para diferentes dispositivos
- **Component-Based Design**: Estruturação modular do teclado

## 💻 Como Executar

1. **Pré-requisitos**
   - Java 24 ou superior
   - Maven instalado

2. **Clone o repositório**
   ```bash
   git clone [url-do-repositorio]
   ```

3. **Execute o projeto**
   ```bash
   cd Teclado
   mvn spring-boot:run
   ```

4. **Acesse a aplicação**
   - Abra o navegador e acesse: `http://localhost:8080`

## 🛠️ Desenvolvimento

O projeto foi desenvolvido com foco em:
- **Modularidade**: Código organizado em componentes reutilizáveis
- **Manutenibilidade**: Estrutura clara e bem documentada
- **Performance**: Otimizações de CSS e JavaScript
- **Usabilidade**: Interface intuitiva e responsiva

## ✨ Features Especiais

- Teclas de função (F1-F12) espaçadas corretamente
- Suporte completo ao layout ABNT2
- Teclas especiais como Print Screen, Scroll Lock e Pause
- Indicadores visuais para Caps Lock e Num Lock
- Feedback tátil visual ao pressionar teclas
- Suporte a caracteres especiais e acentuação

## 📝 Notas de Desenvolvimento

- Utilização de CSS Grid e Flexbox para layout preciso
- Implementação de efeitos visuais com CSS3
- Eventos JavaScript para interatividade
- Testes automatizados para garantir funcionamento
- Integração contínua com Maven

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:
1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.