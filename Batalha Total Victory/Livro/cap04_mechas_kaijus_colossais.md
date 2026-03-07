# Capítulo 4 — Mechas, Kaijus & Colossais

> *"Catapulta não erra. Catapulta funciona. Se você errou o alvo, é porque calibrou errado. Se calibrou errado, é porque não calculou vento, peso, arrasto. Se não calculou, pessoas morreram por preguiça."*
> — Irâ, Engenheira de Cerco (sobrevivente de Tor Ellas, inventora do Sistema Irâ de Balística Compensada)

> **📖 Sobre Irâ:** Irâ apareceu na vinheta de abertura como a engenheira que vê batalhas como geometria. Suas citações ao longo do livro refletem a mentalidade de quem resolve problemas com precisão matemática — mesmo quando o problema é emocional. Use Irâ como NPC de suporte técnico ou mentora de engenharia em campanhas com veículos/mechas.

---

Este capítulo detalha os dois tipos mais específicos de Colossal e Leviatã em Batalha Total Victory: **mechas pilotados por personagens** e **kaijus como forças da natureza**. Ambos usam as regras de escala do [Cap. 3](cap03_as_casas.md) como fundação — este capítulo adiciona as camadas de personalização, pilotagem e design de encontro que os tornam memoráveis.

---

## Mechas

Um mecha é um **Colossal controlado por um personagem** (o piloto) em vez de ser um NPC. Isso muda a dinâmica: o mecha tem suas próprias estatísticas, mas o desempenho delas é modulado pelo estado do piloto.

---

### Criação de Mecha: Pontos de Construção

Todo mecha começa com **10 Pontos de Construção (PC)** para distribuir entre componentes. Adicionalmente, o mecha já tem Escala Colossal gratuitamente (o custo de escala do [Cap. 3](cap03_as_casas.md) é para NPCs — o mecha do personagem é narrativamente gratuito).

**Componentes disponíveis:**

| Componente | Custo (PC) | Efeito |
|---|---|---|
| **Atributo P** (cada +1) | 1 | Aumenta dano e penetração em combate corpo a corpo |
| **Atributo H** (cada +1) | 1 | Aumenta precisão e iniciativa |
| **Atributo R** (cada +1) | 1 | Aumenta PV e resistência a dano |
| **Braços Melee** | 1 | Ataques corpo-a-corpo com alcance Perto-Médio |
| **Canhão de Longo Alcance** | 2 | Ataques à distância Longe-Extremo; -1P em corpo-a-corpo |
| **Escudo Reativo** | 2 | +2R contra o próximo ataque recebido por cena; deve ser declarado antes do ataque |
| **Propulsores** | 1 | Movimento aumentado em 50%; pode voar por rodadas curtas (1–2 rodadas antes de recarregar) |
| **Sistema de Suporte** | 2 | Pode usar a Ação Padrão para conceder Ganho a um aliado adjacente |
| **Blindagem Pesada** | 2 | +1R permanente; movimento reduzido em 25% |
| **Módulo de Jamming** | 2 | Uma vez por cena, cancela uma habilidade eletrônica ou arcana inimiga |
| **Habilidade Exclusiva** | 3 | Poder único projetado com o Mestre; segue as diretrizes do [Cap. 6](cap06_mecanicas.md) |

> **🔍 Mecha Básico de Referência**
>
> Um mecha de início de campanha com 10 PC: P2 (2PC) + H2 (2PC) + R3 (3PC) + Braços Melee (1PC) + Propulsores (1PC) + 1PC livre para Habilidade Exclusiva. PV = R3 × 5 × escala Colossal = 30 PV.

---

### Configurações de Batalha

Antes de cada missão (não durante), o piloto pode redistribuir até **3 PC** para mudar a configuração do mecha entre três perfis:

| Configuração | Foco | Restrição |
|---|---|---|
| **Assalto Móvel** | Movimento e ataque corpo-a-corpo | -1 em testes de resistência |
| **Artilharia** | Ataques à distância e dano em área | Sem movimento no turno em que atira à distância |
| **Suporte** | Proteção de aliados e utilidade | -1P em ataques diretos |

O piloto começa a sessão em uma configuração e pode mudar apenas entre missões ou em momentos de manutenção narrativa. Mudar durante combate ativo é impossível sem habilidade específica.

---

### Sincronização Piloto-Mecha

O estado mental e emocional do piloto afeta diretamente o desempenho do mecha. Este sistema é opcional mas recomendado para campanhas focadas em mechas — ele é o que diferencia um mecha de um tanque.

**Nível de Sincronização:** começa em 3 por padrão (escala 1–5).

