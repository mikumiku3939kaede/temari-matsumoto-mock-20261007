const english = {
  'skip': 'Skip to content',
  'brand.kicker': 'Restaurant',
  'brand.name': 'Temari',
  'nav.about': 'About Temari',
  'nav.menu': 'Menu',
  'nav.news': 'Updates',
  'nav.access': 'Find us',
  'contact.phone': 'Call the restaurant <span aria-hidden="true">↗</span>',
  'hero.title': 'Handmade soba<span class="red-stop">.</span><br>This week’s<br>chef’s choice<span class="red-stop">.</span>',
  'photo.heroTitle': 'Soba and<br>chef’s choice<span class="red-stop">.</span><br>Lunch at Temari<span class="red-stop">.</span>',
  'hero.subtitle': 'Savor the aroma of soba,<br>or discover this week’s menu.<br>Enjoy lunch at Temari in Matsumoto.',
  'hero.menu': 'Explore the menu <span class="round-arrow" aria-hidden="true">↗</span>',
  'hours.label': 'Lunch hours',
  'hours.quick': 'Opens at 11:30<small>Last orders at 14:00</small>',
  'hours.detail': 'Opens at 11:30<span>Last orders at 14:00</span>',
  'closed.label': 'Closed',
  'closed.quick': 'Monday &amp; Tuesday<small>Including public holidays</small>',
  'closed.detail': 'Every Monday &amp; Tuesday<span>Including public holidays</span>',
  'access.label': 'Getting here',
  'access.quick': '1-minute walk from<br>Shinano-Arai Station<small>Parking available <span aria-hidden="true">↗</span></small>',
  'about.title': 'Lunch in<br>Shimadachi, Matsumoto.',
  'about.body': 'A one-minute walk from Shinano-Arai Station, Temari is a restaurant in Shimadachi, Matsumoto, serving handmade soba and a weekly chef’s choice.',
  'about.welcome': 'We open for lunch at 11:30, with last orders at 14:00. Find this week’s menu and closing-day announcements on Instagram before your visit.',
  'menu.title': 'Our menu<span class="red-stop">.</span>',
  'menu.soba': 'Handmade soba',
  'menu.sobaDescription': 'Savor the aroma and texture of handmade buckwheat noodles, one bite at a time.',
  'menu.seasonal': 'Weekly chef’s choice',
  'menu.changes': 'Our chef’s choice changes every Wednesday. Discover what’s on the menu this week.',
  'menu.instagram': 'See this week’s menu on Instagram <span aria-hidden="true">↗</span>',
  'history.title': 'From past chef’s choices<span class="red-stop">.</span>',
  'history.intro': 'Small dishes and soup, followed by the chef’s choice dishes and handmade soba. A guest’s account from February 2026 describes a lunch unfolding one dish at a time.',
  'history.pork': 'House-made pork ham<br>with mimosa salad',
  'history.fish': 'Spanish mackerel and shrimp<br>with steamed turnip',
  'history.note': 'These are examples from a past visit. Please check with the restaurant for the current menu.',
  'history.source': 'Read the February 2026 visit report <span class="round-arrow" aria-hidden="true">↗</span>',
  'news.title': 'Temari updates<span class="red-stop">.</span>',
  'news.seasonal': 'This week’s menu on Instagram',
  'news.hours': 'Opening hours and closing days',
  'news.parking': 'Visiting by car',
  'access.title': 'We look forward to seeing you<span class="red-stop">.</span>',
  'access.trainLabel': 'By train',
  'access.train': 'A 1-minute walk from Shinano-Arai Station on the Kamikochi Line',
  'access.parkingLabel': 'Parking',
  'access.parking': '5 spaces in front of the restaurant<span>Additional spaces on the neighboring property</span>',
  'store.name': '<span>Restaurant</span> Temari',
  'store.address': '25-3 Shimadachi, Matsumoto<br>Nagano 390-0852, Japan',
  'map.title': 'Temari restaurant: 25-3 Shimadachi, Matsumoto, Nagano, Japan',
  'map.open': 'Open in Google Maps <span aria-hidden="true">↗</span>',
  'instagram.title': 'Find our latest updates on Instagram',
  'footer.note': 'This is a design mockup. Real photographs show past dishes.<br>Only the soba photo is an AI-generated placeholder. Please check with the restaurant for current information.',
  'footer.photos': 'Photos: ',
  'footer.bank': 'Matsumoto Shinkin Bank’s restaurant feature',
  'gallery.title': 'Dishes from Temari.',
  'gallery.intro': 'Real food photos from our official Instagram.<br>These are past dishes. Please check with the restaurant for this week’s menu.',
  'gallery.post': 'View post <span aria-hidden="true">↗</span>',
  'gallery.image.blue': 'Food and vegetables served on a blue plate',
  'gallery.image.fried': 'A fried dish served with sauce in a ceramic bowl',
  'gallery.image.yellow': 'A dish with yellow sauce served on a blue plate',
  'gallery.image.round': 'A plated dish with vegetables on a blue plate',
  'gallery.image.bowl': 'A dish topped with scallions in a ceramic bowl',
  'gallery.image.crumbed': 'A plate of fried food with vegetables',
  'contact.map': 'Map &amp; directions <span aria-hidden="true">↗</span>',
  'contact.call': 'Call us <span aria-hidden="true">↗</span>',
  'dialog.instagram': 'Latest updates on Instagram <span class="round-arrow" aria-hidden="true">↗</span>',
  'aria.home': 'Temari restaurant — back to top',
  'aria.mainNav': 'Main navigation',
  'aria.mobileNav': 'Mobile navigation',
  'aria.phone': 'Call Temari at 0263-47-2902',
  'aria.quickInfo': 'Opening hours and directions',
  'aria.sobaImage': 'Learn about handmade soba',
  'aria.sobaDetail': 'Open handmade soba details',
  'aria.seasonalImage': 'Learn about the weekly chef’s choice',
  'aria.seasonalDetail': 'Open weekly chef’s choice details',
  'aria.top': 'Back to top',
  'aria.close': 'Close details',
  'aria.instagram': 'Find the latest updates on Instagram',
  'aria.storefrontSource': 'View the source of Temari’s entrance photograph',
  'aria.parkingSource': 'View the official parking photo post',
  'image.hero': 'A meal at Temari with rice, soup and side dishes on a wooden table',
  'image.soba': 'AI-generated placeholder: cold soba noodles with tempura',
  'image.seasonal': 'A plated dish with vegetables on a ceramic plate',
  'image.storefront': 'Temari’s noren curtain and wooden entrance',
  'image.parking': 'Temari’s parking area with P markers showing the parking spaces'
};

