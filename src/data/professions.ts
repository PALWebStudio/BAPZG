export type Profession = {
  slug: string;
  title: string;
  quote: string;
  image: string;
  description: string;
  responsibilities: string[];
  gallery: { src: string; alt: string }[];
};

export const professions: Profession[] = [
  {
    slug: "medicinska-sestra",
    title: "Медицинска сестра",
    quote: "До пациента във всеки важен момент.",
    image: "https://images.unsplash.com/photo-1691139601099-932c01ec198b?q=80&w=1200&auto=format&fit=crop",
    description:
      "Медицинските сестри са в основата на здравната система — грижат се за пациентите денонощно, наблюдават състоянието им и подкрепят лекарския екип във всеки етап на лечението.",
    responsibilities: [
      "Наблюдение на жизнените показатели и състоянието на пациента",
      "Прилагане на предписано лечение и грижи",
      "Комуникация с пациенти и близки в трудни моменти",
      "Координация с лекари и друг медицински персонал",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1691139601099-932c01ec198b?q=80&w=900&auto=format&fit=crop", alt: "Медицинска сестра с пациент" },
      { src: "https://images.unsplash.com/photo-1587556930799-8dca6fad6d41?q=80&w=900&auto=format&fit=crop", alt: "Практическо обучение" },
      { src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop", alt: "Екипна работа" },
      { src: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=900&auto=format&fit=crop", alt: "Обсъждане на случай" },
    ],
  },
  {
    slug: "akusherka",
    title: "Акушерка",
    quote: "Посреща новия живот и подкрепя майката.",
    image: "https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=1200&auto=format&fit=crop",
    description:
      "Акушерките придружават жената през бременността, раждането и следродилния период, съчетавайки клинична експертиза с човешка подкрепа в един от най-важните моменти в живота.",
    responsibilities: [
      "Наблюдение на бременността и подготовка за раждане",
      "Асистиране при раждане и грижа за новороденото",
      "Следродилни грижи за майката и бебето",
      "Консултиране по въпроси на кърменето и възстановяването",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=900&auto=format&fit=crop", alt: "Новородено бебе" },
      { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=900&auto=format&fit=crop", alt: "Обучение на работното място" },
      { src: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=900&auto=format&fit=crop", alt: "Работна среща" },
      { src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=900&auto=format&fit=crop", alt: "Професионалист по здравни грижи" },
    ],
  },
  {
    slug: "medicinski-laborant",
    title: "Медицински лаборант",
    quote: "Точната диагноза започва в лабораторията.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop",
    description:
      "Медицинските лаборанти извършват изследванията, на които разчитат лекарите за точна диагноза — прецизност и внимание към детайла са в основата на тяхната ежедневна работа.",
    responsibilities: [
      "Обработка и анализ на биологични проби",
      "Работа с лабораторно оборудване и спазване на протоколи",
      "Контрол на качеството на резултатите",
      "Поддържане на точна документация за всяко изследване",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=900&auto=format&fit=crop", alt: "Лаборатория" },
      { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop", alt: "Работна среща" },
      { src: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=900&auto=format&fit=crop", alt: "Обсъждане на резултати" },
      { src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop", alt: "Екипна работа" },
    ],
  },
  {
    slug: "rentgenov-laborant",
    title: "Рентгенов лаборант",
    quote: "Превръща медицинската технология в точен образ.",
    image: "https://images.unsplash.com/photo-1631651363531-fd29aec4cb5c?q=80&w=1200&auto=format&fit=crop",
    description:
      "Рентгеновите лаборанти работят с образна диагностика — рентген, скенер и други технологии, които дават на лекарите ясна картина за състоянието на пациента.",
    responsibilities: [
      "Извършване на образни изследвания по лекарско направление",
      "Правилно позициониране на пациента и защита от облъчване",
      "Поддръжка и правилна експлоатация на апаратурата",
      "Подготовка на образния материал за лекарска интерпретация",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1631651363531-fd29aec4cb5c?q=80&w=900&auto=format&fit=crop", alt: "Рентгенова снимка" },
      { src: "https://images.unsplash.com/photo-1587556930799-8dca6fad6d41?q=80&w=900&auto=format&fit=crop", alt: "Практическо обучение" },
      { src: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=900&auto=format&fit=crop", alt: "Работна среща" },
      { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=900&auto=format&fit=crop", alt: "Обучение на работното място" },
    ],
  },
  {
    slug: "rehabilitator",
    title: "Рехабилитатор",
    quote: "Връща движението, независимостта и увереността.",
    image: "https://images.unsplash.com/photo-1540205895360-4ad4cffb3aa8?q=80&w=1200&auto=format&fit=crop",
    description:
      "Рехабилитаторите помагат на пациентите да възстановят движение и функция след травма, операция или заболяване — с търпение, индивидуален подход и доказани методики.",
    responsibilities: [
      "Изготвяне на индивидуална програма за рехабилитация",
      "Провеждане на терапевтични упражнения и процедури",
      "Проследяване на напредъка и адаптиране на плана за възстановяване",
      "Обучение на пациента за самостоятелни упражнения у дома",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1540205895360-4ad4cffb3aa8?q=80&w=900&auto=format&fit=crop", alt: "Рехабилитационна сесия" },
      { src: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=900&auto=format&fit=crop", alt: "Обсъждане на случай" },
      { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop", alt: "Работна среща" },
      { src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=900&auto=format&fit=crop", alt: "Професионалист по здравни грижи" },
    ],
  },
];
