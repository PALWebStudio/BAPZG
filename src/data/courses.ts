export type CourseType = "Курс" | "Уебинар" | "Конференция";

export type Course = {
  slug: string;
  title: string;
  type: CourseType;
  category: string;
  date: string;
  time?: string;
  location: string;
  online?: boolean;
  speaker: string;
  credits: number;
  featured?: boolean;
  image: string;
  description: string;
  outcomes: string[];
  agenda: { time: string; item: string }[];
};

export const courses: Course[] = [
  {
    slug: "speshni-sastoyaniya-neonatologiya",
    title: "Практически курс: Спешни състояния в неонатологията",
    type: "Курс",
    category: "Неонатология",
    date: "15 юни 2026",
    time: "09:00 – 17:00",
    location: "София, Учебен център на БАПЗГ",
    speaker: "д-р Мария Петкова",
    credits: 3,
    featured: true,
    image: "https://images.unsplash.com/photo-1587556930799-8dca6fad6d41?q=80&w=900&auto=format&fit=crop",
    description:
      "Интензивен практически курс за разпознаване и овладяване на спешни неонатални състояния, с акцент върху симулационно обучение.",
    outcomes: [
      "Разпознаване на ранни признаци на неонатален дистрес",
      "Прилагане на протоколи за спешна реанимация",
      "Работа в екип при критични ситуации",
    ],
    agenda: [
      { time: "09:00", item: "Регистрация и въведение" },
      { time: "10:00", item: "Теоретична част: неонатални спешни състояния" },
      { time: "13:00", item: "Обедна почивка" },
      { time: "14:00", item: "Симулационни упражнения" },
      { time: "16:30", item: "Обсъждане и сертифициране" },
    ],
  },
  {
    slug: "komunikatsiya-i-rabota-v-ekip",
    title: "Комуникация и работа в екип",
    type: "Курс",
    category: "Меки умения",
    date: "22 юни 2026",
    time: "10:00 – 16:00",
    location: "Пловдив, Медицински университет",
    speaker: "доц. Иван Георгиев",
    credits: 2,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop",
    description: "Практически семинар за подобряване на комуникацията между специалисти по здравни грижи и пациенти.",
    outcomes: ["Ефективна комуникация в стресови ситуации", "Работа в мултидисциплинарен екип"],
    agenda: [
      { time: "10:00", item: "Въведение и очаквания" },
      { time: "11:30", item: "Ролеви игри" },
      { time: "14:00", item: "Казуси от практиката" },
    ],
  },
  {
    slug: "savremenni-podhodi-operativni-grizhi",
    title: "Съвременни подходи в оперативните грижи",
    type: "Курс",
    category: "Хирургия",
    date: "5 юли 2026",
    time: "09:00 – 15:00",
    location: "Варна, УМБАЛ „Света Марина“",
    speaker: "гл. ас. Радка Иванова",
    credits: 2,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=900&auto=format&fit=crop",
    description: "Курс за актуализиране на знанията в пред- и следоперативните грижи за пациента.",
    outcomes: ["Прилагане на съвременни протоколи за грижа", "Превенция на следоперативни усложнения"],
    agenda: [
      { time: "09:00", item: "Регистрация" },
      { time: "09:30", item: "Предоперативна подготовка" },
      { time: "12:30", item: "Следоперативно наблюдение" },
    ],
  },
  {
    slug: "webinar-digitalizatsiya-zdravni-grizhi",
    title: "Дигитализация в здравните грижи — предизвикателства и възможности",
    type: "Уебинар",
    category: "Дигитално здравеопазване",
    date: "18 юни 2026",
    time: "18:00 – 19:30",
    location: "Онлайн",
    online: true,
    speaker: "д-р Стефан Колев",
    credits: 1,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=900&auto=format&fit=crop",
    description: "Онлайн дискусия за дигиталните инструменти в ежедневната практика на здравния специалист.",
    outcomes: ["Преглед на дигитални инструменти в сектора", "Практически съвети за внедряване"],
    agenda: [
      { time: "18:00", item: "Въведение" },
      { time: "18:20", item: "Основен доклад" },
      { time: "19:00", item: "Въпроси и отговори" },
    ],
  },
  {
    slug: "webinar-etika-zdravni-profesii",
    title: "Етични предизвикателства в здравните професии",
    type: "Уебинар",
    category: "Етика",
    date: "27 юни 2026",
    time: "17:30 – 19:00",
    location: "Онлайн",
    online: true,
    speaker: "проф. Елена Тодорова",
    credits: 1,
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=900&auto=format&fit=crop",
    description: "Уебинар, посветен на етичните дилеми в ежедневната работа на медицинските специалисти.",
    outcomes: ["Разпознаване на етични дилеми", "Вземане на информирани решения"],
    agenda: [
      { time: "17:30", item: "Встъпление" },
      { time: "18:00", item: "Казуси" },
    ],
  },
  {
    slug: "nacionalen-kongres-zdravni-grizhi-2026",
    title: "Национален конгрес по здравни грижи 2026",
    type: "Конференция",
    category: "Конгрес",
    date: "12 – 14 септември 2026",
    location: "София, НДК",
    speaker: "Множество лектори",
    credits: 6,
    featured: true,
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=900&auto=format&fit=crop",
    description: "Най-мащабният годишен форум на БАПЗГ, обединяващ специалисти от цялата страна.",
    outcomes: ["Актуални тенденции в здравните грижи", "Нетуъркинг с колеги от цялата страна"],
    agenda: [
      { time: "Ден 1", item: "Пленарни доклади и откриване" },
      { time: "Ден 2", item: "Тематични панели" },
      { time: "Ден 3", item: "Закриване и сертифициране" },
    ],
  },
];
