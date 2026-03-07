# Capítulo 2 — Combate Espacial

> *"No vácuo, erros não fazem barulho. Não há explosão. Há silêncio, e depois alguém não responde no canal. Essa é a única diferença entre espaço e terra: na terra, você ouve quando falha."*
> — Comissária Neva Sol (comandante Perseverança, Frota Estelar da Comune)

> **📖 Sobre Neva:** Comissária Neva apareceu na vinheta de abertura como comandante da corveta Perseverança. Suas citações refletem a mentalidade de quem comanda no vácuo — onde cada decisão tem consequências silenciosas mas permanentes. Use Neva como comandante aliada, mentora de liderança estelar ou NPC que representa o fardo do comando no espaço.

---

## Planos de Engajamento

> 🚀 Mecânica nova de Fronteira Estelar.

O espaço é tridimensional. Grids 3D são impraticáveis na mesa. Fronteira Estelar resolve isso com **Planos de Engajamento**: uma superfície abstrata onde cada nave tem posição relativa às outras.

**Como funciona:**
- O combate acontece num grid **2D normal** (BTV padrão) representando o Plano de Engajamento.
- Cada unidade pode estar em **Posição Alta**, **Posição Neutra** ou **Posição Baixa** — representada por um marcador ao lado da miniatura (dado, ficha, ou nada para Neutra).
- Posição Alta/Baixa simula vantagem de manobra (estar "acima" ou "abaixo" do inimigo em termos táticos), não localização real no espaço.

**Efeitos de posição:**

| Posição do atacante vs. alvo | Efeito |
|---|---|
| Alta vs. Neutra ou Baixa | +1 em ataques de distância |
| Baixa vs. Alta | -1 em ataques de distância |
| Mesma posição | Normal |
| Alta vs. Baixa (2 níveis) | +1 ataque E alvo com Perda na defesa |

**Mudar de posição:** Custa a Ação de Movimento OU a Ação Padrão (escolha do jogador). Não é possível mudar posição E se mover no mesmo turno, a menos que o Piloto use sua Ação de Postagem (ver Postagens da Tripulação).

---

## Faixas de Alcance

O combate estelar usa quatro faixas de alcance em vez das cinco do BTV terrestre. Cada faixa tem implicações táticas distintas.

| Faixa | Distância Abstrata | Efeito |
|---|---|---|
| **Ponto Cego** | Adjacente / Colado | Abordagem possível. Armas de longo alcance não funcionam (muito perto). Armas de ponto: funcionam normalmente. Escaramuças no casco possíveis. |
| **Curto** | ≤ 6 quadrados | Alcance padrão de combate. Todas as armas funcionam. Torpedos têm Ganho (pouco tempo de reação). |
| **Longo** | 7–20 quadrados | Apenas armas pesadas e Canhões de Proa. Torpedos funcionam normalmente. Armas leves com Perda. |
| **Extremo** | 21+ quadrados | Apenas Naus de Guerra e Armadas podem acertar (sensores de longo alcance). Esquadrões com Perda absoluta; Operativos não alcançam. |

**Mudando de faixa:** Mover-se de uma faixa para outra custa a Ação de Movimento completa. De Extremo para Longo = 1 movimento. De Longo para Curto = 1 movimento. De Curto para Ponto Cego = 1 movimento. **Não é possível pular faixas** (de Extremo direto para Curto) sem habilidade especial.

---

## Iniciativa no Espaço

**Operativos:** Rolam normalmente (H + 1d).

**Esquadrões:** Rolam normalmente. Se em Frota de Esquadrão, a Frota rola uma vez para todos.

**Naus de Guerra:** Iniciativa fixa 10 (BTV Colossal). O **Piloto** pode gastar sua ação de Postagem para adicionar seu H à iniciativa da Nau no primeiro turno.

**Armadas:** Iniciativa fixa 5. São previsíveis. Suas ações são Telegrafadas (BTV [Cap. 4](cap04_professores_npcs.md)).

---

## Ações de Nave por Rodada

Cada nave (Esquadrão, Nau de Guerra ou Armada) tem as seguintes ações disponíveis:

### Ação de Movimento (1 por rodada)

