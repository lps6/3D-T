---
titulo: "Energia da Multidão"
sistema: 3D&T Victory
dlc: TeleCatch Victory
status: rascunho
secao: 16
---

# Energia da Multidão

*Faísca sabia que estava perdendo. Dois Finalizadores encaixados, o ombro mal obedecendo, e a contagem do árbitro ecoando como sentença. Mas então ela ouviu: primeiro um murmúrio, depois um coro, depois um trovão. Quinze mil pessoas gritando seu nome. Não era metáfora — ela sentiu a vibração subindo pelas cordas, entrando pelos pés, enchendo os pulmões de algo que não era oxigênio. Quando levantou o ombro no "dois", o rugido do Templo Olmeca sacudiu as arquibancadas. A multidão não estava apenas assistindo. Estava lutando junto.*

---

> ### O Sistema de Energia — Visão Geral
>
> No TeleCatch Victory, quatro termos formam **um único sistema interconectado**:
>
> - **Pop** = a energia positiva do público (torcida, empolgação). Beneficia o Face.
> - **Heat** = a energia negativa (raiva, vaias). Beneficia o Heel.
> - **Energia da Multidão** = o medidor compartilhado que registra o nível atual de Pop ou Heat.
> - **Silêncio** = o público desconectado. Ninguém se beneficia (exceto quem se alimenta do vazio).
> - **Frenesi** = o extremo. O público está fora de controle. Todos se beneficiam — e tudo pode acontecer.
>
> Pop e Heat não são opostos — são **direções** do mesmo medidor. A Energia sobe em direção a Pop (Face faz algo heróico) ou em direção a Heat (Heel faz algo desprezível). No topo de qualquer direção, o Frenesi explode.

## Níveis de Energia

A Energia da Multidão tem 5 níveis. O diagrama abaixo mostra como se conectam:

```
         FRENESI (Pop)
            ↑
           POP
            ↑
    SILÊNCIO ← ATIVO → (direção Heat)
                         ↓
                        HEAT
                         ↓
                      FRENESI (Heat)
```

**Silêncio** fica abaixo de Ativo — é o fundo do poço. **Ativo** é o centro. Subindo, a Energia vai para **Pop** ou **Heat** (dependendo da direção), e no topo atinge **Frenesi**.

| Nível | Direção | Efeito |
|-------|---------|--------|
| **Silêncio** | Abaixo de Ativo | O público está desconectado. Nenhum bônus. Lutadores com Gimmick de performance (Ídolo, Exótico) sofrem Perda — sem plateia, sem brilho. Lutadores Psicológico com *Silêncio Mortal* ativo ganham P+1 (o vazio é a arma deles). |
| **Ativo** | Centro (padrão) | O público está prestando atenção. Estado inicial de toda luta. Sem modificadores. |
| **Pop** | Face | O público está animado a favor do Face. Face recebe Ganho em um ataque por rodada. Heel sofre Perda em testes sociais (o público não quer ouvi-lo). |
| **Heat** | Heel | O público está com raiva do Heel. Heel recebe Ganho em um ataque por rodada (alimenta-se do ódio). Face recebe Ganho em defesa (o público torce por ele, dando-lhe forças para aguentar). |
| **Frenesi** | Ambos (Pop ou Heat) | O público está fora de controle. **Todos** os ataques de **todos** os lutadores ganham P+1. Finalizadores ganham Penetrante (ignora proteções — ver livro base). Kickouts recebem Ganho (a adrenalina da multidão injeta vida no lutador caído — ver [Finalizador & Kickout](17_finalizador_kickout.md)). O Promoter pode declarar eventos espontâneos: run-in, interferência, colapso de estrutura. |

> **Nota:** Frenesi Pop e Frenesi Heat são narrativamente distintos (êxtase vs. fúria) mas mecanicamente idênticos. Ambos ativam os mesmos efeitos.

## Transições

A Energia começa em **Ativo** no início de cada luta. Move-se em passos de um nível por vez.

**Ações que sobem a Energia (em direção Pop ou Heat, conforme alinhamento):**

| Ação | Efeito |
|------|--------|
| Acertar um Finalizador | +1 nível |
| Kickout bem-sucedido | +1 nível (sempre em direção Pop — público celebra a resistência) |
| Usar Vantagem que declare gerar Pop ou Heat | +1 nível |
| Traição (Heel Turn, ataque a aliado) | +2 níveis em direção Heat (exceção: pula 1 nível) |
| Comeback de Face em desvantagem | +1 nível Pop |
| Pose Dramática (Gimmick Ídolo ou Exótico) | +1 nível |

**Ações que descem a Energia:**

| Ação | Efeito |
|------|--------|
| Rest hold (grapple sem dano por 2+ turnos) | -1 nível |
| Distração do Árbitro prolongada | -1 nível |
| *Silêncio Mortal* (Estilo Psicológico, custo 2PM) | -1 nível |
| Contagem longa fora do ringue | -1 nível |
| Luta sem ação significativa por 2 turnos seguidos | -1 nível |

**Regras de transição:**

