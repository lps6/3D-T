# Capítulo 2 — Combate Naval

> *Combate no mar não é combate em terra com água no meio. É uma dança entre vento, corrente, posição e desespero — e quem lidera a dança normalmente é o vento.*

---

## Vento e Propulsão

O vento é o motor do combate naval pré-vapor. Antes de qualquer tática, antes de qualquer canhão, o vento decide quem tem vantagem.

### Direção do Vento

No início de cada batalha, o Mestre define a **direção do vento** (de onde sopra). Use uma rosa dos ventos simplificada: Norte, Sul, Leste, Oeste, ou uma diagonal.

**Barlavento:** O lado de onde o vento sopra. Navios a barlavento têm vantagem: podem avançar sobre o inimigo e escolher quando engajar.

**Sotavento:** O lado oposto. Navios a sotavento estão em desvantagem: o vento os afasta do inimigo, e aproximar-se exige manobra (gasto de ações).

### Efeito Mecânico do Vento

| Posição relativa ao vento | Efeito em Navios a Vela |
|---|---|
| **A favor do vento** (barlavento → alvo) | +1 VEL. Pode avançar como ação de Movimento gratuita. |
| **Contra o vento** (sotavento → alvo) | -1 VEL. Avançar custa 2 ações de Movimento (bordejar). |
| **Vento de través** (perpendicular) | Sem modificador. Navegação normal. |
| **Calmaria** (sem vento) | VEL 0 para navios a vela. Navios a remo: VEL normal. Navios a vapor: VEL normal. |

**Mudança de vento:** A cada 3 rodadas, o Mestre pode mudar a direção do vento em 45° (1 posição na rosa dos ventos). Isso simula condições reais e força adaptação tática.

> ⚓ **Navios a remo** (galés, trirremes) ignoram o vento para movimento, mas são mais lentos (VEL máximo 3). **Navios a vapor** (steampunk) ignoram o vento completamente, mas têm Caldeira como sistema dependente de Combustível.

---

## Posicionamento Naval

O combate naval usa um **mapa de quadrados** (grid), como BTV. Cada quadrado representa ~100 metros de oceano.

### Faixas de Alcance

| Faixa | Distância | Efeito |
|---|---|---|
| **Bordo a Bordo** | 0 (mesma casa) | Abordagem possível. Canhões não funcionam (muito perto). Abalroamento possível. |
| **Curto** | 1–3 quadrados | Canhões normais. Mosqueteiros podem atirar (-2). Manobra evasiva possível. |
| **Longo** | 4–8 quadrados | Canhões com -2. Apenas armas de longo alcance. Morteiros funcionam normalmente. |
| **Extremo** | 9+ quadrados | Apenas morteiros e armas especiais [Anti-Fortaleza]. -4 para acertar. |

### Flancos

Navios não são simétricos. Cada navio tem **quatro arcos de tiro**:

```
        PROA
         /\
        /  \
       /    \
BOMBORDO    ESTIBORDO
       \    /
        \  /
         \/
        POPA
```

- **Bombordo e Estibordo:** Canhões laterais. Onde está o poder de fogo. Ataques laterais causam dano normal.
- **Proa:** Poucos canhões (1–2 no máximo). Ataques pela proa causam dano reduzido (metade), mas permitem abalroamento.
- **Popa:** Nenhum canhão (vulnerável). Ataques pela popa causam dano **aumentado** (+50% ou +2d, o que for maior). A popa é o Ponto Fraco universal de todo navio.

> 📖 *"Cruzar a popa" — manobra clássica. O capitão posiciona a nave para disparar a salva lateral inteira contra a popa desprotegida do inimigo. Se funciona, uma salva pode decidir a batalha.*

---

## Iniciativa Naval

### Por Escala

| Escala | Iniciativa |
|---|---|
| **Tripulante** | Rola normalmente (Habilidade) |
| **Navio** | Rola VEL + 1d |
| **Fortaleza do Mar** | Fixa em 8 (massa enorme, lenta para reagir) |
| **Rei do Mar** | Fixa em 5 (enormes, mas o mar se move com eles) |

