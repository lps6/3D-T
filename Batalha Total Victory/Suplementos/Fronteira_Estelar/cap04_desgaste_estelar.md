# Capítulo 4 — Desgaste Estelar

> *No espaço, ninguém morre de fome de uma vez. Morre de poucos. Pouco oxigênio. Pouca energia. Pouca munição. Pouca esperança. A logística mata mais do que os canhões — é só que não é tão fotogênica.*

---

## O que é Desgaste?

**Desgaste** é o sistema que rastreia recursos consumíveis em campanhas espaciais. Diferente do BTV core — onde comida, munição e reparo são abstrações narrativas — Fronteira Estelar trata escassez como mecânica. Cada recurso gasto é uma decisão.

Este capítulo é **standalone** — todas as regras necessárias estão aqui. Não é necessário referência cruzada com outros suplementos.

> **🔍 Quando usar Desgaste:** O Mestre ativa Desgaste quando o tom da campanha exige peso logístico. FALGSC e Grimdark usam Desgaste por padrão. Space Opera e Near Future podem usá-lo seletivamente ou ignorá-lo completamente. A guerra é mais divertida quando os recursos importam — mas nem toda sessão precisa contar munição.

---

## Recursos Rastreáveis

### 1. Cargas de Munição

Armas cinéticas e torpedos exigem munição física. As Cargas de Munição rastreiam isso de forma abstrata.

**Cargas padrão por escala:**

| Escala | Cargas Iniciais |
|---|---|
| Operativo (soldado, marine) | 3 Cargas |
| Esquadrão (ala de caças, corveta) | 4 Cargas |
| Nau de Guerra (fragata, cruzador) | 6 Cargas |
| Armada (dreadnought) | 10 Cargas |

**Quando gastar Cargas:**

| Situação | Cargas |
|---|---|
| Ataque cinético normal (rodada) | 0 (padrão, não gasta) |
| Fogo Concentrado ou Fogo de Supressão | 1 |
| Torpedo [Anti-Nau] disparado | 1 |
| Torpedo de Fratura [Anti-Armada] disparado | 2 |
| Ação Heroica ofensiva | 1 |
| Habilidade marcada [MUNIÇÃO] | Conforme especificado |
| Contra-Medidas ativadas | 1 |

**Armas de energia:** Não gastam Cargas — mas **superaquecem**. Após 3 rodadas consecutivas de disparo de energia, a arma precisa de 1 rodada de resfriamento (sem disparar). O Engenheiro pode cancelar o resfriamento com teste SIS dif. 6 (forçando o sistema), mas cada cancelamento impõe -1 ARM até o fim do combate.

**Em 0 Cargas:** Armas cinéticas e torpedos ficam inutilizáveis. Armas de energia continuam funcionando (com ciclo de superaquecimento). Contra-medidas não podem ser ativadas.

---

### 2. Integridade Estrutural

Estado físico da nave, rastreado separadamente dos PV. Enquanto PV representam dano geral, Integridade representa o quanto a nave *funciona*.

| Integridade | Estado | Efeito Mecânico |
|---|---|---|
| **5** | Intacta | Sem penalidades. |
| **4** | Danificada | -1 ARM em todos os ataques. |
| **3** | Comprometida | PRO reduzido à metade (arredondado para baixo). |
| **2** | Crítica | 1 componente fica indisponível (escolha do Mestre — tipicamente o mais útil). |
| **1** | Estrutura em Colapso | +1 em todo dano recebido. Descompressão parcial: Operativos em seções danificadas testam H dif. 6 por rodada. |
| **0** | Destruída | Nave inoperante. Não pode ser reparada em campo. Tripulação evacua (se houver como) ou perece. |

**Quando Integridade cai:**
- Quando a nave perde **25% dos PV totais** → perde 1 Integridade.
- Quando atingida por arma [Anti-Nau] ou [Anti-Armada] → perde 1 Integridade (além do dano normal).
- Quando um Ponto Fraco é destruído → perde 1 Integridade.
- Condições especiais (campo de asteroides, colisão, abordagem destrutiva).

