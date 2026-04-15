# Curso de Direito Previdenciário Prático

## Regras do projeto

### Encoding
- **Sempre usar UTF-8 com acentos corretos** em todos os arquivos (.svelte, .js, .md, .css).
- Nunca omitir acentos, cedilhas ou caracteres especiais do português brasileiro.
- Exemplos: "Previdenciário", "contribuição", "ação", "não", "módulo", "índice".

### Tom e público-alvo
- O curso é voltado para **advogados iniciantes** na área previdenciária.
- **NÃO** mencionar provas da OAB, concursos públicos ou questões de prova.
- Linguagem prática e direta, voltada à atuação profissional do advogado.
- Foco em situações reais do cotidiano previdenciário.

### Componentes customizados (usar nos arquivos .md das aulas)
- `<Dica>` — Dicas práticas para a atuação do advogado
- `<Atencao>` — Pontos críticos e alertas importantes
- `<Legislacao ref="...">` — Referência a dispositivo legal
- `<Jurisprudencia fonte="...">` — Decisões judiciais relevantes
- `<Pergunta pergunta="...">` — Perguntas frequentes dos clientes ou estudantes

### Estrutura
- Baseado no Svelter (/home/brpl/code/svelter)
- SvelteKit + mdsvex + Tailwind CSS v4 + DaisyUI 5
- Tema: `previdencia_dark` (azul-marinho + dourado)
- Dev server: porta 5175

### Conteúdo das aulas
- Não incluir seção "Resumo da aula" — as aulas já são enxutas.
- Incluir mapa legislativo quando pertinente.
- Cada aula deve importar e usar os componentes customizados conforme necessário.
