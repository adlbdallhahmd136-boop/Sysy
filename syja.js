// ===== بيانات الطلاب والأرقام التعريفية =====
const studentData = {
    "st_k8mr4px2a": { ar: "أبو اليزيد", en: "Abo El Yazed", ru: "Абу Эль Язид", ms: "Abo El Yazed" },
    "st_q7vn9tlm5": { ar: "أحمد عادل", en: "Ahmed Adel", ru: "Ахмед Адель", ms: "Ahmed Adel" },
    "st_x3pw8rka1": { ar: "أحمد فولة", en: "Ahmed Foula", ru: "Ахмед Фула", ms: "Ahmed Foula" },
    "st_b6mt2qzn4": { ar: "علي", en: "Ali", ru: "Али", ms: "Ali" },
    "st_l9xc7vrp3": { ar: "أيمن", en: "Ayman", ru: "Айман", ms: "Ayman" },
    "st_d4km8nty6": { ar: "حكمت", en: "Hekmat", ru: "Хекмат", ms: "Hekmat" },
    "st_p2wq5zhx9": { ar: "حسين", en: "Huseen", ru: "Хусейн", ms: "Huseen" },
    "st_r8ml1kvx7": { ar: "محمود محمد", en: "Mahmoud Mohamed", ru: "Махмуд Мухаммед", ms: "Mahmoud Mohamed" },
    "st_n5tb3qwp2": { ar: "محمد زكي", en: "Mohamed Zaki", ru: "Мухаммед Заки", ms: "Mohamed Zaki" },
    "st_y7vd4mkz8": { ar: "محمد رجب", en: "Mohamed Rajab", ru: "Мухаммед Раджаб", ms: "Mohamed Rajab" },
    "st_h3xp9nrt1": { ar: "رسول", en: "Rasol", ru: "Расуль", ms: "Rasol" },
    "st_c8qw2mly5": { ar: "رمضان", en: "Romadan", ru: "Ромадан", ms: "Romadan" },
    "st_t4nk7vxp3": { ar: "سيف الله", en: "Seif Allah", ru: "Сейф Аллах", ms: "Seif Allah" },
    "st_m9rb5qzw6": { ar: "سرور بيك", en: "Surur Beack", ru: "Сурур Бек", ms: "Surur Beack" },
    "st_v2xl8nty4": { ar: "شرف الدين", en: "Sharaf El Dien", ru: "Шараф эль Дин", ms: "Sharaf El Dien" },
    "st_f7mp3qrx9": { ar: "وجيه الله", en: "Wageh Allah", ru: "Вагих Аллах", ms: "Wageh Allah" },
    "st_k5vn1tlm8": { ar: "ولي الله", en: "Wally Allah", ru: "Вали Аллах", ms: "Wally Allah" },
    "st_x9pw4rka2": { ar: "أبو بكر نور", en: "Abu Bakr Nour", ru: "Абу Бакр Нур", ms: "Abu Bakr Nour" },
    "st_b3mt7qzn5": { ar: "الشيخ عبدالله", en: "Sheikh Abdullah", ru: "Шейх Абдулла", ms: "Sheikh Abdullah" },
    "st_l6xc2vrp8": { ar: "شيخ آدم", en: "Sheikh Adam", ru: "Шейх Адам", ms: "Sheikh Adam" },
    "st_d9km5nty1": { ar: "شيخ سعيد", en: "Sheikh Saeed", ru: "Шейх Саид", ms: "Sheikh Saeed" },
    "st_p4wq8zhx3": { ar: "عبدالله داوود", en: "Abdullah Dawood", ru: "Абдулла Дауд", ms: "Abdullah Dawood" },
    "st_r1ml6kvx7": { ar: "محمد رسول", en: "Mohamed Rasol", ru: "Мухаммед Расуль", ms: "Mohamed Rasol" },
    "st_n8tb2qwp4": { ar: "محمد سيد أحمد", en: "Mohamed Sayed Ahmed", ru: "Мухаммед Саид Ахмед", ms: "Mohamed Sayed Ahmed" },
    "st_y5vd9mkz6": { ar: "محمد عثمان", en: "Mohamed Osman", ru: "Мухаммед Осман", ms: "Mohamed Osman" },
    "st_h2xp7nrt8": { ar: "محمد زاهد", en: "Mohamed Zahed", ru: "Мухаммед Захид", ms: "Mohamed Zahed" },
    "st_c4qw1mly9": { ar: "محمد عبدالسلام", en: "Mohamed Abdelsalam", ru: "Мухаммед Абдельсалам", ms: "Mohamed Abdelsalam" }
};

