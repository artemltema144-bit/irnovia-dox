// Constants and Configuration
const APP_CONFIG = {
    ALPHABET: {
        'а': 'А', 'б': 'Б', 'в': 'v', 'г': 'Г', 'д': 'd',
        'е': 'Е', 'ж': 'Ж', 'з': 'З', 'и': 'И', 'й': 'j',
        'к': 'К', 'л': 'Л', 'м': 'М', 'н': 'n', 'о': 'О',
        'п': 'П', 'р': 'r', 'с': 's', 'т': 'Т', 'у': 'u',
        'ф': 'Ф', 'х': 'Х', 'ц': 'Ц', 'ч': 'Ч', 'ш': 'Ш',
        'щ': 'Щ', 'ь': 'Ь', 'ы': 'Ы', 'э': 'Э', 'ю': 'Ю',
        'я': 'Я'
    },
    DICTIONARY: {
        "армия": "АRмiя", "азбука": "Азбука", "алмаз": "Алмаз",
        "братство": "БраТсТvо", "битва": "БiТva", "безопасность": "БеZопасNосТЬ",
        "вождь": "Vождь", "вера": "Vера", "воля": "Vоля",
        "гвардия": "ГvарDiя", "город": "ГороD", "гимн": "ГiмN",
        "держава": "Dержаva", "дисциплина": "DисциплиNа", "доблесть": "DоблесТЬ",
        "единство": "ЕDiNsТvо", "егерь": "Егерь", "европа": "Еvропа",
        "железо": "ЖелеZо", "жертва": "ЖерТva", "жизнь": "ЖиZNЬ",
        "завод": "ЗаvoD", "знамя": "ЗNамя", "закон": "ЗакоN",
        "ирновия": "ИrNоviя", "история": "ИсТоriя", "империя": "Импеriя",
        "йод": "Jод", "йети": "JеТи", "йорк": "Jорк",
        "коллегия": "Коллегiя", "крепость": "КrепосЬ", "командир": "КомаN Dиr",
        "легион": "ЛегiоN", "лояльность": "ЛояльNосТЬ", "лавр": "Лаvр",
        "мудрость": "МuDросТЬ", "момент": "МоmеNТ", "марш": "Маrш",
        "наука": "Nаuка", "народ": "NаrоD", "награда": "NаграDа",
        "орден": "ОrDeN", "оружие": "Оружие", "ответственность": "ОТvеТсТvеNносТЬ",
        "прогресс": "Пrогресс", "победа": "ПобеDа", "парад": "ПаrаD",
        "республика": "Rеспублика", "реформа": "Rеформа", "разум": "RаZuм",
        "сталин": "SТалiN", "союз": "Sоюз", "служба": "Sлужба",
        "технология": "ТехNоlогiя", "традиция": "ТrаDiцiя", "триумф": "Тrium  ",
        "университет": "UNiversiТеТ", "указ": "Uказ", "успех": "UсПех",
        "флаг": "Фlаг", "флот": "ФlоТ", "философия": "Фiлософiя",
        "храбрость": "ХrабросТЬ", "химик": "Химик", "хозяин": "ХозяиN",
        "цель": "Цель", "центр": "ЦеNТr", "цена": "ЦеNа",
        "честь": "ЧесТЬ", "чистота": "ЧисТоТа", "чугун": "ЧугуN",
        "шерунга": "ШереNга", "штурм": "ШТurm", "шрихта": "ШрихТа",
        "щит": "ЩиТ", "щедрость": "ЩеDросТЬ", "щелочь": "Щелочь",
        "тыл": "ТЫl", "рывок": "РЫvок", "высота": "ВЫsоТа",
        "энергия": "ЭNергiя", "эшелон": "ЭшелоN", "эфир": "Эfiр",
        "юстиция": "ЮсТицiя", "юг": "Юг", "юность": "ЮNосТЬ",
        "ядро": "ЯDrо", "якорь": "ЯкоrЬ", "ясность": "ЯсNосТЬ",
        "квант": "QuаNТ", "кварц": "Quаrц", "квадрат": "QuаDrаТ",
        "ватт": "WаТТ", "вильям": "Wильям", "волна": "WолNа"
    },
    ADMIN_CODE: '3495',
    JOB_PASSWORD: '8797',
    STATE_NAME: 'Irnovia Dox',
    DYNASTY: 'Arteml',
    TSAR: 'Artem',
    PM: 'Semen Dor'
};

