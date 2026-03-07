// Academia Arcana Victory — Reader App
(function () {
  'use strict';

  // ── DOM refs ──────────────────────────────────────────────────
  const landingEl      = document.getElementById('landing');
  const appEl          = document.getElementById('app');
  const sidebar        = document.getElementById('sidebar');
  const sidebarBooks   = document.getElementById('sidebar-books');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  const contentEl      = document.getElementById('content');
  const contentWrapper = document.querySelector('.content-wrapper');
  const btnHamburger   = document.getElementById('btn-hamburger');
  const btnPrev        = document.getElementById('btn-prev');
  const btnNext        = document.getElementById('btn-next');

  // ── Flat chapter index (for prev/next)
  const allChapters = [];
  for (const book of CONTENT_MAP) {
    for (const ch of book.chapters) {
      allChapters.push({ bookId: book.id, chapterId: ch.id, title: (ch.label || ch.title) });
    }
  }

  // ── Accent colors per book ────────────────────────────────────
  const BOOK_ACCENTS = {
    // Academia Arcana Victory
    'livro':   '#c9a84c',  // gold   — livro base
    'AAV-0':   '#9b59b6',  // roxo   — A Verdade da Arca
    'AAV-1':   '#5b9bd5',  // azul   — Estrelas & Cristais
    'AAV-2':   '#c0392b',  // vermelho — Tinta & Sombras
    'AAV-3':   '#27ae60',  // verde  — Palavras de Poder
    'AAV-4':   '#e67e22',  // âmbar  — Sangue & Legado
    'AAV-5':   '#e74c3c',  // fogo   — Fogo & Liberdade
    'AAV-6':   '#2980b9',  // elétrico — Laços & Máscaras
    'AAV-7':   '#8e44ad',  // magenta — Desejos & Portais
    // Batalha Total Victory
    'btv-livro':   '#dc2626',  // guerra
    'btv-estelar': '#0891b2',  // espaço
    'btv-mar':     '#0369a1',  // oceano
  };

  // ── Landing page ──────────────────────────────────────────────
  function renderLanding() {
    const container = document.getElementById('landing-books');
    let html = '';

    for (const group of CONTENT_GROUPS) {
      const books = CONTENT_MAP.filter(b => b.group === group.id);

      html += `<section class="landing-section">
        <div class="landing-section__header">
          <h2 class="landing-section__title">${group.title}</h2>
          <p class="landing-section__desc">${group.description}</p>
        </div>
        <div class="landing-section__grid">`;

      for (const book of books) {
        const accent = BOOK_ACCENTS[book.id] || '#c9a84c';
        const firstCh = book.chapters[0];
        const firstKey = firstCh.file ? firstCh.file.replace(/\.md$/, '') : firstCh.id;
        const chCount = book.chapters.length;
        const isFeatured = book.id === 'livro' || book.id === 'btv-livro';
        const chLabel = chCount === 1 ? '1 capítulo' : `${chCount} capítulos`;

        let badge = book.id.toUpperCase().replace('BTV-', '');
        if (book.id === 'livro' || book.id === 'btv-livro') badge = 'LIVRO BASE';
        if (book.id === 'suplementos') badge = 'ÍNDICE';

        const displayTitle = book.title.replace(/^L\d+ — /, '');

        html += `<a
          href="#${book.id}/${firstKey}"
          class="book-card${isFeatured ? ' book-card--featured' : ''}"
          style="--card-accent: ${accent}"
        >
          <span class="book-card__badge">${badge}</span>
          <span class="book-card__title">${displayTitle}</span>
          ${book.subtitle ? `<span class="book-card__subtitle">${book.subtitle}</span>` : ''}
          <span class="book-card__meta">${chLabel}</span>
          <span class="book-card__arrow">→</span>
        </a>`;
      }

      html += `</div></section>`;
    }

    container.innerHTML = html;
  }

  function showLanding() {
    landingEl.style.display = 'flex';
    appEl.style.display = 'none';
    btnHamburger.style.display = 'none';
    closeSidebar();
  }

  function showReader() {
    landingEl.style.display = 'none';
    appEl.style.display = 'flex';
    btnHamburger.style.display = '';
  }

  // ── Sidebar ───────────────────────────────────────────────────
  function renderSidebar() {
    let html = '';
    let currentGroup = null;

    for (const book of CONTENT_MAP) {
      // Insert group header when the group changes
      if (book.group !== currentGroup) {
        currentGroup = book.group;
        const groupDef = CONTENT_GROUPS.find(g => g.id === currentGroup);
        if (groupDef) {
          html += `<div class="sidebar-group-header">${groupDef.title}</div>`;
        }
      }

      html += `<details id="book-${book.id}">
        <summary class="book-title">
          <span class="book-label">${book.title}</span>
          ${book.subtitle ? `<span class="book-subtitle">${book.subtitle}</span>` : ''}
        </summary>
        <ul class="chapter-list">`;
      for (const ch of book.chapters) {
        const chKey = ch.file ? ch.file.replace(/\.md$/, '') : ch.id;
        html += `<li><a
          href="#${book.id}/${chKey}"
          class="chapter-link"
          data-book="${book.id}"
          data-chapter="${chKey}"
          data-label="${ch.label || ch.title}"
        >${ch.label || ch.title}</a></li>`;
      }
      html += `</ul></details>`;
    }

    sidebarBooks.innerHTML = html;
  }

  function setActiveChapter(bookId, chapterId) {
    document.querySelectorAll('.chapter-link').forEach(el => {
      el.classList.toggle(
        'active',
        el.dataset.book === bookId && el.dataset.chapter === chapterId
      );
    });
    document.querySelectorAll('#sidebar-books details').forEach(details => {
      details.open = (details.id === `book-${bookId}`);
    });
  }

  // ── Routing ───────────────────────────────────────────────────
  function onHashChange() {
    const hash = window.location.hash.slice(1);
    const [bookId, chapterId] = hash.split('/');
    if (bookId && chapterId) {
      showReader();
      navigateTo(bookId, chapterId);
    } else {
      showLanding();
    }
  }

  // ── Navigation ────────────────────────────────────────────────
  async function navigateTo(bookId, chapterId) {
    const book = CONTENT_MAP.find(b => b.id === bookId);
    if (!book) return;
    // Find chapter by flexible matching:
    // - match canonical file stem (e.g. cap01_name)
    // - match stored id
    // - tolerate URL-encoded chapterId
    const chapter = book.chapters.find(c => {
      const key = c.file ? c.file.replace(/\.md$/, '') : String(c.id);
      try {
        return key === chapterId || String(c.id) === chapterId || key === decodeURIComponent(chapterId) || decodeURIComponent(String(c.id)) === chapterId;
      } catch (e) {
        return key === chapterId || String(c.id) === chapterId;
      }
    });
    if (!chapter) return;

    const canonicalId = chapter.file ? chapter.file.replace(/\.md$/, '') : String(chapter.id);

    const newHash = `#${bookId}/${canonicalId}`;
    if (window.location.hash !== newHash) {
      history.replaceState(null, '', newHash);
    }
    setActiveChapter(bookId, canonicalId);
    updatePrevNext(bookId, canonicalId);
    closeSidebar();

    contentEl.innerHTML = '<div class="loading">Carregando</div>';

    const url = buildRawUrl(book.path, chapter.file);
    try {
      const md = await fetchChapter(url);
      renderMarkdown(md);
    } catch (err) {
      contentEl.innerHTML = `
        <div class="error">
          <p>Erro ao carregar o capítulo.</p>
          <p><a href="${url}" target="_blank" rel="noopener">Tentar abrir o arquivo diretamente</a></p>
          <p class="error-hint">Se estiver testando localmente, certifique-se de servir via HTTP (não file://).<br>
          Se estiver no GitHub Pages, verifique as configurações em <code>docs/js/config.js</code>.</p>
        </div>`;
    }

    contentWrapper.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  // ── Fetching ──────────────────────────────────────────────────
  function buildRawUrl(repoPath, filename) {
    const base = `https://raw.githubusercontent.com/${CONFIG.GITHUB_USER}/${CONFIG.GITHUB_REPO}/${CONFIG.GITHUB_BRANCH}`;
    const encoded = repoPath.split('/').map(encodeURIComponent).join('/');
    return `${base}/${encoded}/${encodeURIComponent(filename)}`;
  }

  async function fetchChapter(url) {
    console.debug(`[reader] fetching: ${url}`);
    const res = await fetch(url);
    console.debug(`[reader] fetched: ${url} -> ${res.status}`);
    if (!res.ok) {
      // Small inline log to help debugging in-page when a fetch fails.
      try {
        if (contentEl) {
          const note = document.createElement('div');
          note.className = 'fetch-log fetch-log--error';
          note.textContent = `Erro ao buscar ${url} — HTTP ${res.status}`;
          note.style.color = '#b91c1c';
          note.style.fontSize = '0.9rem';
          note.style.marginTop = '1rem';
          contentEl.appendChild(note);
        }
      } catch (e) {
        console.warn('[reader] could not append fetch log', e);
      }
      throw new Error(`HTTP ${res.status}`);
    }

    const text = await res.text();
    // brief success indicator (auto-clears)
    try {
      if (contentEl) {
        const prev = document.querySelector('.fetch-log');
        if (prev) prev.remove();
        const ok = document.createElement('div');
        ok.className = 'fetch-log fetch-log--ok';
        ok.textContent = `Carregado: ${url} — HTTP ${res.status}`;
        ok.style.color = '#065f46';
        ok.style.fontSize = '0.8rem';
        ok.style.opacity = '0.8';
        ok.style.marginTop = '0.5rem';
        contentEl.appendChild(ok);
        setTimeout(() => { try { ok.remove(); } catch (e) {} }, 2200);
      }
    } catch (e) {
      console.warn('[reader] could not show fetch success', e);
    }

    return text;
  }

  // ── Rendering ─────────────────────────────────────────────────
  function renderMarkdown(md) {
    marked.setOptions({ breaks: true, gfm: true });
    contentEl.innerHTML = marked.parse(md);

    contentEl.querySelectorAll('a[href^="http"]').forEach(a => {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    });

    contentEl.querySelectorAll('a[href$=".md"]').forEach(a => {
      const href = a.getAttribute('href');
      const stem = href.replace(/.*\//, '').replace('.md', '');
      a.setAttribute('href', '#' + stem);
    });
  }

  // ── Prev / Next ───────────────────────────────────────────────
  function updatePrevNext(bookId, chapterId) {
    const idx = allChapters.findIndex(
      c => c.bookId === bookId && c.chapterId === chapterId
    );
    const prev = idx > 0 ? allChapters[idx - 1] : null;
    const next = idx < allChapters.length - 1 ? allChapters[idx + 1] : null;

    if (prev) {
      btnPrev.href = `#${prev.bookId}/${prev.chapterId}`;
      btnPrev.textContent = `← ${prev.title}`;
      btnPrev.style.display = 'inline-block';
    } else {
      btnPrev.style.display = 'none';
    }

    if (next) {
      btnNext.href = `#${next.bookId}/${next.chapterId}`;
      btnNext.textContent = `${next.title} →`;
      btnNext.style.display = 'inline-block';
    } else {
      btnNext.style.display = 'none';
    }
  }

  // ── Mobile sidebar ────────────────────────────────────────────
  function toggleSidebar() {
    sidebar.classList.toggle('open');
    sidebarOverlay.classList.toggle('visible');
    document.body.classList.toggle('sidebar-open');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('visible');
    document.body.classList.remove('sidebar-open');
  }

  // ── Init ──────────────────────────────────────────────────────
  function init() {
    renderSidebar();
    renderLanding();
    window.addEventListener('hashchange', onHashChange);
    btnHamburger.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);
    onHashChange();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
