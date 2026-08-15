(function () {
  var buttons = document.querySelectorAll('.cite-btn');
  if (!buttons.length) return;

  function fallbackCopy(text) {
    var area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.left = '-9999px';
    document.body.appendChild(area);
    area.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    document.body.removeChild(area);
    return ok;
  }

  buttons.forEach(function (btn) {
    var entry = btn.closest('.cite');
    var source = entry ? entry.querySelector('script[type="application/x-bibtex"]') : null;
    if (!source) return;

    var bibtex = source.textContent.trim();
    var resetTimer = null;

    btn.addEventListener('click', function () {
      var showResult = function (ok) {
        clearTimeout(resetTimer);
        btn.textContent = ok ? '[Copied!]' : '[Copy failed]';
        btn.classList.toggle('is-copied', ok);
        resetTimer = setTimeout(function () {
          btn.textContent = '[Cite]';
          btn.classList.remove('is-copied');
        }, 1600);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(bibtex).then(
          function () { showResult(true); },
          function () { showResult(fallbackCopy(bibtex)); }
        );
      } else {
        showResult(fallbackCopy(bibtex));
      }
    });
  });
})();
