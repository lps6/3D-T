// Academia Arcana Victory — Content Map
// Defines every book and chapter available in the reader.
// Order here = order in the sidebar and in prev/next navigation.

// ── Groups (DLC collections) ──────────────────────────────────
const CONTENT_GROUPS = [
  {
    id: 'academia',
    title: 'Academia Arcana Victory',
    subtitle: 'Escola de Magia & Aventura',
    description: 'RPG de escola mágica com 15+ capítulos e 8 suplementos temáticos.',
  },
  {
    id: 'batalha',
    title: 'Batalha Total Victory',
    subtitle: 'Conflitos em Escala — Beta',
    description: 'Regras modulares para guerras, mechas e kaijus em qualquer escala.',
  },
];

// ── Books ─────────────────────────────────────────────────────
const CONTENT_MAP = [

  // ═══════════════════════════════════════════════════════════
  // ACADEMIA ARCANA VICTORY
  // ═══════════════════════════════════════════════════════════

  {
    id: 'livro',
    group: 'academia',
    title: 'Livro Base',
    subtitle: 'Academia Arcana Victory',
    path: 'Academia Arcana Victory/Livro',
    chapters: [
      { id: 'indice',  file: 'indice.md',                              title: 'Índice Geral' },
      { id: 'cap00',   file: 'cap00_introducao.md',                    title: 'Cap. 0 — Introdução' },
      { id: 'cap01',   file: 'cap01_criacao_personagem.md',            title: 'Cap. 1 — Criação de Personagem' },
      { id: 'cap02',   file: 'cap02_a_academia.md',                    title: 'Cap. 2 — A Academia' },
      { id: 'cap03',   file: 'cap03_as_casas.md',                      title: 'Cap. 3 — Os Grêmios' },
      { id: 'cap04',   file: 'cap04_professores_npcs.md',              title: 'Cap. 4 — Professores e NPCs' },
      { id: 'cap05',   file: 'cap05_vida_estudantil.md',               title: 'Cap. 5 — Vida Estudantil' },
      { id: 'cap06',   file: 'cap06_mecanicas.md',                     title: 'Cap. 6 — Novas Mecânicas' },
      { id: 'cap07',   file: 'cap07_mundo_ao_redor.md',                title: 'Cap. 7 — O Mundo ao Redor' },
      { id: 'cap08',   file: 'cap08_arrecife_arcano.md',               title: 'Cap. 8 — Arrecife Arcano' },
      { id: 'cap09',   file: 'cap09_toolkit_mestre.md',                title: 'Cap. 9 — Toolkit do Mestre' },
      { id: 'cap10',   file: 'cap10_campanha.md',                      title: 'Cap. 10 — Estrutura de Campanha' },
      { id: 'cap11',   file: 'cap11_mais_regras.md',                   title: 'Cap. 11 — +Regras da Academia' },
      { id: 'cap12',   file: 'cap12_arsenal_do_arcanauta.md',          title: 'Cap. 12 — Arsenal do Arcanauta' },
      { id: 'cap13',   file: 'cap13_modulo_inicio.md',                 title: 'Cap. 13 — Módulo de Início' },
      { id: 'cap14',   file: 'cap14_o_custo_da_magia.md',              title: 'Cap. 14 — O Custo da Magia' },
      { id: 'cap15',   file: 'cap15_os_renegados.md',                  title: 'Cap. 15 — Os Renegados' },
      { id: 'ficha',   file: 'Ficha_de_Personagem_Academia_Arcana.md', title: 'Ficha de Personagem' },
    ],
  },

  {
    id: 'suplementos',
    group: 'academia',
    title: 'Suplementos',
    subtitle: 'Visão Geral',
    path: 'Academia Arcana Victory/Suplementos',
    chapters: [
      { id: 'indice', file: 'INDICE_SUPLEMENTOS.md', title: 'Índice de Suplementos' },
    ],
  },

  {
    id: 'l0',
    group: 'academia',
    title: 'L0 — A Verdade da Arca',
    subtitle: 'Suspense institucional',
    path: 'Academia Arcana Victory/Suplementos/L0_A_Verdade_da_Arca',
    chapters: [
      { id: 'visao-geral',   file: 'README.md',                        title: 'Visão Geral' },
      { id: 'cap00',         file: 'cap00_a_linha_do_tempo.md',         title: 'Cap. 0 — A Linha do Tempo' },
      { id: 'cap01',         file: 'cap01_protocolo_ala_leste.md',      title: 'Cap. 1 — Protocolo Ala Leste' },
      { id: 'cap02',         file: 'cap02_o_calouro_que_sumiu.md',      title: 'Cap. 2 — O Calouro que Sumiu' },
      { id: 'cap03',         file: 'cap03_quando_a_arca_estremece.md',  title: 'Cap. 3 — Quando a Arca Estremece' },
      { id: 'cap04',         file: 'cap04_pos_graduacao_os_mestres.md', title: 'Cap. 4 — Pós-Graduação: Os Mestres' },
      { id: 'ap-modular',    file: 'apendice_como_modular.md',          title: 'Apêndice — Como Modular' },
      { id: 'ap-gremios',    file: 'apendice_gremios_e_escolas.md',     title: 'Apêndice — Grêmios e Escolas' },
    ],
  },

  {
    id: 'l1',
    group: 'academia',
    title: 'L1 — Estrelas & Cristais',
    subtitle: 'Luminoso, épico, otimista',
    path: 'Academia Arcana Victory/Suplementos/L1_Estrelas_e_Cristais',
    chapters: [
      { id: 'visao-geral', file: 'README.md',                          title: 'Visão Geral' },
      { id: 'cap00',       file: 'cap00_mahou_shoujo_na_mesa.md',       title: 'Cap. 0 — Mahou Shoujo na Mesa' },
      { id: 'cap01',       file: 'cap01_sentinelas_do_solsticio.md',    title: 'Cap. 1 — Sentinelas do Solstício' },
      { id: 'cap02',       file: 'cap02_artefatos_errantes.md',         title: 'Cap. 2 — Guardiãs de Coleção' },
      { id: 'cap03',       file: 'cap03_parceiras_de_ressonancia.md',   title: 'Cap. 3 — Parceiras de Ressonância' },
      { id: 'cap04',       file: 'cap04_cavaleiras_do_vortice.md',      title: 'Cap. 4 — Cavaleiras do Vórtice' },
      { id: 'cap05',       file: 'cap05_o_primeiro_derby.md',           title: 'Cap. 5 — O Primeiro Derby' },
      { id: 'cap06',       file: 'cap06_mecanica_de_transformacao.md',  title: 'Cap. 6 — Mecânica de Transformação' },
      { id: 'cap07',       file: 'cap07_o_primeiro_despertar.md',       title: 'Cap. 7 — O Primeiro Despertar' },
      { id: 'ap-gremios',  file: 'apendice_gremios_e_escolas.md',       title: 'Apêndice — Grêmios e Escolas' },
    ],
  },

  {
    id: 'l2',
    group: 'academia',
    title: 'L2 — Tinta & Sombras',
    subtitle: 'Sombrio, horror atmosférico',
    path: 'Academia Arcana Victory/Suplementos/L2_Tinta_e_Sombras',
    chapters: [
      { id: 'visao-geral', file: 'README.md',                          title: 'Visão Geral' },
      { id: 'cap00',       file: 'cap00_calibrando_a_escuridao.md',     title: 'Cap. 0 — Calibrando a Escuridão' },
      { id: 'cap01',       file: 'cap01_deadly_education.md',           title: 'Cap. 1 — A Deadly Education' },
      { id: 'cap02',       file: 'cap02_the_magicians.md',              title: 'Cap. 2 — The Magicians' },
      { id: 'cap03',       file: 'cap03_somatica_arcana.md',            title: 'Cap. 3 — Somática Arcana' },
      { id: 'cap04',       file: 'cap04_academia_gotica.md',            title: 'Cap. 4 — Academia Gótica' },
      { id: 'cap05',       file: 'cap05_o_crisol_sem_mestre.md',        title: 'Cap. 5 — O Crisol Sem Mestre' },
      { id: 'cap06',       file: 'cap06_a_noite_na_biblioteca.md',      title: 'Cap. 6 — A Noite na Biblioteca' },
      { id: 'cap07',       file: 'cap07_a_aula_que_nao_acabou.md',      title: 'Cap. 7 — A Aula que Não Acabou' },
      { id: 'ap-gremios',  file: 'apendice_gremios_e_escolas.md',       title: 'Apêndice — Grêmios e Escolas' },
    ],
  },

  {
    id: 'l3',
    group: 'academia',
    title: 'L3 — Palavras de Poder',
    subtitle: 'Contemplativo, rigoroso',
    path: 'Academia Arcana Victory/Suplementos/L3_Palavras_de_Poder',
    chapters: [
      { id: 'visao-geral', file: 'README.md',                               title: 'Visão Geral' },
      { id: 'cap00',       file: 'cap00_palavras_que_fazem_coisas.md',       title: 'Cap. 0 — Palavras que Fazem Coisas' },
      { id: 'cap01',       file: 'cap01_a_universidade_de_saleth.md',        title: 'Cap. 1 — A Universidade de Saleth' },
      { id: 'cap02',       file: 'cap02_a_ordem_dos_cavaleiros_do_eco.md',   title: 'Cap. 2 — Cavaleiros do Eco' },
      { id: 'cap03',       file: 'cap03_nomes_verdadeiros.md',               title: 'Cap. 3 — Nomes Verdadeiros' },
      { id: 'cap04',       file: 'cap04_hard_soft_gradiente.md',             title: 'Cap. 4 — Hard, Soft & o Gradiente' },
      { id: 'cap05',       file: 'cap05_o_nome_que_o_grimorio_esqueceu.md',  title: 'Cap. 5 — O Nome que o Grimório Esqueceu' },
      { id: 'ap-gremios',  file: 'apendice_gremios_e_escolas.md',            title: 'Apêndice — Grêmios e Escolas' },
    ],
  },

  {
    id: 'l4',
    group: 'academia',
    title: 'L4 — Sangue & Legado',
    subtitle: 'Aventureiro, institucional',
    path: 'Academia Arcana Victory/Suplementos/L4_Sangue_e_Legado',
    chapters: [
      { id: 'visao-geral', file: 'README.md',                          title: 'Visão Geral' },
      { id: 'cap00',       file: 'cap00_linhagem_como_mecanica.md',     title: 'Cap. 0 — Linhagem como Mecânica' },
      { id: 'cap01',       file: 'cap01_academia_thornwall.md',         title: 'Cap. 1 — Academia Thornwall' },
      { id: 'cap02',       file: 'cap02_campo_das_convergencias.md',    title: 'Cap. 2 — Campo das Convergências' },
      { id: 'cap03',       file: 'cap03_ordem_dos_glifeiros.md',        title: 'Cap. 3 — Ordem dos Glifeiros' },
      { id: 'cap04',       file: 'cap04_sociedades_secretas.md',        title: 'Cap. 4 — Sociedades Secretas' },
      { id: 'cap05',       file: 'cap05_manual_do_estudante_arcano.md', title: 'Cap. 5 — Manual do Estudante Arcano' },
      { id: 'cap06',       file: 'cap06_a_outra_escola_brambleshire.md',title: 'Cap. 6 — A Outra Escola: Brambleshire' },
      { id: 'cap07',       file: 'cap07_o_torneio_das_escolas.md',      title: 'Cap. 7 — O Torneio das Escolas' },
      { id: 'ap-opcoes',   file: 'apendice_opcoes_de_personagem.md',    title: 'Apêndice — Opções de Personagem' },
    ],
  },

  {
    id: 'l5',
    group: 'academia',
    title: 'L5 — Fogo & Liberdade',
    subtitle: 'Épico, político',
    path: 'Academia Arcana Victory/Suplementos/L5_Fogo_e_Liberdade',
    chapters: [
      { id: 'visao-geral', file: 'README.md',                      title: 'Visão Geral' },
      { id: 'cap00',       file: 'cap00_a_revolucao_na_mesa.md',    title: 'Cap. 0 — A Revolução na Mesa' },
      { id: 'cap01',       file: 'cap01_a_era_dos_metais.md',       title: 'Cap. 1 — A Era dos Metais' },
      { id: 'cap02',       file: 'cap02_a_bruxa_coruja.md',         title: 'Cap. 2 — A Escola da Bruxa Coruja' },
      { id: 'cap03',       file: 'cap03_quatro_nacoes.md',          title: 'Cap. 3 — Quatro Nações' },
      { id: 'cap04',       file: 'cap04_caldeira.md',               title: 'Cap. 4 — Caldeira: Férias Arcanas' },
      { id: 'cap05',       file: 'cap05_reputacao_faccional.md',    title: 'Cap. 5 — Reputação Faccional' },
      { id: 'cap06',       file: 'cap06_o_manifesto.md',            title: 'Cap. 6 — O Manifesto' },
      { id: 'ap-gremios',  file: 'apendice_gremios_e_escolas.md',   title: 'Apêndice — Grêmios e Escolas' },
    ],
  },

  {
    id: 'l6',
    group: 'academia',
    title: 'L6 — Laços & Máscaras',
    subtitle: 'Shōnen, psicológico',
    path: 'Academia Arcana Victory/Suplementos/L6_Lacos_e_Mascaras',
    chapters: [
      { id: 'visao-geral', file: 'README.md',                        title: 'Visão Geral' },
      { id: 'cap00',       file: 'cap00_lacos_como_sistema.md',       title: 'Cap. 0 — Laços como Sistema' },
      { id: 'cap01',       file: 'cap01_a_academia_ninja.md',         title: 'Cap. 1 — A Academia Ninja' },
      { id: 'cap02',       file: 'cap02_a_guilda_e_a_familia.md',     title: 'Cap. 2 — A Guilda e a Família' },
      { id: 'cap03',       file: 'cap03_persona_e_o_outro_mundo.md',  title: 'Cap. 3 — Persona e o Outro Mundo' },
      { id: 'cap04',       file: 'cap04_festival_de_inverno.md',      title: 'Cap. 4 — Festival de Inverno' },
      { id: 'cap05',       file: 'cap05_progressao_de_vinculo.md',    title: 'Cap. 5 — Progressão de Vínculo' },
      { id: 'cap06',       file: 'cap06_a_missao_de_formatura.md',    title: 'Cap. 6 — A Missão de Formatura' },
      { id: 'ap-gremios',  file: 'apendice_gremios_e_escolas.md',     title: 'Apêndice — Grêmios e Escolas' },
    ],
  },

  {
    id: 'l7',
    group: 'academia',
    title: 'L7 — Desejos & Portais',
    subtitle: 'Cômico, colorido',
    path: 'Academia Arcana Victory/Suplementos/L7_Desejos_e_Portais',
    chapters: [
      { id: 'visao-geral',  file: 'README.md',                       title: 'Visão Geral' },
      { id: 'cap00',        file: 'cap00_criatividade_com_paredes.md',title: 'Cap. 0 — Criatividade com Paredes' },
      { id: 'cap01',        file: 'cap01_desejos_e_travessuras.md',   title: 'Cap. 1 — Desejos e Travessuras' },
      { id: 'cap02',        file: 'cap02_magia_dimensional.md',       title: 'Cap. 2 — Magia Dimensional' },
      { id: 'cap03',        file: 'cap03_consequencia_criativa.md',   title: 'Cap. 3 — Consequência Criativa' },
      { id: 'cap04',        file: 'cap04_o_desejo_dimensional.md',    title: 'Cap. 4 — O Desejo Dimensional' },
      { id: 'ap-dimensoes', file: 'apendice_20_dimensoes.md',         title: 'Apêndice — 20 Dimensões' },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // BATALHA TOTAL VICTORY
  // ═══════════════════════════════════════════════════════════

  {
    id: 'btv-livro',
    group: 'batalha',
    title: 'Livro Base',
    subtitle: 'Batalha Total Victory',
    path: 'Batalha Total Victory/Livro',
    chapters: [
      { id: 'intro',    file: '00_introducao.md',                  title: 'Introdução' },
      { id: 'cap01',    file: 'cap01_o_campo_de_batalha.md',       title: 'Cap. 1 — O Campo de Batalha' },
      { id: 'cap02',    file: 'cap02_tropas_e_formacoes.md',       title: 'Cap. 2 — Tropas e Formações' },
      { id: 'cap03',    file: 'cap03_a_escala_da_guerra.md',       title: 'Cap. 3 — A Escala da Guerra' },
      { id: 'cap04',    file: 'cap04_mechas_kaijus_colossais.md',  title: 'Cap. 4 — Mechas, Kaijus & Colossais' },
      { id: 'cap05',    file: 'cap05_o_custo_humano.md',           title: 'Cap. 5 — O Custo Humano' },
      { id: 'cap06',    file: 'cap06_motores_da_destruicao.md',    title: 'Cap. 6 — Motores da Destruição' },
      { id: 'cap07',    file: 'cap07_comandando_a_batalha.md',     title: 'Cap. 7 — Comandando a Batalha' },
      { id: 'ap-a',     file: 'apendice_a_fantasia_medieval.md',   title: 'Apêndice A — Fantasia Medieval' },
      { id: 'ap-b',     file: 'apendice_b_grimdark_scifi.md',      title: 'Apêndice B — Grimdark Sci-Fi' },
      { id: 'ap-c',     file: 'apendice_c_falgsc.md',              title: 'Apêndice C — Hist. Alternativa' },
    ],
  },

  {
    id: 'btv-estelar',
    group: 'batalha',
    title: 'Fronteira Estelar',
    subtitle: 'Combate espacial',
    path: 'Batalha Total Victory/Suplementos/Fronteira_Estelar',
    chapters: [
      { id: 'intro',   file: '00_introducao_estelar.md',      title: 'Introdução' },
      { id: 'cap01',   file: 'cap01_escalas_no_vacuo.md',     title: 'Cap. 1 — Escalas no Vácuo' },
      { id: 'cap02',   file: 'cap02_combate_espacial.md',     title: 'Cap. 2 — Combate Espacial' },
      { id: 'cap03',   file: 'cap03_naves_estelares.md',      title: 'Cap. 3 — Naves Estelares' },
      { id: 'cap04',   file: 'cap04_desgaste_estelar.md',     title: 'Cap. 4 — Desgaste Estelar' },
      { id: 'cap05',   file: 'cap05_bestiario_estelar.md',    title: 'Cap. 5 — Bestiário Estelar' },
      { id: 'cap06',   file: 'cap06_faccoes_e_cenarios.md',   title: 'Cap. 6 — Facções e Cenários' },
      { id: 'cap07',   file: 'cap07_campanhas_estelares.md',  title: 'Cap. 7 — Campanhas Estelares' },
    ],
  },

  {
    id: 'btv-mar',
    group: 'batalha',
    title: 'Mar de Lendas',
    subtitle: 'Combate naval',
    path: 'Batalha Total Victory/Suplementos/Mar_de_Lendas',
    chapters: [
      { id: 'intro',   file: '00_introducao_maritima.md',             title: 'Introdução' },
      { id: 'cap01',   file: 'cap01_escalas_no_mar.md',               title: 'Cap. 1 — Escalas no Mar' },
      { id: 'cap02',   file: 'cap02_combate_naval.md',                title: 'Cap. 2 — Combate Naval' },
      { id: 'cap03',   file: 'cap03_navios_e_espirito.md',            title: 'Cap. 3 — Navios e Espírito' },
      { id: 'cap04',   file: 'cap04_terreno_maritimo.md',             title: 'Cap. 4 — Terreno Marítimo' },
      { id: 'cap05',   file: 'cap05_bestiario_maritimo.md',           title: 'Cap. 5 — Bestiário Marítimo' },
      { id: 'cap06',   file: 'cap06_faccoes_e_cenarios_maritimos.md', title: 'Cap. 6 — Facções e Cenários' },
      { id: 'cap07',   file: 'cap07_campanhas_maritimas.md',          title: 'Cap. 7 — Campanhas Marítimas' },
    ],
  },
];
