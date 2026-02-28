# Arquivo de Referência — 3D&T Victory

Este diretório contém material de referência para uso por agentes de IA durante o desenvolvimento do livro **Academia Arcana Victory**.

## Livro Base: 3D&T Victory

O livro base foi dividido em capítulos para leitura mais eficiente:

| Arquivo | Conteúdo | Linhas |
|---------|----------|--------|
| `00-introducao.md` | Material inicial, créditos, sumário | ~657 |
| `01-personagens.md` | **Capítulo 1: Personagens** — Criação de personagens, atributos (P/H/R), perícias, vantagens, desvantagens, kits, técnicas | ~2924 |
| `02-jogando.md` | **Capítulo 2: Jogando** — Mecânicas de jogo, combate, testes, dados | ~926 |
| `03-recompensas.md` | **Capítulo 3: Recompensas** — Progressão, XP, itens, evolução | ~1662 |
| `04-mais-regras.md` | **Capítulo 4: +Regras** — Regras adicionais e opcionais | ~653 |
| `05-mestrar.md` | **Capítulo 5: O Mestre** — Guia do mestre, dicas de narração | ~1587 |
| `06-mundos.md` | **Capítulo 6: O Mundo** — Mundos de campanha: Era das Arcas, Guerra da Galáxia, UniPotência, etc. | ~2913 |

**Fonte original:** `3detvictory.md` (11.302 linhas total)

## Suplementos

| Arquivo | Conteúdo | Sistema |
|---------|----------|---------|
| `manual-do-arcanauta.md` | **Manual do Arcanauta — Kits de Personagem.** 60+ kits profissionais (Abastado, Agente Secreto, Alquimista, Mago, Paladino, etc.), cada um com Núcleos, Exigências e 3 poderes. | 3D&T Victory |
| `ferozes-e-furiosos.md` | **Ferozes e Furiosos.** Bestiário e suplemento de desafios: regras simplificadas para NPCs, 40+ grupos de criaturas/facções (Dragões, Kaiju, Elementais, Youkai, Ninja Akibara, etc.), cada entrada com fichas prontas. 212 páginas. | 3D&T Victory |
| `brigada.md` | **Brigada Ligeira Estelar.** Cenário de space opera/mecha. Regras para combate de robôs, naves espaciais e um universo de ficção científica detalhado. | 3D&T Victory |
| `academia-arcana-tormenta-d20.md` | **Academia Arcana (Tormenta D20).** Suplemento original da escola de magia para o sistema d20. Contém o campus, grêmios, professores (Geófilus, Nereus, Ignatus, Zéphyro, Taandus, Madame Blavatsky, Thanatus, etc.), alunos, classes de prestígio, raças, gênios. **Referência/inspiração — sistema diferente.** | Tormenta D20 |
| `tormenta-alpha.md` | **Tormenta Alpha.** Livro base do cenário Tormenta para o sistema 3D&T Alpha. 192 páginas. Contém raças, kits, vantagens/desvantagens, cenário do mundo de Arton, divindades, organizações, aventuras. Base de muitos personagens e lore adaptados para o projeto. | 3D&T Alpha |
| `conversao-alpha-victory.md` | **Regras de Conversão: 3D&T Alpha → 3DeT Victory.** Guia oficial para migrar personagens entre sistemas. Fórmulas de atributos (F+PdF→P, A+R→R, H=H), conversão de vantagens/desvantagens, perícias, raças e kits. | Alpha → Victory |

## Notas para Agentes de IA

- Os arquivos de capítulos (`00-06`) são texto limpo extraído diretamente do markdown original.
- Os suplementos foram extraídos de PDFs via `pypdf` e podem conter imperfeições de OCR.
- O suplemento de Tormenta D20 (`academia-arcana-tormenta-d20.md`) usa um sistema de regras **diferente** do 3D&T Victory. Suas mecânicas devem ser **adaptadas**, não copiadas diretamente.
- O `tormenta-alpha.md` usa o sistema 3D&T Alpha (5 atributos: F/H/R/A/PdF). Use `conversao-alpha-victory.md` para adaptar ao Victory (3 atributos: P/H/R).
- Para o projeto Academia Arcana Victory, os arquivos mais relevantes são:
  - `01-personagens.md` (regras de criação de personagens)
  - `06-mundos.md` (cenários de campanha, incluindo UniPotência/Liceu)
  - `manual-do-arcanauta.md` (kits disponíveis)
  - `tormenta-alpha.md` (lore e personagens do cenário Tormenta ALPHA)
  - `conversao-alpha-victory.md` (como converter fichas Alpha → Victory)
  - `academia-arcana-tormenta-d20.md` (inspiração para lore/estrutura da escola)
