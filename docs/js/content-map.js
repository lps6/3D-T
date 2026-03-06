// Academia Arcana Victory — Content Map
// Defines every book and chapter available in the reader.
// Order here = order in the sidebar and in prev/next navigation.

const CONTENT_MAP = [
  // ─────────────────────────────────────────────────────────────
  // LIVRO BASE
  // ─────────────────────────────────────────────────────────────
  {
    id: 'livro',
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

  // ─────────────────────────────────────────────────────────────
  // ÍNDICE DE SUPLEMENTOS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'suplementos',
    title: 'Suplementos',
    subtitle: 'Visão Geral',
    path: 'Academia Arcana Victory/Suplementos',
    chapters: [
      { id: 'indice', file: 'INDICE_SUPLEMENTOS.md', title: 'Índice de Suplementos' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // L0 — A Verdade da Arca
  // ─────────────────────────────────────────────────────────────
  {
    id: 'l0',
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

  // ─────────────────────────────────────────────────────────────
  // L1 — Estrelas & Cristais
  // ─────────────────────────────────────────────────────────────
  {
    id: 'l1',
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

  // ─────────────────────────────────────────────────────────────
  // L2 — Tinta & Sombras
  // ─────────────────────────────────────────────────────────────
  {
    id: 'l2',
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

  // ─────────────────────────────────────────────────────────────
  // L3 — Palavras de Poder
  // ─────────────────────────────────────────────────────────────
  {
    id: 'l3',
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

  // ─────────────────────────────────────────────────────────────
  // L4 — Sangue & Legado
  // ─────────────────────────────────────────────────────────────
  {
    id: 'l4',
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

  // ─────────────────────────────────────────────────────────────
  // L5 — Fogo & Liberdade
  // ─────────────────────────────────────────────────────────────
  {
    id: 'l5',
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

  // ─────────────────────────────────────────────────────────────
  // L6 — Laços & Máscaras
  // ─────────────────────────────────────────────────────────────
  {
    id: 'l6',
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

  // ─────────────────────────────────────────────────────────────
  // L7 — Desejos & Portais
  // ─────────────────────────────────────────────────────────────
  {
    id: 'l7',
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
];