const localizedElements = [...document.querySelectorAll('[data-i18n], [data-i18n-aria], [data-i18n-alt], [data-i18n-title]')].map((element) => ({
  element,
  originalHTML: element.innerHTML,
  originalAttributes: {
    'aria-label': element.getAttribute('aria-label'),
    'alt': element.getAttribute('alt'),
    'title': element.getAttribute('title')
  }
}));
const originalTitle = document.title;
const description = document.querySelector('meta[name="description"]');
const originalDescription = description.content;
const languageButton = document.querySelector('.language-toggle');
const toggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('#mobile-nav');
const dialog = document.querySelector('#detail-dialog');
const map = document.querySelector('.map-frame iframe');
const originalMapURL = map.src;
let currentLanguage = 'ja';
let activeDetail;
let previousFocus;

const details = {
  ja: {
    soba: {
      title: '手打ち蕎麦',
      body: '<p>蕎麦の香りと食感を、ひと口ずつ。手毬の手打ち蕎麦をじっくり味わう、お昼のひとときをどうぞ。</p><p class="dialog-note">詳しいおしながき・価格は店舗へお問い合わせください。</p>'
    },
    seasonal: {
      title: '週替わりのおまかせ',
      body: '<p>毎週水曜日に献立が変わる、おまかせ料理。今週のおまかせを楽しみに、お昼の予定に加えてみませんか。</p><p class="dialog-note">今週の献立は、手毬のInstagramでご紹介しています。お越しの前にご確認ください。</p>'
    },
    hours: {
      title: '営業時間のご案内',
      body: '<dl><div><dt>営業時間</dt><dd>11:30〜<br>14:00 ラストオーダー</dd></div><div><dt>定休日</dt><dd>毎週月曜日・火曜日<br>祝日も含みます</dd></div><div><dt>お電話</dt><dd><a href="tel:0263472902">0263-47-2902</a></dd></div></dl><p class="dialog-note">臨時休業など最新の営業案内は、Instagramまたはお電話でご確認ください。</p>'
    }
  },
  en: {
    soba: {
      title: 'Handmade soba',
      body: '<p>Savor the aroma and texture of Temari’s handmade buckwheat noodles, one bite at a time. Take a moment to enjoy them over lunch.</p><p class="dialog-note">Please contact the restaurant for the full menu and prices.</p>'
    },
    seasonal: {
      title: 'Weekly chef’s choice',
      body: '<p>Our chef’s choice changes every Wednesday. Make this week’s menu something to look forward to at lunchtime.</p><p class="dialog-note">Find this week’s menu on Temari’s Instagram before your visit.</p>'
    },
    hours: {
      title: 'Opening hours',
      body: '<dl><div><dt>Lunch</dt><dd>Opens at 11:30<br>Last orders at 14:00</dd></div><div><dt>Closed</dt><dd>Every Monday and Tuesday<br>Including public holidays</dd></div><div><dt>Phone</dt><dd><a href="tel:0263472902">0263-47-2902</a></dd></div></dl><p class="dialog-note">For the latest opening information and any special closing days, check Instagram or call the restaurant.</p>'
    }
  }
};