| Ação | Efeito |
|---|---|
| **Avançar** | Move 1 faixa de alcance em direção ao alvo (ex: Longo → Curto). |
| **Recuar** | Move 1 faixa de alcance para longe do alvo (ex: Curto → Longo). |
| **Flanquear** | Reposiciona-se para que o alvo fique entre esta nave e um aliado. Aliados no outro lado ganham **Ganho** em ataques contra o mesmo alvo (Flanqueamento BTV). |
| **Manobra Evasiva** | Não muda de faixa, mas a nave recebe +1R contra todos os ataques até o início do próximo turno. Armas da nave sofrem -1 no mesmo período. |
| **Mudar Posição** | Sobe ou desce 1 nível no Plano de Engajamento (Alta ↔ Neutra ↔ Baixa). Não muda de faixa. |

### Ação Padrão (1 por rodada)

| Ação | Efeito |
|---|---|
| **Disparar** | Ataque normal com as armas da nave. Usa o atributo **Armamento** ([Cap. 3](cap03_as_casas.md)). |
| **Fogo Concentrado** | Todos os sistemas de armas miram o mesmo alvo: **Ganho** no ataque. Reduz Cobertura Pesada a Leve sobre o alvo neste turno. |
| **Fogo de Supressão** | Declara zona suprimida (1 faixa de alcance inteira). Qualquer inimigo que **entre ou saia** da zona recebe um ataque gratuito. Dura até o próximo turno da nave. |
| **Investida de Abordagem** | Avança direto ao Ponto Cego (ignora faixas intermediárias). Sofre **1 ataque de oportunidade** de cada nave inimiga no caminho. No fim, inicia Abordagem (ver abaixo). |
| **Disparar Torpedos** | Ataque especial com Torpedos [Anti-Nau] ou [Anti-Armada]. Gasta 1–2 Cargas ([Cap. 4](cap04_professores_npcs.md)). Ganho em faixa Curta. |
| **Formação de Frota** | Usa uma das 5 Formações de Frota (ver abaixo). Requer que a nave faça parte de uma Frota de Esquadrão. |

### Ação Rápida / Reação (até 2 por rodada)

| Ação | Efeito |
|---|---|
| **Contra-Medidas** | Reação. Quando alvo de Torpedos, testa H dif. 6 para desviar. Gasta 1 Carga de Contra-Medidas. |
| **Comms Abertas** | Rápida. O Oficial de Comunicações transmite informação tática a um aliado: o aliado ganha +1 no próximo teste neste turno. |
| **Reparo de Emergência** | Rápida. O Engenheiro repara 1 ponto de Integridade Estrutural ([Cap. 4](cap04_professores_npcs.md)). Pode ser usada 1×/rodada. |

---

## Postagens da Tripulação

> 🚀 Mecânica nova de Fronteira Estelar.

Naves de escala Esquadrão ou superior têm **Postagens** — posições da tripulação que concedem ações exclusivas. Cada tripulante pode se alocar em uma Postagem por combate (trocar de Postagem custa 1 turno inteiro).

Cada Postagem tem:
- **1 Ação Exclusiva** (utilizável toda rodada como parte das ações da nave)
- **1 Momento da Postagem** (1×/sessão — uma cena onde essa Postagem é indispensável)

---

### 🚀 Piloto

**Ação Exclusiva — Manobra de Piloto:** O Piloto pode usar sua ação para dar à nave uma Ação de Movimento **adicional** neste turno (total: 2 movimentos). Isso permite mudar de faixa E mudar de posição no mesmo turno, ou avançar/recuar 2 faixas.

**Momento da Postagem — Manobra Impossível:** Uma vez por sessão, quando a nave estaria destruída ou capturada por posição, o Piloto pode narrar uma manobra impossível que reposiciona a nave para qualquer faixa e posição no Plano de Engajamento. Sem teste. Acontece. O Mestre narra as consequências espetaculares.

---

### 🚀 Artilheiro

**Ação Exclusiva — Mira Calculada:** O Artilheiro pode usar sua ação para conceder **Ganho** ao próximo ataque de distância da nave neste turno. Cumulativo com Fogo Concentrado (resultando em Ganho + Ganho = +2 total no ataque).

