export default {
  schedule: [
    {
      id: 1,
      label: "Пн-Пт",
      times: ["16:20 – 18:25", "17:20 – 19:25", "18:35 – 20:40"],
    },

    {
      id: 2,
      label: "Сб-Вс",
      times: ["10:20 – 12:25", "12:35 – 14:40", "14:50 – 16:55", "17:05 – 19:10"],
    },
  ],
  features: [
    {
      id: 1,
      label: "от 6 до 10",
      description: "учеников 9-11 класса обучаются ежегодно в ЕГЭ-Центре",
    },
    {
      id: 2,
      label: "+26 баллов",
      description: "Минимальный прогресс учеников к концу года",
    },
    {
      id: 3,
      label: "столовая",
      description: "чай и печеньки доступны в любое время и бесплатно",
    },
  ],
  gallery: [
    { image: { src: "/static/img/gallery/galleryCourse_1.jpg", alt: "alt" } },
    { image: { src: "/static/img/gallery/galleryCourse_2.jpg", alt: "alt" } },
    { image: { src: "/static/img/gallery/galleryCourse_3.jpg", alt: "alt" } },
    { image: { src: "/static/img/gallery/galleryCourse_4.jpg", alt: "alt" } },
  ],
  featuredTestimonial: {
    rating: 5,
    title: "93 балла!<br/> На экзамене мне было легко.",
    content: `Обществознание сдала на 93 балла! Преподаватели не просто готовили
    нас к экзамену, а действительно смогли привить интерес к предмету.
    Дома я занималась по конспектам занятий, не зубрила,
    многое осталось в памяти, на самом экзамене мне было достаточно легко.
    <br/>
    Поступаю в МГУ.`,
    author: {
      avatar: "/static/img/avatar/avatar-aleksandra.jpg",
      name: "Александра",
      position: "Ученица, 11 класс",
    },
  },
  testimonials: [
    {
      rating: 5,
      content: `“Дмитрий Александрович - хороший
      преподаватель, знает как преподнести
      материал, чтобы было правильно, понятно
      и конкретно. Каждое задание мы
      прорешивали, практики было достаточно.
      На ЕГЭ я набрала 81 балл. Подала
      документы в МГЮА, МГПУ, РГУП и МИРЭА.”`,
      subject: "ЕГЭ по обществознанию: 81 из 100 баллов",
      author: {
        avatar: "/static/img/avatar/avatar-aleksandra.jpg",
        name: "Александра",
        position: "Ученица, 11 класс",
      },
      date: "15 июля 2021 г.",
    },
    {
      rating: 5,
      content: `“Все темы объяснены понятно. Дмитрий
      Александрович – хороший педагог, умеет
      заинтересовать и объяснить даже самые
      сложные темы,например, экономику.
      ЕГЭ я сдала на 92 балла. Подала документы
      в РАНХиГС, ФА, Плеханова, ГУУ и РГГУ.”`,
      subject: "ЕГЭ по обществознанию: 92 из 100 баллов",
      author: {
        avatar: "/static/img/avatar/avatar-aleksandra.jpg",
        name: "Мария",
        position: "Ученица, 11 класс",
      },
      date: "16 июля 2021 г.",
    },
    {
      rating: 4,
      content: `“Очень хорошие впечатления остались.
      Анастасия изучала год этот предмет,
      и за это время здорово повысила уровень
      знаний. Мы довольны, спасибо Вам большое.
      Поступаем в МГЮА им. Кутафина.”`,
      subject: "ЕГЭ по обществознанию: 80 из 100 баллов",
      author: {
        avatar: "/static/img/avatar/avatar-aleksandra.jpg",
        name: "Ирина Викторовна",
        position: "Мама Анастасии, 11 класс",
      },
      date: "12 августа 2021 г.",
    },
    {
      rating: 5,
      content: `“Обществознание сдала на 93 балла!
      Преподаватели не просто готовили на
      к экзамену, а действительно смогли привить
      интерес к предмету. Дома я занималась
      по конспектам занятий, не зубрила, многое
      осталось в памяти, на самом экзамене мне
      было достаточно легко. Поступаю в МГУ.”`,
      subject: "ЕГЭ по обществознанию: 92 из 100 баллов",
      author: {
        avatar: "/static/img/avatar/avatar-aleksandra.jpg",
        name: "Мария",
        position: "Ученица, 11 класс",
      },
      date: "29 июля 2020 г.",
    },
  ],
  teachers: [
    {
      id: 1,
      avatar: "/static/img/avatar/avatar-1.jpg",
      name: "Стецюк Сергей <br/>Константинович",
      description: `Преподаватель истории
      и обществознания. Эксперт ЕГЭ.
      Кандидат исторических наук.`,
    },
    {
      id: 2,
      avatar: "/static/img/avatar/avatar-2.jpg",
      name: "Тиханкина Светлана <br/>Анатольевна",
      description: `Преподаватель обществознания
      высшей категории. Кандидат
      философских наук. Эксперт ЕГЭ.`,
    },
    {
      id: 3,
      avatar: "/static/img/avatar/avatar-3.jpg",
      name: "Кручинин Марат <br/>Сергеевич",
      description: `Преподаватель истории
      и обществознания первой
      категории. `,
    },
    {
      id: 4,
      avatar: "/static/img/avatar/avatar-4.jpg",
      name: "Ерисов Владимир <br/>Викторович",
      description: `Преподаватель истории
      и обществознания высшей
      категории. Эксперт ЕГЭ и ОГЭ.`,
    },
    {
      id: 5,
      avatar: "/static/img/avatar/avatar-5.jpg",
      name: "Елесина Елена <br/>Дмитриевна",
      description: `Преподаватель истории
      и обществознания. Высшая
      квалификационная категория.`,
    },
    {
      id: 6,
      avatar: "/static/img/avatar/avatar-6.jpg",
      name: "Тюрин Дмитрий <br/>Александрович",
      description: `Преподаватель обществознания.
      Магистр социально-
      экономического образования.`,
    },
    {
      id: 7,
      avatar: "/static/img/avatar/avatar-7.jpg",
      name: "Цыкалов Дмитрий <br/>Евгеньевич",
      description: `Преподаватель истории
      и обществознания. Кандидат
      исторических наук.`,
    },
    {
      id: 8,
      avatar: "/static/img/avatar/avatar-8.jpg",
      name: "Тавасиева Алена <br/>Вячеславовна",
      description: `Преподаватель истории
      и обществознания высшей
      категории. Эксперт ЕГЭ.`,
    },
    {
      id: 9,
      avatar: "/static/img/avatar/avatar-9.jpg",
      name: "Черножуков Алексей <br/>Сергеевич",
      description: `Преподаватель обществознания
      высшей квалификационной
      категории.`,
    },
    {
      id: 10,
      avatar: "/static/img/avatar/avatar-10.jpg",
      name: "Петраш Елена <br/>Вадимовна",
      description: `Преподаватель
      по обществознанию. Кандидат
      культурологических наук.`,
    },
  ],
}