- A Energia **não pode pular níveis** (exceto Traição, que pula +2).
- **Silêncio** só é atingido se a Energia descer de **Ativo**. Pop/Heat não descem diretamente para Silêncio — descem para Ativo primeiro.
- **Frenesi é instável.** Se nenhuma ação da lista acima gerar Pop/Heat por 2 turnos consecutivos, o Frenesi desce para Pop ou Heat (conforme a direção). Ataques normais **não** contam como ações que movem Energia — apenas as ações listadas nas tabelas acima.
- **Direções opostas:** Se uma ação de Heat ocorre enquanto a Energia está em Pop, a Energia desce em direção a Ativo (e vice-versa). Exemplo: Energia em Pop, Heel faz provocação (+1 Heat) → Energia desce de Pop para Ativo.
- **Múltiplas mudanças no mesmo turno:** Resolva na ordem de iniciativa. Se três ações movem Energia no mesmo turno, aplique cada uma sequencialmente.

> ### Exemplo: Faísca vs. Ocelote — A Energia em Ação
>
> **Turno 1:** A luta começa em **Ativo**. Faísca (Face) acerta um *dropkick* espetacular — ação normal, sem efeito na Energia. Ocelote (Heel) responde com um chute baixo ilegal enquanto o árbitro estava distraído. O Promoter decide: isso conta como provocação? Ocelote tem Estilo Dirty. Sim — +1 nível em direção Heat. Energia: **Heat**.
>
> **Turno 2:** Ocelote provoca o público apontando para Faísca caída. *Cheap Heat* (ver abaixo). +1 nível Heat. Energia: **Frenesi (Heat)**.
>
> **Turno 3:** Em Frenesi, todos os ataques ganham P+1. Ocelote ataca com P3+1 = efetivo P4. Faísca aguenta e prepara o comeback. Nenhuma ação gera Pop/Heat — turno 1 sem movimento de Energia em Frenesi.
>
> **Turno 4:** Faísca levanta com um *comeback*! Face em desvantagem fazendo comeback: +1 nível Pop. Mas estamos em Frenesi Heat — a ação de Pop desce o Frenesi para **Heat**. A luta continua intensa, mas o Frenesi passou.
>
> **Turno 5:** Faísca acerta seu Finalizador (*Descarga Total*). +1 nível Pop. Energia desce de Heat para **Ativo**. Ocelote está Abatido. Pin...

## Interação com Alinhamento

Cada lutador tem um **alinhamento**: Face (herói), Heel (vilão) ou Tweener (ambíguo).

- **Face:** Ações que geram Energia vão na direção Pop. Comeback ativa em Pop ou Frenesi Pop.
- **Heel:** Ações que geram Energia vão na direção Heat. *Cheap Heat* é fácil — qualquer provocação direta ao público gera +1 Heat. **Cheap Heat pode ser usado uma vez por cena** (o público se acostuma com provocações repetidas).
- **Tweener:** Escolhe a direção no momento da ação. **Pode mudar de direção apenas uma vez por luta.** Se mudar de direção uma segunda vez, o público perde a confiança: o Tweener sofre **Desconfiança** — Perda em todos os testes sociais pelo resto da sessão. O público não sabe de que lado ele está, e gente indecisa não gera reação.

## Turns (Viradas de Alinhamento)

Um lutador pode fazer um **Turn** — mudar de Face para Heel ou vice-versa — durante uma luta ou cena.

- **Heel Turn:** Faça uma ação que traia a confiança do público (atacar aliado, trapacear quando ganhando, recusar handshake). A Energia sobe 2 níveis em direção Heat imediatamente.
- **Face Turn:** Faça uma ação que demonstre honra inesperada (recusar Vantagem suja, salvar um oponente, se sacrificar). A Energia sobe 2 níveis em direção Pop.

Turns são poderosos mas **irreversíveis na sessão**. Se um lutador fizer Turn e depois tentar voltar atrás na mesma sessão, a Energia vai para Silêncio — o público não acredita.

## Energia da Multidão Fora do Ringue

Em cenas de bastidor, promo e social, a Energia da Multidão não se aplica diretamente, mas o **nível ao final da última luta da sessão** persiste como reputação:

| Energia Final | Efeito Fora do Ringue |
|---------------|----------------------|
| Pop / Frenesi Pop | Ganho em testes sociais com fãs, patrocinadores, mídia. |
| Heat / Frenesi Heat | Ganho em testes de intimidação, negociação com heels, recrutamento de vilões. |
| Silêncio | Sem modificador. Ninguém se lembra da sua última luta. |

Se múltiplas lutas aconteceram na mesma sessão, use o nível da **última luta em que o personagem participou**.

## Regra Opcional: Multidão como NPC

O Promoter pode tratar a multidão como um NPC coletivo com atributos **P0 H0 R3** que reage às ações dos lutadores. Use para narrar momentos extremos em Frenesi:

- **Jogar objetos:** Ataque do público, P0+1 (Frenesi) = dano 1. Mais narrativo do que perigoso.
- **Invadir o ringue:** Interrompe a luta por 1 turno. Todos os lutadores testam R para manter o foco.
- **Criar caos:** O Promoter narra a situação — desabamento de arquibancada, curto na iluminação, etc.

Esta é uma ferramenta narrativa. Não abuse — reserve para os momentos em que o Frenesi precisa de consequência tangível.

---

**Veja também:** [Matchups entre Estilos](15_matchups.md) · [Finalizador & Kickout](17_finalizador_kickout.md) · [Promo Battle](18_promo_battle.md)
