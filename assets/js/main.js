(function () {
  'use strict';

  // Номер WhatsApp: только цифры, с кодом страны (пример: 77011234567)
  var WHATSAPP = '77714052244';
  var EMAIL = 'sales@wmtrade.kz';

  document.documentElement.classList.add('js');

  // Казахские тексты. Русские берутся из HTML при загрузке страницы.
  var KK = {
    meta_title: 'West Multi Trade — Lenovo-ның Қазақстандағы ресми Gold серіктесі',
    meta_desc: 'Қазақстанға ресми түрде әкелінген Lenovo ноутбуктары, ДК, серверлері мен мониторлары өндіруші кепілдігімен. Жабдықты іріктеу, коммерциялық ұсыныс, бизнес пен мемлекеттік тапсырыс берушілерге арналған IT‑қызметтер.',

    nav_catalog: 'Каталог',
    nav_about: 'Компания туралы',
    nav_services: 'Қызметтер',
    nav_certs: 'Сертификаттар',
    nav_contacts: 'Байланыс',

    hero_eyebrow: 'Lenovo-ның Қазақстандағы ресми Gold серіктесі',
    hero_title: 'Бизнеске арналған Lenovo техникасы мен IT‑шешімдер — ресми түрде, өндіруші кепілдігімен',
    hero_lead: 'Қазақстанға ресми түрде әкелінген ноутбуктарды, ДК, серверлер мен мониторларды жеткіземіз. Міндетіңізге сай жабдықты іріктеп, коммерциялық ұсыныс дайындаймыз.',
    hero_cta: 'Коммерциялық ұсыныс алу',
    hero_call: 'Қоңырау шалу',
    hero_p1: 'Ресми импорт және толық құжаттар топтамасы',
    hero_p2: 'Өндіруші кепілдігі',
    hero_p3: 'Бизнес, ЖК және мемлекеттік тапсырыс берушілер үшін',
    hero_card: 'Бизнесіңізге арналған озық ақпараттық технологиялар мен шешімдер',

    stat_years: 'жыл Қазақстанның IT‑нарығында',
    stat_clients_num: 'Жүздеген',
    stat_clients: 'риза клиенттер',
    stat_gold: 'Lenovo серіктесі',
    stat_services: 'IT‑қызмет бағыты',
    vendors_label: 'Сондай-ақ жабдық жеткіземіз:',

    cat_title: 'Бизнеске арналған Lenovo жабдықтары',
    cat_lead: 'Lenovo коммерциялық техникасының толық желісі — қызметкерлерге арналған ноутбуктардан сервер инфрақұрылымына дейін.',
    price_link: 'Бағасын білу →',
    c1_t: 'Ноутбуктар',
    c1_d: 'ThinkPad және ThinkBook — мобильді қызметкерлер мен басшыларға арналған ықшам әрі өнімді модельдер.',
    c2_t: 'Үстел компьютерлері',
    c2_d: 'ThinkCentre — кез келген ауқымдағы кеңселерге арналған сенімді компьютерлер.',
    c3_t: 'Моноблоктар',
    c3_d: 'Барлығы бір корпуста: жұмыс үстеліндегі орынды үнемдеу және оңай қызмет көрсету.',
    c4_t: 'Жұмыс станциялары',
    c4_d: 'САПР, ГИС, 3D-графика және деректер аналитикасына арналған ThinkStation.',
    c5_t: 'Планшеттер',
    c5_d: 'Көшпелі қызметкерлерге, саудаға және корпоративтік мобильділікке арналған.',
    c6_t: 'Мониторлар',
    c6_d: 'ThinkVision — кеңселік модельдерден кәсіби дисплейлерге дейін.',
    c7_t: 'Сервер жабдықтары',
    c7_d: 'ThinkSystem — компания инфрақұрылымына арналған серверлер мен деректерді сақтау жүйелері.',
    c8_t: 'Док-станциялар',
    c8_d: 'Бір қосылым — монитор, желі және жұмыс орнындағы барлық перифериялық құрылғылар.',
    c9_t: 'Аксессуарлар',
    c9_d: 'Lenovo түпнұсқа аксессуарлары: сөмкелер, тінтуірлер, пернетақталар, гарнитуралар.',

    about_eyebrow: 'Компания туралы',
    about_title: 'West Multi Trade — сенімді IT‑серіктесіңіз',
    about_p1: 'West Multi Trade — IT‑жабдықтарының, компьютерлік және тұрмыстық техниканың, күрделі желілік шешімдердің жетекші жеткізушісі және Қазақстан Республикасындағы жүйелік интегратор. Компания бірнеше жыл бойы Lenovo-ның ресми серіктесі және коммерциялық шешімдерінің жеткізушісі болып табылады.',
    about_p2: 'Ірі корпоративтік тапсырыс беруші болсаңыз да, жеке кәсіпкер болсаңыз да, жабдықты таңдауға көмектесеміз.',
    registry: 'Компания «Сенімді және әлеуметтік маңызы бар кәсіпорындар мен тауарлар мен қызметтердің сенімді жеткізушілерінің тізіліміне» енгізілген.',
    ben_title: 'Бізді таңдай отырып, сіз мыналарды аласыз:',
    ben_1: 'Кәсіби және жеке көзқарас',
    ben_2: 'Тиімді бағадағы ең заманауи жабдық',
    ben_3: 'Икемді әрі өзара тиімді төлем шарттары',
    ben_4: 'Тәжірибелі инженерлердің міндетіңізге сай жабдық іріктеуі',
    ben_5: 'Кәсіпқой мамандар және жолға қойылған жұмыс процестері',

    why_title: 'Неліктен бізді таңдайды',
    why1_t: 'Сенімділік пен сараптама',
    why1_d: '10 жылдан астам тәжірибесі бар IT‑нарық көшбасшысының кәсібилігі. Біздің құзыреттілігімізді клиенттер, вендорлар және тәуелсіз дереккөздер мойындаған.',
    why2_t: 'IT‑міндеттерді шешудің бірыңғай нүктесі',
    why2_d: 'Мультивендорлық қолдау және жобаны жабдық іріктеуден бастап енгізуге дейін сүйемелдеу.',
    why3_t: 'Әрқашан жаныңыздамыз',
    why3_d: 'Сізбен бір тілде сөйлесеміз және әрқашан байланыстамыз — жеткізуге дейін де, кейін де.',
    trusted: 'Бізге нарықтың жетекші ойыншылары, орта және шағын бизнес, мемлекеттік тапсырыс берушілер мен білім беру мекемелері сенім артады.',

    srv_title: 'IT‑қызметтер мен шешімдер',
    srv_lead: 'Тек жеткізу ғана емес: компанияның IT‑міндеттерін толық көлемде шешеміз.',
    s1: 'Инфрақұрылымды құру, көшіру және жаңғырту',
    s2: 'Бұлтты шешімдер',
    s3: 'Ақпараттық қауіпсіздік',
    s4: 'Бағдарламалық қамтамасыз етуді жеткізу',
    s5: 'Аппараттық қамтамасыз ету',
    s6: 'САПР және ГИС',
    s7: 'IT‑мамандарды оқыту және сертификаттау',
    s8: 'Техникалық қолдау және аутсорсинг',
    s9: 'Тапсырыс бойынша әзірлеу',
    s10: 'Бизнеске арналған шешімдер: SAP, CRM, BI, құжат айналымы',
    s11: 'Корпоративтік мобильділік',
    s12: 'Microsoft шешімдері',
    s13: 'IT‑стратегияларды әзірлеу, SAM, ITAM',
    s14: 'Лизинг және қаржыландыру',
    s15: 'Инженерлік шешімдер',

    steps_title: 'Біз қалай жұмыс істейміз',
    st1_t: 'Өтінім',
    st1_d: 'Бізге қоңырау шалыңыз немесе жазыңыз — міндет пен бюджетті сипаттаңыз.',
    st2_t: 'Іріктеу',
    st2_d: 'Инженер жабдықтың оңтайлы конфигурациясын таңдайды.',
    st3_t: 'Ұсыныс',
    st3_d: 'Бағалары мен жеткізу мерзімдері көрсетілген коммерциялық ұсыныс дайындаймыз.',
    st4_t: 'Жеткізу',
    st4_d: 'Құжаттары мен өндіруші кепілдігі бар ресми жеткізу.',

    certs_title: 'Сертификаттар мен мәртебелер',
    certs_lead: 'Серіктестік мәртебелерін өндірушілер растаған.',

    ct_title: 'Бизнеске техника керек пе? Ұсыныс алыңыз',
    ct_lead: 'Қоңырау шалыңыз немесе жазыңыз — жабдықты іріктеп, құнын есептейміз.',
    ct_call: 'Қоңырау шалу',
    ct_wa: 'WhatsApp-қа жазу',
    ct_addr_l: 'Мекенжай',
    ct_addr: 'Алматы қ., Марков к-сі, 43, 2-кеңсе',
    ct_map: 'Картадан ашу →',
    ct_phone_l: 'Кеңсе телефоны',
    footer: '«West Multi Trade» ЖШС. Lenovo-ның Қазақстандағы ресми Gold серіктесі.',

    mail_kp: 'Коммерциялық ұсыныс сұрауы',
    mail_prefix: 'Баға сұрауы: '
  };

  var RU = {
    mail_kp: 'Запрос коммерческого предложения',
    mail_prefix: 'Запрос цены: '
  };

  var textEls = document.querySelectorAll('[data-i18n]');
  var attrEls = document.querySelectorAll('[data-i18n-attr]');

  // Сохраняем русский текст из разметки
  textEls.forEach(function (el) { RU[el.getAttribute('data-i18n')] = el.textContent; });
  attrEls.forEach(function (el) {
    var p = el.getAttribute('data-i18n-attr').split(':');
    RU[p[1]] = el.getAttribute(p[0]);
  });

  function mailto(subject) {
    return 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject);
  }

  function setLang(lang) {
    var dict = lang === 'kk' ? KK : RU;
    document.documentElement.lang = lang;

    textEls.forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v != null) el.textContent = v;
    });
    attrEls.forEach(function (el) {
      var p = el.getAttribute('data-i18n-attr').split(':');
      if (dict[p[1]] != null) el.setAttribute(p[0], dict[p[1]]);
    });

    // Темы писем: КП или «Запрос цены: <категория>»
    document.querySelectorAll('[data-mail]').forEach(function (el) {
      var key = el.getAttribute('data-mail');
      el.href = key === 'mail_kp' ? mailto(dict.mail_kp) : mailto(dict.mail_prefix + dict[key] + ' Lenovo');
    });

    document.querySelectorAll('.lang__btn').forEach(function (b) {
      var active = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', active);
    });

    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  document.querySelectorAll('.lang__btn').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
  });

  var urlLang = new URLSearchParams(location.search).get('lang');
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  var initial = urlLang === 'kk' || urlLang === 'ru' ? urlLang : saved;
  setLang(initial === 'kk' ? 'kk' : 'ru');

  // WhatsApp
  document.querySelectorAll('[data-wa]').forEach(function (el) { el.href = 'https://wa.me/' + WHATSAPP; });

  // Мобильное меню
  var header = document.querySelector('.header');
  var burger = document.getElementById('burger');
  burger.addEventListener('click', function () {
    var open = header.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      header.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  // Сертификаты в лайтбоксе
  var lightbox = document.getElementById('lightbox');
  var lbImg = lightbox.querySelector('img');
  document.querySelectorAll('.cert').forEach(function (c) {
    c.addEventListener('click', function () {
      lbImg.src = c.getAttribute('data-full');
      lbImg.alt = c.querySelector('img').alt;
      if (lightbox.showModal) lightbox.showModal(); else window.open(lbImg.src, '_blank');
    });
  });
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target.classList.contains('lightbox__close')) lightbox.close();
  });

  // Появление блоков при прокрутке
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  document.getElementById('year').textContent = new Date().getFullYear();
})();
