(function(){
  const btn = document.getElementById('apply-theme');
  const status = document.getElementById('theme-status');
  const styleId = 'applied-theme';

  const themeCss = `
    :root{ --accent:#0ea5a4; --accent-2:#7c3aed; --muted:#6b7280; --border: rgba(15,23,42,0.06); }
    html,body{ background: linear-gradient(180deg,#f8fafc,#eef2ff); color:#0f172a; font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial; transition: background .6s ease,color .3s ease; padding:2rem; }
    header h1{ color:var(--accent-2); margin:.1rem 0 .4rem; animation:float 6s ease-in-out infinite; }
    @keyframes float{ 0%,100%{ transform:translateY(0);} 50%{ transform:translateY(-4px);} }
    section{ background: linear-gradient(90deg, rgba(255,255,255,0.68), rgba(255,255,255,0.48)); border-left:4px solid var(--accent); padding:1rem; margin:.75rem 0; border-radius:8px; box-shadow:0 6px 14px rgba(15,23,42,0.06); transition: transform .25s ease, box-shadow .25s ease; }
    section:hover{ transform:translateY(-4px); box-shadow:0 10px 20px rgba(15,23,42,0.08); }
    h2{ color:var(--accent-2); margin-top:0; }
    a{ color:var(--accent); text-decoration:none; border-bottom:1px dashed rgba(14,165,164,0.28); transition:color .2s ease; }
    button#apply-theme{ position:fixed; right:1rem; bottom:1rem; background:var(--accent); color:#fff; border:0; padding:.5rem .9rem; border-radius:999px; box-shadow:0 6px 18px rgba(12,74,73,0.12); cursor:pointer; transition: transform .12s ease, box-shadow .12s ease; font-weight:600; }
    button#apply-theme:hover{ transform:translateY(-2px); box-shadow:0 10px 24px rgba(12,74,73,0.18); }
    ul{ margin:0; padding-left:1.2rem; }

    /* table styles */
    table{ width:100%; border-collapse:collapse; margin:.6rem 0; border:1px solid var(--border); border-radius:8px; overflow:hidden; }
    caption{ text-align:left; font-size:.9rem; color:var(--muted); padding:.4rem .8rem; background:linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,0.4)); }
    th, td{ padding:.65rem .9rem; border-bottom:1px solid var(--border); text-align:left; vertical-align:middle; }
    thead th{ background: linear-gradient(90deg, rgba(124,58,237,0.06), rgba(14,165,164,0.04)); color:var(--accent-2); font-weight:700; }
    tbody tr:hover{ background: rgba(14,165,164,0.03); }
    tbody tr:last-child td{ border-bottom:0; }
    @media (max-width:520px){ table{ display:block; overflow:auto; white-space:nowrap; } th, td{ white-space:nowrap; } }

    /* small readable tweaks */
    p, li{ color: #0b1220; }
  `;

  function applyTheme(){
    if (document.getElementById(styleId)) return;
    const s = document.createElement('style');
    s.id = styleId;
    s.appendChild(document.createTextNode(themeCss));
    document.head.appendChild(s);
    if (btn) btn.textContent = 'Remove colors';
    if (btn) btn.setAttribute('aria-pressed','true');
    if (status) status.textContent = 'Theme applied';
  }

  function removeTheme(){
    const s = document.getElementById(styleId);
    if (s) s.remove();
    if (btn) btn.textContent = 'Add colors in this';
    if (btn) btn.setAttribute('aria-pressed','false');
    if (status) status.textContent = 'Theme removed';
  }

  // Guard in case elements are not yet available when script runs
  function init(){
    if (!btn) return;
    btn.addEventListener('click', function(){
      if (document.getElementById(styleId)) removeTheme(); else applyTheme();
    });
  }

  // If DOM is already ready (defer), init immediately; otherwise wait
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();