**Vento:** Navios a barlavento ganham +2 na Iniciativa. Navios a sotavento sofrem -2.

**Exceção:** Galés a remo sempre rolam normalmente (independem do vento), mas têm VEL máximo 3.

---

## Ações em Combate Naval

Cada Navio (ou Fortaleza) tem por rodada:
- **1 Ação de Movimento**
- **1 Ação de Canhão** (Standard)
- **1 Ação Rápida**

### Ações de Movimento

| Ação | Efeito |
|---|---|
| **Avançar** | Move VEL quadrados na direção da proa. |
| **Virar de Bordo** | Muda a orientação do navio em 90° (proa aponta nova direção). Custa toda a ação de Movimento — o navio não se desloca. |
| **Bordejar** | Avança contra o vento em ziguezague. Move VEL/2 quadrados (arredondado para baixo, mínimo 1). |
| **Manobra Evasiva** | Não se desloca. Ganha +2 contra ataques até o próximo turno. Requer VEL ≥ 2. |
| **Abalroamento** | Move até VEL quadrados em linha reta e colide com o alvo. Dano = VEL × 5 em ambos (VEL × 7 com aríete, VEL × 3 no atacante). |
| **Aproximar para Bordo** | Move 1 quadrado em direção ao alvo e posiciona-se Bordo a Bordo. Permite abordagem no próximo turno. |

---

### Ações de Canhão (Standard)

| Ação | Efeito |
|---|---|
| **Salva Lateral** | Dispara todos os canhões de um bordo (bombordo OU estibordo). Dano = CAN × d. Alcance: Curto ou Longo. |
| **Tiro de Proa** | Dispara canhões de proa. Dano = CAN/2 × d. Útil em perseguição. |
| **Fogo Concentrado** | 3+ Navios (mesma Flotilha ou aliados coordenados) disparam no mesmo alvo. Dano combinado. Gasta 1 Carga de Munição extra (se usando Desgaste). |
| **Morteiro** | Tiro em arco. Ignora cobertura. Alcance: Longo ou Extremo com -2. Dano = CAN × d, mas acerta posição (quadrado), não navio — o alvo pode ter se movido. |
| **Tiro de Corrente** | Munição especial que destrói mastros e velas em vez de casco. Não causa dano ao PV — reduz VEL do alvo em 1 (cumulativo) até reparo. |
| **Brulote** | Navio em chamas lançado contra o inimigo. Sem tripulação. Move VEL quadrados em linha reta e colide. Causa VEL × 3 de dano + inicia Incêndio. Gasta o navio inteiro. |
| **Munição Pesada [Anti-Fortaleza]** | Projéteis especiais. Dano reduzido (CAN/2 × d) contra escala Fortaleza. Gasta 2 Cargas de Munição. |

---

### Ações Rápidas