function setNavigation(open) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', currentLanguage === 'en' ? (open ? 'Close menu' : 'Open menu') : (open ? 'メニューを閉じる' : 'メニューを開く'));
  navigation.hidden = !open;
}

function renderDetail(key) {
  const detail = details[currentLanguage][key];
  if (!detail) return;
  document.querySelector('#dialog-title').textContent = detail.title;
  document.querySelector('#dialog-body').innerHTML = detail.body;
}

function applyLanguage(language, remember = false) {
  currentLanguage = language === 'en' ? 'en' : 'ja';
  document.documentElement.lang = currentLanguage;
  localizedElements.forEach(({ element, originalHTML, originalAttributes }) => {
    if (element.dataset.i18n) {
      element.innerHTML = currentLanguage === 'en' ? (english[element.dataset.i18n] ?? originalHTML) : originalHTML;
    }
    for (const [dataKey, attribute] of [['i18nAria', 'aria-label'], ['i18nAlt', 'alt'], ['i18nTitle', 'title']]) {
      if (element.dataset[dataKey]) {
        element.setAttribute(attribute, currentLanguage === 'en' ? (english[element.dataset[dataKey]] ?? originalAttributes[attribute]) : originalAttributes[attribute]);
      }
    }
  });
  document.title = currentLanguage === 'en' ? 'Temari | Handmade soba & weekly chef’s choice [Design mockup]' : originalTitle;
  description.content = currentLanguage === 'en' ? 'Temari in Shimadachi, Matsumoto. Savor handmade soba or discover a chef’s choice that changes every Wednesday. Lunch from 11:30; last orders at 14:00. Design mockup.' : originalDescription;
  languageButton.textContent = currentLanguage === 'en' ? '日本語' : 'English';
  languageButton.lang = currentLanguage === 'en' ? 'ja' : 'en';
  languageButton.setAttribute('aria-label', currentLanguage === 'en' ? '日本語に切り替える' : 'Switch to English');
  setNavigation(toggle.getAttribute('aria-expanded') === 'true');
  if (dialog.open && activeDetail) renderDetail(activeDetail);
  const mapURL = new URL(originalMapURL);
  mapURL.searchParams.set('hl', currentLanguage);
  if (map.src !== mapURL.href) map.src = mapURL.href;
  if (remember) {
    try { localStorage.setItem('temari-language', currentLanguage); } catch { /* Language switching works without storage. */ }
    try {
      const url = new URL(location.href);
      url.searchParams.set('lang', currentLanguage);
      history.replaceState(history.state, '', url);
    } catch { /* File previews can still switch languages. */ }
  }
}

function initialLanguage() {
  const requested = new URL(location.href).searchParams.get('lang');
  if (requested === 'ja' || requested === 'en') return requested;
  try { return localStorage.getItem('temari-language') === 'en' ? 'en' : 'ja'; } catch { return 'ja'; }
}

applyLanguage(initialLanguage());
languageButton.addEventListener('click', () => applyLanguage(currentLanguage === 'ja' ? 'en' : 'ja', true));
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
window.matchMedia('(min-width: 1101px)').addEventListener('change', (event) => {
  if (event.matches) setNavigation(false);
});

document.querySelectorAll('[data-detail]').forEach((button) => {
  button.addEventListener('click', () => {
    activeDetail = button.dataset.detail;
    if (!details[currentLanguage][activeDetail]) return;
    renderDetail(activeDetail);
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
  activeDetail = undefined;
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