**Integridade NÃO se recupera automaticamente entre combates.** Uma nave que sai de uma batalha com Integridade 3 começa a próxima com Integridade 3 — a menos que tenha acesso a reparo (ver Reparos abaixo).

---

### 3. Combustível FTL

Cada salto interestelar gasta 1 **Carga de Combustível FTL**. Sem combustível, a nave está presa no sistema atual.

**Cargas padrão:**

| Escala | Cargas FTL |
|---|---|
| Esquadrão (com Motor FTL) | 3 |
| Nau de Guerra (com Motor FTL) | 5 |
| Armada | 8 |
| Esquadrão sem Motor FTL | — (não pode fazer saltos) |

**Gasto de Combustível:**

| Situação | Cargas FTL |
|---|---|
| Salto curto (sistema adjacente) | 1 |
| Salto longo (2–3 sistemas) | 2 |
| Salto de emergência (durante combate) | 2 + teste PRO dif. 7 (falha = salto aleatório) |
| Salto com carga extra (transportando outra nave) | +1 |

**Em 0 Cargas FTL:** A nave está encalhada. Só pode operar dentro do sistema atual. Ressuprimento requer: porto aliado, resgate por nave amiga, ou saque de combustível de destroço/nave inimiga (ação narrativa, Mestre define disponibilidade).

> **🔍 Nota de tom:** Em Space Opera, combustível raramente é problema — postos de reabastecimento são comuns. Em Grimdark, cada gota vale uma vida. Em FALGSC, a Comune compartilha combustível entre naves (Consenso pode afetar quem recebe quanto). Ajuste a disponibilidade de Cargas FTL ao tom desejado.

---

### 4. Suprimentos da Tripulação

Comida, água, ar, medicamentos. O básico para manter gente viva no vácuo.

**Suprimentos são medidos em Unidades.** 1 Unidade = suprimentos para a tripulação inteira por 1 sessão de jogo (abstração por simplicidade).

**Cargas padrão:**

| Escala | Unidades de Suprimento |
|---|---|
| Esquadrão | 3 Unidades |
| Nau de Guerra | 5 Unidades |
| Armada | 10 Unidades |

**Com Sistema de Suporte de Vida Avançado:** Dobra as Unidades iniciais.

**Gasto de Suprimentos:**

| Situação | Suprimentos |
|---|---|
| Por sessão de jogo (viagem ou combate) | 1 Unidade |
| Suporte de vida danificado (Integridade ≤ 2) | 2 Unidades por sessão (vazamento) |
| Cada Operativo resgatado/adicionado à tripulação | +0,5 Unidade por sessão (acumula; 2 resgates = +1 gasto/sessão) |
| Racionamento declarado | 0,5 Unidade por sessão (metade), mas tripulação sofre -1 em todos os testes (fome/desidratação) |

**Em 0 Suprimentos:**
- **Rodadas 1–3:** Tripulação -1 em todos os testes. Moral Pessoal (BTV [Cap. 5](../../Livro/cap05_o_custo_humano.md)) cai 1 nível automaticamente.
- **Rodadas 4–6:** Tripulação -2 em todos os testes. Moral Pessoal cai para 1 (Exaurido).
- **Rodada 7+:** Tripulação incapacitada. Nave à deriva. Sem intervenção externa, a tripulação perece.

---

## Reparos

### Reparo em Campo (durante combate)

| Quem | Efeito | Custo |
|---|---|---|
| Engenheiro (Postagem — Reparo Tático) | +2 Integridade/turno **OU** +1 Carga restaurada | Ação Padrão |
| Reparo de Emergência (qualquer tripulante) | +1 Integridade | Ação Rápida, 1×/rodada |
| Módulo de Reparo (se instalado) | Engenheiro repara 3/turno em vez de 2 | Já pago na construção |

**Limitação:** Reparos em campo não podem elevar Integridade acima do nível que a nave tinha no **início do combate**. Se entrou com Integridade 3, não pode subir acima de 3 em campo.