| Ação | Efeito |
|---|---|
| **Reparos de Emergência** | Tripulação repara 2 PV do casco. Requer TRP ≥ 2. |
| **Apagar Incêndio** | Remove 1 seção de Incêndio ([Cap. 1](#cap01_criacao_personagem/cap01_criacao_personagem)). Teste TRP dif. 5. |
| **Sinalização** | Comunica com navio aliado em Curto/Longo. Coordena ação (aliado ganha +1 na próxima ação). |
| **Içar/Recolher Velas** | Muda perfil de vento para o próximo turno: mais velas = +1 VEL mas +1 dano recebido de Tiro de Corrente. Menos velas = -1 VEL mas -1 dano de Corrente. |
| **Preparar Abordagem** | Posiciona ganchos e pranchas. Necessário antes de abordagem (a menos que Bordo a Bordo por abalroamento). |

---

## Posições da Tripulação

Quando PJs estão a bordo de um Navio, cada um ocupa uma **Posição** que define suas ações exclusivas. Cada posição confere 1 ação exclusiva + 1 **Momento** (habilidade poderosa usável 1×/sessão).

### ⚓ Capitão

**Ação Exclusiva — Ordem de Batalha:** Uma vez por rodada, o Capitão pode conceder +1 em qualquer teste de um tripulante ou do próprio navio até o fim da rodada.

**Momento — A Última Ordem:** Uma vez por sessão, quando o navio atingir 25% do PV ou menos, o Capitão pode declarar uma Ordem que dá a toda a tripulação 1 ação extra imediata. Cada tripulante escolhe o que fazer. O Capitão não age — está gritando.

> 📖 *"VIRAR! VIRAR AGORA!" — Sereia Negra, quando o Kraken emergiu a estibordo.*

---

### ⚓ Navegador(a)

**Ação Exclusiva — Leitura do Mar:** Uma vez por rodada, o Navegador pode declarar que leu a corrente/vento/maré. O Mestre revela 1 informação sobre terreno marítimo num raio de Longo (corrente oculta, recife submerso, mudança de vento iminente).

**Momento — Rota Impossível:** Uma vez por sessão, o Navegador traça uma rota que não deveria existir. O navio pode se mover para qualquer quadrado dentro de VEL × 2 quadrados, ignorando terreno e vento. O Mestre narra como — correnteza secreta, manobra entre recifes, aproveitamento de maré.

> 📖 *Maris olhou para o mapa, olhou para o mar, e disse: "Ali." Ninguém via nada ali. Maris via uma corrente que não estava em nenhum mapa porque ainda não tinha acontecido — a maré ia criá-la em quarenta segundos.*

---

### ⚓ Artilheiro

**Ação Exclusiva — Mira Ajustada:** Uma vez por rodada, o Artilheiro pode adicionar +2 ao teste de ataque de 1 salva lateral.

**Momento — Tiro Perfeito:** Uma vez por sessão, o Artilheiro declara 1 disparo que acerta automaticamente. Não há rolagem. O dano é máximo (valor máximo dos dados). Narrativamente: o tiro atinge exatamente onde precisava — o leme, o paiol, o mastro principal.

> 📖 *Corvino mirou por três segundos a mais que o manual permitia. O capitão inimigo percebeu e tentou virar. Tarde demais. A bala atravessou o leme como se soubesse o caminho.*

---

### ⚓ Carpinteiro

**Ação Exclusiva — Reparo Estrutural:** Uma vez por rodada, o Carpinteiro pode reparar 3 PV do casco (em vez dos 2 PV padrão de Reparos de Emergência). Em calma (fora de combate), repara 5 PV por hora.

**Momento — Gambiarra Naval:** Uma vez por sessão, quando o navio perderia um componente ou sistema (mastro derrubado, leme destruído, casco rompido), o Carpinteiro declara que "segurou." O componente funciona por mais 2 rodadas, mesmo que estruturalmente impossível. Depois dessas 2 rodadas, colapsa definitivamente.

> 📖 *"O mastro está quebrado," disse alguém. O carpinteiro Tomas já estava lá em cima, amarrando cordas com os dentes. "O mastro está consertado," disse, com a boca cheia de corda. Não era bem verdade. Mas aguentou duas rodadas. Aguentar duas rodadas salvou cinquenta vidas.*

---

### ⚓ Contramestre

**Ação Exclusiva — Moral da Tripulação:** Uma vez por rodada, o Contramestre pode testar Moral de 1 unidade de Tripulante a bordo com +2 (motivação, ameaça, ou discurso). Evita rota.

**Momento — Todos ao Convés:** Uma vez por sessão, o Contramestre convoca toda a tripulação para ação simultânea. Todas as ações de tripulação naquela rodada (reparos, incêndio, abordagem) recebem +2.

---

### ⚓ Vigia

**Ação Exclusiva — Do Alto do Mastro:** Uma vez por rodada, o Vigia pode detectar 1 elemento invisível num raio de Longo (navio em neblina, recife submerso, criatura a se aproximar por baixo). Teste Habilidade dif. 5 (6 em neblina, 4 em tempo limpo).

**Momento — Terra à Vista!** Uma vez por sessão, o Vigia detecta algo que ninguém mais poderia. O Mestre revela **toda** informação sobre um quadrante do mapa (posição de inimigos, terreno oculto, presença de monstros). É o momento "o vigia viu primeiro."

---

## Formações Navais

Quando 3+ Navios aliados operam juntos, podem adotar **Formações** que conferem benefícios táticos. Mudar de Formação custa 1 rodada de Ação de Movimento para todos os navios participantes.

### ⚓ Linha de Batalha

Navios lado a lado, bordos voltados para o inimigo. Clássica.

**Efeito:** Todos os navios na formação disparam Salva Lateral no mesmo turno. Cada salva ganha +1 CAN. Se um navio na linha é destruído, os adjacentes perdem a formação automaticamente.

> 📖 *A Linha de Batalha é a formação mais antiga e mais brutal: enfile seus navios, mostre seus canhões, e destrua o que estiver na frente. Funciona. É cara.*

---

### ⚓ Coluna

Navios um atrás do outro, seguindo o líder. Ideal para atravessar estreitos e perseguição.

**Efeito:** O navio líder absorve todo dano frontal (os demais estão protegidos). Navios na coluna podem disparar apenas Tiro de Proa. Se o líder for destruído, o próximo assume automaticamente.

---

### ⚓ Meia-Lua (Envolvimento)

Navios dispostos em arco, tentando cercar o inimigo.

**Efeito:** Alvos dentro do arco sofrem -1 em Manobra Evasiva (menos espaço para manobrar). Se o cerco se completar (180°+), o alvo não pode Fugir.

---

### ⚓ Dispersa

Navios espalhados sem formação fixa. Defesa contra área.

**Efeito:** +1 contra Morteiros e ataques de área. -1 em Concentração de Fogo (difícil coordenar). Cada navio age independentemente.

---

### ⚓ Escolta

1 navio protegido no centro, demais ao redor.

**Efeito:** Ataques ao navio protegido são redirecionados para a escolta mais próxima (teste VEL da escolta, dif. 5 — se falhar, projétil passa). Útil para proteger cargueiros, navios hospitais ou navios de transporte de tropas.

---

### ⚓ Reagrupar

Formação de recuperação. Navios se aproximam, diminuem velocidade.

**Efeito:** Todos os navios na formação podem usar Ação Rápida para reparo sem teste. Cancela Fragmentação de Flotilha. Vulnerável: -2 contra ataques enquanto reagrupado.

---

## Abordagem

O momento mais visceral do combate naval: navios se encostam, pranchas são lançadas, cordas são jogadas, e o combate desce de CAN × d para espada contra espada.

### Iniciando Abordagem

1. **Posição:** Os navios devem estar **Bordo a Bordo** (mesma casa).
2. **Preparação:** Ação Rápida "Preparar Abordagem" (ganchos, pranchas, cordas). Se o navio chegou por abalroamento, a preparação é automática.
3. **Decisão:** O atacante declara abordagem. O defensor pode tentar **Repelir** (Ação Rápida — teste TRP dif. 5 para impedir o embarque) ou **Aceitar** (o combate começa).

### Fases da Abordagem

#### Navio vs. Navio (escala Navio)

| Fase | Local | Descrição |
|---|---|---|
| **1. Convés** | O combate começa no convés superior. Ambas as tripulações se enfrentam em escala Tripulante. O lado com mais TRP ganha +1 nesta fase. |
| **2. Interiors** | Se os atacantes vencem o convés, descem para os interiores (porões, cabines, paiol). Espaço apertado: armas de duas mãos sofrem -2. Vantagem para defensores (+1). |
| **3. Cabine do Capitão** | Se os atacantes chegam aqui, o navio é tomado. O capitão defensor pode se render, lutar até a morte, ou detonar o paiol (explode o navio — 50% PV máximo em dano para todos a Bordo a Bordo). |

#### Fortaleza do Mar

Abordagem exige **5 fases** (mais espaço, mais resistência):

| Fase | Local |
|---|---|
| 1. Convés Externo | Parapeitos, redes, armadilhas. Defensores com +2. |
| 2. Torres de Vigia | Artilheiros internos disparam em atacantes. Cada torre é um sub-combate. |
| 3. Corredores Internos | Labirinto. Defensores conhecem o caminho — atacantes não. -2 para atacantes sem guia. |
| 4. Praça de Armas | Onde a guarnição geral se reúne. Combate maior — 2d6 defensores de uma vez. |
| 5. Sala de Comando / Cabine do Almirante | Desfecho. Rendição, morte ou sabotagem. |

#### Rei do Mar (Escalada)

"Abordagem" de um Rei do Mar é escalar o corpo da criatura para atacar Pontos Fracos.

1. **Aproximação:** Navio encosta no corpo da criatura (teste VEL dif. 6 — a criatura se move).
2. **Escalada:** Tripulantes testam Habilidade dif. 7 por rodada para se manter presos. Falha = queda na água.
3. **Ataque ao Ponto Fraco:** Quando alcançam o Ponto Fraco, atacam com dano normal. O Ponto Fraco tem PV próprio (indicado na ficha do Rei do Mar no Bestiário).
4. **Defesa da criatura:** A cada rodada, a criatura reage — sacodir (todos testam dif. 6 ou caem), mergulhar (todos testam Resistência dif. 7 ou afogam), ou esmagar contra outro navio/recife.

> 📖 *"Alguém tem que subir naquela coisa," disse Sereia Negra, olhando para o Kraken. Ninguém se voluntariou. "Tudo bem," disse. "Eu vou. Corvino, traz a corda."*
*"Capitã, a corda tem trinta metros. O Kraken tem trezentos."*
*"Então traz dez cordas."*

---

## Multi-Escala no Mar

Batalhas navais frequentemente envolvem múltiplas escalas simultaneamente — Tripulantes lutando no convés enquanto Navios trocam salvas, enquanto uma Fortaleza bombarda de longe, enquanto um Rei do Mar emerge debaixo de tudo.

### Resolução por Camadas

1. **Camada Rei do Mar:** Resolve primeiro. O Rei do Mar afeta tudo — move-se, destroi, altera terreno.
2. **Camada Fortaleza:** Resolve segundo. Bombardeio de longo alcance, posicionamento.
3. **Camada Navio:** Resolve terceiro. Manobras, salvas, formações.
4. **Camada Tripulante:** Resolve por último. Abordagens, duelos, sabotagem.

**Exceção:** Ações que cruzam escalas (um Tripulante atacando o Ponto Fraco de um Rei do Mar) são resolvidas na camada da escala menor — porque é o momento pessoal que importa narrativamente.

---

## Referência Rápida — Combate Naval

| Elemento | Regra |
|---|---|
| Vento | Define vantagem posicional (+1/-1 VEL, +2/-2 Iniciativa) |
| Faixas | Bordo a Bordo / Curto / Longo / Extremo |
| Flancos | Popa = +50% dano. Proa = metade dano. Laterais = normal. |
| Ações/rodada | 1 Movimento + 1 Canhão + 1 Rápida |
| Abordagem | Bordo a Bordo → Preparar → Fases (3 para Navio, 5 para Fortaleza) |
| Formações | Linha/Coluna/Meia-Lua/Dispersa/Escolta/Reagrupar |
| Iniciativa | Navio: VEL+1d. Fortaleza: 8. Rei: 5. |

---

> *O capitão que entende o vento vence a metade das batalhas. O capitão que entende a maré vence a outra metade. O capitão que entende a tripulação sobrevive ao que vem depois.*
