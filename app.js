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
        "шеренга": "ШереNга", "штурм": "ШТurm", "шрихта": "ШрихТа",
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
    STATE_NAME: 'Ирновия',
    DYNASTY: 'Артемл',
    TSAR: 'Артем',
    PM: 'Семен Дор'
};

// State Management
let state = {
    currentPage: 'documents',
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
    users: JSON.parse(localStorage.getItem('irnovia_users')) || [],
    jobs: JSON.parse(localStorage.getItem('irnovia_jobs')) || [],
    applies: JSON.parse(localStorage.getItem('irnovia_applies')) || []
};

// UI Components
const Pages = {
    documents: () => {
        if (!state.currentUser) {
            return Render.login();
        }
        return Render.profile();
    },
    services: () => {
        return `
            <div class="page-header">
                <h2>Услуги</h2>
            </div>
            <div class="card" onclick="Navigation.goTo('jobs')">
                <div style="display:flex; align-items:center; gap:15px;">
                    <div style="font-size:30px;">💼</div>
                    <div>
                        <div style="font-weight:600;">Биржа труда</div>
                        <div style="font-size:12px; color:var(--text-secondary);">Поиск работы и вакансии</div>
                    </div>
                </div>
            </div>
            <div class="card" onclick="Navigation.goTo('translator')">
                <div style="display:flex; align-items:center; gap:15px;">
                    <div style="font-size:30px;">🌐</div>
                    <div>
                        <div style="font-weight:600;">Переводчик</div>
                        <div style="font-size:12px; color:var(--text-secondary);">Лингвистическая унификация</div>
                    </div>
                </div>
            </div>
            <div class="card" onclick="Navigation.goTo('news')">
                <div style="display:flex; align-items:center; gap:15px;">
                    <div style="font-size:30px;">📰</div>
                    <div>
                        <div style="font-weight:600;">Новости</div>
                        <div style="font-size:12px; color:var(--text-secondary);">События государства</div>
                    </div>
                </div>
            </div>
        `;
    },
    notifications: () => {
        return `
            <div class="page-header">
                <h2>Уведомления</h2>
            </div>
            <div class="empty-state" style="text-align:center; padding:40px; color:var(--text-secondary);">
                <div>📭</div>
                <p>У вас пока нет новых уведомлений</p>
            </div>
        `;
    },
    menu: () => {
        return `
            <div class="page-header">
                <h2>Меню</h2>
            </div>
            <div class="card" onclick="Navigation.goTo('stateInfo')">
                <div style="font-weight:600;">🛡️ Информация о государстве</div>
            </div>
            <div class="card" onclick="Navigation.goTo('adminLogin')">
                <div style="font-weight:600;">🔐 Админ-панель</div>
            </div>
            ${state.currentUser ? `<button class="btn btn-secondary" onclick="Auth.logout()" style="margin-top:20px; background:#FFE5E5; color:#FF3B30;">Выйти из аккаунта</button>` : ''}
        `;
    },
    stateInfo: () => {
        return `
            <div class="page-header">
                <h2>Государство</h2>
            </div>
            <div class="card">
                <div style="font-weight:600; margin-bottom:10px;">Общие сведения</div>
                <p style="font-size:14px; line-height:1.5;">
                    <b>Ирновия</b> — демократическое государство с 8000-летней историей под правлением династии <b>${APP_CONFIG.DYNASTY}</b>.<br>
                    Глава государства: <b>Царь ${APP_CONFIG.TSAR}</b>.<br>
                    Премьер-министр: <b>${APP_CONFIG.PM}</b>.<br>
                    Законодательный орган: <b>Народная коллегия</b>.
                </p>
            </div>
            <button class="btn btn-secondary" onclick="Navigation.goTo('menu')">Назад</button>
        `;
    },
    adminLogin: () => {
        return `
            <div class="page-header">
                <h2>Вход в админ-панель</h2>
            </div>
            <div class="card">
                <input type="password" id="adminCode" placeholder="Код доступа">
                <button class="btn btn-primary" onclick="Admin.login()">Войти</button>
            </div>
            <button class="btn btn-secondary" onclick="Navigation.goTo('menu')">Назад</button>
        `;
    },
    adminPanel: () => {
        return `
            <div class="page-header">
                <h2>Админ-панель</h2>
            </div>
            <div class="tabs" style="display:flex; gap:10px; margin-bottom:20px;">
                <button class="btn btn-secondary" style="flex:1;" onclick="Admin.showTab('users')">Граждане</button>
                <button class="btn btn-secondary" style="flex:1;" onclick="Admin.showTab('applies')">Отклики</button>
            </div>
            <div id="adminContent"></div>
            <button class="btn btn-secondary" style="margin-top:20px;" onclick="Navigation.goTo('menu')">Выйти из панели</button>
        `;
    },
    news: () => {
        return `
            <div class="page-header">
                <h2>Новости Ирновии</h2>
            </div>
            <div id="newsFeed">
                <div class="loading" style="text-align:center; padding:20px;">Загрузка новостей...</div>
            </div>
        `;
    },
    jobs: () => {
        return `
            <div class="page-header">
                <h2>Биржа труда</h2>
            </div>
            <div id="jobsList">
                ${state.jobs.length === 0 ? '<p style="text-align:center; color:var(--text-secondary);">Вакансий пока нет</p>' : state.jobs.map((job, idx) => `
                    <div class="card">
                        <div style="font-weight:600; color:var(--primary-blue);">${job.title}</div>
                        <div style="font-size:14px; margin:8px 0;">${job.description}</div>
                        <div style="font-weight:600;">💰 ${job.salary}</div>
                        <button class="btn btn-primary" style="margin-top:12px; padding:8px;" onclick="Jobs.openApply('${job.title}')">Откликнуться</button>
                    </div>
                `).join('')}
            </div>
            <button class="btn btn-secondary" onclick="Navigation.goTo('createJob')">➕ Создать вакансию</button>
        `;
    },
    createJob: () => {
        return `
            <div class="page-header">
                <h2>Создать вакансию</h2>
            </div>
            <div class="card">
                <input type="password" id="jobPassword" placeholder="Пароль доступа">
                <input type="text" id="jobTitle" placeholder="Название вакансии">
                <textarea id="jobDescription" placeholder="Описание работы..."></textarea>
                <input type="text" id="jobSalary" placeholder="Зарплата">
                <input type="text" id="jobContact" placeholder="Контакт для связи">
                <button class="btn btn-primary" onclick="Jobs.create()">Опубликовать</button>
            </div>
            <button class="btn btn-secondary" onclick="Navigation.goTo('jobs')">Назад</button>
        `;
    },
    apply: (jobTitle) => {
        return `
            <div class="page-header">
                <h2>Откликнуться</h2>
            </div>
            <div class="card">
                <div style="font-weight:600; margin-bottom:12px;">Вакансия: ${jobTitle}</div>
                <textarea id="applyText" placeholder="Расскажите о себе..."></textarea>
                <button class="btn btn-primary" onclick="Jobs.submitApply('${jobTitle}')">Отправить отклик</button>
            </div>
            <button class="btn btn-secondary" onclick="Navigation.goTo('jobs')">Назад</button>
        `;
    },
    translator: () => {
        return `
            <div class="page-header">
                <h2>Переводчик</h2>
            </div>
            <div class="card">
                <textarea id="translateInput" placeholder="Введите текст на русском..." oninput="Translator.translate()"></textarea>
                <div id="translateOutput" style="margin-top:15px; font-weight:600; padding:12px; background:#F2F2F7; border-radius:10px; min-height:50px;"></div>
                <button class="btn btn-primary" style="margin-top:15px;" onclick="Translator.copy()">Копировать результат</button>
            </div>
            <div class="card">
                <div style="font-weight:600; margin-bottom:10px;">Библиотека эталонов</div>
                <div id="dictBox" style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; max-height:200px; overflow-y:auto; font-size:12px;">
                    ${Object.keys(APP_CONFIG.DICTIONARY).map(word => `
                        <div style="background:#F2F2F7; padding:8px; border-radius:6px; cursor:pointer;" onclick="Translator.addWord('${word}')">
                            <b>${word}</b> → ${APP_CONFIG.DICTIONARY[word]}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
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
            if (APP_CONFIG.DICTIONARY[lowerToken]) {
                return APP_CONFIG.DICTIONARY[lowerToken];
            }
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
        const text = document.getElementById('translateOutput').innerText;
        navigator.clipboard.writeText(text).then(() => alert('Скопировано!'));
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
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
            const items = xmlDoc.querySelectorAll('item');

            feed.innerHTML = '';
            items.forEach(item => {
                const title = item.querySelector('title')?.textContent || '';
                const description = item.querySelector('description')?.textContent || '';
                const pubDate = item.querySelector('pubDate')?.textContent || '';

                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <div style="font-size:12px; color:var(--text-secondary); margin-bottom:8px;">${new Date(pubDate).toLocaleDateString()}</div>
                    <div style="font-weight:600; margin-bottom:8px;">${title}</div>
                    <div style="font-size:14px; line-height:1.5;">${description.replace(/<[^>]*>?/gm, '').substring(0, 150)}...</div>
                `;
                feed.appendChild(card);
            });
        } catch (e) {
            feed.innerHTML = '<p style="color:var(--primary-red);">Ошибка загрузки новостей</p>';
        }
    }
};

const Jobs = {
    create: () => {
        const password = document.getElementById('jobPassword').value;
        if (password !== APP_CONFIG.JOB_PASSWORD) {
            alert('Неверный пароль!');
            return;
        }
        const title = document.getElementById('jobTitle').value.trim();
        const description = document.getElementById('jobDescription').value.trim();
        const salary = document.getElementById('jobSalary').value.trim();
        const contact = document.getElementById('jobContact').value.trim();

        if (!title) {
            alert('Введите название');
            return;
        }

        const newJob = { title, description, salary, contact };
        state.jobs.push(newJob);
        localStorage.setItem('irnovia_jobs', JSON.stringify(state.jobs));
        alert('Вакансия создана!');
        Navigation.goTo('jobs');
    },
    openApply: (title) => {
        if (!state.currentUser) {
            alert('Войдите в систему, чтобы откликнуться');
            Navigation.goTo('documents');
            return;
        }
        state.tempJobTitle = title;
        Navigation.goTo('apply');
    },
    submitApply: (title) => {
        const text = document.getElementById('applyText').value.trim();
        if (!text) {
            alert('Напишите что-нибудь');
            return;
        }
        const apply = {
            userCode: state.currentUser.passportCode,
            jobTitle: title,
            text: text
        };
        state.applies.push(apply);
        localStorage.setItem('irnovia_applies', JSON.stringify(state.applies));
        alert('Отклик отправлен!');
        Navigation.goTo('jobs');
    }
};

const Admin = {
    login: () => {
        const code = document.getElementById('adminCode').value;
        if (code === APP_CONFIG.ADMIN_CODE) {
            state.isAdmin = true;
            Navigation.goTo('adminPanel');
            setTimeout(() => Admin.showTab('users'), 100);
        } else {
            alert('Неверный код!');
        }
    },
    showTab: (tab) => {
        const container = document.getElementById('adminContent');
        if (tab === 'users') {
            container.innerHTML = `
                <input type="text" id="adminSearch" placeholder="Поиск..." oninput="Admin.filterUsers()">
                <div id="adminUsersList">
                    ${state.users.map((u, idx) => `
                        <div class="card" style="padding:12px; margin-bottom:8px;" onclick="Admin.editUser(${idx})">
                            <div style="font-weight:600;">${u.firstName} ${u.lastName}</div>
                            <div style="font-size:12px; color:var(--text-secondary);">${u.passportCode}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else {
            container.innerHTML = `
                <div id="adminAppliesList">
                    ${state.applies.map(a => `
                        <div class="card" style="padding:12px; margin-bottom:8px;">
                            <div style="font-weight:600; color:var(--primary-blue);">${a.jobTitle}</div>
                            <div style="font-size:12px;">От: ${a.userCode}</div>
                            <div style="font-size:14px; margin-top:5px;">${a.text}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
    },
    filterUsers: () => {
        const term = document.getElementById('adminSearch').value.toLowerCase();
        const list = document.getElementById('adminUsersList');
        const filtered = state.users.filter(u =>
            u.firstName.toLowerCase().includes(term) ||
            u.lastName.toLowerCase().includes(term) ||
            u.passportCode.toLowerCase().includes(term)
        );
        list.innerHTML = filtered.map((u, idx) => `
            <div class="card" style="padding:12px; margin-bottom:8px;" onclick="Admin.editUser(${state.users.indexOf(u)})">
                <div style="font-weight:600;">${u.firstName} ${u.lastName}</div>
                <div style="font-size:12px; color:var(--text-secondary);">${u.passportCode}</div>
            </div>
        `).join('');
    },
    editUser: (idx) => {
        state.editingUserIdx = idx;
        Navigation.goTo('adminEdit');
    },
    saveUser: () => {
        const u = state.users[state.editingUserIdx];
        u.workLog = document.getElementById('editWork').value;
        u.crimes = document.getElementById('editCriminal').value;
        u.adminNotes = document.getElementById('editNotes').value;
        localStorage.setItem('irnovia_users', JSON.stringify(state.users));
        alert('Сохранено!');
        Navigation.goTo('adminPanel');
        setTimeout(() => Admin.showTab('users'), 100);
    }
};

const Render = {
    adminEdit: () => {
        const u = state.users[state.editingUserIdx];
        return `
            <div class="page-header">
                <h2>Редактирование</h2>
            </div>
            <div class="card">
                <div style="font-weight:600; margin-bottom:15px;">${u.firstName} ${u.lastName}</div>
                <div class="label">Трудовая книжка</div>
                <textarea id="editWork" rows="3">${u.workLog || ''}</textarea>
                <div class="label">Судимости</div>
                <textarea id="editCriminal" rows="3">${u.crimes || ''}</textarea>
                <div class="label">Заметки админа</div>
                <textarea id="editNotes" rows="3">${u.adminNotes || ''}</textarea>
                <button class="btn btn-primary" style="margin-top:15px;" onclick="Admin.saveUser()">Сохранить</button>
            </div>
            <button class="btn btn-secondary" onclick="Navigation.goTo('adminPanel'); setTimeout(() => Admin.showTab('users'), 100);">Отмена</button>
        `;
    },
    login: () => {
        return `
            <div class="login-container">
                <div class="page-header">
                    <h2>Вход</h2>
                    <p style="color:var(--text-secondary);">Войдите с помощью кода паспорта</p>
                </div>
                <div class="card">
                    <input type="text" id="loginCode" placeholder="Код паспорта">
                    <button class="btn btn-primary" onclick="Auth.login()">Войти</button>
                </div>
                <p style="text-align:center; margin-top:20px;">Нет паспорта? <a href="#" onclick="Navigation.goTo('register')">Получить</a></p>
            </div>
        `;
    },
    register: () => {
        return `
            <div class="register-container">
                <div class="page-header">
                    <h2>Регистрация</h2>
                    <p style="color:var(--text-secondary);">Заполните данные для выдачи паспорта</p>
                </div>
                <div class="card">
                    <input type="text" id="regFirstName" placeholder="Имя">
                    <input type="text" id="regLastName" placeholder="Фамилия">
                    <input type="number" id="regBirthYear" placeholder="Год рождения">
                    <select id="regGender">
                        <option value="М">Мужской</option>
                        <option value="Ж">Женский</option>
                    </select>
                    <select id="regCommittee">
                        <option value="01">Комитет 01</option>
                        <option value="02">Комитет 02</option>
                        <option value="03">Комитет 03</option>
                        <option value="04">Комитет 04</option>
                        <option value="05">Комитет 05</option>
                    </select>
                    <button class="btn btn-primary" onclick="Auth.register()">Выдать паспорт</button>
                </div>
                <p style="text-align:center; margin-top:20px;"><a href="#" onclick="Navigation.goTo('documents')">Вернуться ко входу</a></p>
            </div>
        `;
    },
    profile: () => {
        const u = state.currentUser;
        return `
            <div class="passport-card">
                <div class="passport-header">
                    <div class="passport-title">ID CARD IRNOVIA</div>
                    <div style="font-size:20px;">🛡️</div>
                </div>
                <div class="passport-content">
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                        <div class="passport-field">
                            <div class="label">Имя</div>
                            <div class="value">${u.firstName}</div>
                        </div>
                        <div class="passport-field">
                            <div class="label">Фамилия</div>
                            <div class="value">${u.lastName}</div>
                        </div>
                    </div>
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                        <div class="passport-field">
                            <div class="label">Год рождения</div>
                            <div class="value">${u.birthYear}</div>
                        </div>
                        <div class="passport-field">
                            <div class="label">Комитет</div>
                            <div class="value">${u.committee}</div>
                        </div>
                    </div>
                </div>
                <div class="passport-code">${u.passportCode}</div>
            </div>

            <div class="card" style="margin-top:20px;">
                <div style="font-weight:600; margin-bottom:10px;">📋 Трудовая книжка</div>
                <div id="profileWork" style="font-size:14px; color:var(--text-secondary);">
                    ${u.workLog || 'Записей нет'}
                </div>
            </div>

            <div class="card">
                <div style="font-weight:600; margin-bottom:10px; color:var(--primary-red);">⚠️ Судимости</div>
                <div id="profileCriminal" style="font-size:14px; color:var(--primary-red);">
                    ${u.crimes || 'Чист перед законом'}
                </div>
            </div>
        `;
    }
};

// Navigation Logic
const Navigation = {
    goTo: (page) => {
        state.currentPage = page;
        Render.page();
        if (page === 'news') News.load();

        // Update nav active state
        document.querySelectorAll('.nav-item').forEach(item => {
            if (item.dataset.page === page) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
};

Render.page = () => {
        const main = document.getElementById('mainContent');
        if (Pages[state.currentPage]) {
            main.innerHTML = Pages[state.currentPage]();
        } else if (state.currentPage === 'register') {
            main.innerHTML = Render.register();
        } else if (state.currentPage === 'jobs') {
            main.innerHTML = Pages.jobs();
        } else if (state.currentPage === 'createJob') {
            main.innerHTML = Pages.createJob();
        } else if (state.currentPage === 'apply') {
            main.innerHTML = Pages.apply(state.tempJobTitle);
        } else if (state.currentPage === 'stateInfo') {
            main.innerHTML = Pages.stateInfo();
        } else if (state.currentPage === 'adminLogin') {
            main.innerHTML = Pages.adminLogin();
        } else if (state.currentPage === 'adminPanel') {
            main.innerHTML = Pages.adminPanel();
        } else if (state.currentPage === 'adminEdit') {
            main.innerHTML = Render.adminEdit();
        } else {
            main.innerHTML = `<h2>Page ${state.currentPage} not found</h2>`;
        }
};

// Auth Logic
const Auth = {
    login: () => {
        const code = document.getElementById('loginCode').value.trim();
        if (code === APP_CONFIG.ADMIN_CODE) {
            alert('Admin access granted (Simulation)');
            return;
        }

        const user = state.users.find(u => u.passportCode === code);
        if (user) {
            state.currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            Navigation.goTo('documents');
        } else {
            alert('Неверный код паспорта');
        }
    },
    register: () => {
        const firstName = document.getElementById('regFirstName').value.trim();
        const lastName = document.getElementById('regLastName').value.trim();
        const birthYear = document.getElementById('regBirthYear').value.trim();
        const gender = document.getElementById('regGender').value;
        const committee = document.getElementById('regCommittee').value;

        if (!firstName || !lastName || !birthYear) {
            alert('Заполните все поля');
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
        Navigation.goTo('documents');
    }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    Render.page();

    // Audio setup
    const audio = document.getElementById('bgAudio');
    const toggle = document.getElementById('audioToggle');
    let isPlaying = false;

    const toggleAudio = () => {
        if (!isPlaying) {
            audio.play().then(() => {
                isPlaying = true;
                toggle.innerText = '🔊';
            }).catch(e => console.log('Interaction needed'));
        } else {
            audio.pause();
            isPlaying = false;
            toggle.innerText = '🔇';
        }
    };

    toggle.addEventListener('click', toggleAudio);
    document.addEventListener('click', () => {
        if (!isPlaying) toggleAudio();
    }, { once: true });

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            Navigation.goTo(item.dataset.page);
        });
    });
});
