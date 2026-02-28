# Contexto Geral — Sistema 3D&T Victory

Este documento é uma referência rápida para o sistema de regras base do **3D&T Victory** (Jambô Editora) e um guia para os arquivos de desenvolvimento no diretório de referência. Ele é agnóstico de cenário e pode ser usado como base para qualquer projeto.

---

## 1. O SISTEMA BASE — 3D&T Victory

### Atributos
Três atributos, com escala de 0 a 5 para personagens jogadores:
- **Poder (P):** Engloba força física e capacidade mágica/de ataque. Usado para determinar dano e em testes de força.
- **Habilidade (H):** Representa agilidade, destreza, inteligência e percepção. Usado em testes de precisão, conhecimento e iniciativa.
- **Resistência (R):** Mede a durabilidade física e mental do personagem. Usado para absorver dano e em testes de vigor.

### Recursos
Os atributos base determinam os três recursos principais do personagem:
- **PA (Pontos de Ação) = P × 1:** Usados para ativar certas habilidades especiais e realizar ações heroicas.
- **PM (Pontos de Magia) = H × 5:** O combustível para magias, técnicas e poderes especiais.
- **PV (Pontos de Vida) = R × 5:** A capacidade do personagem de suportar dano antes de cair.

### Testes
- A mecânica central é a rolagem de dados de seis lados (d6) contra uma meta de dificuldade.
- O jogador rola de **1 a 3 dados (1D, 2D ou 3D)** e soma o resultado ao atributo relevante.
- **Metas Padrão:** Fácil: 6 | Médio: 9 | Difícil: 12 | Extremo: 15.
- **Ganho:** Adiciona +1 dado ao pool de rolagem (máximo 3D). Concedido por vantagens, perícias ou situações favoráveis.
- **Perda:** Remove −1 dado do pool de rolagem (mínimo 1D). Imposto por desvantagens ou situações desfavoráveis.

### Combate
- **Iniciativa:** Habilidade + Perícia relevante (se houver).
- **Ataque:** O atacante rola 1-3D + Poder (para ataques de força ou energia) ou Habilidade (para ataques de precisão) + Perícia.
- **Defesa:** O defensor rola 1-3D + Resistência + Perícia.
- **Dano:** Um ataque bem-sucedido (resultado do ataque maior que a defesa) causa dano igual ao Poder do atacante.
- **Condições de Derrota:** Quando os PVs de um personagem chegam a 0, ele está fora de combate. O estado exato (inconsciente, ferido, etc.) pode variar, mas ele não pode mais lutar.

### Escalas de Poder
A Escala representa o nível de poder de um ser em comparação com um humano comum.
- **Ningen (Humano):** A escala padrão para a maioria dos PJs e NPCs.
- **Sugoi (Superior):** Criaturas mais poderosas, veículos leves, semi-gigantes.
- **Kiodai (Gigante):** Mechs, monstros gigantes, tanques de guerra.
- **Kami (Divino):** Deuses, avatares, monstros colossais.

**Regra de Escala:** Um ser de uma escala superior que ataca um de escala inferior recebe um **Ganho** e, se acertar, causa um **acerto crítico automático**. Em contrapartida, um ser de escala inferior que ataca um de escala superior sofre uma **Perda**.

### Perícias
- Perícias são áreas de conhecimento ou treinamento que custam pontos de personagem para adquirir.
- A regra padrão é que possuir uma perícia relevante para um teste concede um **Ganho** (+1D) na rolagem.
- Exemplos: Luta, Pontaria, Mística, Saber, Furtividade, Atletismo, Medicina.

### Kits
- Kits são "pacotes" de personagem que representam uma profissão, arquétipo ou estilo de luta.
- Normalmente custam pontos para adquirir e têm exigências mínimas de atributos.
- Cada Kit concede um conjunto de 3 a 5 poderes ou habilidades exclusivas que definem o personagem.
- **Nota:** Os Kits disponíveis variam drasticamente de um cenário para outro. Suplementos como o "Manual do Arcanauta" oferecem uma vasta gama de kits genéricos.

---
---

## 2. ÍNDICE DE ARQUIVOS DE REFERÊNCIA

Esta seção descreve os arquivos `.md` localizados no diretório `referencia`, explicando como usá-los no desenvolvimento de qualquer projeto 3D&T Victory.

### Livro Base: 3D&T Victory
Os capítulos do livro de regras principal.

| Arquivo | Conteúdo | Uso Recomendado |
|---|---|---|
| `00-introducao.md` | Material inicial, créditos, sumário. | Consulta geral. |
| `01-personagens.md` | **Capítulo 1: Personagens** — Regras de criação. | **Essencial** para criar PJs e NPCs. |
| `02-jogando.md` | **Capítulo 2: Jogando** — Mecânicas de jogo, combate, testes. | **Essencial** para entender o fluxo do jogo. |
| `03-recompensas.md` | **Capítulo 3: Recompensas** — Progressão, XP, itens. | Útil para estruturar campanhas. |
| `04-mais-regras.md` | **Capítulo 4: +Regras** — Regras adicionais e opcionais. | Fonte de mecânicas customizadas. |
| `05-mestrar.md` | **Capítulo 5: O Mestre** — Guia para o mestre. | Boas práticas de narração e gerenciamento de jogo. |
| `06-mundos.md` | **Capítulo 6: O Mundo** — Exemplos de cenários. | Inspiração para criação de mundos. |

### Suplementos e Fontes de Inspiração

| Arquivo | Conteúdo | Sistema | Uso Recomendado |
|---|---|---|---|
| `manual-do-arcanauta.md` | **Manual do Arcanauta.** 60+ kits de personagem. | Victory | Fonte primária para Kits de PJs e NPCs. |
| `ferozes-e-furiosos.md` | **Ferozes e Furiosos.** Bestiário com 40+ grupos de criaturas. | Victory | Fonte primária para adversários e monstros. |
| `tormenta-alpha.md` | **Tormenta Alpha.** Livro de cenário para o sistema 3D&T Alpha. | Alpha | Fonte de lore, raças e cultura do cenário de Arton. **Requer conversão.** |
| `conversao-alpha-victory.md` | **Guia de Conversão: Alpha → Victory.** | N/A | **Essencial** ao usar material do `tormenta-alpha.md`. |
| `academia-arcana-tormenta-d20.md` | **Academia Arcana (versão D20).** | Tormenta D20 | Exemplo de como um cenário pode ser estruturado. **Apenas para inspiração de lore; mecânicas não são compatíveis.** |
| `academia-arcana-tormenta-alpha.md` | **Academia Arcana (versão Alpha).
| `brigada.md` | Livro básico de Brigada Ligeira Estelar um cenário de 3DeT Victory.

### Notas para Agentes de IA
- Para criar qualquer personagem ou NPC, consulte `01-personagens.md` para as regras base e `manual-do-arcanauta.md` para opções de Kits.
- Para criar adversários, `ferozes-e-furiosos.md` é a melhor fonte de fichas prontas.
- Ao adaptar conteúdo de outros sistemas (como Alpha ou D20), foque em **portar a lore e as ideias**, e então **crie as mecânicas do zero** usando as regras do 3D&T Victory. Use o `conversao-alpha-victory.md` como guia quando aplicável.
- Use `brigada.md` como Gold-Standard de bom livro de cenário para 3DeT Victory.

---
