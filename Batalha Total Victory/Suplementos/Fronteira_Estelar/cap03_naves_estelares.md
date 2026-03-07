# Capítulo 3 — Naves Estelares

> *Uma nave não é um veículo. Uma nave é uma casa, um hospital, uma fábrica, uma fortaleza e um caixão — muitas vezes ao mesmo tempo. Se você a trata como veículo, ela vai falhar como veículo. Se você a trata como lar, ela sobrevive por mais tempo do que deveria.*

---

## Atributos de Nave

Toda nave em Fronteira Estelar tem 4 atributos:

| Atributo | Abreviação | Função |
|---|---|---|
| **Propulsão** | PRO | Velocidade, manobras, fuga, perseguição. Usado em testes de Movimento, Manobra Evasiva e fuga de alcance. |
| **Blindagem** | BLI | Resistência estrutural, absorção de dano. Usado para defesa (funciona como R do BTV). |
| **Armamento** | ARM | Poder ofensivo. Usado em todos os ataques de armas da nave (funciona como P do BTV). |
| **Sistemas** | SIS | Sensores, comunicação, hacking, suporte de vida, navegação. Usado em testes de H da nave. |

**PV da nave:** BLI × 10 (para Esquadrões) ou BLI × 20 (para Naus de Guerra). Armadas têm PV definido individualmente.

**Equivalências com BTV:**
- P (Poder) → ARM (Armamento)
- H (Habilidade) → SIS (Sistemas)
- R (Resistência) → BLI (Blindagem)
- Não há equivalente direto de PRO no BTV; é um atributo novo que governa posicionamento.

---

## Criação de Naves

### Passo 1 — Escolha a Escala

| Escala | Custo Base | Pontos de Construção (PC) | PV Base |
|---|---|---|---|
| **Esquadrão** (corveta, ala de caças) | +2 | 12 | BLI × 10 |
| **Nau de Guerra** (fragata, cruzador) | +6 | 16 | BLI × 20 |
| **Armada** (dreadnought, estação) | +15 | 22 | Definido individualmente |

O Custo Base é o Point-Buy total do BTV (para balanceamento entre cenários). Os **Pontos de Construção (PC)** são usados exclusivamente para construção de nave.

### Passo 2 — Distribua Atributos

Cada atributo começa em 0. Cada ponto custa 1 PC. Valores típicos:

| Atributo | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| PRO | Lento | Normal | Ágil | Muito rápido | Absurdo |
| BLI | Frágil | Leve | Resistente | Pesado | Fortaleza |
| ARM | Sem armas | Armas leves | Armas médias | Armas pesadas | Arsenal |
| SIS | Básico | Funcional | Avançado | Estado da arte | Presciente |

### Passo 3 — Instale Componentes

Componentes custam PC e definem as capacidades especiais da nave.