| Nível | Estado do Piloto | Efeito no Mecha |
|---|---|---|
| 5 — Fluir | Calmo, focado, propósito claro | Todos os testes com Ganho; Habilidade Exclusiva custa 0 PM |
| 4 — Estável | Normal, sem pressão extrema | Sem modificador |
| 3 — Tenso | Estresse moderado, dúvida | Sem modificador (linha de base) |
| 2 — Fraturado | Trauma recente, conflito não-resolvido | **Perda** em testes de H; movimento reduzido |
| 1 — Colapso | Desespero, terror extremo, dissociação | **Perda** em todos os testes; acesso apenas a ataques básicos |

**Modificadores de Sincronização comuns:**

| Evento | Mudança |
|---|---|
| Aliado morto no campo de batalha | -1 (automático) |
| Missão cumprida com sucesso total | +1 (automático) |
| Momento de motivação (conexão com NPC caro ao piloto) | +1 (automático) |
| Dano massivo recebido em uma rodada (>50% PV) | -1 (automático) |
| Usar Ressonância Crítica (ver abaixo) | -2 (automático) |
| Descanso e suporte emocional entre sessões | +1 (automático) |

> **🎲 Sincronização Não É Testada**
>
> Mudanças de Sincronização são **declaradas pelo Mestre** em resposta a eventos narrativos — não há teste de resistência. O piloto não "resiste" a trauma ou motivação. A Sincronização *é* o estado emocional, não uma consequência que pode ser evitada.
>
> **Exceção:** Habilidades específicas (como "Foco de Batalha" ou "Piloto Veterano") podem permitir gastar Pontos de Heroísmo para ajustar Sincronização manualmente. Isso é exceção rara e explícita — se o texto de uma vantagem não menciona, não existe.

---

### Ressonância Crítica

> **🔍 Mecânica Avançada — Os Limites do Sistema**

Quando o piloto atinge extremos emocionais — trauma agudo, fúria dissociativa, desespero absoluto — o mecha pode entrar em **Ressonância Crítica**. Este é o estado berserk: perigoso, poderoso, imprevisível.

**Gatilhos (o Mestre declara quando aplicável):**
- Sincronização cai para 1 após um evento traumático específico.
- O piloto vê um aliado próximo morrer no campo.
- O piloto é confrontado com o objeto central de seu trauma de campanha.

**Efeitos durante Ressonância Crítica (dura 1d6 rodadas):**
- O mecha causa dano como **Escala Leviatã** por uma rodada (a rodada em que entrou em Ressonância). **Dano calculado: role 3d6 + P do piloto × 2.** Esse ataque atinge um alvo primário + área de 3 quadrados adjacentes (dano pela metade em alvos secundários). É o único momento em que um Colossal pode atingir múltiplos alvos com um único ataque sem habilidade específica.
- O piloto **perde o controle voluntário** — o Mestre descreve as ações do mecha, não o jogador. O jogador pode tentar retomar controle com teste de H dif. 10 como Ação Padrão.
- Ao final da Ressonância, o piloto sofre **backlash físico**: perde 1d6 PV e ganha 1 ponto de Trauma ([Cap. 5](cap05_vida_estudantil.md)).

> **Em Jogo:** O mecha de Takeshi entra em Ressonância após ver Yuki cair. Takeshi tem P3. O mecha rola 3d6+6 de dano (resultado: 15 total) contra o kaiju que derrubou Yuki + dano 7 (metade) em inimigos adjacentes. Takeshi não controla onde o golpe vai — o Mestre decide que o mecha destrói também uma estrutura aliada ao lado. Quando a Ressonância termina, Takeshi perde 4 PV e ganha 1 Trauma. A vitória tem custo.

**O que Ressonância Crítica não é:**
Não é um poder que o piloto "usa". É uma falha de sistema — o mecha faz o que o trauma do piloto quer que ele faça, não o que o piloto quer. Mestres devem usar com peso narrativo, não como bônus gratuito.

> **📖 Ressonância e o Custo Humano**
>
> Ressonância Crítica é a conclusão lógica do sistema de Custo Humano ([Cap. 5](cap05_vida_estudantil.md)) aplicado ao combate de mecha. Não é ornamento de mecânica — é a pergunta do livro tornada mecânica: *o que você está disposto a perder para ganhar esta batalha?* Um piloto que entra em Ressonância e vence não saiu ileso. Uma vitória que custa dessa forma é diferente de um sucesso de dado.

---

## Kaijus

Um kaiju é um **Leviatã de origem biológica ou sobrenatural** — diferente de uma fortaleza ou capital estelar, ele não pode ser simplesmente bombardeado de longe. Ele avança, ele responde, ele aprender (às vezes). Cada kaiju tem personalidade mecânica própria.

---

### Construindo um Kaiju

Use o Point-Buy do [Cap. 3](cap03_as_casas.md) como base, com estas diretrizes adicionais:

**Pontos Fracos (obrigatório para Leviatã):**
Todo kaiju deve ter **2 a 3 Pontos Fracos**. Cada Ponto Fraco é uma vulnerabilidade narrativa-mecânica que permite que escalas inferiores causem dano efetivo. Cada Ponto Fraco concede -2 pontos no Point-Buy total (eles equilibram o poder do Leviatã).