**Momento da Postagem — Um Único Tiro:** Uma vez por sessão, o Artilheiro pode declarar um ataque que **automaticamente acerta** com dano máximo. O Mestre não rola defesa. Funciona contra qualquer escala (ignora restrições de escala para este único ataque). Depois de usar, as armas da nave superaquecem: sem ataques de distância por 1 rodada.

---

### 🚀 Engenheiro

**Ação Exclusiva — Reparo Tático:** O Engenheiro pode reparar 2 pontos de Integridade Estrutural por turno (em vez de 1 por Reparo de Emergência). OU pode restaurar 1 Carga de qualquer tipo (Munição, Torpedos, Contra-Medidas) por turno canibalizando outros sistemas. Escolhe um ou outro por turno.

**Momento da Postagem — Gambiarra Milagrosa:** Uma vez por sessão, quando a nave atingiria Integridade 0 (destruição), o Engenheiro pode estabilizá-la em Integridade 1 com uma gambiarra que *não deveria funcionar*. O Mestre narra o que foi sacrificado para que a nave sobrevivesse (sempre há custo narrativo: sistema perdido, seção selada, tripulante ferido).

---

### 🚀 Oficial de Comunicação

**Ação Exclusiva — Guerra Eletrônica:** O Oficial pode usar sua ação para tentar Hackeamento de Sistemas ([Cap. 1](cap01_criacao_personagem.md)) contra qualquer nave em alcance Longo ou menor. OU pode transmitir informação tática (+1 no próximo teste de qualquer aliado à distância de comunicação).

**Momento da Postagem — A Palavra Certa:** Uma vez por sessão, o Oficial de Comunicação pode **evitar uma batalha inteira** ou **provocar uma deserção** no lado inimigo através de comunicação. A situação deve ser narrativamente plausível (o inimigo já está hesitante, a causa é moralmente complexa, há apelo pessoal). O Mestre decide o que acontece — mas alguma coisa muda. Em tom FALGSC, essa é frequentemente a vitória mais valiosa.

---

## Formações de Frota

> 🚀 Versões estelares das 5 Formações de Tropa (BTV [Cap. 2](cap02_combate_espacial.md)).

Formações de Frota substituem a Ação Padrão da Frota de Esquadrão. Todas exigem que a Frota **não esteja Fragmentada**.

---

### ⚡ 1. Fogo em Linha

*Todas as naves alinham bordas de armas contra o mesmo alvo.*

- **Efeito:** **Ganho** no ataque. Reduz Cobertura Pesada a Leve no alvo. Funciona exatamente como Fogo Concentrado da BTV.
- **Uso:** O ataque padrão de frota organizada.
- **Vulnerabilidade:** A formação é previsível — inimigos flanqueando a linha ganham **Ganho** contra a frota.

---

### ⚡ 2. Bloqueio Orbital

*Naves se distribuem para cobrir todas as rotas de escape.*

- **Efeito:** Declara uma área (1 faixa de alcance inteira). Qualquer inimigo tentando **sair** dessa faixa sofre 1 ataque gratuito de cada nave da Frota. Inimigos dentro recebem Condição **Preso** (não podem Recuar sem sofrer os ataques).
- **Uso:** Controle de área. Ideal para cercos orbitais e bloqueio de retirada.
- **Vulnerabilidade:** A Frota não pode atacar ofensivamente enquanto mantém o Bloqueio. Se forçada a reagir a ameaça de outra direção, o Bloqueio cai.

---

### ⚡ 3. Coluna de Assalto

*Naves em fila, a líder absorve fogo enquanto as demais disparam por cima.*

- **Efeito:** A nave líder da coluna recebe **todo o fogo inimigo** direcionado à frota (funciona como Formar Barreira do BTV). As demais naves podem atacar normalmente. A líder não pode atacar.
- **Uso:** Avançar contra posição fortificada. A nave líder é tipicamente a mais blindada da Frota.
- **Vulnerabilidade:** Se a líder for destruída, a formação colapsa: todas as naves ficam Desorientadas por 1 rodada.

---

### ⚡ 4. Enxame

*Naves se dispersam caoticamente, cada uma manobra independentemente.*