const studentCredentials = {
    "st_k8mr4px2a": { user: "sypa1356", pass: "vX9#mK2q" },
    "st_q7vn9tlm5": { user: "sypa2481", pass: "bL7$tN4w" },
    "st_x3pw8rka1": { user: "sypa9072", pass: "zP3&rW8x" },
    "st_b6mt2qzn4": { user: "sypa5148", pass: "fM6@qZ2t" },
    "st_l9xc7vrp3": { user: "sypa3765", pass: "hC9*vR3x" },
    "st_d4km8nty6": { user: "sypa6824", pass: "jK4%nT6m" },
    "st_p2wq5zhx9": { user: "sypa1947", pass: "wQ5#zH9x" },
    "st_r8ml1kvx7": { user: "sypa8235", pass: "mL1$kV7x" },
    "st_n5tb3qwp2": { user: "sypa4519", pass: "tB3&qW2p" },
    "st_y7vd4mkz8": { user: "sypa7603", pass: "vD4@mK8z" },
    "st_h3xp9nrt1": { user: "sypa2876", pass: "xP9*nR1t" },
    "st_c8qw2mly5": { user: "sypa9341", pass: "qW2%mL5y" },
    "st_t4nk7vxp3": { user: "sypa5182", pass: "nK7#vX3p" },
    "st_m9rb5qzw6": { user: "sypa6417", pass: "rB5$qZ6w" },
    "st_v2xl8nty4": { user: "sypa3058", pass: "xL8&nT4y" },
    "st_f7mp3qrx9": { user: "sypa8794", pass: "mP3@qR9x" },
    "st_k5vn1tlm8": { user: "sypa1623", pass: "vN1*tL8m" },
    "st_x9pw4rka2": { user: "sypa7485", pass: "pW4%rK2a" },
    "st_b3mt7qzn5": { user: "sypa2931", pass: "mT7#qZ5n" },
    "st_l6xc2vrp8": { user: "sypa8560", pass: "xC2$vR8p" },
    "st_d9km5nty1": { user: "sypa4702", pass: "kM5&nT1y" },
    "st_p4wq8zhx3": { user: "sypa7196", pass: "wQ8@zH3x" },
    "st_r1ml6kvx7": { user: "sypa3815", pass: "mL6*kV7x" },
    "st_n8tb2qwp4": { user: "sypa6248", pass: "tB2%qW4p" },
    "st_y5vd9mkz6": { user: "sypa1459", pass: "vD9#mK6z" },
    "st_h2xp7nrt8": { user: "sypa9026", pass: "xP7$nR8t" },
    "st_c4qw1mly9": { user: "sypa5371", pass: "qW1&mL9y" }
};

const studentIdNumbers = {
    "st_k8mr4px2a": "X7K9M2", "st_q7vn9tlm5": "B3T8R1", "st_x3pw8rka1": "L5N2V6",
    "st_b6mt2qzn4": "A9C4W7", "st_l9xc7vrp3": "D1F6H8", "st_d4km8nty6": "G2J3K5",
    "st_p2wq5zhx9": "M4Q7P1", "st_r8ml1kvx7": "R9S2T3", "st_n5tb3qwp2": "U5V8X4",
    "st_y7vd4mkz8": "Y6Z1A2", "st_h3xp9nrt1": "B4C5D7", "st_c8qw2mly5": "E8F9G3",
    "st_t4nk7vxp3": "H1I2J6", "st_m9rb5qzw6": "K7L4M9", "st_v2xl8nty4": "N3O5P8",
    "st_f7mp3qrx9": "Q2R6S1", "st_k5vn1tlm8": "T7U4V9", "st_x9pw4rka2": "W3X5Y8",
    "st_b3mt7qzn5": "Z2A6B1", "st_l6xc2vrp8": "C7D4E9", "st_d9km5nty1": "F3G5H8",
    "st_p4wq8zhx3": "I2J6K1", "st_r1ml6kvx7": "L7M4N9", "st_n8tb2qwp4": "O3P5Q8",
    "st_y5vd9mkz6": "R2S6T1", "st_h2xp7nrt8": "U7V4W9", "st_c4qw1mly9": "X3Y5Z8"
};

