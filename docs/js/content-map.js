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
    title: 'Academia Arcana Victory',
    subtitle: 'DLC Base de Escola de Magia & Aventura',
    path: 'Academia Arcana Victory/Livro',
    chapters: [
      { id: 'Indice',  file: 'indice.md',                              title: 'Índice Geral' },
      { id: 'Introdução',   file: 'cap00_introducao.md',                    title: 'Cap. 0 — Introdução' },
      { id: 'Personagens',   file: 'cap01_criacao_personagem.md',            title: 'Cap. 1 — Criação de Personagem' },
      { id: 'Academia',   file: 'cap02_a_academia.md',                    title: 'Cap. 2 — A Academia' },
      { id: 'Gremios',   file: 'cap03_as_casas.md',                      title: 'Cap. 3 — Os Grêmios' },
      { id: 'NPCs',   file: 'cap04_professores_npcs.md',              title: 'Cap. 4 — Professores e NPCs' },
      { id: 'Estudantes',   file: 'cap05_vida_estudantil.md',               title: 'Cap. 5 — Vida Estudantil' },
      { id: 'Sistemas',   file: 'cap06_mecanicas.md',                     title: 'Cap. 6 — Novas Mecânicas' },
      { id: 'Mundo',   file: 'cap07_mundo_ao_redor.md',                title: 'Cap. 7 — O Mundo ao Redor' },
      { id: 'Arrecife',   file: 'cap08_arrecife_arcano.md',               title: 'Cap. 8 — Arrecife Arcano' },
      { id: 'Mestre',   file: 'cap09_toolkit_mestre.md',                title: 'Cap. 9 — Toolkit do Mestre' },
      { id: 'Campanha',   file: 'cap10_campanha.md',                      title: 'Cap. 10 — Estrutura de Campanha' },
      { id: '+Regras',   file: 'cap11_mais_regras.md',                   title: 'Cap. 11 — +Regras da Academia' },
      { id: 'Arsenal',   file: 'cap12_arsenal_do_arcanauta.md',          title: 'Cap. 12 — Arsenal do Arcanauta' },
      { id: 'Aventura',   file: 'cap13_modulo_inicio.md',                 title: 'Cap. 13 — Módulo de Início' },
      { id: 'Custo',   file: 'cap14_o_custo_da_magia.md',              title: 'Cap. 14 — O Custo da Magia' },
      { id: 'Renegados',   file: 'cap15_os_renegados.md',                  title: 'Cap. 15 — Os Renegados' },
      { id: 'Ficha',   file: 'Ficha_de_Personagem_Academia_Arcana.md', title: 'Ficha de Personagem' },
    ],
  },

  {
    id: 'AAV-0',
    group: 'academia',
    title: 'A Verdade da Arca',
    subtitle: 'Suspense institucional',
    path: 'Academia Arcana Victory/Suplementos/L0_A_Verdade_da_Arca',
    chapters: [
      { id: 'visao-geral',   file: 'README.md',                        title: 'Visão Geral' },
      { id: 'Linha do Tempo',file: 'cap00_a_linha_do_tempo.md',         title: 'Cap. 0 — A Linha do Tempo' },
      { id: 'Protocolo Ala Leste',         file: 'cap01_protocolo_ala_leste.md',      title: 'Cap. 1 — Protocolo Ala Leste' },
      { id: 'O Calouro que Sumiu',         file: 'cap02_o_calouro_que_sumiu.md',      title: 'Cap. 2 — O Calouro que Sumiu' },
      { id: 'Quando a Arca Estremece',         file: 'cap03_quando_a_arca_estremece.md',  title: 'Cap. 3 — Quando a Arca Estremece' },
      { id: 'Pós-Graduação: Os Mestres',         file: 'cap04_pos_graduacao_os_mestres.md', title: 'Cap. 4 — Pós-Graduação: Os Mestres' },
      { id: 'Como Modular',    file: 'apendice_como_modular.md',          title: 'Apêndice — Como Modular' },
      { id: 'Grêmios e Escolas',    file: 'apendice_gremios_e_escolas.md',     title: 'Apêndice — Grêmios e Escolas' },
    ],
  },

  {
    id: 'AAV-1',
    group: 'academia',
    title: 'Estrelas & Cristais',
    subtitle: 'Luminoso, épico, otimista',
    path: 'Academia Arcana Victory/Suplementos/L1_Estrelas_e_Cristais',
    chapters: [
      { id: 'visao-geral', file: 'README.md',                          title: 'Visão Geral' },
      { id: 'Mahou Shoujo', file: 'cap00_mahou_shoujo_na_mesa.md',       title: 'Cap. 0 — Mahou Shoujo na Mesa' },
      { id: 'Sentinelas do Solstício',       file: 'cap01_sentinelas_do_solsticio.md',    title: 'Cap. 1 — Sentinelas do Solstício' },
      { id: 'Guardiãs de Coleção',         file: 'cap02_artefatos_errantes.md',         title: 'Cap. 2 — Guardiãs de Coleção' },
      { id: 'Parceiras de Ressonância',       file: 'cap03_parceiras_de_ressonancia.md',   title: 'Cap. 3 — Parceiras de Ressonância' },
      { id: 'Cavaleiras do Vórtice',      file: 'cap04_cavaleiras_do_vortice.md',      title: 'Cap. 4 — Cavaleiras do Vórtice' },
      { id: 'O Primeiro Derby',           file: 'cap05_o_primeiro_derby.md',           title: 'Cap. 5 — O Primeiro Derby' },
      { id: 'Mecânica de Transformação',       file: 'cap06_mecanica_de_transformacao.md',  title: 'Cap. 6 — Mecânica de Transformação' },
      { id: 'O Primeiro Despertar',       file: 'cap07_o_primeiro_despertar.md',       title: 'Cap. 7 — O Primeiro Despertar' },
      { id: 'Grêmios e Escolas',  file: 'apendice_gremios_e_escolas.md',       title: 'Apêndice — Grêmios e Escolas' },
    ],
  },

  {
    id: 'AAV-2',
    group: 'academia',
    title: 'Tinta & Sombras',
    subtitle: 'Sombrio, horror atmosférico',
    path: 'Academia Arcana Victory/Suplementos/L2_Tinta_e_Sombras',
    chapters: [
      { id: 'visao-geral', file: 'README.md',                          title: 'Visão Geral' },
      { id: 'Calibrando a Escuridão',    file: 'cap00_calibrando_a_escuridao.md',     title: 'Cap. 0 — Calibrando a Escuridão' },
      { id: 'A Escola de Farhaven',       file: 'cap01_a_escola_de_farhaven.md',           title: 'Cap. 1 — A Escola de Farhaven' },
      { id: 'O Colegiado de Thaumaturgia Aplicada',       file: 'cap02_o_colegiado_de_thaumaturgia_aplicada.md',              title: 'Cap. 2 — O Colegiado de Thaumaturgia Aplicada' },
      { id: 'Somática Arcana',       file: 'cap03_somatica_arcana.md',            title: 'Cap. 3 — Somática Arcana' },
      { id: 'Academia Gótica',       file: 'cap04_academia_gotica.md',            title: 'Cap. 4 — Academia Gótica' },
      { id: 'O Crisol Sem Mestre',       file: 'cap05_o_crisol_sem_mestre.md',        title: 'Cap. 5 — O Crisol Sem Mestre' },
      { id: 'A Noite na Biblioteca',       file: 'cap06_a_noite_na_biblioteca.md',      title: 'Cap. 6 — A Noite na Biblioteca' },
      { id: 'A Aula que Não Acabou',       file: 'cap07_a_aula_que_nao_acabou.md',      title: 'Cap. 7 — A Aula que Não Acabou' },
      { id: 'Grêmios e Escolas',  file: 'apendice_gremios_e_escolas.md',       title: 'Apêndice — Grêmios e Escolas' },
    ],
  },

  {
    id: 'AAV-3',
    group: 'academia',
    title: 'Palavras de Poder',
    subtitle: 'Contemplativo, rigoroso',
    path: 'Academia Arcana Victory/Suplementos/L3_Palavras_de_Poder',
    chapters: [
      { id: 'visao-geral', file: 'README.md',                               title: 'Visão Geral' },
      { id: 'Palavras e Poder',       file: 'cap00_palavras_que_fazem_coisas.md',       title: 'Cap. 0 — Palavras que Fazem Coisas' },
      { id: 'Saleth',       file: 'cap01_a_universidade_de_saleth.md',        title: 'Cap. 1 — A Universidade de Saleth' },
      { id: 'Cavaleiros do Eco',       file: 'cap02_a_ordem_dos_cavaleiros_do_eco.md',   title: 'Cap. 2 — Cavaleiros do Eco' },
      { id: 'Nomes Verdadeiros',       file: 'cap03_nomes_verdadeiros.md',               title: 'Cap. 3 — Nomes Verdadeiros' },
      { id: 'Hard, Soft & o Gradiente',       file: 'cap04_hard_soft_gradiente.md',             title: 'Cap. 4 — Hard, Soft & o Gradiente' },
      { id: 'O Nome que o Grimório Esqueceu',       file: 'cap05_o_nome_que_o_grimorio_esqueceu.md',  title: 'Cap. 5 — O Nome que o Grimório Esqueceu' },
      { id: 'Grêmios e Escolas',  file: 'apendice_gremios_e_escolas.md',            title: 'Apêndice — Grêmios e Escolas' },
    ],
  },

  {
    id: 'AAV-4',
    group: 'academia',
    title: 'Sangue & Legado',
    subtitle: 'Aventureiro, institucional',
    path: 'Academia Arcana Victory/Suplementos/L4_Sangue_e_Legado',
    chapters: [
      { id: 'visao-geral', file: 'README.md',                          title: 'Visão Geral' },
      { id: 'Linhagem como Mecânica',       file: 'cap00_linhagem_como_mecanica.md',     title: 'Cap. 0 — Linhagem como Mecânica' },
      { id: 'Academia Thornwall',       file: 'cap01_academia_thornwall.md',         title: 'Cap. 1 — Academia Thornwall' },
      { id: 'Campo das Convergências',       file: 'cap02_campo_das_convergencias.md',    title: 'Cap. 2 — Campo das Convergências' },
      { id: 'Ordem dos Glifeiros',       file: 'cap03_ordem_dos_glifeiros.md',        title: 'Cap. 3 — Ordem dos Glifeiros' },
      { id: 'Sociedades Secretas',       file: 'cap04_sociedades_secretas.md',        title: 'Cap. 4 — Sociedades Secretas' },
      { id: 'Manual do Estudante Arcano',       file: 'cap05_manual_do_estudante_arcano.md', title: 'Cap. 5 — Manual do Estudante Arcano' },
      { id: 'A Outra Escola: Brambleshire',       file: 'cap06_a_outra_escola_brambleshire.md',title: 'Cap. 6 — A Outra Escola: Brambleshire' },
      { id: 'O Torneio das Escolas',       file: 'cap07_o_torneio_das_escolas.md',      title: 'Cap. 7 — O Torneio das Escolas' },
      { id: 'Opções de Personagem',   file: 'apendice_opcoes_de_personagem.md',    title: 'Apêndice — Opções de Personagem' },
    ],
  },

  {
    id: 'AAV-5',
    group: 'academia',
    title: 'Fogo & Liberdade',
    subtitle: 'Épico, político',
    path: 'Academia Arcana Victory/Suplementos/L5_Fogo_e_Liberdade',
    chapters: [
      { id: 'visao-geral', file: 'README.md',                      title: 'Visão Geral' },
      { id: 'A Revolução na Mesa',       file: 'cap00_a_revolucao_na_mesa.md',    title: 'Cap. 0 — A Revolução na Mesa' },
      { id: 'A Era dos Metais',       file: 'cap01_a_era_dos_metais.md',       title: 'Cap. 1 — A Era dos Metais' },
      { id: 'A Escola da Bruxa Coruja',       file: 'cap02_a_bruxa_coruja.md',         title: 'Cap. 2 — A Escola da Bruxa Coruja' },
      { id: 'Quatro Nações',       file: 'cap03_quatro_nacoes.md',          title: 'Cap. 3 — Quatro Nações' },
      { id: 'Caldeira: Férias Arcanas',       file: 'cap04_caldeira.md',               title: 'Cap. 4 — Caldeira: Férias Arcanas' },
      { id: 'Reputação Faccional',       file: 'cap05_reputacao_faccional.md',    title: 'Cap. 5 — Reputação Faccional' },
      { id: 'O Manifesto',       file: 'cap06_o_manifesto.md',            title: 'Cap. 6 — O Manifesto' },
      { id: 'Grêmios e Escolas',  file: 'apendice_gremios_e_escolas.md',   title: 'Apêndice — Grêmios e Escolas' },
    ],
  },

  {
    id: 'AAV-6',
    group: 'academia',
    title: 'Laços & Máscaras',
    subtitle: 'Shōnen, psicológico',
    path: 'Academia Arcana Victory/Suplementos/L6_Lacos_e_Mascaras',
    chapters: [
      { id: 'visao-geral', file: 'README.md',                        title: 'Visão Geral' },
      { id: 'Laços',       file: 'cap00_lacos_como_sistema.md',       title: 'Cap. 0 — Laços como Sistema' },
      { id: 'A Academia Ninja',       file: 'cap01_a_academia_ninja.md',         title: 'Cap. 1 — A Academia Ninja' },
      { id: 'A Guilda e a Família',       file: 'cap02_a_guilda_e_a_familia.md',     title: 'Cap. 2 — A Guilda e a Família' },
      { id: 'Persona e o Outro Mundo',       file: 'cap03_persona_e_o_outro_mundo.md',  title: 'Cap. 3 — Persona e o Outro Mundo' },
      { id: 'Festival de Inverno',       file: 'cap04_festival_de_inverno.md',      title: 'Cap. 4 — Festival de Inverno' },
      { id: 'Progressão de Vínculo',       file: 'cap05_progressao_de_vinculo.md',    title: 'Cap. 5 — Progressão de Vínculo' },
      { id: 'A Missão de Formatura',       file: 'cap06_a_missao_de_formatura.md',    title: 'Cap. 6 — A Missão de Formatura' },
      { id: 'Grêmios e Escolas',  file: 'apendice_gremios_e_escolas.md',     title: 'Apêndice — Grêmios e Escolas' },
    ],
  },

  {
    id: 'AAV-7',
    group: 'academia',
    title: 'Desejos & Portais',
    subtitle: 'Cômico, colorido',
    path: 'Academia Arcana Victory/Suplementos/L7_Desejos_e_Portais',
    chapters: [
      { id: 'visao-geral',  file: 'README.md',                       title: 'Visão Geral' },
      { id: 'Paredes',        file: 'cap00_criatividade_com_paredes.md',title: 'Cap. 0 — Criatividade com Paredes' },
      { id: 'Desejos e Travessuras',        file: 'cap01_desejos_e_travessuras.md',   title: 'Cap. 1 — Desejos e Travessuras' },
      { id: 'Magia Dimensional',        file: 'cap02_magia_dimensional.md',       title: 'Cap. 2 — Magia Dimensional' },
      { id: 'Consequência Criativa',        file: 'cap03_consequencia_criativa.md',   title: 'Cap. 3 — Consequência Criativa' },
      { id: 'O Desejo Dimensional',        file: 'cap04_o_desejo_dimensional.md',    title: 'Cap. 4 — O Desejo Dimensional' },
      { id: '20 Dimensões', file: 'apendice_20_dimensoes.md',         title: 'Apêndice — 20 Dimensões' },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // BATALHA TOTAL VICTORY
  // ═══════════════════════════════════════════════════════════

  {
    id: 'btv-livro',
    group: 'batalha',
    title: 'Batalha Total Victory',
    subtitle: 'DLC Base de Combate de Miniaturas',
    path: 'Batalha Total Victory/Livro',
    chapters: [
      { id: 'intro',    file: '00_introducao.md',                  title: 'Introdução' },
      { id: 'Campo de Batalha',    file: 'cap01_o_campo_de_batalha.md',       title: 'Cap. 1 — O Campo de Batalha' },
      { id: 'Tropas e Formações',    file: 'cap02_tropas_e_formacoes.md',       title: 'Cap. 2 — Tropas e Formações' },
      { id: 'A Escala da Guerra',    file: 'cap03_a_escala_da_guerra.md',       title: 'Cap. 3 — A Escala da Guerra' },
      { id: 'Mechas, Kaijus & Colossais',    file: 'cap04_mechas_kaijus_colossais.md',  title: 'Cap. 4 — Mechas, Kaijus & Colossais' },
      { id: 'O Custo Humano',    file: 'cap05_o_custo_humano.md',           title: 'Cap. 5 — O Custo Humano' },
      { id: 'Motores da Destruição',    file: 'cap06_motores_da_destruicao.md',    title: 'Cap. 6 — Motores da Destruição' },
      { id: 'Comandando a Batalha',    file: 'cap07_comandando_a_batalha.md',     title: 'Cap. 7 — Comandando a Batalha' },
    ],
  },

  {
    id: 'btv-estelar',
    group: 'batalha',
    title: 'Fronteira Estelar',
    subtitle: 'Combate espacial na fronteira entre um império galáctico decadente e uma cooperativa espacial de comunas e coletivos anarquistas',
    path: 'Batalha Total Victory/Suplementos/Fronteira_Estelar',
    chapters: [
      { id: 'Introdução',   file: '00_introducao_estelar.md',      title: 'Introdução' },
      { id: 'Escalas no Vácuo',   file: 'cap01_escalas_no_vacuo.md',     title: 'Cap. 1 — Escalas no Vácuo' },
      { id: 'Combate Espacial',   file: 'cap02_combate_espacial.md',     title: 'Cap. 2 — Combate Espacial' },
      { id: 'Naves Estelares',   file: 'cap03_naves_estelares.md',      title: 'Cap. 3 — Naves Estelares' },
      { id: 'Desgaste Estelar',   file: 'cap04_desgaste_estelar.md',     title: 'Cap. 4 — Desgaste Estelar' },
      { id: 'Bestiário Estelar',   file: 'cap05_bestiario_estelar.md',    title: 'Cap. 5 — Bestiário Estelar' },
      { id: 'Facções e Cenários',   file: 'cap06_faccoes_e_cenarios.md',   title: 'Cap. 6 — Facções e Cenários' },
      { id: 'Campanhas Estelares',   file: 'cap07_campanhas_estelares.md',  title: 'Cap. 7 — Campanhas Estelares' },
      { id: 'Legacy B (Core)',   file: 'legacy_apendice_b_grimdark_scifi.md',  title: 'Legacy — Apêndice B (Core)' },
      { id: 'Legacy C (Core)',   file: 'legacy_apendice_c_falgsc.md',  title: 'Legacy — Apêndice C (Core)' },
    ],
  },

  {
    id: 'btv-mar',
    group: 'batalha',
    title: 'Mar de Lendas',
    subtitle: 'Combate naval, ilhas fantásticas, pirataria e monstros marinhos',
    path: 'Batalha Total Victory/Suplementos/Mar_de_Lendas',
    chapters: [
      { id: 'Introdução',   file: '00_introducao_maritima.md',             title: 'Introdução' },
      { id: 'Escalas no Mar',   file: 'cap01_escalas_no_mar.md',               title: 'Cap. 1 — Escalas no Mar' },
      { id: 'Combate Naval',   file: 'cap02_combate_naval.md',                title: 'Cap. 2 — Combate Naval' },
      { id: 'Navios e Espírito',   file: 'cap03_navios_e_espirito.md',            title: 'Cap. 3 — Navios e Espírito' },
      { id: 'Terreno Marítimo',   file: 'cap04_terreno_maritimo.md',             title: 'Cap. 4 — Terreno Marítimo' },
      { id: 'Bestiário Marítimo',   file: 'cap05_bestiario_maritimo.md',           title: 'Cap. 5 — Bestiário Marítimo' },
      { id: 'Facções e Cenários',   file: 'cap06_faccoes_e_cenarios_maritimos.md', title: 'Cap. 6 — Facções e Cenários' },
      { id: 'Campanhas Marítimas',   file: 'cap07_campanhas_maritimas.md',          title: 'Cap. 7 — Campanhas Marítimas' },
    ],
  },
/*
  {
    id: 'btv-coroas',
    group: 'batalha',
    title: 'Guerra das Coroas',
    subtitle: 'Campanha medieval de cerco, logística e política de guerra',
    path: 'Batalha Total Victory/Suplementos/Guerra_das_Coroas',
    chapters: [
      { id: 'Índice',   file: 'indice.md',                           title: 'Índice' },
      { id: 'Introdução',   file: '00_introducao_guerra_das_coroas.md',    title: 'Introdução' },
      { id: 'Escalas na Terra',   file: 'cap01_escalas_na_terra.md',            title: 'Cap. 1 — Escalas na Terra' },
      { id: 'Campo de Batalha Medieval',   file: 'cap02_campo_de_batalha_medieval.md',  title: 'Cap. 2 — Campo de Batalha Medieval' },
      { id: 'Exércitos e Companhias',   file: 'cap03_exercitos_e_companhias.md',      title: 'Cap. 3 — Exércitos e Companhias' },
      { id: 'Cercos e Fortalezas',   file: 'cap04_cercos_e_fortalezas.md',          title: 'Cap. 4 — Cercos e Fortalezas' },
      { id: 'Logística e Estações',   file: 'cap05_logistica_e_estacoes.md',         title: 'Cap. 5 — Logística e Estações' },
      { id: 'Facções e Personagens',   file: 'cap06_faccoes_e_personagens.md',        title: 'Cap. 6 — Facções e Personagens' },
      { id: 'Campanhas de Reino',   file: 'cap07_campanhas_de_reino.md',          title: 'Cap. 7 — Campanhas de Reino' },
      { id: 'Legacy A (Core)',   file: 'legacy_apendice_a_fantasia_medieval.md',          title: 'Legacy — Apêndice A (Core)' },
    ],
  },
  */
];
