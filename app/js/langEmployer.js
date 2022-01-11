const langEmployer = {
    "header__buttons-join": {
        "ru": "Вход",
        "en": "Login"
    },
    "header__buttons-registration": {
        "ru": "Регистрация",
        "en": "Registration"
    },
    "header__subtitle": {
        "ru": "Универсальный инструмент для оценки и найма IT-специалистов",
        "en": "Universal tool for evaluating and hiring IT specialists"
    },
    "header__text": {
        "ru": "Идеальный кандидат уже ждет оффер",
        "en": "The ideal candidate is already waiting for an offer"
    },
    "header__links-registration": {
        "ru": "Регистрация",
        "en": "Registration"
    },
    "header__links-link": {
        "ru": "Соискателям",
        "en": "Applicants"
    },
    "unique__title": {
        "ru": "Найм станет дешевле и быстрее",
        "en": "Hiring will become cheaper and faster"
    },
    "unique__text": {
        "ru": "Мы взяли на себя часть работы по оценке навыков и компетенции соискателя. Теперь, кроме обычного резюме, каждый потенциальный сотрудник будет иметь оценку уровня знаний, что позволит точечно выбирать специалиста на вакансию.",
        "en": 'We have taken over part of the job of assessing the skills and competence of a jobseeker. Now, in addition to the usual resume, each potential employee will have an assessment of the level of knowledge, which will make it possible to select a specialist for a vacancy.'
    },
    "promo-title-a": {
        "ru": "Меньше времени на поиск кандидата",
        "en": "Less time to find a candidate"
    },
    "promo-title-b": {
        "ru": "От вас нужен только оффер",
        "en": "All you need from you is an offer"
    },
    "promo-title-c": {
        "ru": "Максимум информации",
        "en": "Maximum information",
    },
    "promo-text-a": {
        "ru": "Специально разработанная система тестирования кандидатов позволит рекрутерам сразу оценивать hard-skill специалиста. Остается только назначить дату собеседования и вакансия закрыта.",
        "en": "A specially developed system of testing candidates will allow recruiters to immediately assess a hard-skilled specialist. All that's left is to set a date for an interview, and the job is closed."
    },
    "promo-text-b": {
        "ru": "Исчерпывающее резюме и тестирование разработаны специалистами в своих областях. Мы уже провели всю оценку кандидата, от вас остается только выбрать специалиста и сделать оффер.",
        "en": "Extensive resume and testing p he resume and testing are developed by experts in their fields. We've already done all the evaluation of the candidate, all you have to do is choose a specialist and make an offer"
    },
    "promo-text-c": {
        "ru": "Тестирование на основе такосономии Блума позволяет оценить hard-skills, но уже в ближайшее время мы дополним сервис оценкой языковых и личностных навыков соискателя",
        "en": "Testing based on Bloom's tachosonomy allows you to assess hard-skills, but in the near future we will expand the service with assessment of the candidate's language and personal skills"
    },
    "accardion__title": {
        "ru": "Найти сотрудника можно за пару кликов",
        "en": "Find an employee in a couple of clicks"
    },
    "footer__subtitle": {
        "ru": "Вперед к успеху!",
        "en": "Let's go for success!"
    },
    "footer__text": {
        "ru": "Воспользуйтесь всеми преимуществами для быстрого найма",
        "en": "Take advantage of all the benefits for quick hiring"
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
                ru: "Авторизация  на платформе",
                en: "Authorize on the platform"
            },
            {
                ru: "Поиск кандидата в рейтинге",
                en: "Search for a candidate in the ranking"
            },
            {
                ru: "Переход в чат с подходящим кандидатом",
                en: "Chat with the right candidate"
            },
            {
                ru: "Собеседование",
                en: "Interviewing"
            },
            {
                ru: "Успешный найм идеального кандидата для текущей вакансии!",
                en: "Successfully hiring the perfect candidate!"
            },
        ],
        text: [
            {
                ru: "Пройдите процедуру регистрации и получите доступ ко всем возможностям платформы.",
                en: "Complete the registration process and get access to all the features of the platform."
            },
            {
                ru: "Благодаря динамической рейтинговой системе, подходящего сотрудника можно найти гораздо быстрее.",
                en: "Thanks to the dynamic ranking system, you can find the right employee much faster."
            },
            {
                ru: "Связывайтесь с кандидатом прямо на платформе, для вашего удобства мы добавили встроенный календарь и еще несколько полезных инструментов.",
                en: "Contact the candidate directly on the platform, for your convenience we've added a built-in calendar and some more useful tools."
            },
            {
                ru: "Мы сократили путь оценки твоих качеств, что позволит быстрее получить долгожданный оффер и принять выгодное предложение.",
                en: "We've shortened the way to assess your qualities, which will allow you to get the long-awaited offer and accept a lucrative offer faster."
            },
            {
                ru: "Поздравляем! Вы сократили время найма и подобрали самого лучшего специалиста для вашего проекта.",
                en: "Congratulations! You've shortened your hiring time and picked the best person for your project."
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