const translations = {
    ar: { dir: "rtl", brandTitle: "مركز سيبويه", welcome: "مرحبا ", menuNotes: "ملاحظات", menuLectures: "محاضرات مسجلة", menuStreams: "البثوث", menuFees: "مصاريف", menuBooks: "كتب", menuExams: "امتحانات", menuResults: "نتايج الامتحانات", navLogout: "تسجيل الخروج", navNotif: "الإشعارات", langText: "اللغات", sidebarCountry: "الدولة:", supportText: "الدعم", emptyStateText: "غير متوفر الان", notificationsTitle: "الإشعارات", noNotificationsText: "لا توجد إشعارات حالياً", newsEmptyText: "غير متوفر اخبار حاليا", archiveStreams: "ارشيف البثوث", archiveDesc: "سجل البثوث السابقة", idLabel: "الرقم التعريفي", nameLabel: "الاسم", usernameLabel: "اليوزر", passwordLabel: "كلمة المرور", countryLabel: "الدولة", countryName: "دغستان - روسيا", navHome: "الرئيسية", navNews: "الأخبار", navLibrary: "المكتبة", navNotifications: "الإشعارات", navProfile: "الملف الشخصي", profileTitle: "الملف الشخصي" },
    en: { dir: "ltr", brandTitle: "Sibawayh", welcome: "Welcome, ", menuNotes: "Notes & Remarks", menuLectures: "Recorded Lectures", menuStreams: "Live Streams", menuFees: "Tuition Fees", menuBooks: "Textbooks", menuExams: "Exams & Quizzes", menuResults: "Exam Results", navLogout: "Log Out", navNotif: "Notifications", langText: "Languages", sidebarCountry: "Country:", supportText: "Support", emptyStateText: "Not Available Now", notificationsTitle: "Notifications", noNotificationsText: "No new notifications", newsEmptyText: "No news available", archiveStreams: "Stream Archive", archiveDesc: "Previous live streams", idLabel: "ID Number", nameLabel: "Name", usernameLabel: "Username", passwordLabel: "Password", countryLabel: "Country", countryName: "Dagestan - Russia", navHome: "Home", navNews: "News", navLibrary: "Library", navNotifications: "Notifications", navProfile: "Profile", profileTitle: "Profile" },
    ru: { dir: "ltr", brandTitle: "Сибавейх", welcome: "Добро пожаловать, ", menuNotes: "Заметки", menuLectures: "Записи лекций", menuStreams: "Прямые трансляции", menuFees: "Оплата обучения", menuBooks: "Учебники", menuExams: "Экзамены", menuResults: "Результаты экзаменов", navLogout: "Выйти из системы", navNotif: "Уведомления", langText: "Языки", sidebarCountry: "Страна:", supportText: "Поддержка", emptyStateText: "Недоступно сейчас", notificationsTitle: "Уведомления", noNotificationsText: "Нет новых уведомлений", newsEmptyText: "Нет новостей", archiveStreams: "Архив трансляций", archiveDesc: "Прошлые прямые эфиры", idLabel: "Идентификатор", nameLabel: "Имя", usernameLabel: "Логин", passwordLabel: "Пароль", countryLabel: "Страна", countryName: "Дагестан - Россия", navHome: "Главная", navNews: "Новости", navLibrary: "Библиотека", navNotifications: "Уведомления", navProfile: "Профиль", profileTitle: "Профиль" },
    ms: { dir: "ltr", brandTitle: "Sibawayh", welcome: "Selamat Datang, ", menuNotes: "Nota & Catatan", menuLectures: "Kuliah Dirakam", menuStreams: "Siaran Langsung", menuFees: "Yuran Pengajian", menuBooks: "Buku Teks", menuExams: "Peperiksaan", menuResults: "Keputusan Peperiksaan", navLogout: "Log Keluar", navNotif: "Notifikasi", langText: "Bahasa", sidebarCountry: "Negara:", supportText: "Sokongan", emptyStateText: "Tidak Tersedia Sekarang", notificationsTitle: "Notifikasi", noNotificationsText: "Tiada notifikasi baharu", newsEmptyText: "Tiada berita tersedia", archiveStreams: "Arkib Siaran", archiveDesc: "Siaran langsung terdahulu", idLabel: "Nombor ID", nameLabel: "Nama", usernameLabel: "Nama Pengguna", passwordLabel: "Kata Laluan", countryLabel: "Negara", countryName: "Dagestan - Rusia", navHome: "Utama", navNews: "Berita", navLibrary: "Perpustakaan", navNotifications: "Notifikasi", navProfile: "Profil", profileTitle: "Profil" }
};

