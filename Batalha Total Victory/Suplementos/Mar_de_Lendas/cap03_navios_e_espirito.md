# Capítulo 3 — Navios e Espírito da Nave

> *Um navio não é uma ferramenta. Um navio é uma promessa entre a madeira e quem a navega. Cuide da promessa e o navio te leva a qualquer lugar. Quebre a promessa e o mar cobra.*

---

## Atributos do Navio

Todo navio em Mar de Lendas tem **4 atributos** que substituem os atributos individuais para efeitos de combate naval.

| Atributo | Abrev. | O Que Representa |
|---|---|---|
| **Velocidade** | VEL | Manobrabilidade, agilidade, capacidade de fuga e perseguição |
| **Casco** | CAS | Resistência estrutural, blindagem, capacidade de absorver dano |
| **Canhões** | CAN | Poder de fogo a distância — salvas, morteiros, armas especiais |
| **Tripulação** | TRP | Qualidade e coesão da tripulação — abordagem, reparos, moral |

### PV do Navio

| Escala | Fórmula de PV |
|---|---|
| **Navio** | CAS × 10 |
| **Fortaleza do Mar** | CAS × 20 |
| **Rei do Mar** | Individual (definido na ficha) |

---

## Criando um Navio

### Passo 1 — Escolha a Escala

| Escala | Pontos de Construção (PC) | PV Base |
|---|---|---|
| Navio | 12 PC | CAS × 10 |
| Fortaleza do Mar | 16 PC | CAS × 20 |

