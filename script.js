// переклади на українську та англійську
const translations = {
    ua: {
        // назви сторінок
        index_page_title: "Футбольний клуб \"Живчики\"",
        about_page_title: "Про нас - ФК \"Живчики\"",
        achievements_page_title: "Досягнення - ФК \"Живчики\"",
        
        // навігація
        nav_home: "ГОЛОВНА",
        nav_about: "ПРО НАС",
        nav_achievements: "ДОСЯГНЕННЯ",
        nav_stats: "СТАТИСТИКА",
        lang_name: "Українська",
        stats_alert: "Сторінка перебуває в розробці",

        // головна сторінка
        hero_title: "Футбольний клуб “Живчики”",
        hero_text: "ФК \"Живчики\" - це справжня родина, де гартується характер та народжуються майбутні зірки великого спорту. Ми поєднуємо сучасні методики тренувань із незламним командним духом, щоб кожен вихід на поле ставав кроком до нової перемоги. Приєднуйтесь до нашої спільноти та станьте частиною історії, яка пишеться просто зараз!",
        hero_btn: "Більше про нас",

        // про нас
        about_title: "Про нас",
        history_header: "Наша історія",
        history_text: "Футбольний клуб \"Живчики\" був заснований з метою об’єднання талановитих гравців та популяризації активного способу життя в нашому регіоні. Наша тренувальна база та офіс розташовані за адресою <strong>м. Київ, вул. Спортивна, 12</strong>, де ми щодня працюємо над вдосконаленням майстерності команди. <br>Якщо у вас виникли запитання щодо запису на перегляд або співпраці, ви завжди можете зателефонувати нам за номером: <br><strong>+38 (044) 123-45-67</strong>.",
        philosophy_header: "Наша філософія та мета",
        philosophy_text: "Головною місією нашого клубу є виховання професійних атлетів, які базують свою гру на принципах взаємоповаги та дисципліни. Ми віримо, що справжній успіх приходить лише через наполегливу працю та згуртованість усіх членів команди. <br>Наша стратегія розвитку передбачає створення потужної футбольної академії для майбутніх поколінь. Разом ми прагнемо до вершин українського футболу, зберігаючи вірність своїм традиціям та вболівальникам.",
        
        // карусель гравців
        players_header: "Гравці",
        name_oleksiy_kovalenko: "Олексій Коваленко",
        name_marko_melnyk: "Марко Мельник",
        name_ivan_kravchenko: "Іван Кравченко",
        name_viktor_bondar: "Віктор Бондар",
        name_artem_sydorenko: "Артем Сидоренко",
        name_denys_polishchuk: "Денис Поліщук",
        name_maksym_tkachenko: "Максим Ткаченко",
        name_andriy_shapoval: "Андрій Шаповал",
        name_ihor_petrenko: "Ігор Петренко",
        name_mykola_zubko: "Микола Зубко",
        name_roman_shevchuk: "Роман Шевчук",
        pos_gk: "Воротар",
        pos_rb: "Правий захисник",
        pos_cb: "Центральний захисник",
        pos_lb: "Лівий захисник",
        pos_cdm: "Опорний півзахисник",
        pos_cm: "Центральний півзахисник",
        pos_cam: "Атакувальний півзахисник",
        pos_rw: "Правий вінгер",
        pos_lw: "Лівий вінгер",
        pos_st: "Центральний нападник",

        // досягнення
        achievements_title: "Наші досягнення",
        cup_ukraine: "Кубок України",
        supercup_ukraine: "Суперкубок України",
        champion_ussr: "Чемпіон СРСР",
        cup_ussr: "Кубок СРСР",
        cup_winners: "Кубок Кубків",
        supercup_uefa: "Суперкубок УЄФА",
        champion_ukraine: "Чемпіон України",

        // футер
        footer_copy: "© Футбольний клуб “Живчики” 2026"
    },
    en: {
        // page titles
        index_page_title: "Football Club \"Zhyvchyky\"",
        about_page_title: "About us - FC \"Zhyvchyky\"",
        achievements_page_title: "Achievements - FC \"Zhyvchyky\"",
        
        // navigation
        nav_home: "HOME",
        nav_about: "ABOUT US",
        nav_achievements: "ACHIEVEMENTS",
        nav_stats: "STATISTICS",
        lang_name: "English",
        stats_alert: "The page is under development",

        // home page
        hero_title: "Football Club “Zhyvchyky”",
        hero_text: "FC \"Zhyvchyky\" is a real family where character is tempered and future stars of great sports are born. We combine modern training methods with an unbreakable team spirit so that every entry onto the field becomes a step towards a new victory. Join our community and become part of a history that is being written right now!",
        hero_btn: "More about us",

        // about us
        about_title: "About Us",
        history_header: "Our History",
        history_text: "Football Club \"Zhyvchyky\" was founded with the aim of uniting talented players and promoting an active lifestyle in our region. Our training base and office are located at <strong>12 Sportyvna St., Kyiv</strong>, where we work daily on improving the team's skills. <br>If you have any questions regarding trial registration or cooperation, you can always call us at: <br><strong>+38 (044) 123-45-67</strong>.",
        philosophy_header: "Our Philosophy and Goals",
        philosophy_text: "The main mission of our club is to raise professional athletes who base their game on the principles of mutual respect and discipline. We believe that true success comes only through hard work and the cohesion of all team members. <br>Our development strategy includes creating a powerful football academy for future generations. Together, we strive for the heights of Ukrainian football, remaining faithful to our traditions and fans.",
        
        // players carousel
        players_header: "Players",
        name_oleksiy_kovalenko: "Oleksii Kovalenko",
        name_marko_melnyk: "Marko Melnyk",
        name_ivan_kravchenko: "Ivan Kravchenko",
        name_viktor_bondar: "Viktor Bondar",
        name_artem_sydorenko: "Artem Sydorenko",
        name_denys_polishchuk: "Denys Polishchuk",
        name_maksym_tkachenko: "Maksym Tkachenko",
        name_andriy_shapoval: "Andrii Shapoval",
        name_ihor_petrenko: "Ihor Petrenko",
        name_mykola_zubko: "Mykola Zubko",
        name_roman_shevchuk: "Roman Shevchuk",
        pos_gk: "Goalkeeper",
        pos_rb: "Right Back",
        pos_cb: "Centre Back",
        pos_lb: "Left Back",
        pos_cdm: "Defensive Midfielder",
        pos_cm: "Central Midfielder",
        pos_cam: "Attacking Midfielder",
        pos_rw: "Right Winger",
        pos_lw: "Left Winger",
        pos_st: "Centre Forward",

        // achievements
        achievements_title: "Our Achievements",
        cup_ukraine: "Ukrainian Cup",
        supercup_ukraine: "Ukrainian Super Cup",
        champion_ussr: "USSR Champion",
        cup_ussr: "USSR Cup",
        cup_winners: "Cup Winners' Cup",
        supercup_uefa: "UEFA Super Cup",
        champion_ukraine: "Ukrainian Champion",

        // footer
        footer_copy: "© Football Club “Zhyvchyky” 2026"
    }
};