const welcomeMessage = {
    ar: `مرحبًا بك في منصة مركز سيبويه التعليمية.\n\nمن خلال هذه المنصة يمكنك الوصول بسهولة إلى جميع الخدمات التعليمية الخاصة بك، بما في ذلك المحاضرات المسجلة، والبثوث المباشرة، والامتحانات، والكتب والملفات التعليمية، بالإضافة إلى الإعلانات والتحديثات المهمة.\n\nاحرص على متابعة المنصة بشكل مستمر للاطلاع على كل جديد والاستفادة الكاملة من المحتوى التعليمي المتاح لك.\n\nنتمنى لك التوفيق والنجاح، ونسعد دائمًا بكوننا جزءًا من رحلتك التعليمية.\n\nإدارة مركز سيبويه التعليمية.`,
    en: `Welcome to the Sibawayh Educational Center platform.\n\nThrough this platform, you can easily access all your educational services, including recorded lectures, live broadcasts, exams, textbooks and educational files, as well as important announcements and updates.\n\nMake sure to continuously follow the platform to stay updated and benefit fully from the educational content available to you.\n\nWe wish you success and prosperity, and we are always happy to be part of your educational journey.\n\nSibawayh Educational Center Administration.`,
    ru: `Добро пожаловать на платформу образовательного центра «Сибавейх».\n\nЧерез эту платформу вы можете легко получить доступ ко всем своим образовательным услугам, включая записанные лекции, прямые трансляции, экзамены, учебники и учебные файлы, а также важные объявления и обновления.\n\nРегулярно следите за платформой, чтобы быть в курсе всего нового и максимально использовать доступный вам образовательный контент.\n\nЖелаем вам успехов и процветания, и мы всегда рады быть частью вашего образовательного пути.\n\nАдминистрация образовательного центра «Сибавейх».`,
    ms: `Selamat datang ke platform Pusat Pendidikan Sibawayh.\n\nMelalui platform ini, anda boleh mengakses semua perkhidmatan pendidikan anda dengan mudah, termasuk kuliah yang dirakam, siaran langsung, peperiksaan, buku teks dan fail pendidikan, serta pengumuman dan kemas kini penting.\n\nPastikan untuk sentiasa mengikuti platform untuk mendapatkan maklumat terkini dan memanfaatkan sepenuhnya kandungan pendidikan yang tersedia untuk anda.\n\nKami mendoakan kejayaan dan kesejahteraan anda, dan kami sentiasa gembira menjadi sebahagian daripada perjalanan pendidikan anda.\n\nPentadbiran Pusat Pendidikan Sibawayh.`
};

const notificationsData = [
    {
        id: 1,
        title: { ar: 'رسالة ترحيبية', en: 'Welcome Message', ru: 'Приветственное сообщение', ms: 'Mesej Alu-aluan' },
        date: '2026-06-21'
    }
];

function getStudentIdFromUrl() {
    return new URLSearchParams(window.location.search).get('id') || '';
}

