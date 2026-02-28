## Plano: Consolidar Pareceres em Plano de Revisão

O objetivo é produzir um **único arquivo `.md`** (`PLANO_REVISAO.md`) que funcione como um backlog acionável de revisão do livro — pronto para ser usado em sessões futuras sem precisar reler todos os pareceres originais. As sugestões de cada parecerista são sintetizadas em tarefas concretas, priorizando mudanças estruturais acima de ajustes de prosa.

**Passos**

1. **Ler os pareceres não lidos ainda** (caps 4, 5, 7, 9, 10, 12 e 13 de Trevisan e Marcela, em paralelo), completando a cobertura dos 13 capítulos de ambos. O parecer do Saladino já foi assimilado via contexto.

2. **Montar a estrutura do documento** com as seguintes seções:
   - Cabeçalho com meta, legenda de prioridades e como usar
   - **Bloco global** com as mudanças estruturais transversais do Saladino (Arsenal do Arcanauta Acadêmico, corte de kits redundantes, consolidação de suplementos)
   - **13 blocos por capítulo**, cada um com:
     - `[ESTRUTURAL]` — mudanças de ordem, fusão, corte de seções *(Marcela tende a propor mais; ênfase aqui)*
     - `[CONVERGÊNCIA]` — pontos em que 2+ pareceristas concordam *(alta confiança)*
     - `[PROSA/TEXTO]` — ajustes de voz, linguagem, "AI language" *(Trevisan)*
     - `[EMOÇÃO/PERSONAGEM]` — profundidade emocional de NPCs e protagonistas *(Marcela)*
     - `[ILUSTRAÇÃO]` — sugestões de arte *(Trevisan predomina, com detalhes ricos)*
   - **Bloco de suplementos** com plano de consolidação (quais fundir no livro, quais descartar, quais manter como suplemento autônomo)

3. **Aplicar a lógica de síntese** nos conflitos: quando Marcela propõe reestruturação e Trevisan propõe ajuste de prosa para o mesmo problema, registrar a reestruturação como tarefa principal e o ajuste de prosa como tarefa secundária — nunca `"deixar como está"`.

4. **Salvar o arquivo** como `PLANO_REVISAO.md` na raiz do workspace (`/home/lupires/Documents/3D&T/PLANO_REVISAO.md`), formatado para ser usado diretamente numa próxima sessão de edição.

**Verificação**
- O documento deve produzir tarefas suficientes para guiar a edição de cada capítulo sem precisar abrir os pareceres originais
- Cada item deve ter: verbo de ação + localização no livro + raciocínio de 1 linha

**Decisões**
- Conflito Marcela vs. Trevisan: síntese com ênfase na mudança (não no status quo)
- Prioridade máxima: mudanças estruturais globais (Saladino) → depois reestruturações por capítulo (Marcela) → convergências → ajustes pontuais
- Suplementos incluídos no mesmo documento, seção final
- Formato `.md` puro, sem tabelas complexas, para máxima legibilidade em sessão futura