- **Efeito:** Todas as naves da Frota ganham +1R (alvos difíceis de rastrear). Armas inimigas de área perdem eficácia (-2 dano de área contra a Frota). Mas a Frota **não pode usar outras Formações** enquanto em Enxame — perde coesão.
- **Uso:** Sobrevivência. Contra inimigos com AoE devastador (Armadas, Naus de Guerra).
- **Vulnerabilidade:** A Frota não pode fazer Fogo em Linha ou Bloqueio enquanto dispersa. Precisa de 1 turno extra de Reagrupar para reformar.

---

### ⚡ 5. Reagrupar Frota

*Naves se aproximam, compartilham suprimentos e coordenam.*

- **Efeito:** Cancela **Fragmentada** (se a Frota tiver entre 50–74% PV perdido) OU restaura 1 Carga de Munição para cada nave da Frota (redistribuição de suprimentos). Custa o turno inteiro.
- **Uso:** Recuperação mid-combat. Decisão difícil: parar de atirar para sobreviver mais tempo.
- **Vulnerabilidade:** A Frota não faz nada neste turno. Inimigos ganham 1 turno livre de pressão.

---

## Abordagem Multi-Fase

> 🚀 Mecânica nova de Fronteira Estelar.

Quando um Esquadrão (ou Frota de Esquadrão de marines) atinge Ponto Cego de uma Nau de Guerra ou Armada, pode iniciar **Abordagem**. O combate muda de escala estelar para escala Operativo *dentro* da nave inimiga.

### Pré-requisitos
- Estar em faixa Ponto Cego
- Ter meios de penetração (módulo de corte, hangar aberto, brecha no casco)
- Gastar 1 Ação Padrão para iniciar a Abordagem

### As Três Fases

#### Fase 1 — Convés Externo / Hangar
*Os invasores entram pela superfície ou hangar da nave.*

- **Ambiente:** Espaço apertado, cobertura pesada em ambos os lados, defesa automatizada.
- **Oposição:** Drones de defesa, armadilhas, portas trancadas.
- **Objetivo:** Atingir um ponto de acesso interno (escotilha, elevador, conduto de ventilação).
- **Mecânica:** 2–3 rodadas de combate Operativo. Se os invasores não atingirem o objetivo em 3 rodadas, a tripulação da nave sela o acesso: Abordagem falha, invasores são expulsos.

#### Fase 2 — Corredores Internos
*Combate dentro da nave. Gravidade artificial, iluminação de emergência, tripulação resistindo.*

- **Ambiente:** Corredores estreitos (1–2 Operativos lado a lado), boa cobertura, gás de contenção possível.
- **Oposição:** Tripulação armada, marines de defesa, sistemas de contra-invasão (selos de emergência, desligamento de gravidade artificial por seção).
- **Objetivo:** Atingir a ponte de comando OU um sistema crítico (motor, arsenal, suporte de vida).
- **Mecânica:** 3–5 rodadas. A tripulação defensora pode ativar **contra-medidas internas** uma vez por fase: escolha entre desligar gravidade (todos Prostrados), selar seção (invasores Presos por 1 rodada) ou descomprimir seção (1d dano + H dif. 7 ou Prostrado).

#### Fase 3 — Ponte de Comando / Sistema Crítico
*O objetivo final da Abordagem.*

- **Se tomarem a Ponte:** A nave é capturada. A tripulação restante se rende ou contra-ataca em escala Operativo. A nave muda de controle após 1 rodada de consolidação.
- **Se destruírem um sistema crítico:** O efeito depende do sistema:
  - Motor: nave imobilizada
  - Arsenal: armas desativadas
  - Suporte de Vida: tripulação sofre efeitos de vácuo em 5 rodadas (permite evacuação se o invasor tiver misericórdia)
  - Reator: nave explode em 3 rodadas (todos evacem ou morrem — invasores incluídos)

### Abordagem contra Armadas

Contra uma Armada, a Abordagem é uma **campanha inteira em miniatura**. As três fases acontecem, mas cada fase pode durar *vários combates* e envolver dezenas de Operativos.

O Mestre deve tratar a Abordagem de Armada como um **mini-arco narrativo** dentro da batalha maior. Enquanto a equipe de abordagem está dentro da Armada, o combate espacial externo continua — e cada turno que passa muda as condições internas (a Armada pode ser ferida por fora, abrindo ou fechando rotas internas).

---

## Combate entre Escalas Mistas