function getStudentName(lang) {
    const id = getStudentIdFromUrl();
    const student = studentData[id];
    let name = student ? (student[lang] || student['ar']) : "طالب";
    if (lang === 'ar' && name.startsWith('مو ')) name = 'محمد ' + name.substring(3);
    else if (lang === 'en' && name.startsWith('Mo ')) name = 'Mohamed ' + name.substring(3);
    else if (lang === 'ru' && name.startsWith('Мо ')) name = 'Мухаммед ' + name.substring(3);
    else if (lang === 'ms' && name.startsWith('Mo ')) name = 'Mohamed ' + name.substring(3);
    return name;
}

function getStudentCredentials() {
    return studentCredentials[getStudentIdFromUrl()] || { user: '-', pass: '********' };
}

function getStudentIdNumber() {
    return studentIdNumbers[getStudentIdFromUrl()] || '------';
}

let currentLang = localStorage.getItem('lang') || 'ar';
let typewriterTimeout;

function openMenu() {
    document.getElementById('sidebarMenu').classList.add('open');
    document.getElementById('sidebarOverlay').classList.add('show');
}
function closeMenu() {
    document.getElementById('sidebarMenu').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('show');
}

function startTypewriter(text, name) {
    const el = document.getElementById('typewriter');
    if (!el) return;
    const full = text + name;
    el.innerHTML = "";
    let i = 0;
    if (typewriterTimeout) clearTimeout(typewriterTimeout);
    function type() { if (i < full.length) { el.innerHTML += full.charAt(i); i++; typewriterTimeout = setTimeout(type, 80); } }
    type();
}

function updateProfileInfo() {
    const name = getStudentName(currentLang);
    const creds = getStudentCredentials();
    const idNum = getStudentIdNumber();
    document.getElementById('profileNameLarge').innerText = name;
    document.getElementById('profileUserLarge').innerText = creds.user;
    document.getElementById('profileIdValue').innerText = idNum;
    document.getElementById('sidebarNameDisplay').innerText = name;
    // تحديث الدولة ديناميكياً
    const country = translations[currentLang].countryName;
    document.getElementById('profileCountryValue').innerText = country;
    document.getElementById('sidebarCountryValue').innerText = country;
    applySavedAvatar();
}

function applySavedAvatar() {
    const studentId = getStudentIdFromUrl();
    const savedPic = localStorage.getItem('profilePic_' + studentId);
    const defaultPic = 'https://i.postimg.cc/vTYPtt91/Background-Eraser-20260603-012724521.png';
    const sidebarImg = document.getElementById('sidebarAvatar');
    const profileImg = document.getElementById('profileAvatarLarge');
    if (savedPic) {
        if (sidebarImg) sidebarImg.src = savedPic;
        if (profileImg) profileImg.src = savedPic;
    } else {
        if (sidebarImg) sidebarImg.src = defaultPic;
        if (profileImg) profileImg.src = defaultPic;
    }
}

function renderNotifications() {
    const container = document.getElementById('notificationsListEmbedded');
    if (!container) return;
    const lang = currentLang;
    const supportText = translations[lang].supportText;
    let html = '';
    notificationsData.forEach(notif => {
        const title = notif.title[lang] || notif.title['ar'];
        const message = welcomeMessage[lang] || welcomeMessage['ar'];
        const preview = message.length > 80 ? message.substring(0, 80) + '...' : message;
        html += `
        <div class="notification-card" data-id="${notif.id}" onclick="openNotificationDetail(${notif.id})">
            <div class="notif-header">
                <div class="notif-icon"><svg viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg></div>
                <div class="notif-meta">
                    <div class="notif-title">${title}</div>
                    <div class="notif-date">${notif.date}</div>
                </div>
            </div>
            <div class="notif-sender">
                <svg width="16" height="16" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                <span>${supportText}</span>
                <span class="verified-badge-sender"><svg viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg></span>
            </div>
            <div class="notif-preview">${preview}</div>
        </div>`;
    });
    container.innerHTML = html || `<div class="empty-notifications">${translations[lang].noNotificationsText}</div>`;
}

