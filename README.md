# README — Organização do Branch e Fluxo de Desenvolvimento

## Estrutura de Desenvolvimento do Projeto

Este branch foi adaptado exclusivamente para o desenvolvimento das páginas sob minha responsabilidade dentro do Projeto Anual (PA).

Durante esta etapa, foram realizadas alterações estruturais temporárias com o objetivo de reduzir conflitos futuros durante a integração com o branch principal (`main`) e manter o ambiente mais limpo e organizado para desenvolvimento.

---

## Alterações Realizadas Neste Branch

### Ajustes Estruturais

- Remoção de rotas desnecessárias no router;
- Remoção temporária de páginas não relacionadas ao meu desenvolvimento;
- Adaptação do header e da estrutura geral apenas para as páginas utilizadas neste branch;
- Redução de conteúdo e arquivos sem impacto direto nas páginas em construção;
- Organização inicial dos assets utilizados.

Essas alterações possuem objetivo exclusivamente local e organizacional durante o desenvolvimento individual.

---

## Importante Sobre a Integração com o Main

As modificações estruturais feitas aqui **não serão enviadas diretamente para o branch principal (`main`)**.

Na etapa final de integração:

- Apenas as páginas concluídas serão enviadas;
- Apenas os componentes, assets e dependências diretamente ligados às páginas serão mantidos;
- Arquivos padrões que não sofreram alterações relevantes deverão ser removidos antes da mesclagem.

### Exemplos de arquivos/pastas que normalmente NÃO precisam ser enviados para o `main` caso não tenham sido alterados:

- configurações padrão;
- arquivos globais sem modificação;
- estruturas temporárias de desenvolvimento;
- estilos não utilizados;
- páginas removidas apenas para organização local.

---

## Fluxo de Trabalho do Projeto

### Desenvolvimento Individual

Cada integrante trabalha em seu próprio branch/rama.

### Exemplo:

```bash
feature\dedaldino
featurel\admilson
feature\haradson
```

---

## Etapa de Envio

### 1. Desenvolvimento Local

Durante o desenvolvimento, o branch pode conter toda a estrutura necessária para execução do projeto localmente.

Isso inclui:

- dependências;
- configurações;
- arquivos auxiliares;
- estrutura completa do projeto.

---

### 2. Limpeza Antes do Merge

Após finalizar as páginas:

- remover arquivos desnecessários;
- manter apenas o que afeta diretamente a funcionalidade da página;
- preservar assets utilizados;
- preservar componentes necessários;
- evitar enviar estruturas temporárias.

---

### 3. Envio para `develop`

Quando a funcionalidade estiver concluída:

- o código deve ser enviado para o branch `develop`;
- será realizada revisão;
- serão analisados:
  - organização;
  - funcionamento;
  - compatibilidade;
  - conflitos;
  - padronização.

---

### 4. Integração no `main`

Após validação no `develop`:

- será realizada a integração com o `main`;
- ocorrerá a mesclagem final dos conteúdos;
- apenas arquivos relevantes permanecerão no projeto principal.

---

## Organização de Assets

Todos os arquivos utilizados pelas páginas devem permanecer organizados, matendo, seguindo a estrura PRINCIPAL..

### Exemplo:

```bash
src/
 ├── assets/
 │    ├── images/
 │    ├── icons/
 │    └── banners/
```

As imagens e recursos utilizados pelas páginas DEVEM ser enviados junto com elas 

---

## Objetivo Desta Estratégia

Essa metodologia foi adotada para:

- reduzir conflitos de merge;
- evitar substituição desnecessária de arquivos;
- facilitar integração entre os integrantes;
- manter o repositório organizado;
- permitir desenvolvimento paralelo com mais segurança;
- melhorar manutenção e revisão do código.

---

## Observação Final

As alterações estruturais temporárias deste branch existem apenas para facilitar o desenvolvimento individual.

O branch principal (`main`) deverá permanecer:

- limpo;
- estável;
- organizado;
- contendo apenas código validado e funcional.