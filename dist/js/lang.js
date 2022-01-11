const languages = {
    "header__buttons-join": {
        "ru": "Вход",
        "en": "Login"
    },
    "header__buttons-registration": {
        "ru": "Регистрация",
        "en": "Registration"
    },
    "header__subtitle": {
        "ru": `Твой незаменимый инструмент для поиска работы`,
        "en": "Your indispensable job search tool"
    },
    "header__text": {
        "ru": "Оффер мечты уже ждёт тебя",
        "en": "The offer of your dreams is waiting for you"
    },
    "header__links-registration": {
        "ru": "Регистрация",
        "en": "Registration"
    },
    "header__links-link": {
        "ru": "Компаниям",
        "en": "Сompanies"
    },
    "unique__title": {
        "ru": "Проявить свою уникальность просто!",
        "en": "Show your uniqueness simply!"
    },
    "unique__text": {
        "ru": "Очень часто молодым IT-специалистам трудно найти работу: нет практического опыта, а навык самопрезентация, как у старших коллег, еще не развит; однообразные резюме составленные по шаблону и пустота в графе “опыт работы”.",
        "en": 'Very often it is difficult to find a job for young IT-specialists: no practical experience, and self-presentation skill, as older colleagues have not yet developed; monotonous resume compiled according to a template and a blank space in the column "work experience".'
    },
    "promo-title-a": {
        "ru": "Мы — твоя уникальность",
        "en": "We are your uniqueness"
    },
    "promo-title-b": {
        "ru": "Полная защищенность",
        "en": "Total security"
    },
    "promo-title-c": {
        "ru": "Максимальная скорость",
        "en": "Maximum speed",
    },
    "promo-text-a": {
        "ru": "Даём оценку твоим реальным навыкам, чтобы рекрутер сразу видел все твои сильные стороны и знал твою реальную ценность.",
        "en": "We assess your real skills so the recruiter can see all your strengths and know your real value right away."
    },
    "promo-text-b": {
        "ru": "Мы за анонимность, только соискатель принимает решение о раскрытии личных данных.",
        "en": "We advocate anonymity, only the applicant decides whether to disclose personal data."
    },
    "promo-text-c": {
        "ru": "Самое быстрое трудоустройство благодаря тестированию и предварительной оценке кандидата.",
        "en": "The fastest job placement thanks to testing and pre-assessment of the candidate."
    },
    "accardion__title": {
        "ru": "Как легко и быстро получить работу мечты?",
        "en": "How to get your dream job quickly and easily?"
    },
    "footer__subtitle": {
        "ru": "Вперед к успеху!",
        "en": "Let's go for success!"
    },
    "footer__text": {
        "ru": "Воспользуйтесь всеми преимуществами для поиска работы",
        "en": "Take full advantage of your job search"
    },
    "footer__inner-policy": {
        "ru": "Политика конфиденциальности",
        "en": "Privacy policy"
    },
    "footer__inner-coockie": {
        "ru": "Политика использования файлов cookie",
        "en": "Cookie policy"
    },
    "footer__inner-contacts": {
        "ru": "Контакты",
        "en": "Contacts"
    },
    "footer__button-btn": {
        "ru": "Регистрация",
        "en": "Registration"
    },
    "subscription__btn": {
        "ru": "Подписка",
        "en": "Subscription"
    },
    "partners__btn": {
        "ru": "Посмотреть всё",
        "en": "View all"
    }
}
// Написал хуйню, простите, я в стадии обучения
langAccordion = [
    {
        title: [
            {
                ru: "Заполни профиль",
                en: "Fill in your profile"
            },
            {
                ru: "Пройди тест",
                en: "Take a test"
            },
            {
                ru: "Откликайся на вакансию",
                en: "Respond to the vacancy"
            },
            {
                ru: "Подтверди найм",
                en: "Confirm the hire"
            },
            {
                ru: "Приступай к работе!",
                en: "Get to work!"
            },
        ],
        text: [
            {
                ru: "После регистрации тебе нужно заполнить профиль. После заполнения у тебе будет доступно резюме, которое удовлетворит даже самого привередливого рекрутера.",
                en: "After registering you need to fill in your profile. Once completed you will have a resume that will satisfy even the most fastidious recruiter"
            },
            {
                ru: "Особая система тестирования позволяет объективно оценить актуальный hard-skill.  Разрабатывая собственное тестирование, мы обратились к специалистам в области тестологии и создали  6-ти уровневый тест. \n \n Все оценивание сформировано на таксономии Блума.",
                en: "Our special testing system lets you evaluate your current hard-skills objectively.  When we created our own test we turned to experts in the field of testing and created a 6-level test. \n \n All assessments are formed on Bloom's taxonomy"
            },
            {
                ru: "После тестирования все кандидаты попадают в динамическую рейтинговую систему и получают позицию соответствующую реальным навыкам.",
                en: "After testing, all candidates are put into a dynamic rating system and given a position that matches their actual skills.  "
            },
            {
                ru: "Мы сократили путь оценки твоих качеств, что позволит быстрее получить долгожданный оффер и принять выгодное предложение.",
                en: "We've shortened the way you'll be assessed so you'll get the offer you've been waiting for, and that's why you'll get the big offer sooner."
            },
            {
                ru: "Поздравляем! Ты на пути к работе своей мечты!",
                en: "Congratulations! You're on your way to your dream job!"
            },
        ],
    },
];
(function () {
    let hash = window.location.hash.substr(1);
    let title = document.querySelectorAll('.accardion__wrapper .accardion__elem-title');
    let text = document.querySelectorAll('.accardion__wrapper .accardion__elem-text');

    title.forEach((elem, index) => {
        if (hash === 'ru') {
            elem.innerText = langAccordion[0].title[index].ru
        }
        if (hash === 'en') {
            elem.innerText = langAccordion[0].title[index].en
        }
    });

    text.forEach((elem, index) => {
        if (hash === 'ru') {
            elem.innerText = langAccordion[0].text[index].ru
        }
        if (hash === 'en') {
            elem.innerText = langAccordion[0].text[index].en
        }
    })
})();