function openNotificationDetail(id) {
    const notif = notificationsData.find(n => n.id === id);
    if (!notif) return;
    const lang = currentLang;
    const title = notif.title[lang] || notif.title['ar'];
    const message = welcomeMessage[lang] || welcomeMessage['ar'];
    document.getElementById('detailTitle').innerText = title;
    document.getElementById('detailDate').innerText = notif.date;
    document.getElementById('detailSender').innerHTML = `<svg width="16" height="16" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg> ${translations[lang].supportText} <span class="verified-badge-sender"><svg viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg></span>`;
    document.getElementById('detailBody').innerText = message;
    document.getElementById('notifDetailOverlay').classList.add('active');
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const data = translations[lang], name = getStudentName(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = data.dir;
    const set = (id, text) => { const el = document.getElementById(id); if (el) el.innerText = text; };
    set('txt-brand-title', data.brandTitle);
    set('currentLangText', data.langText);
    set('txt-nav-logout', data.navLogout);
    set('txt-nav-notif', data.navNotif);
    set('txt-menu-notes', data.menuNotes);
    set('txt-menu-lectures', data.menuLectures);
    set('txt-menu-streams', data.menuStreams);
    set('txt-menu-fees', data.menuFees);
    set('txt-menu-books', data.menuBooks);
    set('txt-menu-exams', data.menuExams);
    set('txt-menu-results', data.menuResults);
    set('txt-archive-streams', data.archiveStreams);
    set('lbl-sidebar-country', data.sidebarCountry);
    set('txt-nav-support', data.supportText);
    set('notificationsPageTitleEmbedded', data.notificationsTitle);
    set('newsEmptyMsg', data.newsEmptyText);
    set('libraryEmptyMsg', data.emptyStateText);
    set('archiveEmptyMsg', data.emptyStateText);
    set('lbl-name', data.nameLabel);
    set('lbl-username', data.usernameLabel);
    set('lbl-password', data.passwordLabel);
    set('lbl-country', data.countryLabel);
    set('lbl-id', data.idLabel);
    set('profilePageTitle', data.profileTitle);
    // Bottom nav texts
    set('nav-home-text', data.navHome);
    set('nav-news-text', data.navNews);
    set('nav-library-text', data.navLibrary);
    set('nav-notifications-text', data.navNotifications);
    set('nav-profile-text', data.navProfile);
    updateProfileInfo();
    renderNotifications();
    document.getElementById('langDropdown').classList.remove('active');
    startTypewriter(data.welcome, name);
}

function switchTab(tab) {
    document.getElementById('mainContent').style.display = 'none';
    ['newsPage','libraryPage','archiveStreamsPage','notificationsEmbedded','profileEmbedded'].forEach(id => document.getElementById(id).classList.remove('active'));
    document.querySelectorAll('.bottom-nav-item').forEach(i => i.classList.remove('active'));
    const active = document.querySelector(`.bottom-nav-item[data-tab="${tab}"]`);
    if (active) active.classList.add('active');
    if (tab === 'home') document.getElementById('mainContent').style.display = 'flex';
    else if (tab === 'news') document.getElementById('newsPage').classList.add('active');
    else if (tab === 'library') document.getElementById('libraryPage').classList.add('active');
    else if (tab === 'archiveStreams') document.getElementById('archiveStreamsPage').classList.add('active');
    else if (tab === 'notifications') { document.getElementById('notificationsEmbedded').classList.add('active'); renderNotifications(); }
    else if (tab === 'profile') { document.getElementById('profileEmbedded').classList.add('active'); updateProfileInfo(); }
}

function initAvatarUpload() {
    const fileInput = document.getElementById('avatarUpload');
    const profileContainer = document.getElementById('profileAvatarContainer');
    const sidebarAvatar = document.getElementById('sidebarAvatar');
    sidebarAvatar.addEventListener('click', () => fileInput.click());
    profileContainer.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(ev) {
            const dataUrl = ev.target.result;
            const studentId = getStudentIdFromUrl();
            localStorage.setItem('profilePic_' + studentId, dataUrl);
            applySavedAvatar();
        };
        reader.readAsDataURL(file);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const studentId = getStudentIdFromUrl();
    if (!studentId) { window.location.href = 'syff.html'; return; }
    document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || 'light');
    currentLang = localStorage.getItem('lang') || 'ar';
    document.documentElement.lang = currentLang;
    changeLanguage(currentLang);
    initAvatarUpload();
    document.getElementById('searchBtn').addEventListener('click', (e) => { e.stopPropagation(); document.getElementById('searchOverlay').classList.add('active'); document.getElementById('searchInput').focus(); });
    document.getElementById('searchCloseBtn').addEventListener('click', () => document.getElementById('searchOverlay').classList.remove('active'));
    document.getElementById('searchOverlay').addEventListener('click', function(e) { if (e.target === this) this.classList.remove('active'); });
    document.getElementById('searchInput').addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        const lang = currentLang;
        const resContainer = document.getElementById('searchResults');
        const noRes = document.getElementById('searchNoResults');
        if (!query) { resContainer.innerHTML = ''; resContainer.classList.remove('has-results'); noRes.classList.remove('show'); return; }
        const filtered = [{ar:'ملاحظات',en:'Notes',ru:'Заметки',ms:'Nota',url:'notes.html'},{ar:'محاضرات مسجلة',en:'Recorded Lectures',ru:'Записи лекций',ms:'Kuliah Dirakam',url:'lectures.html'},{ar:'البثوث',en:'Live Streams',ru:'Прямые трансляции',ms:'Siaran Langsung',url:'streams.html'},{ar:'مصاريف',en:'Tuition Fees',ru:'Оплата обучения',ms:'Yuran Pengajian',url:'fees.html'},{ar:'كتب',en:'Textbooks',ru:'Учебники',ms:'Buku Teks',url:'books.html'},{ar:'امتحانات',en:'Exams',ru:'Экзамены',ms:'Peperiksaan',url:'exams.html'},{ar:'نتايج الامتحانات',en:'Exam Results',ru:'Результаты',ms:'Keputusan',url:'results.html'},{ar:'ارشيف البثوث',en:'Stream Archive',ru:'Архив трансляций',ms:'Arkib Siaran',url:'#archive'}].filter(item => (item[lang]?.toLowerCase()||'').includes(query));
        if (!filtered.length) { resContainer.innerHTML = ''; resContainer.classList.remove('has-results'); noRes.classList.add('show'); return; }
        noRes.classList.remove('show');
        let html = '';
        filtered.forEach(item => html += `<div class="search-result-item" onclick="document.getElementById('searchOverlay').classList.remove('active');${item.url.startsWith('#') ? "switchTab('archiveStreams')" : `window.location.href='${item.url}?id=${studentId}'`}"><div class="result-icon"><svg viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></div><div class="result-title">${item[lang]}</div></div>`);
        resContainer.innerHTML = html;
        resContainer.classList.add('has-results');
    });
    document.querySelectorAll('.bottom-nav-item').forEach(item => item.addEventListener('click', function() { switchTab(this.dataset.tab); }));
    document.getElementById('themeToggleBtn').addEventListener('click', () => {
        const curr = document.documentElement.getAttribute('data-theme');
        const next = curr === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
    document.getElementById('langBtn').addEventListener('click', (e) => { e.stopPropagation(); document.getElementById('langDropdown').classList.toggle('active'); });
    document.addEventListener('click', (e) => { if (!e.target.closest('.lang-dropdown-wrapper')) document.getElementById('langDropdown').classList.remove('active'); });
    document.getElementById('burgerBtn').addEventListener('click', (e) => { e.stopPropagation(); openMenu(); });
    document.getElementById('closeSidebar').addEventListener('click', closeMenu);
    document.getElementById('sidebarOverlay').addEventListener('click', closeMenu);
    document.getElementById('logoutBtn').addEventListener('click', () => window.location.href = 'syff.html');
    document.getElementById('notifBtn').addEventListener('click', () => { closeMenu(); switchTab('notifications'); });
    document.getElementById('closeNotifDetail').addEventListener('click', () => document.getElementById('notifDetailOverlay').classList.remove('active'));
    document.getElementById('notifDetailOverlay').addEventListener('click', function(e) { if (e.target === this) this.classList.remove('active'); });
});