**Nota:** Reis do Mar não são construídos — são encontrados (Bestiário, [Cap. 5](#cap05_vida_estudantil/cap05_vida_estudantil)).

### Passo 2 — Distribua Atributos

Cada atributo custa 1 PC por ponto. Mínimo 0, máximo 5.

**Exemplo — Navio de 12 PC:**
- VEL 3, CAS 3, CAN 3, TRP 3 (total: 12 PC). Equilibrado.
- VEL 4, CAS 2, CAN 4, TRP 2 (total: 12 PC). Caçador rápido e artilhado, mas frágil e com tripulação pequena.

### Passo 3 — Escolha Componentes

Os PC restantes (se houver, após atributos abaixo do limite) compram **componentes** — equipamentos e upgrades que definem o caráter do navio.

### Passo 4 — Defina Pontos Fracos (Fortalezas apenas)

Fortalezas do Mar devem ter 1–3 Pontos Fracos. Cada Ponto Fraco é uma estrutura vulnerável que pode ser atacada por escalas menores. Definir Pontos Fracos é obrigatório e não custa PC.

### Passo 5 — Escolha Tipo de Propulsão

| Propulsão | Custo | Efeito |
|---|---|---|
| **Vela** | 0 PC (padrão) | Depende do vento. VEL varia com posição relativa ao vento. Sem custo de combustível. |
| **Remo** | 0 PC (alternativa) | Ignora vento. VEL máximo 3. Requer Tripulação (TRP ≥ 2). |
| **Vapor** | 2 PC | Ignora vento. VEL total disponível sempre. Requer Combustível (Desgaste). Caldeira como componente obrigatório. |
| **Misto (Vela + Remo)** | 1 PC | Pode usar vento ou remo. VEL máx 3 a remo, VEL total com vento favorável. |
| **Misto (Vela + Vapor)** | 2 PC | Pode usar vento ou vapor. Flexibilidade máxima. |

### Passo 6 — Nomeie e Descreva

Todo navio tem nome. O nome importa — para a tripulação, para o Espírito da Nave, e para a história.

---

## Componentes de Navio

Componentes são equipamentos instalados que custam PC e definem capacidades especiais.

| Componente | PC | Efeito |
|---|---|---|
| **Aríete** | 2 | Abalroamento causa VEL×7 (em vez de VEL×5). Atacante sofre VEL×3 (em vez de VEL×5). |
| **Canhões Pesados [Anti-Fortaleza]** | 3 | Salva Lateral causa dano (CAN/2 × d) contra escala Fortaleza do Mar. |
| **Morteiros** | 2 | Tiro em arco. Alcance Longo ou Extremo (-2). Ignora cobertura. Acerta quadrado. |
| **Munição Incendiária** | 1 | Salva Lateral pode iniciar Incêndio no alvo (em vez de causar dano convencional). |
| **Casco Reforçado** | 2 | +10 PV. Não altera CAS — é blindagem adicional. |
| **Velas Reforçadas** | 1 | +1 VEL quando a favor do vento. Reduz penalidade contra o vento para 0 (em vez de -1). |
| **Ganchos de Abordagem** | 1 | Preparar Abordagem é automático (sem custar Ação Rápida). +1 TRP em combate de abordagem. |
| **Rede Anti-Abordagem** | 1 | Inimigos tentando abordagem testam dif. 6 (em vez de 5) para embarcar. |
| **Calado Raso** | 1 | O navio pode entrar em águas rasas sem risco de encalhe. Util em rios, recifes e praias. |
| **Porão Expandido** | 1 | Dobra a capacidade de carga. +2 Unidades de Suprimentos (Desgaste). |
| **Oficina de Bordo** | 2 | Carpinteiro repara +2 PV por ação (5 PV em vez de 3). Reparos fora de combate: 8 PV/hora. |
| **Enfermaria** | 1 | Tripulantes feridos recuperam 1 PV por cena de descanso. Reduz mortalidade em abordagem (50% dos tripulantes incapacitados sobrevivem em vez de 25%). |
| **Laboratório/Alquimia** | 2 | Permite criar munição especial, venenos e poções a bordo. 1 item por sessão. |
| **Vigia Elevado** | 1 | +2 em testes de detecção do Vigia. Detecta em Extremo (normalmente impossível sem esta melhoria). |
| **Torres Giratórias** | 3 | (Steampunk) Canhões que giram 360°. Pode disparar de qualquer arco (proa, popa, laterais) sem restrição. |
| **Caldeira** | 0 | (Obrigatório para vapor) Sistema de propulsão a vapor. Componente destrutível — se destruído, VEL = 0 até reparo. |
| **Blindagem de Ferro** | 3 | (Steampunk) Imune a Incêndio externo. +1 CAS efetivo contra projéteis convencionais (pedra/madeira). |
| **Torpedos** | 3 | (Steampunk) Arma subaquática. Dano = CAN × d + 2d. Ignora Blindagem de Ferro. 3 Cargas. Não pode ser usado em Bordo a Bordo. |
| **Habilidade Exclusiva** | 3–5 | Capacidade única definida pelo Mestre. Veja exemplos nos navios pré-construídos. |

---

## Configurações Prontas

Combinações sugeridas de atributos e componentes para início rápido.

### Combate Direto
Prioriza CAN e CAS. Componentes: Canhões Pesados, Casco Reforçado.
```
VEL 2, CAS 4, CAN 4, TRP 2. Componentes: Canhões Pesados [Anti-Fort.] (3).
Total: 12 + 3 = 15 PC → Fortaleza ou Navio com déficit de PC.
```

### Corsário Rápido
Prioriza VEL e TRP (abordagem). Componentes: Aríete, Ganchos.
```
VEL 4, CAS 2, CAN 2, TRP 4. Componentes: Ganchos (1).
Total: 12 + 1 = 13 PC → ✅ Navio (12PC + 1 componente de ganchos)
```

### Transporte/Suporte
Prioriza CAS e TRP. Componentes: Porão Expandido, Enfermaria, Calado Raso.
```
VEL 2, CAS 3, CAN 1, TRP 3. Componentes: Porão (1), Enfermaria (1), Calado Raso (1).
Total: 9 + 3 = 12 PC → ✅ Navio
```

---

## Espírito da Nave

> ⚓ *"O navio sabe. Não como uma pessoa sabe — como o mar sabe. Sem palavras. Sem pensamento. Apenas: isso está certo, e isso não está."*

O **Espírito da Nave** é um valor de 0 a 5 que representa a conexão entre o navio e sua tripulação. Não é magia (a menos que o tom da campanha diga que é). É o acúmulo de viagens, reparos, batalhas e momentos vividos juntos.

### Nível Inicial

| Condição | Espírito Inicial |
|---|---|
| Navio novo, tripulação nova | 0 |
| Navio novo, tripulação experiente | 1 |
| Navio usado, tripulação nova | 1 |
| Navio com história, tripulação que o resgatou/restaurou | 2 |
| Navio lendário com tripulação devota | 3 (máximo inicial) |

### Efeitos por Nível

| Espírito | Nome | Efeito Mecânico |
|---|---|---|
| **0** | Carcaça | Nenhum. O navio é madeira (ou ferro). Nada mais. |
| **1** | Embarcação | A tripulação cuida do navio por hábito. O Carpinteiro ganha +1 em reparos. |
| **2** | Companheiro | O navio responde melhor. +1 VEL uma vez por sessão (o Navegador declara — "o navio cooperou"). |
| **3** | Guardião | O navio avisa sobre perigos. Uma vez por sessão, o Mestre pode alertar a tripulação sobre um perigo iminente que ninguém detectou (recife oculto, emboscada, tempestade se formando). O alerta é narrativo — um rangido, uma inclinação, uma mudança no som do casco. |
| **4** | Protetor | Uma vez por sessão, quando o navio seria destruído (PV = 0), o Espírito "recusa" a destruição. O navio fica com 1 PV. Isso acontece **uma única vez** por sessão — na próxima, o navio afunda normalmente. O Mestre narra: o mastro caiu na posição exata que bloqueou o rombo. A quilha aguentou o impossível. |
| **5** | **Vivo** | O navio é um **NPC**. Tem motivações próprias (definidas pelo Mestre com input dos jogadores). Pode se recusar a zarpar para locais que o ameacem (o leme trava, as velas não abrem, a âncora não sobe). Pode ajudar ativamente: uma vez por sessão, o navio realiza uma ação que nenhuma regra cobre — uma onda na hora certa, uma corrente que não deveria existir, um rangido que soa como "corram." O Mestre é a voz do navio. |

> 📖 *O Maré Vermelha tinha Espírito 5. Quando Sereia Negra disse "vamos ao Estreito de Ossos," o leme travou. Não mecanicamente — espiritualmente. O navio sabia o que tinha no Estreito. Sereia Negra pôs a mão no leme e disse, baixinho: "Eu sei. Eu sei o risco. Mas é preciso." O leme destravou. Lentamente. Como se estivesse pensando.*

---

### Ganhando Espírito

O Espírito sobe em incrementos de 1 quando:

| Evento | Espírito + |
|---|---|
| A tripulação repara dano significativo do navio **com carinho** (não apenas mecânica — narrativamente, cuidando) | +1 |
| O navio sobrevive a uma batalha que deveria tê-lo destruído | +1 |
| A tripulação celebra uma vitória **a bordo** (festa, brinde, momento compartilhado no convés) | +1 |
| O navio recebe um **nome** significativo (ou é renomeado após evento transformador) | +1 |
| Um PJ faz um sacrifício pessoal pelo navio (desistir de tesouro para comprar reparos, arriscar a vida para salvar o casco) | +1 |

**Limite:** Espírito máximo 5. Subir de 4 para 5 exige **dois** eventos simultâneos (não apenas um).

---

### Perdendo Espírito

| Evento | Espírito - |
|---|---|
| O navio é abandonado por mais de 1 sessão | -1 |
| O navio é maltratado (usado como isca, deliberadamente danificado, sobrecarregado) | -1 |
| A tripulação inteira é substituída (ninguém que conhecia o navio permanece) | -2 |
| O navio é colocado em risco desnecessário **por indiferença** (não por necessidade tática — por descuido) | -1 |
| O capitão morre ou abandona o navio sem despedida | -1 |

**Morte do Navio:** Se o Espírito cai para -1 ou menos, o navio "morre" espiritualmente. Funciona mecanicamente, mas nunca mais terá Espírito. É só madeira.

---

## Navios Pré-Construídos

### 1. Caravela "Andorinha" — Navio de Exploração

**Escala:** Navio. **Propulsão:** Vela.

| VEL | CAS | CAN | TRP | PV |
|---|---|---|---|---|
| 4 | 2 | 1 | 3 | 20 |

**Componentes:** Calado Raso (1 PC), Vigia Elevado (1 PC).
**Total:** 10 + 2 = 12 PC ✅

**Perfil:** Rápida e leve. Feita para explorar, não para lutar. Entra em rios e águas rasas que nenhum galeão ousaria. Tripulação pequena mas leal.

**Espírito Inicial:** 2 (navio com história).

> 📖 *A Andorinha foi construída para chegar primeiro. Não é a mais forte, nem a mais armada. É a que aparece onde ninguém esperava.*

---

### 2. Galeão "Maré Vermelha" — O Navio de Sereia Negra

**Escala:** Navio. **Propulsão:** Vela.

| VEL | CAS | CAN | TRP | PV |
|---|---|---|---|---|
| 3 | 3 | 3 | 3 | 30 |

**Componentes:** Ganchos de Abordagem (1 PC), Casco Reforçado (2 PC).
**Total:** 12 + 3 → 15 PC. **Nota:** O Maré Vermelha excede 12 PC porque foi modificado ao longo de anos — cada peça é um troféu de alguma batalha. Se o Mestre quiser, trate como Navio de 12 PC + 3 PC de "história acumulada."

**Espírito:** 5 (Vivo).

**Habilidade — Maré a Favor:** Uma vez por sessão, quando o Maré Vermelha estaria a sotavento, a corrente muda inexplicavelmente — o navio é tratado como se estivesse a barlavento por 1 rodada. Ninguém sabe explicar. O navio sabe.

> 📖 *O Maré Vermelha tem cicatrizes em cada tábua. Marcas de canhão no bombordo. Uma queimadura que nunca foi lixada na proa. Dois rombos consertados com madeira de cor diferente. Sereia Negra chama as marcas de "história." O navio leva cada uma com orgulho.*

---

### 3. Galé "Dente de Bronze" — Navio Corsário de Remo

**Escala:** Navio. **Propulsão:** Remo.

| VEL | CAS | CAN | TRP | PV |
|---|---|---|---|---|
| 3 | 2 | 2 | 4 | 20 |

**Componentes:** Aríete (2 PC).
**Total:** 11 + 2 = 13 PC → Tratada como 12 PC + 1 PC de aríete histórico.

**Espírito Inicial:** 1.

**Perfil:** Galé de guerra. Ignora calmarias (remo). Tripulação enorme e bem treinada para abordagem. Aríete de bronze na proa — um presente que nenhum inimigo quer receber.

---

### 4. Nau-Catedral "Misericórdia" — Fortaleza do Mar

**Escala:** Fortaleza do Mar. **Propulsão:** Vela.

| VEL | CAS | CAN | TRP | PV |
|---|---|---|---|---|
| 1 | 5 | 4 | 3 | 100 |

**Componentes:** Canhões Pesados [Anti-Fort.] (3 PC), Enfermaria (1 PC), Oficina de Bordo (2 PC).
**Total:** 13 + 6 = 19 PC ✅ (Fortaleza: 16 PC + 3 componentes)

**Pontos Fracos:**
1. **Torre Sineira** — símbolo religioso no topo. Destruí-la causa -2 Moral em toda a tripulação.
2. **Paiol Central** — explosão causa 50 PV de dano interno.
3. **Leme de Ferro** — destruir anula VEL (navio deriva).

**Espírito:** 4 (Protetor).

> 📖 *A Misericórdia é um templo que flutua. A tripulação reza antes de cada batalha. O capelão benze os canhões. Os canhões não se importam — mas a tripulação sim, e isso importa mecanicamente: Moral 5.*

---

### 5. Dreadnought "Punho de Aço" — Fortaleza Steampunk

**Escala:** Fortaleza do Mar. **Propulsão:** Vapor.

| VEL | CAS | CAN | TRP | PV |
|---|---|---|---|---|
| 2 | 5 | 4 | 2 | 100 |

**Componentes:** Blindagem de Ferro (3 PC), Torres Giratórias (3 PC), Torpedos (3 PC), Caldeira (0 — obrigatório para vapor).
**Total:** 13 + 9 = 22 PC → Fortaleza de 16 PC + propulsão Vapor 2 PC + componentes = 22 PC. **Nota:** o Punho de Aço representa o ápice da tecnologia steampunk — é deliberadamente mais caro que orçamentos normais.

**Pontos Fracos:**
1. **Caldeira Principal** — se destruída, VEL = 0 e explosão de vapor causa 30 PV de dano interno.
2. **Depósito de Torpedos** — explosão causa 40 PV de dano + todos os Torpedos restantes são perdidos.
3. **Torre de Comando** — destruir remove Torres Giratórias (canhões ficam fixos).

**Espírito:** 1 (máquina — pouco vínculo emocional).

> 📖 *O Punho de Aço não tem nome pintado no casco — tem um número de série. A tripulação deu o nome por conta própria. O Almirantado desaprovava. O Almirantado não ficava a bordo quando os torpedos passavam.*

---

### Tabela Resumo — Navios Pré-Construídos

| Nome | Escala | VEL | CAS | CAN | TRP | PV | Propulsão | Destaque |
|---|---|---|---|---|---|---|---|---|
| Andorinha | Navio | 4 | 2 | 1 | 3 | 20 | Vela | Exploração, águas rasas |
| Maré Vermelha | Navio | 3 | 3 | 3 | 3 | 30 | Vela | Equilibrado, Espírito 5 |
| Dente de Bronze | Navio | 3 | 2 | 2 | 4 | 20 | Remo | Abordagem, aríete |
| Misericórdia | Fortaleza | 1 | 5 | 4 | 3 | 100 | Vela | Tanque religioso |
| Punho de Aço | Fortaleza | 2 | 5 | 4 | 2 | 100 | Vapor | Steampunk, torpedos |

---

## Tabela de Point-Buy Consolidada

| Escala | PC Base | PC para Atributos | PC para Propulsão | PC para Componentes |
|---|---|---|---|---|
| Navio | 12 | 1 PC/ponto | Vela/Remo: 0 / Vapor: 2 / Misto: 1-2 | Restante após atributos e propulsão |
| Fortaleza do Mar | 16 | 1 PC/ponto | Vela/Remo: 0 / Vapor: 2 / Misto: 1-2 | Restante após atributos e propulsão |

**Nota:** Navios pré-construídos podem exceder o orçamento — isso representa história, modificações acumuladas e caráter. Para naves criadas pelos jogadores, respeite o orçamento base.

---

> *O navio vai a onde o capitão manda. Mas só vai de boa vontade a onde o espírito concorda.*