Um Ponto Fraco tem:
1. **Localização:** onde está (interior do corpo, base da cauda, cristal no crânio, símbolo arcano nas costas).
2. **Como descobrir:** o que os personagens precisam fazer para identificá-lo (investigação, rolagem de Saber, aliado que já lutou contra ele antes).
3. **Como atacar:** condições para o ataque ser válido (estar a distância Adjacente, usar Arma de Cerco, ter causado dano ao kaiju anteriormente nesta fase).
4. **Efeito:** o que acontece quando é atingido (kaiju perde uma fase antecipadamente, fica vulnerável por 1 rodada, perde uma habilidade específica).

---

### O Leviatã Cinzento (Ficha de Exemplo Completa)

*"Não é um animal. É uma memória de antes da guerra. Uma memória que aprendeu a andar."*

**Escala:** Leviatã
**P:** 5 | **H:** 2 | **R:** 6 | **PV:** 300
**Tamanho:** Ocupa 10×10 quadrados (50m × 50m). Em medição livre, base de 20cm.
**Iniciativa:** 8 (lento por design — a ameaça vem de inevitabilidade, não velocidade)

**Pontos Fracos (3):**

| Nome | Localização | Como Descobrir | Como Atacar | Efeito |
|---|---|---|---|---|
| **Núcleo de Sal** | Interior do corpo — câmara central acessível pela boca ou pelas guelras dorsais | Teste de Saber dif. 8 ou informante que sobreviveu a combate anterior | Personagem deve estar *dentro* do Leviatã e usar arma de fogo ou magia de fogo | Kaiju pula diretamente para a próxima fase; 50 dano garantido |
| **Cristal Occipital** | Topo da cabeça, visível na Fase 3 | Automático — aparece quando o kaiju entra na Fase 3 | Ataque à distância Longe ou Colossal adjacente com Ganho | Kaiju fica atordoado por 1 rodada completa |
| **Raiz de Ancoragem** | Base da cauda no solo, enterrada uns 3 metros | Requer Percepção + observar o padrão de movimento por 2 rodadas | 3 Tropas com Fogo Concentrado simultâneo ou Colossal corpo-a-corpo | Kaiju perde mobilidade — velocidade cai para 0 por 2 rodadas |

**Fases:**

**Fase 1 — Chegada (PV 300–225):**
Movimento cadenciado. 1 ataque Telegrafado por rodada — pisão em área (raio 3 quadrados, dano 15, teste H dif. 8 para escapar). Pontos Fracos Núcleo e Raiz acessíveis.

**Fase 2 — Fúria (PV 224–150):**
Velocidade dobra. 1 ataque Telegrafado + 1 varredura lateral (arco de 6 quadrados, dano 10 a todos na área, sem teste de escape — apenas cobertura reduz). Raiz de Ancoragem fecha (enterrou mais fundo). Cristal Occipital começa a pulsar (visível, mas não ainda Ponto Fraco ativo).

**Fase 3 — Desespero (PV 149–75):**
Cristal Occipital ativo e visível. 2 ataques Telegrafados por rodada. Rugido de Ondas: uma vez por fase, emite pulso sonoro — todos a distância Perto do Leviatã testam R dif. 7 ou ficam Atordoados por 1 rodada.

**Fase 4 — Último Fôlego (PV 74–0):**
O Leviatã Cinzento para completamente por 1 rodada (é o único sinal). Então: **Erupção de Sal** — ataque único que afeta todo o campo de batalha (raio de 15 quadrados), dano 25 a tudo que não estiver em cobertura pesada ou dentro de estrutura fechada. Depois da Erupção, o kaiju fica com Iniciativa 4 e todos os Pontos Fracos recebem Ganho em ataques contra eles.

**Consequências Ambientais por Fase:**

| Fase | Mudança no Campo de Batalha |
|---|---|
| 1 | Tremores: Terreno Difícil em raio de 5 quadrados ao redor do kaiju |
| 2 | Estruturas de até R3 desabam quando o kaiju passa; névoa de sal (Cobertura Leve universal) |
| 3 | Cristais de sal emergem do solo: obstáculos espalhados (Cobertura Leve aleatória, Terreno Difícil em 30% do campo) |
| 4 | Após a Erupção: campo de batalha coberto de sal — Terreno Difícil universal por 1d6 cenas |

---

## Sumário: Mecha vs. Kaiju

| Aspecto | Mecha | Kaiju |
|---|---|---|
| Escala | Colossal (controlado por PC) | Leviatã |
| Personalização | Pontos de Construção + Configurações | Pontos Fracos + Fases |
| Estado durante combate | Sincronização com piloto | Fases de comportamento |
| Momento extremo | Ressonância Crítica | Último Fôlego |
| Vitória | Eliminar PV do kaiju | Completar objetivos de fase; atingir Pontos Fracos |
