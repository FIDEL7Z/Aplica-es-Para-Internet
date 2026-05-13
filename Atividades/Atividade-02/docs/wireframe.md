# Planejamento do Projeto - Atividade 02

## Escopo

Portfólio acadêmico responsivo para apresentar a dupla, experiências, projetos,
contatos e um formulário validado com HTML5.

## Público-alvo

Professor, colegas da disciplina e avaliadores do projeto de Aplicações para
Internet.

## Wireframe ASCII

```text
DESKTOP
┌──────────────────────────────────────────────────────────────┐
│ HEADER: Jeff & Hugo | Sobre | Experiência | Projetos | Contato│
├──────────────────────────────────────────────────────────────┤
│ HERO: nome da dupla + subtítulo da disciplina                 │
├──────────────────────────────────────────────────────────────┤
│ SOBRE: card Jefferson                  | card Hugo            │
├──────────────────────────────────────────────────────────────┤
│ EXPERIÊNCIA: coluna Jefferson          | coluna Hugo           │
├──────────────────────────────────────────────────────────────┤
│ PROJETOS: cards empilhados com mídia, tags e links            │
├──────────────────────────────────────────────────────────────┤
│ CONTATO: cards da dupla + formulário com labels e validação   │
├──────────────────────────────────────────────────────────────┤
│ FOOTER: projeto | navegação | créditos                        │
└──────────────────────────────────────────────────────────────┘

MOBILE
┌──────────────────────────────┐
│ HEADER: marca + hamburger    │
├──────────────────────────────┤
│ HERO                         │
├──────────────────────────────┤
│ Cards em coluna única        │
├──────────────────────────────┤
│ Formulário em coluna única   │
└──────────────────────────────┘
```

## Arquitetura de Informação

- `header/nav`: navegação principal com menu responsivo.
- `main`: conteúdo único da página.
- `section`: blocos temáticos de sobre, experiência, projetos e contato.
- `article`: cards de perfil, experiências, projetos e contatos.
- `footer`: créditos, navegação secundária e informações do projeto.

## Sistema Visual

- Tipografia: Syne para títulos e DM Sans para texto.
- Tokens: separados em `primitives.css`, `semantic.css`, `spacing.css` e
  `typography.css`.
- Espaçamento: escala em múltiplos de 4px.
- Componentes: navbar, hero, cards, badges, botões, formulário e footer.
- Acessibilidade: landmarks semânticos, `alt`, labels, `required`, `pattern`,
  `aria-expanded`, skip link, foco visível, contraste e legendas para vídeo.
