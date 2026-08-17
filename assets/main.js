(function () {
  var targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      setTimeout(function () { el.classList.add('is-visible'); }, i * 85);
      observer.unobserve(el);
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

  targets.forEach(function (el) { observer.observe(el); });
})();

/* ---------- News: auto-promote past "Upcoming" items, collapse "Recent" ---------- */
(function () {
  var upcomingList = document.getElementById('news-upcoming');
  var recentList = document.getElementById('news-recent');
  if (!upcomingList || !recentList) return;

  var today = new Date();
  today.setHours(0, 0, 0, 0);

  function parseDate(el) {
    var d = el.getAttribute('data-date');
    return d ? new Date(d + 'T00:00:00') : null;
  }

  // Move any upcoming entries whose date has already passed into the recent list.
  Array.prototype.slice.call(upcomingList.children).forEach(function (li) {
    var date = parseDate(li);
    if (date && date < today) recentList.appendChild(li);
  });

  // Re-sort the recent list, newest first.
  var recentItems = Array.prototype.slice.call(recentList.children);
  recentItems.sort(function (a, b) { return parseDate(b) - parseDate(a); });
  recentItems.forEach(function (li) { recentList.appendChild(li); });

  // If nothing is upcoming anymore, hide that block and let "Recent" take its place.
  if (!upcomingList.children.length) {
    var upcomingLabel = document.getElementById('news-upcoming-label');
    if (upcomingLabel) upcomingLabel.style.display = 'none';
    upcomingList.style.display = 'none';
    var recentLabel = document.getElementById('news-recent-label');
    if (recentLabel) recentLabel.classList.add('cite__year--first');
  }

  // Collapse the recent list down to the two newest entries, with a toggle to expand.
  var visibleCount = 2;
  if (recentItems.length > visibleCount) {
    var hiddenItems = recentItems.slice(visibleCount);
    hiddenItems.forEach(function (li) { li.classList.add('is-collapsed'); });

    var toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'more-btn';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'More news';
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      hiddenItems.forEach(function (li) { li.classList.toggle('is-collapsed', expanded); });
      toggle.setAttribute('aria-expanded', String(!expanded));
      toggle.textContent = expanded ? 'More news' : 'Show less';
    });
    recentList.insertAdjacentElement('afterend', toggle);
  }
})();
