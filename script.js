const toggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('#mobile-nav');
const setNavigation = (open) => {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  navigation.hidden = !open;
};
toggle.addEventListener('click', () => setNavigation(toggle.getAttribute('aria-expanded') !== 'true'));
navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setNavigation(false)));
document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header')) setNavigation(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setNavigation(false);
    toggle.focus();
  }
});
window.matchMedia('(min-width: 901px)').addEventListener('change', (event) => {
  if (event.matches) setNavigation(false);
});

const dialog = document.querySelector('#detail-dialog');
const details = {
  soba: {
    title: '手打ち蕎麦',
    body: '<p>手打ち蕎麦をご用意しています。詳しいおしながき・価格は店舗へお問い合わせください。</p>'
  },
  seasonal: {
    title: '週替わりのおまかせ',
    body: '<p>おまかせ料理は、毎週水曜日に変わります。<br>今週の内容は、手毬のInstagramからご確認ください。</p>'
  },
  hours: {
    title: '営業時間のご案内',
    body: '<dl><div><dt>営業時間</dt><dd>11:30〜<br>14:00 ラストオーダー</dd></div><div><dt>定休日</dt><dd>毎週月曜日・火曜日<br>祝日も含みます</dd></div><div><dt>お電話</dt><dd><a href="tel:0263472902">0263-47-2902</a></dd></div></dl><p class="dialog-note">臨時休業など最新の営業案内は、Instagramまたはお電話でご確認ください。</p>'
  }
};
let previousFocus;
document.querySelectorAll('[data-detail]').forEach((button) => {
  button.addEventListener('click', () => {
    const detail = details[button.dataset.detail];
    if (!detail) return;
    document.querySelector('#dialog-title').textContent = detail.title;
    document.querySelector('#dialog-body').innerHTML = detail.body;
    previousFocus = button;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.style.overflow = '';
  previousFocus?.focus({ preventScroll: true });
});

if ('IntersectionObserver' in window) {
  document.documentElement.classList.add('js-ready');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });
  document.querySelectorAll('.reveal').forEach((section) => observer.observe(section));
}
