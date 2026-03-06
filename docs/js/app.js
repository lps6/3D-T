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

  // ── Flat chapter index (for prev/next) ───────────────────────
  const allChapters = [];
  for (const book of CONTENT_MAP) {
    for (const ch of book.chapters) {
      allChapters.push({ bookId: book.id, chapterId: ch.id, title: ch.title });
    }
  }

  // ── Accent colors per book ────────────────────────────────────
  const BOOK_ACCENTS = {
    livro:       '#c9a84c',
    suplementos: '#7a8099',
    l0:          '#9b59b6',
    l1:          '#5b9bd5',
    l2:          '#c0392b',
    l3:          '#27ae60',
    l4:          '#e67e22',
    l5:          '#e74c3c',
    l6:          '#2980b9',
    l7:          '#8e44ad',
  };

  // ── Landing page ──────────────────────────────────────────────
  function renderLanding() {
    const container = document.getElementById('landing-books');
    let html = '';

    for (const book of CONTENT_MAP) {
      const accent = BOOK_ACCENTS[book.id] || '#c9a84c';
      const firstCh = book.chapters[0];
      const chCount = book.chapters.length;
      const isFeatured = book.id === 'livro';
      const chLabel = chCount === 1 ? '1 capítulo' : `${chCount} capítulos`;

      let badge = book.id.toUpperCase();
      if (book.id === 'livro') badge = 'LIVRO BASE';
      if (book.id === 'suplementos') badge = 'ÍNDICE';

      // Strip the "L# — " prefix from supplement titles for the card
      const displayTitle = book.title.replace(/^L\d+ — /, '');

      html += `<a
        href="#${book.id}/${firstCh.id}"
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
    btnHamburger.style.display = '';  // restored to CSS-controlled visibility
  }

  // ── Sidebar ───────────────────────────────────────────────────
  function renderSidebar() {
    let html = '';
    for (const book of CONTENT_MAP) {
      html += `<details id="book-${book.id}">
        <summary class="book-title">
          <span class="book-label">${book.title}</span>
          ${book.subtitle ? `<span class="book-subtitle">${book.subtitle}</span>` : ''}
        </summary>
        <ul class="chapter-list">`;
      for (const ch of book.chapters) {
        html += `<li><a
          href="#${book.id}/${ch.id}"
          class="chapter-link"
          data-book="${book.id}"
          data-chapter="${ch.id}"
        >${ch.title}</a></li>`;
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
    const chapter = book.chapters.find(c => c.id === chapterId);
    if (!chapter) return;

    const newHash = `#${bookId}/${chapterId}`;
    if (window.location.hash !== newHash) {
      history.replaceState(null, '', newHash);
    }

    setActiveChapter(bookId, chapterId);
    updatePrevNext(bookId, chapterId);
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
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.text();
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
