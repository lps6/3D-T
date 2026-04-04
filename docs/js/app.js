// 3D&T Victory Fan DLC — Reader App
// Supports both wiki categories (entries) and traditional books (chapters).
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

  // ── Helpers: get entries/chapters uniformly ───────────────────
  function getItems(item) { return item.entries || item.chapters || []; }

  // ── Reading order index (for prev/next linear navigation) ─────
  const readingOrder = [];
  if (typeof READING_ORDER !== 'undefined') {
    for (const key of READING_ORDER) {
      const [catId, entryId] = key.split('/');
      const cat = CONTENT_MAP.find(c => c.id === catId);
      if (!cat) continue;
      const items = getItems(cat);
      const entry = items.find(e => e.id === entryId);
      if (!entry) continue;
      readingOrder.push({ catId, entryId, title: (entry.label || entry.title) });
    }
  }

  // ── Fallback: flat chapter index for books without READING_ORDER
  const allChapters = [];
  for (const item of CONTENT_MAP) {
    // Only include traditional book entries (chapters) in the fallback
    if (!item.chapters) continue;
    for (const ch of item.chapters) {
      allChapters.push({ catId: item.id, entryId: ch.id, title: (ch.label || ch.title) });
    }
  }

  // ── Build global lookup: filename stem → { catId, entryId } ───
  const globalEntryIndex = new Map();
  for (const item of CONTENT_MAP) {
    for (const entry of getItems(item)) {
      const stem = entry.file ? entry.file.replace(/\.md$/, '') : String(entry.id);
      if (!globalEntryIndex.has(stem)) {
        globalEntryIndex.set(stem, { catId: item.id, entryId: stem });
      }
      // Also index by bare filename (without subdirectory path)
      const bareStem = stem.includes('/') ? stem.split('/').pop() : null;
      if (bareStem && !globalEntryIndex.has(bareStem)) {
        globalEntryIndex.set(bareStem, { catId: item.id, entryId: stem });
      }
    }
  }

  // ── Accent colors ─────────────────────────────────────────────
  const ACCENTS = {
    // AAV Wiki categories
    'aav-narrativa':    '#c9a84c',
    'aav-regras':       '#5b9bd5',
    'aav-escolas':      '#9b59b6',
    'aav-mundo':        '#0891b2',
    'aav-gremios':      '#27ae60',
    'aav-personagens':  '#e67e22',
    'aav-vida':         '#e74c3c',
    'aav-mestre':       '#8e44ad',
    // BTV
    'btv-livro':   '#dc2626',
    'btv-estelar': '#0891b2',
    'btv-mar':     '#0369a1',
    // TCV
    'tcv-livro':   '#c9a84c',
  };

  // ── Landing page ──────────────────────────────────────────────
  function renderLanding() {
    const container = document.getElementById('landing-books');
    let html = '';

    for (const group of CONTENT_GROUPS) {
      const items = CONTENT_MAP.filter(b => b.group === group.id);

      html += `<section class="landing-section">
        <div class="landing-section__header">
          <h2 class="landing-section__title">${group.title}</h2>
          <p class="landing-section__desc">${group.description}</p>
        </div>
        <div class="landing-section__grid">`;

      for (const item of items) {
        const accent = ACCENTS[item.id] || '#c9a84c';
        const entries = getItems(item);
        const firstEntry = entries[0];
        if (!firstEntry) continue;
        const firstKey = firstEntry.file ? firstEntry.file.replace(/\.md$/, '') : firstEntry.id;
        const count = entries.length;
        const isWiki = !!item.entries;
        const countLabel = count === 1
          ? (isWiki ? '1 entrada' : '1 capítulo')
          : `${count} ${isWiki ? 'entradas' : 'capítulos'}`;

        const isFeatured = item.id === 'btv-livro' || item.id === 'tcv-livro';
        let badge = item.title.toUpperCase();
        if (item.id === 'btv-livro' || item.id === 'tcv-livro') badge = 'LIVRO BASE';

        const displayTitle = item.title.replace(/^L\d+ — /, '');

        html += `<a
          href="#${item.id}/${firstKey}"
          class="book-card${isFeatured ? ' book-card--featured' : ''}"
          style="--card-accent: ${accent}"
        >
          <span class="book-card__badge">${badge}</span>
          <span class="book-card__title">${displayTitle}</span>
          ${item.subtitle ? `<span class="book-card__subtitle">${item.subtitle}</span>` : ''}
          <span class="book-card__meta">${countLabel}</span>
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

    for (const item of CONTENT_MAP) {
      if (item.group !== currentGroup) {
        currentGroup = item.group;
        const groupDef = CONTENT_GROUPS.find(g => g.id === currentGroup);
        if (groupDef) {
          html += `<div class="sidebar-group-header">${groupDef.title}</div>`;
        }
      }

      const entries = getItems(item);
      html += `<details id="cat-${item.id}">
        <summary class="book-title">
          <span class="book-label">${item.title}</span>
          ${item.subtitle ? `<span class="book-subtitle">${item.subtitle}</span>` : ''}
        </summary>
        <ul class="chapter-list">`;
      for (const entry of entries) {
        const entryKey = entry.file ? entry.file.replace(/\.md$/, '') : entry.id;
        html += `<li><a
          href="#${item.id}/${entryKey}"
          class="chapter-link"
          data-cat="${item.id}"
          data-entry="${entryKey}"
          data-label="${entry.label || entry.title}"
        >${entry.label || entry.title}</a></li>`;
      }
      html += `</ul></details>`;
    }

    sidebarBooks.innerHTML = html;
  }

  function setActiveEntry(catId, entryId) {
    document.querySelectorAll('.chapter-link').forEach(el => {
      el.classList.toggle(
        'active',
        el.dataset.cat === catId && el.dataset.entry === entryId
      );
    });
    document.querySelectorAll('#sidebar-books details').forEach(details => {
      details.open = (details.id === `cat-${catId}`);
    });
  }

  // ── Routing ───────────────────────────────────────────────────
  function onHashChange() {
    const hash = window.location.hash.slice(1);
    const [catId, ...rest] = hash.split('/');
    const entryId = rest.join('/');  // support subdirectory paths in entry ids
    if (catId && entryId) {
      showReader();
      navigateTo(catId, entryId);
    } else {
      showLanding();
    }
  }

  // ── Navigation ────────────────────────────────────────────────
  async function navigateTo(catId, entryId) {
    const cat = CONTENT_MAP.find(c => c.id === catId);
    if (!cat) return;

    const entries = getItems(cat);
    const entry = entries.find(e => {
      const key = e.file ? e.file.replace(/\.md$/, '') : String(e.id);
      try {
        return key === entryId || String(e.id) === entryId || key === decodeURIComponent(entryId) || decodeURIComponent(String(e.id)) === entryId;
      } catch (err) {
        return key === entryId || String(e.id) === entryId;
      }
    });
    if (!entry) return;

    const canonicalId = entry.file ? entry.file.replace(/\.md$/, '') : String(entry.id);

    const newHash = `#${catId}/${canonicalId}`;
    if (window.location.hash !== newHash) {
      history.replaceState(null, '', newHash);
    }
    setActiveEntry(catId, canonicalId);
    updatePrevNext(catId, canonicalId);
    closeSidebar();

    contentEl.innerHTML = '<div class="loading">Carregando</div>';

    const url = buildRawUrl(cat.path, entry.file);
    try {
      const md = await fetchContent(url);
      renderMarkdown(md, catId);
    } catch (err) {
      contentEl.innerHTML = `
        <div class="error">
          <p>Erro ao carregar o conteúdo.</p>
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
    // filename may contain subdirectory paths (e.g. "Criacao_de_Personagem/Passo_a_Passo_Criacao.md")
    const encodedFile = filename.split('/').map(encodeURIComponent).join('/');
    return `${base}/${encoded}/${encodedFile}`;
  }

  async function fetchContent(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.text();
  }

  // ── Rendering ─────────────────────────────────────────────────
  function renderMarkdown(md, currentCatId) {
    marked.setOptions({ breaks: true, gfm: true });
    md = md.replace(/^---\n[\s\S]*?\n---\n/, '');
    contentEl.innerHTML = marked.parse(md);

    contentEl.querySelectorAll('a[href^="http"]').forEach(a => {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    });

    // Convert .md links to reader routes.
    // Searches current category first, then global index for cross-category links.
    contentEl.querySelectorAll('a[href$=".md"]').forEach(a => {
      const href = a.getAttribute('href');
      if (!href) return;
      if (/^https?:\/\//.test(href) || href.startsWith('#')) return;

      const stem = href.replace(/.*\//, '').replace(/\.md$/, '');

      // Check current category first
      const currentCat = CONTENT_MAP.find(c => c.id === currentCatId);
      const inCurrentCat = currentCat && getItems(currentCat).some(e => {
        const key = e.file ? e.file.replace(/\.md$/, '') : String(e.id);
        // Match full path or bare filename
        return key === stem || (key.includes('/') && key.split('/').pop() === stem);
      });

      if (inCurrentCat) {
        // Find the actual entry id (may include subdirectory)
        const matchedEntry = getItems(currentCat).find(e => {
          const key = e.file ? e.file.replace(/\.md$/, '') : String(e.id);
          return key === stem || (key.includes('/') && key.split('/').pop() === stem);
        });
        const entryKey = matchedEntry
          ? (matchedEntry.file ? matchedEntry.file.replace(/\.md$/, '') : String(matchedEntry.id))
          : stem;
        a.setAttribute('href', `#${currentCatId}/${entryKey}`);
      } else if (globalEntryIndex.has(stem)) {
        const match = globalEntryIndex.get(stem);
        a.setAttribute('href', `#${match.catId}/${match.entryId}`);
      } else {
        a.setAttribute('href', `#${currentCatId}/${stem}`);
      }
    });
  }

  // ── Prev / Next ───────────────────────────────────────────────
  function updatePrevNext(catId, entryId) {
    // Try READING_ORDER first (for wiki categories)
    let idx = readingOrder.findIndex(
      r => r.catId === catId && r.entryId === entryId
    );

    if (idx !== -1) {
      const prev = idx > 0 ? readingOrder[idx - 1] : null;
      const next = idx < readingOrder.length - 1 ? readingOrder[idx + 1] : null;
      setPrevNext(prev, next);
      return;
    }

    // Fallback to allChapters for traditional books
    idx = allChapters.findIndex(
      c => c.catId === catId && c.entryId === entryId
    );

    if (idx !== -1) {
      const prev = idx > 0 ? allChapters[idx - 1] : null;
      const next = idx < allChapters.length - 1 ? allChapters[idx + 1] : null;
      setPrevNext(prev, next);
      return;
    }

    // Not in any order — hide buttons
    btnPrev.style.display = 'none';
    btnNext.style.display = 'none';
  }

  function setPrevNext(prev, next) {
    if (prev) {
      btnPrev.href = `#${prev.catId}/${prev.entryId}`;
      btnPrev.textContent = `← ${prev.title}`;
      btnPrev.style.display = 'inline-block';
    } else {
      btnPrev.style.display = 'none';
    }

    if (next) {
      btnNext.href = `#${next.catId}/${next.entryId}`;
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