### Reparo em Porto (entre sessões)

| Tipo de Porto | Reparo | Custo Narrativo |
|---|---|---|
| Porto aliado completo | Integridade volta a 5. PV restaurados. Munição recarregada. | 1 cena de downtime (mínimo). Custo financeiro se aplicável ao tom. |
| Porto aliado parcial | Integridade +2 (máx 5). PV restaurados a 75%. Munição parcial. | 1 cena de downtime. Peças limitadas. |
| Reparo improvisado (destroço/campo) | Integridade +1. PV sem mudança. 1 Carga de Munição. | Requer Engenheiro + teste SIS dif. 7. Peças de outro lugar. |
| Sem porto / sem peças | Sem reparo. | A nave entra na próxima missão como saiu da anterior. |

**Em tom Grimdark:** Portos completos são raros. Reparo improvisado é o padrão.
**Em tom Space Opera:** Portos são comuns. A nave sempre pode ser consertada — mas leva tempo.
**Em tom FALGSC:** A Comune compartilha portos. Naves aliadas têm acesso a reparo completo. Naves capturadas do Reichpact podem ser reparadas, mas a ética de usar equipamento fascista é uma questão narrativa.

---

## Deterioração entre Missões

A guerra desgasta. Entre cada missão (entre cada sessão de jogo em que houve combate), aplique:

| Condição da Nave na Sessão Anterior | Deterioração |
|---|---|
| Não entrou em combate | Sem deterioração. |
| Combateu, saiu com Integridade 4–5 | -0 Integridade (dano superficial, tripulação repara sozinha). |
| Combateu, saiu com Integridade 2–3 | -1 Integridade adicional (estresse estrutural). |
| Combateu, saiu com Integridade 1 | -1 Integridade → chega a 0 se não reparada. Nave em risco terminal. |

**Suprimentos também são consumidos entre sessões.** Se a nave viajou entre sistemas: -1 Unidade de Suprimentos (em adição ao gasto normal da sessão). Se ficou no mesmo sistema: -0 (base não viajada).

---

## Tabela Resumo — Recursos Rastreáveis

| Recurso | Operativo | Esquadrão | Nau de Guerra | Armada |
|---|---|---|---|---|
| Cargas de Munição | 3 | 4 | 6 | 10 |
| Integridade Estrutural | — | 5 | 5 | 5 |
| Combustível FTL | — | 3 | 5 | 8 |
| Suprimentos | — | 3 | 5 | 10 |

---

## Desgaste como Ferramenta Narrativa

Desgaste não é punição. É **tensão**. A munição que acaba no meio de uma batalha transforma um combate tático em uma decisão moral: gastamos o último torpedo no cruzador inimigo ou guardamos para a fuga?

O Mestre deve usar Desgaste conscientemente:

**Quando aumentar Desgaste:**
- Campanha Grimdark (recursos cronicamente insuficientes)
- Missões atrás de linhas inimigas (sem ressuprimento possível)
- Bloqueio orbital (suprimentos cortados)
- Final de campanha (tudo no limite)

**Quando relaxar Desgaste:**
- Space Opera (aventura, não logística)
- Sessão focada em RP/intriga (combate secundário)
- Após sequência particularmente brutal (dar fôlego narrativo)

**Quando ignorar Desgaste:**
- Sessão one-shot
- Tom de campanha leve
- Mestre e jogadores decidirem em conjunto que não é divertido na mesa deles

---

> *Mira Yun sabia contar. Três Cargas de Munição. Integridade 3. Combustível FTL para um salto. Suprimentos para duas sessões. A matemática era simples. A decisão, não.*
>
> *"Se gastarmos tudo aqui," ela disse, "não temos como voltar."*
>
> *"Se não gastarmos tudo aqui," respondeu Neva, "não tem para onde voltar."*
>
> *Yun fez o que fazia sempre. Fez a conta. Achou a resposta errada. Fez funcionar.*
