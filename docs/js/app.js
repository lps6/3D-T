// Academia Arcana Victory — Reader App
(function () {
  'use strict';

  // ── DOM refs ──────────────────────────────────────────────────
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
    // Highlight active link
    document.querySelectorAll('.chapter-link').forEach(el => {
      el.classList.toggle(
        'active',
        el.dataset.book === bookId && el.dataset.chapter === chapterId
      );
    });
    // Open active book accordion, close others
    document.querySelectorAll('#sidebar-books details').forEach(details => {
      details.open = (details.id === `book-${bookId}`);
    });
  }

  // ── Routing ───────────────────────────────────────────────────
  function onHashChange() {
    const hash = window.location.hash.slice(1);
    const [bookId, chapterId] = hash.split('/');
    if (bookId && chapterId) {
      navigateTo(bookId, chapterId);
    } else {
      // Default: first chapter of the first book
      navigateTo(CONTENT_MAP[0].id, CONTENT_MAP[0].chapters[0].id);
    }
  }

  // ── Navigation ────────────────────────────────────────────────
  async function navigateTo(bookId, chapterId) {
    const book = CONTENT_MAP.find(b => b.id === bookId);
    if (!book) return;
    const chapter = book.chapters.find(c => c.id === chapterId);
    if (!chapter) return;

    // Update URL without re-triggering hashchange
    const newHash = `#${bookId}/${chapterId}`;
    if (window.location.hash !== newHash) {
      history.replaceState(null, '', newHash);
    }

    setActiveChapter(bookId, chapterId);
    updatePrevNext(bookId, chapterId);
    closeSidebar();

    // Loading state
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

    // Scroll content to top
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

    // Open external links in a new tab
    contentEl.querySelectorAll('a[href^="http"]').forEach(a => {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    });

    // Convert internal .md links to hash links
    contentEl.querySelectorAll('a[href$=".md"]').forEach(a => {
      const href = a.getAttribute('href');
      // Strip path — just use the filename stem as a rough chapter id
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