document.addEventListener('DOMContentLoaded', () => {
    // карусель
    const track = document.getElementById('track');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (track && prevBtn && nextBtn) {
        let isAnimating = false;

        function moveNext() {
            if (isAnimating) return;
            isAnimating = true;

            const firstCard = track.firstElementChild;
            track.style.transition = "transform 0.5s ease";
            const shift = firstCard.offsetWidth + 20; 
            track.style.transform = `translateX(-${shift}px)`;

            setTimeout(() => {
                track.style.transition = "none";
                track.appendChild(firstCard);
                track.style.transform = "translateX(0)";
                isAnimating = false;
            }, 500);
        }

        function movePrev() {
            if (isAnimating) return;
            isAnimating = true;

            const lastCard = track.lastElementChild;
            const shift = lastCard.offsetWidth + 20;

            track.style.transition = "none";
            track.prepend(lastCard);
            track.style.transform = `translateX(-${shift}px)`;

            setTimeout(() => {
                track.style.transition = "transform 0.5s ease";
                track.style.transform = "translateX(0)";
                setTimeout(() => { isAnimating = false; }, 500);
            }, 10);
        }

        nextBtn.addEventListener('click', moveNext);
        prevBtn.addEventListener('click', movePrev);
    }



    // зміна мови
    const langSelector = document.getElementById('langSelector');
    const currentLangDisplay = document.querySelector('.current-lang');

    function setLanguage(lang) {
        localStorage.setItem('selectedLang', lang);
        
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        if (currentLangDisplay) {
            currentLangDisplay.textContent = lang === 'ua' ? 'Українська' : 'English';
        }
    }

    if (langSelector) {
        langSelector.addEventListener('click', (e) => {
            e.stopPropagation();
            langSelector.classList.toggle('active');
        });

        const langOptions = langSelector.querySelectorAll('.lang-dropdown a');
        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const lang = e.target.getAttribute('href').split('=')[1];
                setLanguage(lang);
                langSelector.classList.remove('active');
            });
        });
    }

    document.addEventListener('click', () => {
        if (langSelector) {
            langSelector.classList.remove('active');
        }
    });

    const savedLang = localStorage.getItem('selectedLang') || 'ua';
    setLanguage(savedLang);


    // обробка кнопки статистика в навігації
    const statsBtn = document.getElementById("stats-btn");
    if (statsBtn) {
        statsBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const currentLang = localStorage.getItem('selectedLang') || 'ua';
            alert(translations[currentLang].stats_alert);
        });
    }
});