Batalhas no espaço frequentemente envolvem múltiplas escalas simultâneas. Guia de resolução:

### Cenário: Operativos + Esquadrões vs. Nau de Guerra

1. **Esquadrões** fazem combate estelar normal na faixa de alcance relevante.
2. **Operativos** não podem afetar a Nau à distância (exceções do [Cap. 1](cap01_criacao_personagem.md) aplicam: Torpedos, Hackeamento, Pontos Fracos).
3. Se um Esquadrão iniciar **Abordagem**, os Operativos dentro mudam para combate interno.
4. A Nau pode atirar em Esquadrões com Ganho e em Operativos apenas com dano de área (se estiverem no casco externo durante EVA).

### Cenário: Esquadrões + Naus vs. Armada

1. **Naus de Guerra** são a escala principal de engajamento. Atacam a Armada em suas Fases, reagem a Ataques Telegrafados.
2. **Esquadrões** não podem ferir a Armada diretamente — exceto via Torpedos de Fratura nos Pontos Fracos ou Abordagem de Pontos Defensáveis.
3. A Armada afeta tudo com ataques de área. Operativos individuais nem entram na equação exceto em abordagens.
4. **3+ Naus em Fogo em Linha** podem ferir a Armada normalmente (concentração de fogo).

### Cenário: Toda a escala (Operativos + Esquadrões + Naus + Armada)

Cenas épicas de final de campanha. Resolve em camadas:
1. **Camada Armada:** A Armada é o cenário — atacar seus Pontos Fracos e sobreviver às Fases.
2. **Camada Nau:** Naus engajam as defesas da Armada e entre si. Esquadrões apoiam.
3. **Camada Esquadrão:** Alas de caças e corvetas fazem missões específicas (escoltar, suprimir baterias, iniciar abordagem).
4. **Camada Operativo:** Equipes de abordagem dentro da Armada ou em EVA nos Pontos Fracos.

Cada camada roda na **mesma iniciativa** — corte entre uma e outra a cada turno para manter tensão. Use a Regra de Três Momentos (BTV [Cap. 7](cap07_mundo_ao_redor.md)) para estruturar a batalha.

---

## Resumo de Ações — Referência Rápida

| Tipo | Ação | Efeito-chave |
|---|---|---|
| Movimento | Avançar | Move 1 faixa em direção ao alvo |
| Movimento | Recuar | Move 1 faixa para longe |
| Movimento | Flanquear | Aliados ganham Ganho no alvo |
| Movimento | Manobra Evasiva | +1R, -1 ataque |
| Movimento | Mudar Posição | Alta ↔ Neutra ↔ Baixa |
| Padrão | Disparar | Ataque normal |
| Padrão | Fogo Concentrado | Ganho, reduz Pesada a Leve |
| Padrão | Fogo de Supressão | Zona suprimida (ataque gratuito) |
| Padrão | Investida de Abordagem | Vai direto a Ponto Cego, sofre ataques no caminho |
| Padrão | Disparar Torpedos | [Anti-Nau] ou [Anti-Armada], gasta Cargas |
| Padrão | Formação de Frota | Uma das 5 formações |
| Rápida | Contra-Medidas | Testa desvendar torpedos, gasta Carga |
| Rápida | Comms Abertas | +1 aliado |
| Rápida | Reparo de Emergência | +1 Integridade |
| Postagem | Manobra de Piloto | 2ª Ação de Movimento |
| Postagem | Mira Calculada | Ganho no próximo ataque |
| Postagem | Reparo Tático | 2 Integridade OU 1 Carga restaurada |
| Postagem | Guerra Eletrônica | Hack ou transmissão tática |

---

> *Kael montou o cálculo de trajetória em quatro segundos. A corveta estava em Longo; o cruzador Reichpact, em Curto; os caças, em Ponto Cego do cruzador. "Se fizermos Coluna de Assalto e os caças iniciarem abordagem enquanto concentramos fogo no defletor traseiro—"*
>
> *"Eu entendi," disse Neva. "Piloto, Coluna. Kael, fogo no defletor. Mira: mantenha o motor rodando sob qualquer circunstância."*
>
> *"E se o motor não aguentar?" perguntou Mira.*
>
> *"Faça-o mudar de ideia."*
