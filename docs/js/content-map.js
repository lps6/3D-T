// 3D&T Victory Fan DLC — Content Map
// Supports both wiki-style categories (AAV Content) and traditional books (BTV, TCV).

// ── Groups (DLC collections) ──────────────────────────────────
const CONTENT_GROUPS = [
  {
    id: 'academia',
    title: 'Academia Arcana Victory',
    subtitle: 'Escola de Magia & Aventura',
    description: 'Wiki interconectada de RPG — explore por categoria ou leia linearmente.',
  },
  {
    id: 'batalha',
    title: 'Batalha Total Victory',
    subtitle: 'Conflitos em Escala — Beta',
    description: 'Regras modulares para guerras, mechas e kaijus em qualquer escala.',
  },
  {
    id: 'telecatch',
    title: 'TeleCatch Victory',
    subtitle: 'Wrestling Sobrenatural',
    description: 'Telecatch profissional num mundo onde o Kayfabe virou realidade.',
  },
];

// ── Content entries ─────────────────────────────────────────────
const CONTENT_MAP = [

  // ═══════════════════════════════════════════════════════════
  // ACADEMIA ARCANA VICTORY — Wiki Categories
  // ═══════════════════════════════════════════════════════════

  {
    id: 'aav-narrativa',
    group: 'academia',
    title: 'Narrativa e Contexto',
    subtitle: 'Cenas, atmosfera, guia do estudante',
    path: 'Academia Arcana Victory/Content/00_Narrativa_e_Contexto',
    entries: [
      { id: 'Guia_do_Estudante',              label: 'Guia do Estudante',              file: 'Guia_do_Estudante.md' },
      { id: 'Cenas_e_Atmosfera',              label: 'Cenas e Atmosfera',              file: 'Cenas_e_Atmosfera.md' },
      { id: 'Detalhes_e_Curiosidades',         label: 'Detalhes e Curiosidades',         file: 'Detalhes_e_Curiosidades.md' },
      { id: 'Exemplos_de_Personagem_e_Gremio', label: 'Exemplos de Personagem e Grêmio', file: 'Exemplos_de_Personagem_e_Gremio.md' },
    ],
  },

  {
    id: 'aav-regras',
    group: 'academia',
    title: 'Regras e Subsistemas',
    subtitle: 'Criação de personagem, magia, kits, MagiDerby',
    path: 'Academia Arcana Victory/Content/01_Regras_e_Subsistemas',
    entries: [
      // Criação de Personagem
      { id: 'Passo_a_Passo_Criacao',       label: 'Criação Passo a Passo',     file: 'Criacao_de_Personagem/Passo_a_Passo_Criacao.md' },
      { id: 'Vantagens_e_Desvantagens',    label: 'Vantagens e Desvantagens',  file: 'Criacao_de_Personagem/Vantagens_e_Desvantagens.md' },
      { id: 'Sistema_de_Familiar',         label: 'Sistema de Familiar',       file: 'Criacao_de_Personagem/Sistema_de_Familiar.md' },
      { id: 'Sistema_de_Legado_Heranca',   label: 'Sistema de Legado',         file: 'Criacao_de_Personagem/Sistema_de_Legado_Heranca.md' },
      { id: 'Ficha_de_Personagem',         label: 'Ficha de Personagem',       file: 'Criacao_de_Personagem/Ficha_de_Personagem.md' },
      // Kits
      { id: 'Kits_da_Academia_Base',       label: 'Kits da Academia',          file: 'Kits/Kits_da_Academia_Base.md' },
      // Magia e Sistemas
      { id: 'Especializacoes_e_Pericias_Magicas', label: 'Especializações e Perícias', file: 'Magia_e_Sistemas/Especializacoes_e_Pericias_Magicas.md' },
      { id: 'Magia_Improvisada',           label: 'Magia Improvisada',         file: 'Magia_e_Sistemas/Magia_Improvisada.md' },
      { id: 'O_Custo_da_Magia',            label: 'O Custo da Magia',          file: 'Magia_e_Sistemas/O_Custo_da_Magia.md' },
      { id: 'Fragmentacao_e_Magia_Dificil', label: 'Fragmentação e Magia Difícil', file: 'Magia_e_Sistemas/Fragmentacao_e_Magia_Dificil.md' },
      { id: 'Somatica_Arcana_e_Vicio',     label: 'Somática Arcana e Vício',   file: 'Magia_e_Sistemas/Somatica_Arcana_e_Vicio.md' },
      { id: 'Palavras_de_Poder_e_Nomes',   label: 'Palavras de Poder',         file: 'Magia_e_Sistemas/Palavras_de_Poder_e_Nomes.md' },
      { id: 'Glifomagia_e_Trilha_Unica',   label: 'Glifomagia',               file: 'Magia_e_Sistemas/Glifomagia_e_Trilha_Unica.md' },
      { id: 'Metalurgia_Arcana',            label: 'Metalurgia Arcana',         file: 'Magia_e_Sistemas/Metalurgia_Arcana.md' },
      { id: 'Tipos_de_Dano_Arcano',         label: 'Tipos de Dano Arcano',      file: 'Magia_e_Sistemas/Tipos_de_Dano_Arcano.md' },
      { id: 'Marcadores_de_Chi_e_Elementos', label: 'Marcadores de Chi',        file: 'Magia_e_Sistemas/Marcadores_de_Chi_e_Elementos.md' },
      { id: 'Pressao_Ambiental_e_Afinidade', label: 'Pressão Ambiental',        file: 'Magia_e_Sistemas/Pressao_Ambiental_e_Afinidade.md' },
      { id: 'Sistema_de_Grimorios',          label: 'Sistema de Grimórios',      file: 'Magia_e_Sistemas/Sistema_de_Grimorios.md' },
      { id: 'Essencia_Magica_e_Portais',     label: 'Essência Mágica e Portais', file: 'Magia_e_Sistemas/Essencia_Magica_e_Portais.md' },
      { id: 'Desejos_e_Tribunal_das_Fadas',  label: 'Desejos e Tribunal das Fadas', file: 'Magia_e_Sistemas/Desejos_e_Tribunal_das_Fadas.md' },
      { id: 'Consequencia_Criativa',          label: 'Consequência Criativa',     file: 'Magia_e_Sistemas/Consequencia_Criativa.md' },
      { id: 'O_Avesso_e_Vida_Dupla',         label: 'O Avesso e Vida Dupla',     file: 'Magia_e_Sistemas/O_Avesso_e_Vida_Dupla.md' },
      { id: 'Vinculos_de_Campanha',           label: 'Vínculos de Campanha',      file: 'Magia_e_Sistemas/Vinculos_de_Campanha.md' },
      // MagiDerby
      { id: 'Regras_MagiDerby',              label: 'MagiDerby',                 file: 'MagiDerby/Regras_MagiDerby.md' },
    ],
  },

  {
    id: 'aav-escolas',
    group: 'academia',
    title: 'Escolas e Instituições',
    subtitle: 'A Academia, escolas internacionais, ordens',
    path: 'Academia Arcana Victory/Content/02_Escolas_e_Instituicoes',
    entries: [
      // Academia Arcana Victory
      { id: 'Historia_e_Fundacao',        label: 'História e Fundação',            file: 'Academia_Arcana_Victory/Historia_e_Fundacao.md' },
      { id: 'O_Campus',                   label: 'O Campus',                       file: 'Academia_Arcana_Victory/O_Campus.md' },
      { id: 'Admissao_e_Regras',          label: 'Admissão e Regras',              file: 'Academia_Arcana_Victory/Admissao_e_Regras.md' },
      { id: 'A_Ala_Leste',                label: 'A Ala Leste',                    file: 'Academia_Arcana_Victory/A_Ala_Leste.md' },
      // Escolas Internacionais
      { id: 'Academia_Thornwall',          label: 'Academia Thornwall',             file: 'Escolas_Internacionais/Academia_Thornwall.md' },
      { id: 'Brambleshire_Academy',        label: 'Brambleshire Academy',           file: 'Escolas_Internacionais/Brambleshire_Academy.md' },
      { id: 'Universidade_de_Saleth',      label: 'Universidade de Saleth',         file: 'Escolas_Internacionais/Universidade_de_Saleth.md' },
      // Ordens e Academias Alternativas
      { id: 'Escola_de_Farhaven',          label: 'Escola de Farhaven',             file: 'Ordens_e_Academias_Alternativas/Escola_de_Farhaven.md' },
      { id: 'Colegiado_de_Thaumaturgia',   label: 'Colegiado de Thaumaturgia',      file: 'Ordens_e_Academias_Alternativas/Colegiado_de_Thaumaturgia.md' },
      { id: 'Escolas_das_Quatro_Formas',   label: 'Escolas das Quatro Formas',      file: 'Ordens_e_Academias_Alternativas/Escolas_das_Quatro_Formas.md' },
      { id: 'Ordem_dos_Cavaleiros_do_Eco', label: 'Ordem dos Cavaleiros do Eco',    file: 'Ordens_e_Academias_Alternativas/Ordem_dos_Cavaleiros_do_Eco.md' },
      { id: 'Ordem_dos_Glifeiros',         label: 'Ordem dos Glifeiros',            file: 'Ordens_e_Academias_Alternativas/Ordem_dos_Glifeiros.md' },
      { id: 'Ordem_das_Convergencias',     label: 'Ordem das Convergências',        file: 'Ordens_e_Academias_Alternativas/Ordem_das_Convergencias.md' },
      { id: 'Gremio_Raizes',               label: 'Grêmio Raízes',                 file: 'Ordens_e_Academias_Alternativas/Gremio_Raizes.md' },
    ],
  },

  {
    id: 'aav-mundo',
    group: 'academia',
    title: 'Mundo e Locais',
    subtitle: 'A Era das Arcas, cidades, dimensões',
    path: 'Academia Arcana Victory/Content/03_Mundo_e_Locais',
    entries: [
      { id: 'A_Era_das_Arcas',             label: 'A Era das Arcas',              file: 'A_Era_das_Arcas.md' },
      // Cidades
      { id: 'Arrecife_Arcano',             label: 'Arrecife Arcano',              file: 'Cidades/Arrecife_Arcano.md' },
      { id: 'Caldeira',                    label: 'Caldeira',                     file: 'Cidades/Caldeira.md' },
      { id: 'Lutharin',                    label: 'Lutharin',                     file: 'Cidades/Lutharin.md' },
      { id: 'Neo_Sampa',                   label: 'Neo Sampa',                    file: 'Cidades/Neo_Sampa.md' },
      { id: 'Vallindra',                   label: 'Vallindra',                    file: 'Cidades/Vallindra.md' },
      // Dimensões
      { id: 'Dimensoes_Alternativas',      label: 'Dimensões Alternativas',       file: 'Dimensoes/Dimensoes_Alternativas.md' },
      { id: 'O_Avesso',                    label: 'O Avesso',                     file: 'Dimensoes/O_Avesso.md' },
    ],
  },

  {
    id: 'aav-gremios',
    group: 'academia',
    title: 'Grêmios e Facções',
    subtitle: 'Grêmios principais, facções e sociedades secretas',
    path: 'Academia Arcana Victory/Content/04_Gremios_e_Faccoes',
    entries: [
      // Grêmios Principais
      { id: 'Filosofia_e_Bussola_Arcana',  label: 'Filosofia e Bússola Arcana',   file: 'Gremios_Principais/Filosofia_e_Bussola_Arcana.md' },
      { id: 'Casa_da_Coroa',               label: 'Casa da Coroa',                file: 'Gremios_Principais/Casa_da_Coroa.md' },
      { id: 'Castelo_Obsidiana',            label: 'Castelo Obsidiana',            file: 'Gremios_Principais/Castelo_Obsidiana.md' },
      { id: 'Egide',                        label: 'Égide',                        file: 'Gremios_Principais/Egide.md' },
      { id: 'Gremio_do_Subsolo',            label: 'Grêmio do Subsolo',            file: 'Gremios_Principais/Gremio_do_Subsolo.md' },
      { id: 'Gremio_Memoria',               label: 'Grêmio Memória',               file: 'Gremios_Principais/Gremio_Memoria.md' },
      { id: 'Gremio_Monsoon',               label: 'Grêmio Monsoon',               file: 'Gremios_Principais/Gremio_Monsoon.md' },
      { id: 'Gremio_Sintese',               label: 'Grêmio Síntese',               file: 'Gremios_Principais/Gremio_Sintese.md' },
      { id: 'Nova_Aurora',                   label: 'Nova Aurora',                   file: 'Gremios_Principais/Nova_Aurora.md' },
      // Facções e Sociedades
      { id: 'Gremio_Chama_Livre',            label: 'Grêmio Chama Livre',           file: 'Faccoes_e_Sociedades/Gremio_Chama_Livre.md' },
      { id: 'Sociedades_Secretas',            label: 'Sociedades Secretas',           file: 'Faccoes_e_Sociedades/Sociedades_Secretas.md' },
    ],
  },

  {
    id: 'aav-personagens',
    group: 'academia',
    title: 'Personagens e Bestiário',
    subtitle: 'Diretoria, professores, estudantes, criaturas',
    path: 'Academia Arcana Victory/Content/05_Personagens_e_Bestiario',
    entries: [
      // A Diretoria
      { id: 'Talude',                      label: 'Talude',                       file: 'A_Diretoria/Talude.md' },
      { id: 'Wynna',                       label: 'Wynna',                        file: 'A_Diretoria/Wynna.md' },
      { id: 'V3ctor1us',                   label: 'V3ctor1us',                    file: 'A_Diretoria/V3ctor1us.md' },
      // Professores
      { id: 'Mestres_Seniores',            label: 'Mestres Seniores',             file: 'Professores/Mestres_Seniores.md' },
      { id: 'Instrutores_de_Campo',        label: 'Instrutores de Campo',         file: 'Professores/Instrutores_de_Campo.md' },
      { id: 'Outros_Professores',          label: 'Outros Professores',           file: 'Professores/Outros_Professores.md' },
      { id: 'Professores_Externos',        label: 'Professores Externos',         file: 'Professores/Professores_Externos.md' },
      // Staff
      { id: 'Staff_da_Academia',           label: 'Staff da Academia',            file: 'Staff_da_Academia.md' },
      { id: 'Fadas_Madrinhas',             label: 'Fadas Madrinhas',              file: 'Fadas_Madrinhas.md' },
      // Estudantes
      { id: 'Estudantes_da_Academia',      label: 'Estudantes da Academia',       file: 'Estudantes/Estudantes_da_Academia.md' },
      { id: 'Cavaleiras_e_Parceiras',      label: 'Cavaleiras e Parceiras',       file: 'Estudantes/Cavaleiras_e_Parceiras.md' },
      { id: 'Sentinelas_e_Guardias',       label: 'Sentinelas e Guardiãs',        file: 'Estudantes/Sentinelas_e_Guardias.md' },
      { id: 'Estudantes_de_Thornwall',     label: 'Estudantes de Thornwall',      file: 'Estudantes/Estudantes_de_Thornwall.md' },
      { id: 'Estudantes_Internacionais_e_Rivais', label: 'Estudantes Internacionais', file: 'Estudantes/Estudantes_Internacionais_e_Rivais.md' },
      { id: 'Era_dos_Metais_e_Raizes',     label: 'Era dos Metais e Raízes',      file: 'Estudantes/Era_dos_Metais_e_Raizes.md' },
      { id: 'Gremio_Chama_Livre_Estudantes', label: 'Chama Livre (Estudantes)',   file: 'Estudantes/Gremio_Chama_Livre.md' },
      { id: 'Ordem_das_Convergencias_Estudantes', label: 'Convergências (Estudantes)', file: 'Estudantes/Ordem_das_Convergencias.md' },
      { id: 'Quatro_Formas',               label: 'Quatro Formas',                file: 'Estudantes/Quatro_Formas.md' },
      // Bestiário
      { id: 'Maleficaria_do_Campus',       label: 'Maleficária do Campus',        file: 'Bestiario/Maleficaria_do_Campus.md' },
      { id: 'Criaturas_Dimensionais',      label: 'Criaturas Dimensionais',       file: 'Bestiario/Criaturas_Dimensionais.md' },
      { id: 'Demonios',                    label: 'Demônios',                     file: 'Bestiario/Demonios.md' },
      { id: 'Ameacas_Escalaveis',          label: 'Ameaças Escaláveis',           file: 'Bestiario/Ameacas_Escalaveis.md' },
    ],
  },

  {
    id: 'aav-vida',
    group: 'academia',
    title: 'Vida Estudantil',
    subtitle: 'Economia, provas, progresso, relacionamentos',
    path: 'Academia Arcana Victory/Content/06_Vida_Estudantil',
    entries: [
      { id: 'O_Ano_Letivo_e_Provas',       label: 'O Ano Letivo e Provas',        file: 'O_Ano_Letivo_e_Provas.md' },
      { id: 'Economia_e_Campus',            label: 'Economia e Campus',            file: 'Economia_e_Campus.md' },
      { id: 'Progresso_e_Reputacao',        label: 'Progresso e Reputação',        file: 'Progresso_e_Reputacao.md' },
      { id: 'Relacionamentos_e_Lacos',      label: 'Relacionamentos e Laços',      file: 'Relacionamentos_e_Lacos.md' },
    ],
  },

  {
    id: 'aav-mestre',
    group: 'academia',
    title: 'Guia do Mestre e Aventuras',
    subtitle: 'Ferramentas, campanhas, módulos de aventura',
    path: 'Academia Arcana Victory/Content/07_Guia_do_Mestre_e_Aventuras',
    entries: [
      // Ferramentas do Mestre
      { id: 'A_Campanha_Escolar',           label: 'A Campanha Escolar',           file: 'Ferramentas_do_Mestre/A_Campanha_Escolar.md' },
      { id: 'Estruturas_Narrativas',        label: 'Estruturas Narrativas',        file: 'Ferramentas_do_Mestre/Estruturas_Narrativas.md' },
      { id: 'Calibragem_de_Tom_e_Seguranca', label: 'Calibragem de Tom',           file: 'Ferramentas_do_Mestre/Calibragem_de_Tom_e_Seguranca.md' },
      { id: 'Magia_Hard_e_Soft',            label: 'Magia Hard e Soft',            file: 'Ferramentas_do_Mestre/Magia_Hard_e_Soft.md' },
      // Aventuras
      { id: 'Modulo_de_Inicio_Primeiros_Tres_Dias', label: 'Módulo de Início',     file: 'Aventuras/Modulo_de_Inicio_Primeiros_Tres_Dias.md' },
      { id: 'Campanha_A_Verdade_da_Arca',   label: 'A Verdade da Arca',            file: 'Aventuras/Campanha_A_Verdade_da_Arca.md' },
      { id: 'O_Primeiro_Despertar',          label: 'O Primeiro Despertar',         file: 'Aventuras/O_Primeiro_Despertar.md' },
      { id: 'O_Primeiro_Derby',              label: 'O Primeiro Derby',             file: 'Aventuras/O_Primeiro_Derby.md' },
      { id: 'A_Noite_na_Biblioteca',         label: 'A Noite na Biblioteca',        file: 'Aventuras/A_Noite_na_Biblioteca.md' },
      { id: 'A_Aula_Que_Nao_Acabou',        label: 'A Aula que Não Acabou',        file: 'Aventuras/A_Aula_Que_Nao_Acabou.md' },
      { id: 'O_Nome_Que_O_Grimorio_Esqueceu', label: 'O Nome que o Grimório Esqueceu', file: 'Aventuras/O_Nome_Que_O_Grimorio_Esqueceu.md' },
      { id: 'Festival_de_Inverno',           label: 'Festival de Inverno',          file: 'Aventuras/Festival_de_Inverno.md' },
      { id: 'O_Torneio_das_Escolas',         label: 'O Torneio das Escolas',        file: 'Aventuras/O_Torneio_das_Escolas.md' },
      { id: 'O_Manifesto',                   label: 'O Manifesto',                  file: 'Aventuras/O_Manifesto.md' },
      { id: 'A_Missao_de_Formatura',         label: 'A Missão de Formatura',        file: 'Aventuras/A_Missao_de_Formatura.md' },
      { id: 'O_Desejo_Dimensional',          label: 'O Desejo Dimensional',         file: 'Aventuras/O_Desejo_Dimensional.md' },
      { id: 'Campanha_Caldeira_Ferias_Arcanas', label: 'Caldeira: Férias Arcanas',  file: 'Aventuras/Campanha_Caldeira_Ferias_Arcanas.md' },
      { id: 'Campanha_Brambleshire_Academy', label: 'Campanha Brambleshire',        file: 'Aventuras/Campanha_Brambleshire_Academy.md' },
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
      { id: '00_introducao', label: 'intro', file: '00_introducao.md',                  title: 'Introdução' },
      { id: 'cap01_o_campo_de_batalha', label: 'Campo de Batalha', file: 'cap01_o_campo_de_batalha.md',       title: 'Cap. 1 — O Campo de Batalha' },
      { id: 'cap02_tropas_e_formacoes', label: 'Tropas e Formações', file: 'cap02_tropas_e_formacoes.md',       title: 'Cap. 2 — Tropas e Formações' },
      { id: 'cap03_a_escala_da_guerra', label: 'A Escala da Guerra', file: 'cap03_a_escala_da_guerra.md',       title: 'Cap. 3 — A Escala da Guerra' },
      { id: 'cap04_mechas_kaijus_colossais', label: 'Mechas, Kaijus & Colossais', file: 'cap04_mechas_kaijus_colossais.md',  title: 'Cap. 4 — Mechas, Kaijus & Colossais' },
      { id: 'cap05_o_custo_humano', label: 'O Custo Humano', file: 'cap05_o_custo_humano.md',           title: 'Cap. 5 — O Custo Humano' },
      { id: 'cap06_motores_da_destruicao', label: 'Motores da Destruição', file: 'cap06_motores_da_destruicao.md',    title: 'Cap. 6 — Motores da Destruição' },
      { id: 'cap07_comandando_a_batalha', label: 'Comandando a Batalha', file: 'cap07_comandando_a_batalha.md',     title: 'Cap. 7 — Comandando a Batalha' },
    ],
  },

  {
    id: 'btv-estelar',
    group: 'batalha',
    title: 'Fronteira Estelar',
    subtitle: 'Combate espacial na fronteira entre um império galáctico decadente e uma cooperativa espacial de comunas e coletivos anarquistas',
    path: 'Batalha Total Victory/Suplementos/Fronteira_Estelar',
    chapters: [
      { id: '00_introducao_estelar', label: 'Introdução', file: '00_introducao_estelar.md',      title: 'Introdução' },
      { id: 'cap01_escalas_no_vacuo', label: 'Escalas no Vácuo', file: 'cap01_escalas_no_vacuo.md',     title: 'Cap. 1 — Escalas no Vácuo' },
      { id: 'cap02_combate_espacial', label: 'Combate Espacial', file: 'cap02_combate_espacial.md',     title: 'Cap. 2 — Combate Espacial' },
      { id: 'cap03_naves_estelares', label: 'Naves Estelares', file: 'cap03_naves_estelares.md',      title: 'Cap. 3 — Naves Estelares' },
      { id: 'cap04_desgaste_estelar', label: 'Desgaste Estelar', file: 'cap04_desgaste_estelar.md',     title: 'Cap. 4 — Desgaste Estelar' },
      { id: 'cap05_bestiario_estelar', label: 'Bestiário Estelar', file: 'cap05_bestiario_estelar.md',    title: 'Cap. 5 — Bestiário Estelar' },
      { id: 'cap06_faccoes_e_cenarios', label: 'Facções e Cenários', file: 'cap06_faccoes_e_cenarios.md',   title: 'Cap. 6 — Facções e Cenários' },
      { id: 'cap07_campanhas_estelares', label: 'Campanhas Estelares', file: 'cap07_campanhas_estelares.md',  title: 'Cap. 7 — Campanhas Estelares' },
      { id: 'legacy_apendice_b_grimdark_scifi', label: 'Legacy B (Core)', file: 'legacy_apendice_b_grimdark_scifi.md',  title: 'Legacy — Apêndice B (Core)' },
      { id: 'legacy_apendice_c_falgsc', label: 'Legacy C (Core)', file: 'legacy_apendice_c_falgsc.md',  title: 'Legacy — Apêndice C (Core)' },
    ],
  },

  {
    id: 'btv-mar',
    group: 'batalha',
    title: 'Mar de Lendas',
    subtitle: 'Combate naval, ilhas fantásticas, pirataria e monstros marinhos',
    path: 'Batalha Total Victory/Suplementos/Mar_de_Lendas',
    chapters: [
      { id: '00_introducao_maritima', label: 'Introdução', file: '00_introducao_maritima.md',             title: 'Introdução' },
      { id: 'cap01_escalas_no_mar', label: 'Escalas no Mar', file: 'cap01_escalas_no_mar.md',               title: 'Cap. 1 — Escalas no Mar' },
      { id: 'cap02_combate_naval', label: 'Combate Naval', file: 'cap02_combate_naval.md',                title: 'Cap. 2 — Combate Naval' },
      { id: 'cap03_navios_e_espirito', label: 'Navios e Espírito', file: 'cap03_navios_e_espirito.md',            title: 'Cap. 3 — Navios e Espírito' },
      { id: 'cap04_terreno_maritimo', label: 'Terreno Marítimo', file: 'cap04_terreno_maritimo.md',             title: 'Cap. 4 — Terreno Marítimo' },
      { id: 'cap05_bestiario_maritimo', label: 'Bestiário Marítimo', file: 'cap05_bestiario_maritimo.md',           title: 'Cap. 5 — Bestiário Marítimo' },
      { id: 'cap06_faccoes_e_cenarios_maritimos', label: 'Facções e Cenários', file: 'cap06_faccoes_e_cenarios_maritimos.md', title: 'Cap. 6 — Facções e Cenários' },
      { id: 'cap07_campanhas_maritimas', label: 'Campanhas Marítimas', file: 'cap07_campanhas_maritimas.md',          title: 'Cap. 7 — Campanhas Marítimas' },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // TELECATCH VICTORY
  // ═══════════════════════════════════════════════════════════

  {
    id: 'tcv-livro',
    group: 'telecatch',
    title: 'TeleCatch Victory',
    subtitle: 'DLC Base de Wrestling Sobrenatural',
    path: 'TeleCatch Victory/content',
    chapters: [
      { id: '01_primeiro_gongo',         label: 'O Primeiro Gongo',       file: '01_primeiro_gongo.md',         title: 'O Primeiro Gongo' },
      { id: '02_para_o_promoter',        label: 'Para o Promoter',        file: '02_para_o_promoter.md',        title: 'Para o Promoter' },
      { id: '03_criacao_passo_a_passo',  label: 'Criação de Lutador',     file: '03_criacao_passo_a_passo.md',  title: 'Criação Passo a Passo' },
      { id: '04_estilo_forca_bruta',     label: 'Força Bruta',            file: '04_estilo_forca_bruta.md',     title: 'Estilo — Força Bruta' },
      { id: '05_estilo_high_flyer',      label: 'High Flyer',             file: '05_estilo_high_flyer.md',      title: 'Estilo — High Flyer' },
      { id: '06_estilo_tecnico',         label: 'Técnico',                file: '06_estilo_tecnico.md',         title: 'Estilo — Técnico' },
      { id: '07_estilo_lucha',           label: 'Lucha',                  file: '07_estilo_lucha.md',           title: 'Estilo — Lucha' },
      { id: '08_estilo_sobrenatural',    label: 'Sobrenatural',           file: '08_estilo_sobrenatural.md',    title: 'Estilo — Sobrenatural' },
      { id: '09_estilo_psicologico',     label: 'Psicológico',            file: '09_estilo_psicologico.md',     title: 'Estilo — Psicológico' },
      { id: '10_estilo_dirty',           label: 'Dirty',                  file: '10_estilo_dirty.md',           title: 'Estilo — Dirty' },
      { id: '11_estilo_bastidores',      label: 'Bastidores',             file: '11_estilo_bastidores.md',      title: 'Estilo — Bastidores' },
      { id: '12_gimmicks',              label: 'Gimmicks',               file: '12_gimmicks.md',               title: 'Pacotes de Gimmick' },
      { id: '13_vantagens_desvantagens', label: 'Vantagens',              file: '13_vantagens_desvantagens.md', title: 'Vantagens & Desvantagens' },
      { id: '14_kits_prontos',           label: 'Kits Prontos',           file: '14_kits_prontos.md',           title: 'Kits Prontos' },
      { id: '15_matchups',              label: 'Matchups',               file: '15_matchups.md',               title: 'Matchups — Tabela de Tipos' },
      { id: '16_energia_da_multidao',    label: 'Energia da Multidão',    file: '16_energia_da_multidao.md',    title: 'Energia da Multidão' },
      { id: '17_finalizador_kickout',    label: 'Finalizador & Kickout',  file: '17_finalizador_kickout.md',    title: 'Finalizador & Kickout' },
      { id: '18_promo_battle',           label: 'Promo Battle',           file: '18_promo_battle.md',           title: 'Promo Battle' },
      { id: '19_formatos_especiais',     label: 'Formatos Especiais',     file: '19_formatos_especiais.md',     title: 'Formatos Especiais de Luta' },
      { id: '20_aliancas',              label: 'Alianças',               file: '20_aliancas.md',               title: 'Alianças & Tag Team' },
      { id: '21_traicao',               label: 'Traição',                file: '21_traicao.md',                title: 'Traição' },
      { id: '22_rivalidade',            label: 'Rivalidade',             file: '22_rivalidade.md',             title: 'Rivalidade' },
      { id: '23_negociacao_campeonatos', label: 'Campeonatos',            file: '23_negociacao_campeonatos.md', title: 'Negociação & Campeonatos' },
      { id: '24_manager_actions',        label: 'Manager',                file: '24_manager_actions.md',        title: 'Ações de Manager' },
      { id: '25_campanhas',             label: 'Campanhas',              file: '25_campanhas.md',              title: 'Campanhas' },
      { id: '26_templo_olmeca',          label: 'Templo Olmeca',          file: '26_templo_olmeca.md',          title: 'O Templo Olmeca & Dojo Henshin' },
      { id: '27_faccoes',               label: 'Facções',                file: '27_faccoes.md',                title: 'Facções do Templo' },
      { id: '28_cmt',                   label: 'CMT',                    file: '28_cmt.md',                    title: 'A CMT' },
      { id: '29_roster',                label: 'Roster',                 file: '29_roster.md',                 title: 'Roster de NPCs' },
      { id: '30_glossario',             label: 'Glossário',              file: '30_glossario.md',              title: 'Glossário' },
    ],
  },
];

// ── Reading Order ───────────────────────────────────────────────
// Linear "book" path through the AAV wiki for prev/next navigation.
// Mirrors the old Livro chapter flow + supplements woven in thematically.
// Format: 'categoryId/entryId'
const READING_ORDER = [
  // — Introdução e Contexto —
  'aav-narrativa/Guia_do_Estudante',
  'aav-narrativa/Cenas_e_Atmosfera',

  // — Criação de Personagem —
  'aav-regras/Passo_a_Passo_Criacao',
  'aav-regras/Vantagens_e_Desvantagens',
  'aav-regras/Sistema_de_Familiar',
  'aav-regras/Sistema_de_Legado_Heranca',
  'aav-regras/Kits_da_Academia_Base',
  'aav-regras/Ficha_de_Personagem',

  // — A Academia —
  'aav-escolas/Historia_e_Fundacao',
  'aav-escolas/O_Campus',
  'aav-escolas/Admissao_e_Regras',
  'aav-escolas/A_Ala_Leste',

  // — Grêmios —
  'aav-gremios/Filosofia_e_Bussola_Arcana',
  'aav-gremios/Casa_da_Coroa',
  'aav-gremios/Castelo_Obsidiana',
  'aav-gremios/Egide',
  'aav-gremios/Gremio_do_Subsolo',
  'aav-gremios/Gremio_Memoria',
  'aav-gremios/Gremio_Monsoon',
  'aav-gremios/Gremio_Sintese',
  'aav-gremios/Nova_Aurora',
  'aav-gremios/Gremio_Chama_Livre',
  'aav-gremios/Sociedades_Secretas',

  // — Personagens e NPCs —
  'aav-personagens/Talude',
  'aav-personagens/Wynna',
  'aav-personagens/V3ctor1us',
  'aav-personagens/Mestres_Seniores',
  'aav-personagens/Instrutores_de_Campo',
  'aav-personagens/Outros_Professores',
  'aav-personagens/Professores_Externos',
  'aav-personagens/Staff_da_Academia',
  'aav-personagens/Fadas_Madrinhas',
  'aav-personagens/Estudantes_da_Academia',

  // — Vida Estudantil —
  'aav-vida/O_Ano_Letivo_e_Provas',
  'aav-vida/Economia_e_Campus',
  'aav-vida/Progresso_e_Reputacao',
  'aav-vida/Relacionamentos_e_Lacos',

  // — Mecânicas de Magia —
  'aav-regras/Especializacoes_e_Pericias_Magicas',
  'aav-regras/Magia_Improvisada',
  'aav-regras/O_Custo_da_Magia',
  'aav-regras/Fragmentacao_e_Magia_Dificil',
  'aav-regras/Somatica_Arcana_e_Vicio',
  'aav-regras/Palavras_de_Poder_e_Nomes',
  'aav-regras/Glifomagia_e_Trilha_Unica',
  'aav-regras/Metalurgia_Arcana',
  'aav-regras/Tipos_de_Dano_Arcano',
  'aav-regras/Marcadores_de_Chi_e_Elementos',
  'aav-regras/Pressao_Ambiental_e_Afinidade',
  'aav-regras/Sistema_de_Grimorios',
  'aav-regras/Essencia_Magica_e_Portais',
  'aav-regras/Desejos_e_Tribunal_das_Fadas',
  'aav-regras/Consequencia_Criativa',
  'aav-regras/O_Avesso_e_Vida_Dupla',
  'aav-regras/Vinculos_de_Campanha',
  'aav-regras/Regras_MagiDerby',

  // — Mundo e Locais —
  'aav-mundo/A_Era_das_Arcas',
  'aav-mundo/Arrecife_Arcano',
  'aav-mundo/Caldeira',
  'aav-mundo/Lutharin',
  'aav-mundo/Neo_Sampa',
  'aav-mundo/Vallindra',
  'aav-mundo/Dimensoes_Alternativas',
  'aav-mundo/O_Avesso',

  // — Escolas Internacionais e Ordens —
  'aav-escolas/Academia_Thornwall',
  'aav-escolas/Brambleshire_Academy',
  'aav-escolas/Universidade_de_Saleth',
  'aav-escolas/Escola_de_Farhaven',
  'aav-escolas/Colegiado_de_Thaumaturgia',
  'aav-escolas/Escolas_das_Quatro_Formas',
  'aav-escolas/Ordem_dos_Cavaleiros_do_Eco',
  'aav-escolas/Ordem_dos_Glifeiros',
  'aav-escolas/Ordem_das_Convergencias',
  'aav-escolas/Gremio_Raizes',

  // — Mais Estudantes —
  'aav-personagens/Cavaleiras_e_Parceiras',
  'aav-personagens/Sentinelas_e_Guardias',
  'aav-personagens/Estudantes_de_Thornwall',
  'aav-personagens/Estudantes_Internacionais_e_Rivais',
  'aav-personagens/Era_dos_Metais_e_Raizes',
  'aav-personagens/Gremio_Chama_Livre_Estudantes',
  'aav-personagens/Ordem_das_Convergencias_Estudantes',
  'aav-personagens/Quatro_Formas',

  // — Bestiário —
  'aav-personagens/Maleficaria_do_Campus',
  'aav-personagens/Criaturas_Dimensionais',
  'aav-personagens/Demonios',
  'aav-personagens/Ameacas_Escalaveis',

  // — Guia do Mestre —
  'aav-mestre/A_Campanha_Escolar',
  'aav-mestre/Estruturas_Narrativas',
  'aav-mestre/Calibragem_de_Tom_e_Seguranca',
  'aav-mestre/Magia_Hard_e_Soft',

  // — Aventuras —
  'aav-mestre/Modulo_de_Inicio_Primeiros_Tres_Dias',
  'aav-mestre/Campanha_A_Verdade_da_Arca',
  'aav-mestre/O_Primeiro_Despertar',
  'aav-mestre/O_Primeiro_Derby',
  'aav-mestre/A_Noite_na_Biblioteca',
  'aav-mestre/A_Aula_Que_Nao_Acabou',
  'aav-mestre/O_Nome_Que_O_Grimorio_Esqueceu',
  'aav-mestre/Festival_de_Inverno',
  'aav-mestre/O_Torneio_das_Escolas',
  'aav-mestre/O_Manifesto',
  'aav-mestre/A_Missao_de_Formatura',
  'aav-mestre/O_Desejo_Dimensional',
  'aav-mestre/Campanha_Caldeira_Ferias_Arcanas',
  'aav-mestre/Campanha_Brambleshire_Academy',

  // — Extras —
  'aav-narrativa/Detalhes_e_Curiosidades',
  'aav-narrativa/Exemplos_de_Personagem_e_Gremio',
];

// ── Normalize ids ───────────────────────────────────────────────
for (const item of CONTENT_MAP) {
  const list = item.entries || item.chapters;
  if (!list) continue;
  for (const entry of list) {
    if (!('label' in entry) && typeof entry.id === 'string') entry.label = entry.id;
    entry.id = entry.file ? entry.file.replace(/\.md$/, '') : String(entry.id);
  }
}