// State Management
let state = {
    currentPage: 'services',
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
    users: JSON.parse(localStorage.getItem('irnovia_users')) || [],
    jobs: JSON.parse(localStorage.getItem('irnovia_jobs')) || [],
    applies: JSON.parse(localStorage.getItem('irnovia_applies')) || []
};

// UI Components
const Pages = {
    hero: () => `
        <section class="hero">
            <div class="container">
                <h1>Державні послуги онлайн</h1>
                <p style="font-size:20px; color:var(--diia-gray-text);">Зручно. Швидко. Надійно.</p>
            </div>
        </section>
    `,
    services: () => {
        return `
            ${Pages.hero()}
            <div class="container">
                <h2 style="margin-bottom:30px;">Популярні послуги</h2>
                <div class="services-grid">
                    <div class="service-card" onclick="Navigation.goTo('jobs')">
                        <div class="service-icon">💼</div>
                        <div class="service-title">Біржа труда</div>
                        <p style="font-size:14px; color:var(--diia-gray-text); margin-top:10px;">Пошук роботи та створення вакансій у державі.</p>
                    </div>
                    <div class="service-card" onclick="Navigation.goTo('translator')">
                        <div class="service-icon">🌐</div>
                        <div class="service-title">Переводчик</div>
                        <p style="font-size:14px; color:var(--diia-gray-text); margin-top:10px;">Протокол лінгвістичної уніфікації Ірновії.</p>
                    </div>
                    <div class="service-card" onclick="Navigation.goTo('news')">
                        <div class="service-icon">📰</div>
                        <div class="service-title">Новини</div>
                        <p style="font-size:14px; color:var(--diia-gray-text); margin-top:10px;">Офіційні повідомлення та події держави.</p>
                    </div>
                    <div class="service-card" onclick="Navigation.goTo('stateInfo')">
                        <div class="service-icon">🏛️</div>
                        <div class="service-title">Про державу</div>
                        <p style="font-size:14px; color:var(--diia-gray-text); margin-top:10px;">Історія, правителі та державний устрій.</p>
                    </div>
                </div>
            </div>
        `;
    },
    documents: () => {
        if (!state.currentUser) return Render.login();
        return Render.profile();
    },
    stateInfo: () => {
        return `
            <div class="container" style="padding-top:60px;">
                <h1>Про державу</h1>
                <div class="form-card" style="max-width:800px; margin-top:30px;">
                    <h3 style="margin-bottom:20px;">Загальні відомості</h3>
                    <p style="font-size:18px; line-height:1.6;">
                        <b>Ірновія</b> — могутня держава з 8000-річною історією, що процвітає під мудрим правлінням династії <b>${APP_CONFIG.DYNASTY}</b>.<br><br>
                        Сучасний устрій поєднує вікові традиції та цифрові технології. Кожен громадянин є частиною великої системи, об'єднаної спільною метою та мовою.<br><br>
                        Глава держави: <b>Цар ${APP_CONFIG.TSAR}</b>.<br>
                        Прем'єр-міністр: <b>${APP_CONFIG.PM}</b>.<br>
                    </p>
                </div>
                <button class="btn-black" style="margin-top:20px;" onclick="Navigation.goTo('services')">Повернутися</button>
            </div>
        `;
    },
    adminLogin: () => {
        return `
            <div class="container">
                <div class="form-card">
                    <h2>Вхід до адмін-панелі</h2>
                    <p style="margin-bottom:20px; color:var(--diia-gray-text);">Тільки для уповноважених осіб</p>
                    <div class="form-group">
                        <label>Код доступу</label>
                        <input type="password" id="adminCode" placeholder="••••">
                    </div>
                    <button class="btn-submit" onclick="Admin.login()">Увійти</button>
                </div>
            </div>
        `;
    },
    adminPanel: () => {
        return `
            <div class="container" style="padding-top:60px;">
                <h1>Адмін-панель</h1>
                <div style="display:flex; gap:20px; margin:30px 0;">
                    <button class="btn-black" onclick="Admin.showTab('users')">Громадяни</button>
                    <button class="btn-black" onclick="Admin.showTab('applies')">Відгуки</button>
                </div>
                <div id="adminContent"></div>
            </div>
        `;
    },
    news: () => {
        return `
            <div class="container" style="padding-top:60px;">
                <h1>Новини держави</h1>
                <div id="newsFeed" style="margin-top:40px;">
                    <p>Завантаження офіційних повідомлень...</p>
                </div>
            </div>
        `;
    },
    translator: () => {
        return `
            <div class="container" style="padding-top:60px;">
                <h1>Переводчик Ірновії</h1>
                <div class="services-grid" style="grid-template-columns: 2fr 1fr; margin-top:40px;">
                    <div class="form-card" style="margin:0; max-width:none;">
                        <div class="form-group">
                            <label>Вхідний текст (Кирилиця)</label>
                            <textarea id="translateInput" rows="6" placeholder="Введіть текст..." oninput="Translator.translate()"></textarea>
                        </div>
                        <div class="form-group">
                            <label>Результат (Ірновійська)</label>
                            <div id="translateOutput" style="padding:15px; background:var(--diia-gray-bg); border-radius:8px; min-height:100px; font-weight:700;"></div>
                        </div>
                        <button class="btn-black" onclick="Translator.copy()">Копіювати результат</button>
                    </div>
                    <div class="form-card" style="margin:0; max-width:none;">
                        <h3 style="margin-bottom:15px;">Еталони</h3>
                        <div id="dictBox" style="max-height:400px; overflow-y:auto;">
                             ${Object.keys(APP_CONFIG.DICTIONARY).map(word => `
                                <div style="padding:10px; border-bottom:1px solid #eee; cursor:pointer;" onclick="Translator.addWord('${word}')">
                                    <b>${word}</b><br><span style="color:var(--diia-blue);">${APP_CONFIG.DICTIONARY[word]}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
    jobs: () => {
        return `
            <div class="container" style="padding-top:60px;">
                <div class="flex-between" style="margin-bottom:40px;">
                    <h1>Біржа труда</h1>
                    <button class="btn-black" onclick="Navigation.goTo('createJob')">➕ Створити вакансію</button>
                </div>
                <div class="services-grid" id="jobsList">
                    ${state.jobs.length === 0 ? '<p>Вакансій поки не знайдено.</p>' : state.jobs.map((job, idx) => `
                        <div class="service-card">
                            <div class="service-title">${job.title}</div>
                            <p style="margin:15px 0; font-size:14px;">${job.description}</p>
                            <div style="font-weight:800; color:var(--diia-blue); margin-bottom:15px;">💰 ${job.salary}</div>
                            <button class="btn-submit" onclick="Jobs.openApply('${job.title.replace(/'/g, "\\'")}')">Відгукнутися</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },
    createJob: () => {
        return `
             <div class="container">
                <div class="form-card">
                    <h2>Створити вакансію</h2>
                    <div class="form-group">
                        <label>Пароль доступу</label>
                        <input type="password" id="jobPassword">
                    </div>
                    <div class="form-group">
                        <label>Назва вакансії</label>
                        <input type="text" id="jobTitle">
                    </div>
                    <div class="form-group">
                        <label>Опис</label>
                        <textarea id="jobDescription" rows="4"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Зарплата</label>
                        <input type="text" id="jobSalary">
                    </div>
                    <div class="form-group">
                        <label>Контакт</label>
                        <input type="text" id="jobContact">
                    </div>
                    <button class="btn-submit" onclick="Jobs.create()">Опублікувати</button>
                    <button class="btn-text" style="width:100%; margin-top:15px;" onclick="Navigation.goTo('jobs')">Скасувати</button>
                </div>
            </div>
        `;
    },
    apply: (jobTitle) => {
        return `
            <div class="container">
                <div class="form-card">
                    <h2>Відгукнутися</h2>
                    <p style="margin-bottom:20px;">Посада: <b>${jobTitle}</b></p>
                    <div class="form-group">
                        <label>Розкажіть про себе</label>
                        <textarea id="applyText" rows="6" placeholder="Досвід, навички..."></textarea>
                    </div>
                    <button class="btn-submit" onclick="Jobs.submitApply('${jobTitle.replace(/'/g, "\\'")}')">Надіслати відгук</button>
                    <button class="btn-text" style="width:100%; margin-top:10px;" onclick="Navigation.goTo('jobs')">Назад</button>
                </div>
            </div>
        `;
    }
};

const Render = {
    login: () => `
        <div class="container">
            <div class="form-card">
                <h2>Вхід до кабінету</h2>
                <div class="form-group">
                    <label>Код паспорта</label>
                    <input type="text" id="loginCode" placeholder="П•01•DDMMYY•000">
                </div>
                <button class="btn-submit" onclick="Auth.login()">Увійти</button>
                <p style="text-align:center; margin-top:20px;">Ще не маєте паспорта? <a href="#" onclick="Navigation.goTo('register')">Отримати</a></p>
            </div>
        </div>
    `,
    register: () => `
        <div class="container">
            <div class="form-card">
                <h2>Отримати паспорт</h2>
                <div class="form-group">
                    <label>Ім'я</label>
                    <input type="text" id="regFirstName">
                </div>
                <div class="form-group">
                    <label>Прізвище</label>
                    <input type="text" id="regLastName">
                </div>
                <div class="form-group">
                    <label>Рік народження</label>
                    <input type="number" id="regBirthYear">
                </div>
                <div class="form-group">
                    <label>Стать</label>
                    <select id="regGender">
                        <option value="М">Чоловіча</option>
                        <option value="Ж">Жіноча</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Комітет</label>
                    <select id="regCommittee">
                        <option value="01">Комітет 01</option>
                        <option value="02">Комітет 02</option>
                        <option value="03">Комитет 03</option>
                        <option value="04">Комитет 04</option>
                        <option value="05">Комитет 05</option>
                    </select>
                </div>
                <button class="btn-submit" onclick="Auth.register()">Сформувати документ</button>
            </div>
        </div>
    `,
    profile: () => {
        const u = state.currentUser;
        return `
            <section class="profile-section">
                <div class="container">
                    <div class="flex-between" style="margin-bottom:40px;">
                        <h1>Мій кабінет</h1>
                        <button class="btn-text" onclick="Auth.logout()">Вийти</button>
                    </div>

                    <div class="passport-container">
                        <div class="document-item">
                            <div class="doc-header">
                                <div style="font-weight:800; font-size:24px; letter-spacing:2px;">ID CARD IRNOVIA</div>
                                <div style="font-size:30px;">🛡️</div>
                            </div>
                            <div class="doc-grid">
                                <div class="doc-field">
                                    <div class="label">Ім'я</div>
                                    <div class="value">${u.firstName}</div>
                                </div>
                                <div class="doc-field">
                                    <div class="label">Прізвище</div>
                                    <div class="value">${u.lastName}</div>
                                </div>
                                <div class="doc-field">
                                    <div class="label">Дата народження</div>
                                    <div class="value">${u.birthYear}</div>
                                </div>
                                <div class="doc-field">
                                    <div class="label">Комітет</div>
                                    <div class="value">${u.committee}</div>
                                </div>
                            </div>
                            <div class="doc-code">${u.passportCode}</div>
                        </div>

                        <div class="services-grid" style="grid-template-columns: 1fr 1fr;">
                            <div class="service-card" style="cursor:default;">
                                <div class="service-title">📋 Трудова книжка</div>
                                <p style="margin-top:10px;">${u.workLog || 'Записів не знайдено'}</p>
                            </div>
                            <div class="service-card" style="cursor:default; border-left: 5px solid var(--diia-red);">
                                <div class="service-title" style="color:var(--diia-red);">⚠️ Судимості</div>
                                <p style="margin-top:10px;">${u.crimes || 'Чистий перед законом'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },
    adminEdit: () => {
        const u = state.users[state.editingUserIdx];
        return `
            <div class="container">
                <div class="form-card" style="max-width:800px;">
                    <h2>Редагування досьє</h2>
                    <p style="margin-bottom:20px;">Громадянин: <b>${u.firstName} ${u.lastName}</b> (${u.passportCode})</p>
                    <div class="form-group">
                        <label>Трудова книжка</label>
                        <textarea id="editWork" rows="4">${u.workLog || ''}</textarea>
                    </div>
                    <div class="form-group">
                        <label>Судимості</label>
                        <textarea id="editCriminal" rows="4">${u.crimes || ''}</textarea>
                    </div>
                    <div class="form-group">
                        <label>Примітки адміна</label>
                        <textarea id="editNotes" rows="4">${u.adminNotes || ''}</textarea>
                    </div>
                    <button class="btn-submit" onclick="Admin.saveUser()">Зберегти зміни</button>
                    <button class="btn-text" style="width:100%; margin-top:10px;" onclick="Navigation.goTo('adminPanel'); setTimeout(() => Admin.showTab('users'), 100);">Назад</button>
                </div>
            </div>
        `;
    }
};

// Logics
const Navigation = {
    goTo: (page) => {
        state.currentPage = page;
        Render.page();
        window.scrollTo(0, 0);
        if (page === 'news') News.load();
    }
};

Render.page = () => {
    const main = document.getElementById('mainContent');
    if (Pages[state.currentPage]) {
        main.innerHTML = Pages[state.currentPage]();
    } else if (state.currentPage === 'register') {
        main.innerHTML = Render.register();
    } else if (state.currentPage === 'apply') {
        main.innerHTML = Pages.apply(state.tempJobTitle);
    } else if (state.currentPage === 'adminEdit') {
        main.innerHTML = Render.adminEdit();
    }
};

const Auth = {
    login: () => {
        const code = document.getElementById('loginCode').value.trim();
        const user = state.users.find(u => u.passportCode === code);
        if (user) {
            state.currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            Navigation.goTo('documents');
        } else {
            alert('Код не знайдено');
        }
    },
    register: () => {
        const firstName = document.getElementById('regFirstName').value.trim();
        const lastName = document.getElementById('regLastName').value.trim();
        const birthYear = document.getElementById('regBirthYear').value.trim();
        const gender = document.getElementById('regGender').value;
        const committee = document.getElementById('regCommittee').value;

        if (!firstName || !lastName || !birthYear) {
            alert('Заповніть всі поля');
            return;
        }

        const pad = (n) => String(n).padStart(2, '0');
        const d = new Date();
        const dateStr = pad(d.getDate()) + pad(d.getMonth() + 1) + String(d.getFullYear()).slice(-2);
        const rand = Math.floor(Math.random() * 900) + 100;
        const passportCode = `${firstName[0].toUpperCase()}•${committee}•${dateStr}•${rand}`;

        const newUser = {
            firstName, lastName, birthYear, gender, committee, passportCode,
            workLog: '', crimes: '', adminNotes: ''
        };

        state.users.push(newUser);
        localStorage.setItem('irnovia_users', JSON.stringify(state.users));
        state.currentUser = newUser;
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        Navigation.goTo('documents');
    },
    logout: () => {
        state.currentUser = null;
        localStorage.removeItem('currentUser');
        Navigation.goTo('services');
    }
};

const Translator = {
    translate: () => {
        let text = document.getElementById('translateInput').value;
        text = text.replace(/кх/gi, match => match[0] === match[0].toUpperCase() ? 'Q' : 'q');
        text = text.replace(/вв/gi, match => match[0] === match[0].toUpperCase() ? 'W' : 'w');

        const tokens = text.split(/([ \n\t.,!?;:()""''])/);
        const result = tokens.map(token => {
            if (!token || /^[ \n\t.,!?;:()""'']$/.test(token)) return token;
            const lowerToken = token.toLowerCase();
            if (APP_CONFIG.DICTIONARY[lowerToken]) return APP_CONFIG.DICTIONARY[lowerToken];
            return token.split('').map(char => {
                const lowerChar = char.toLowerCase();
                const irnovChar = APP_CONFIG.ALPHABET[lowerChar];
                if (!irnovChar) return char;
                return (char === char.toUpperCase() && char !== char.toLowerCase()) ? irnovChar.toUpperCase() : irnovChar.toLowerCase();
            }).join('');
        }).join('');
        document.getElementById('translateOutput').innerText = result;
    },
    copy: () => {
        navigator.clipboard.writeText(document.getElementById('translateOutput').innerText).then(() => alert('Копійовано!'));
    },
    addWord: (word) => {
        const input = document.getElementById('translateInput');
        input.value += (input.value ? ' ' : '') + word;
        Translator.translate();
    }
};

const News = {
    load: async () => {
        const feed = document.getElementById('newsFeed');
        if (!feed) return;
        try {
            const response = await fetch('https://api.allorigins.win/raw?url=' + encodeURIComponent('https://rss.app/feeds/JAKqN1RRNxVEIU0k.xml'));
            const xmlText = await response.text();
            const items = new DOMParser().parseFromString(xmlText, 'text/xml').querySelectorAll('item');
            feed.innerHTML = Array.from(items).map(item => `
                <div class="service-card" style="margin-bottom:20px; cursor:default;">
                    <div style="font-size:12px; color:var(--diia-gray-text);">${new Date(item.querySelector('pubDate')?.textContent).toLocaleDateString()}</div>
                    <div class="service-title" style="margin:10px 0;">${item.querySelector('title')?.textContent}</div>
                    <p>${item.querySelector('description')?.textContent.replace(/<[^>]*>?/gm, '').substring(0, 200)}...</p>
                </div>
            `).join('');
        } catch (e) { feed.innerHTML = '<p>Помилка завантаження новин.</p>'; }
    }
};

const Jobs = {
    create: () => {
        if (document.getElementById('jobPassword').value !== APP_CONFIG.JOB_PASSWORD) return alert('Невірний пароль');
        const title = document.getElementById('jobTitle').value.trim();
        if (!title) return alert('Вкажіть назву');
        state.jobs.push({
            title,
            description: document.getElementById('jobDescription').value,
            salary: document.getElementById('jobSalary').value,
            contact: document.getElementById('jobContact').value
        });
        localStorage.setItem('irnovia_jobs', JSON.stringify(state.jobs));
        Navigation.goTo('jobs');
    },
    openApply: (title) => {
        if (!state.currentUser) return alert('Авторизуйтесь для відгуку');
        state.tempJobTitle = title;
        Navigation.goTo('apply');
    },
    submitApply: (title) => {
        const text = document.getElementById('applyText').value.trim();
        if (!text) return alert('Напишіть відгук');
        state.applies.push({ userCode: state.currentUser.passportCode, jobTitle: title, text: text });
        localStorage.setItem('irnovia_applies', JSON.stringify(state.applies));
        alert('Відгук надіслано');
        Navigation.goTo('jobs');
    }
};

const Admin = {
    login: () => {
        if (document.getElementById('adminCode').value === APP_CONFIG.ADMIN_CODE) {
            state.isAdmin = true;
            Navigation.goTo('adminPanel');
            setTimeout(() => Admin.showTab('users'), 100);
        } else alert('Доступ заборонено');
    },
    showTab: (tab) => {
        const container = document.getElementById('adminContent');
        if (tab === 'users') {
            container.innerHTML = `<input type="text" placeholder="Пошук..." oninput="Admin.filterUsers(this.value)" style="margin-bottom:20px;">
                                   <div id="adminList">${state.users.map((u, i) => `
                                       <div class="service-card" style="padding:15px; margin-bottom:10px;" onclick="Admin.editUser(${i})">
                                           <b>${u.firstName} ${u.lastName}</b><br><small>${u.passportCode}</small>
                                       </div>`).join('')}</div>`;
        } else {
            container.innerHTML = state.applies.map(a => `
                <div class="service-card" style="margin-bottom:10px;">
                    <b style="color:var(--diia-blue);">${a.jobTitle}</b><br>
                    Від: ${a.userCode}<br><p style="margin-top:5px;">${a.text}</p>
                </div>`).join('');
        }
    },
    filterUsers: (val) => {
        const term = val.toLowerCase();
        document.getElementById('adminList').innerHTML = state.users.filter(u =>
            u.firstName.toLowerCase().includes(term) || u.lastName.toLowerCase().includes(term) || u.passportCode.toLowerCase().includes(term)
        ).map((u, i) => `
            <div class="service-card" style="padding:15px; margin-bottom:10px;" onclick="Admin.editUser(${state.users.indexOf(u)})">
                <b>${u.firstName} ${u.lastName}</b><br><small>${u.passportCode}</small>
            </div>`).join('');
    },
    editUser: (i) => { state.editingUserIdx = i; Navigation.goTo('adminEdit'); },
    saveUser: () => {
        const u = state.users[state.editingUserIdx];
        u.workLog = document.getElementById('editWork').value;
        u.crimes = document.getElementById('editCriminal').value;
        u.adminNotes = document.getElementById('editNotes').value;
        localStorage.setItem('irnovia_users', JSON.stringify(state.users));
        alert('Дані оновлено');
        Navigation.goTo('adminPanel');
        setTimeout(() => Admin.showTab('users'), 100);
    }
};

// Init
document.addEventListener('DOMContentLoaded', () => {
    Render.page();
    const audio = document.getElementById('bgAudio');
    const toggle = document.getElementById('audioToggle');
    let isPlaying = false;
    const play = () => { if(!isPlaying) { audio.play().then(() => { isPlaying=true; toggle.innerText='🔊'; }); } else { audio.pause(); isPlaying=false; toggle.innerText='🔇'; } };
    toggle.onclick = play;
    document.onclick = () => { if(!isPlaying) play(); document.onclick=null; };
});
