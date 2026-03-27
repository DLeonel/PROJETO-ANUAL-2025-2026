# G°6 025-026 ITT PLATFORM

## Descrição
A **G°6 025-026 ITT PLATFORM** é uma aplicação web desenvolvida como projeto anual escolar, voltada ao setor de Tecnologia da Informação e Telecomunicações (ITT). O projeto utiliza **React** e **Vite**, priorizando desempenho, modularidade e escalabilidade.

Atualmente, contempla apenas o frontend, com arquitetura preparada para futura integração com backend e serviços externos.

---

## Objetivo Técnico
- Estruturar uma aplicação frontend moderna baseada em componentes.  
- Aplicar organização modular de código para manutenção e escalabilidade.  
- Preparar a base para integração com APIs e serviços backend.  
- Garantir consistência visual e reutilização de estilos em toda a aplicação.  

---

## Tecnologias Utilizadas
- **React**  
- **Vite**  
- **JavaScript (ES6+)**  
- **HTML5**  
- **CSS3**  
- **react-icons**  

---

## Estrutura do Projeto

```plaintext
src/
 ├── assets/        # Recursos estáticos (imagens, ícones)
 ├── components/    # Componentes reutilizáveis
 ├── features/      # Funcionalidades modulares da aplicação
 ├── fragments/     # Blocos de interface reutilizáveis (headers, sidebars)
 ├── pages/         # Páginas completas (Home, Login, Dashboard)
 ├── router/        # Definição de rotas
 ├── styles/        # Estilos globais e compartilhados
 ├── App.jsx        # Componente raiz
 ├── main.jsx       # Ponto de entrada e importação de estilos globais
```

### 1. Branches principais
| Branch    | Propósito                                     |
|-----------|-----------------------------------------------|
| `main`    | Código estável, pronto para produção         |
| `develop` | Desenvolvimento contínuo e integração de features |

> Todas as alterações devem ser enviadas primeiro para `develop`.  
> Somente após teste e aprovação, é feito merge para `main`.
---

## Execução do Projeto

# Clonar repositório
git clone <url-do-repositorio>

# Entrar na pasta do projeto
cd nome-do-projeto

# Entrar na develop e atualizar
git checkout develop
git pull origin develop

# Trabalhar, adicionar e commitar
git add .
git commit -m "feat: descrição clara"

# Enviar feature
git push origin feature/nova-feature

# Merge na develop
git checkout develop
git pull origin develop
git merge feature/nova-feature
git push origin develop

# Instalar dependências
npm install

# Executar projeto em modo desenvolvimento
npm run dev