| Componente | PC | Efeito |
|---|---|---|
| **Canhão de Proa** | 2 | Arma pesada fixa. +2 dano em ataques de Longo alcance ou maior. Não pode atirar em Ponto Cego (precisa virar a nave). |
| **Torpedos [Anti-Nau]** | 2 | 4 Cargas de Torpedo. Cada torpedo cancela 1 nível de escala contra Naus de Guerra. |
| **Torpedos de Fratura [Anti-Armada]** | 3 | 2 Cargas de Torpedo de Fratura. Cada torpedo cancela 1 nível de escala contra Armadas ao mirar Pontos Fracos. |
| **Escudo Defletor** | 2 | +1 BLI contra ataques de energia. Regenera: se não receber dano de energia por 1 rodada, o bônus volta. |
| **Blindagem Pesada** | 2 | +1 BLI permanente contra ataques cinéticos. Não regenera. PRO sofre -1 (peso). |
| **Motor FTL** | 1 | Permite viagem interestelar. 3 Cargas de Combustível FTL por padrão ([Cap. 4](#cap04_professores_npcs/cap04_professores_npcs)). Sem Motor FTL, a nave só opera em sistema local. |
| **Baía de Caças** | 3 | A nave carrega e lança até 2 Esquadrões de caças. Lançar 1 Esquadrão = 1 Ação Rápida. |
| **Módulo de Jamming** | 2 | +2 em testes de Guerra Eletrônica (hackeamento). Naves inimigas em faixa Curta sofrem -1 SIS (interferência). |
| **Propulsores Auxiliares** | 1 | +1 PRO para Manobra Evasiva. Permite Mudar Posição como Ação Rápida (em vez de Movimento). |
| **Sistema de Suporte de Vida Avançado** | 1 | Dobra o tempo de Suprimentos ([Cap. 4](#cap04_professores_npcs/cap04_professores_npcs)). Tripulação resiste a descompressão por 2 rodadas extras. |
| **Módulo de Reparo** | 2 | Engenheiro repara 3 Integridade/turno em vez de 2. Nave pode reparar 1 Integridade/dia sem porto (auto-reparo lento). |
| **Módulo de Carga** | 1 | Dobra a capacidade de Cargas totais (Munição, Torpedos, etc.). Útil para missões longas. |
| **Laboratório / Oficina** | 1 | Permite análise científica, fabricação de peças básicas, e identificação de Pontos Fracos com Ganho. |
| **Drone de Reconhecimento** | 1 | Lança drone descartável que revela 1 faixa de alcance (remove Nebulosa/Nevoeiro em 1 setor por 2 rodadas). |
| **Habilidade Exclusiva** | 3–5 | Capacidade única da nave. Defina com o Mestre. Exemplos: Camuflagem Óptica (invisível em Longo+), Arma Experimental, Campo Gravitacional. |

### Passo 4 — Defina Pontos Fracos (Naus e Armadas)

Toda Nau de Guerra tem **1–2 Pontos Fracos** (opcional, mas recomendado para equilíbrio). Cada Ponto Fraco reduz o custo Point-Buy em **-2** (idêntico ao BTV).

Toda Armada tem **2–3 Pontos Fracos** obrigatórios.

Cada Ponto Fraco deve especificar:
1. **Localização** — ex: grades de ventilação no setor traseiro
2. **Descoberta** — ex: teste SIS dif. 7
3. **Condição de Ataque** — ex: faixa Curto ou Ponto Cego, ataque pelo flanco traseiro
4. **Efeito ao Destruir** — ex: motor desativado, BLI -2, muda de fase

---

### Passo 5 — Configurações de Missão

Cada nave pode ter até **3 Configurações de Missão** (preparadas antes da batalha; trocar custa 1 cena fora de combate). Cada configuração redistribui ênfase:

#### ⚡ Configuração: Combate Direto
- ARM +1, PRO -1
- Todas as armas ganham +1 alcance (Curto vira Longo, etc.)
- Sem bônus defensivo.

#### ⚡ Configuração: Reconhecimento
- PRO +1, SIS +1, ARM -1, BLI -1
- Perde armamento pesado, ganha velocidade e sensores.
- Drone de Reconhecimento (se instalado) tem alcance dobrado.

#### ⚡ Configuração: Transporte / Suporte
- BLI +1, SIS +1, ARM -2
- Desativa armas ofensivas. Ganha capacidade de carga dobrada.
- Módulo de Reparo (se instalado) opera a dobro de velocidade.

---

## Naves Pré-Construídas

### Esquadrão — Caça Padrão "Agulha"
*O cavalo de guerra da Comune. Rápido, preciso, descartável.*

| PRO | BLI | ARM | SIS | PV |
|---|---|---|---|---|
| 3 | 2 | 3 | 2 | 20 |

**PC gastos (12):** PRO 3 + BLI 2 + ARM 3 + SIS 2 + Propulsores Auxiliares (1) + Drone de Reconhecimento (1) = 12
**Componentes:** Propulsores Auxiliares, Drone de Reconhecimento.
**Armamento:** Canhões de energia leves (alcance Curto, sem Cargas — energia regenera). Não possui torpedos.
**Ponto Fraco:** Nenhum (Esquadrão não exige, mas é frágil por natureza).

---

### Esquadrão — Corveta "Perseverança"
*A nave do grupo. Tripulação de 4 com Postagens. A nave que sobrevive por teimosia.*

| PRO | BLI | ARM | SIS | PV |
|---|---|---|---|---|
| 2 | 3 | 2 | 3 | 30 |

**PC gastos (12):** PRO 2 + BLI 3 + ARM 2 + SIS 3 + Motor FTL (1) + Módulo de Reparo (2) = 13. **Excede em 1:** remova Módulo de Reparo e substitua por Sistema de Suporte de Vida Avançado (1) = 12.
**Componentes:** Motor FTL, Sistema de Suporte de Vida Avançado.
**Armamento:** Canhões de energia médios (alcance Curto-Longo). Sem torpedos.
**Tripulação:** 4 Postagens (Piloto, Artilheiro, Engenheiro, Comunicações).
**Nota narrativa:** Esta é a nave padrão de uma campanha PJ. Pouco armada, bem equilibrada, depende da tripulação.

---

### Nau de Guerra — Cruzador Pesado Classe "Punho de Ferro"
*A espinha dorsal da frota Reichpact. Blindagem monstruosa. Canhões em todas as direções. Mais perto de fortaleza do que de nave.*

| PRO | BLI | ARM | SIS | PV |
|---|---|---|---|---|
| 1 | 5 | 4 | 2 | 100 |

**PC gastos (16):** PRO 1 + BLI 5 + ARM 4 + SIS 2 + Canhão de Proa (2) + Blindagem Pesada (2) = 16
**Componentes:** Canhão de Proa, Blindagem Pesada. BLI efetivo contra cinéticos: 6.
**Armamento:** Canhão de Proa (Longo+, +2 dano), baterias laterais (Curto, ARM normal).
**PV:** 100.
**Ponto Fraco 1 — Grades de Ventilação Traseiras:** SIS dif. 7 para descobrir. Atacável apenas de Ponto Cego pelo flanco traseiro. Efeito: desativa Blindagem Pesada.
**Ponto Fraco 2 — Antenas de Comando:** SIS dif. 6 para descobrir. Atacável de Longo. Efeito: -2 SIS (Comunicação e sensores colapsam; não recebe mais Formações de Frota).
**Iniciativa:** 10.

---

### Nau de Guerra — Fragata da Comune Classe "Solidariedade"
*Rápida para seu tamanho. Projetada para liberar, não para conquistar.*

| PRO | BLI | ARM | SIS | PV |
|---|---|---|---|---|
| 3 | 3 | 3 | 3 | 60 |

**PC gastos (16):** PRO 3 + BLI 3 + ARM 3 + SIS 3 + Motor FTL (1) + Baía de Caças (3) = 16
**Componentes:** Motor FTL, Baía de Caças (carrega 2 Esquadrões de Agulhas).
**Armamento:** Baterias médias (Curto-Longo), sem Canhão de Proa.
**PV:** 60.
**Ponto Fraco 1 — Baía de Caças Exposta:** SIS dif. 5. Atacável de Curto pelo flanco ventral. Efeito: Baía destruída (não pode lançar mais caças; caças dentro perdem-se).
**Iniciativa:** 10.

---

### Nau de Guerra — Nave-Colmeia Alienígena
*Não foi construída. Cresceu. Produz enxames biológicos e responde a estímulos — não a ordens.*

| PRO | BLI | ARM | SIS | PV |
|---|---|---|---|---|
| 2 | 4 | 3 | 1 | 80 |

**PC gastos (16):** PRO 2 + BLI 4 + ARM 3 + SIS 1 + Habilidade Exclusiva: Produção de Enxame (3) + Habilidade Exclusiva: Regeneração Biológica (3) = 16
**Habilidade Exclusiva — Produção de Enxame:** A cada 2 turnos, a Nave-Colmeia produz 1 Esquadrão de Enxame Biológico (ver Bestiário). Enxames agem no turno seguinte à produção. Máximo de 3 Enxames ativos.
**Habilidade Exclusiva — Regeneração Biológica:** 5 PV/turno. Só funciona enquanto o Ponto Fraco interno não for destruído.
**Ponto Fraco 1 — Núcleo de Produção:** SIS dif. 8 para descobrir. Localizado no interior — requer Abordagem. Efeito: desativa Produção de Enxame e Regeneração.
**Ponto Fraco 2 — Membrana Sensorial:** SIS dif. 6. Atacável de Curto. Efeito: -2 ARM (a nave perde capacidade de mirar; ataques ficam com Perda).
**Iniciativa:** 10.

---

### Nau de Guerra — Porta-Caças "Ninho de Ferro"
*Não luta. Manda outros lutarem por ela.*

| PRO | BLI | ARM | SIS | PV |
|---|---|---|---|---|
| 2 | 4 | 1 | 3 | 80 |

**PC gastos (16):** PRO 2 + BLI 4 + ARM 1 + SIS 3 + Baía de Caças (3) + Baía de Caças (3) = 16
**Componentes:** 2× Baía de Caças (carrega 4 Esquadrões total; lança 2/turno).
**Armamento:** Apenas armas de ponto (Ponto Cego) para defesa pessoal. Sem capacidade ofensiva real.
**PV:** 80.
**Ponto Fraco 1 — Hangares Expostos:** SIS dif. 5. Atacável de qualquer faixa. Efeito: perde 1 Baía de Caças (metade da capacidade de lançamento).
**Iniciativa:** 10.

---

## Tabela de Custo Point-Buy Consolidada

Para referência rápida e balanceamento entre BTV core e Fronteira Estelar:

| Elemento | Custo |
|---|---|
| Escala Operativo | 0 (base) |
| Escala Esquadrão | +2 |
| Escala Nau de Guerra | +6 |
| Escala Armada | +15 |
| Cada ponto de PRO, BLI, ARM ou SIS | +1 |
| Componente simples (1 PC) | +1 |
| Componente médio (2 PC) | +2 |
| Componente pesado (3+ PC) | +3 a +5 |
| Ponto Fraco | -2 cada |
| Especialidade de Frota | +1 a +2 |

---

> *A Perseverança não era a nave mais rápida da frota. Nem a mais armada. Nem a mais bonita. Mira Yun sabia disso — ela consertava os três motores mais do que gostaria de admitir.*
>
> *Mas a Perseverança tinha algo que as outras naves não tinham: uma tripulação que ouvia o casco ranger e pensava "ainda não".*
