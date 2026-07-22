export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Начало", href: "/" },
  { label: "За БАПЗГ", href: "/za-bapzg" },
  { label: "Членство", href: "/chlenstvo" },
  { label: "Кариери", href: "/karieri" },
  { label: "Обучения", href: "/obucheniya" },
  { label: "Събития", href: "/sabitiya" },
  { label: "Новини", href: "/novini" },
  { label: "Библиотека", href: "/biblioteka" },
  { label: "Контакти", href: "/kontakti" },
];

export type Stat = {
  id: string;
  value: number;
  suffix: string;
  label: string;
};

export const stats: Stat[] = [
  { id: "members", value: 50000, suffix: "+", label: "членове" },
  { id: "colleges", value: 28, suffix: "", label: "регионални колегии" },
  { id: "international", value: 4, suffix: "", label: "международни членства" },
  { id: "trainings", value: 300, suffix: "+", label: "обучения годишно" },
  { id: "partners", value: 100, suffix: "+", label: "партньори" },
];

export type EventItem = {
  id: string;
  date: string;
  month: string;
  title: string;
  location: string;
  image: string;
};

export const events: EventItem[] = [
  {
    id: "event-1",
    date: "15",
    month: "ЮНИ",
    title: "Практически курс: Спешни състояния в неонатологията",
    location: "София",
    image:
      "https://images.unsplash.com/photo-1587556930799-8dca6fad6d41?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "event-2",
    date: "22",
    month: "ЮНИ",
    title: "Комуникация и работа в екип",
    location: "Пловдив",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "event-3",
    date: "05",
    month: "ЮЛИ",
    title: "Съвременни подходи в оперативните грижи",
    location: "Варна",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop",
  },
];

export type NewsItem = {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
};

export const news: NewsItem[] = [
  {
    id: "news-1",
    title: "Международен ден на медицинската сестра 2024",
    date: "12 май 2024",
    image: "/images/conference.jpg",
    excerpt: "Отбелязваме приноса на над 50 000 медицински сестри в България.",
  },
  {
    id: "news-2",
    title: "БАПЗГ с позиция по важни промени в наредбите",
    date: "8 май 2024",
    image:
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=900&auto=format&fit=crop",
    excerpt: "Асоциацията коментира последните регулаторни промени в сектора.",
  },
  {
    id: "news-3",
    title: "Успешно проведена регионална среща",
    date: "5 май 2024",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=900&auto=format&fit=crop",
    excerpt: "Представители на регионалните колегии обсъдиха приоритетите за годината.",
  },
];

export type Partner = {
  id: string;
  dot: string;
  abbr: string;
  fullName: string;
  /** Path under /public to the real logo, e.g. "/images/partners/icn.svg". Falls back to the dot+abbr badge when omitted. */
  logo?: string;
};

export const partners: Partner[] = [
  {
    id: "icn",
    dot: "I",
    abbr: "ICN",
    fullName: "Международен съвет на медицинските сестри (ICN)",
  },
  {
    id: "efn",
    dot: "E",
    abbr: "EFN",
    fullName: "Европейска федерация на сестринските асоциации (EFN)",
  },
  {
    id: "who",
    dot: "W",
    abbr: "WHO",
    fullName: "Световна здравна организация (WHO)",
  },
  {
    id: "cie",
    dot: "C",
    abbr: "CIE",
    fullName: "CIE — международна организация",
  },
  {
    id: "medboard",
    dot: "M",
    abbr: "MB",
    fullName: "Medical Board",
    logo: "/images/partners/medboard-logo.svg",
  },
  {
    id: "mzdrave",
    dot: "МЗ",
    abbr: "МЗ",
    fullName: "Министерство на здравеопазването",
    logo: "/images/partners/ministerstvo-zdraveopazvane-logo.webp",
  },
  {
    id: "mu-sofia",
    dot: "МУ",
    abbr: "МУ София",
    fullName: "Медицински университет — София",
    logo: "/images/partners/mu-sofia-logo.png",
  },
];

export const footerColumns = {
  navigation: [
    { label: "За БАПЗГ", href: "/za-bapzg" },
    { label: "Членство", href: "/chlenstvo" },
    { label: "Кариери", href: "/karieri" },
    { label: "Обучения", href: "/obucheniya" },
    { label: "Събития", href: "/sabitiya" },
    { label: "Библиотека", href: "/biblioteka" },
    { label: "Новини", href: "/novini" },
    { label: "Контакти", href: "/kontakti" },
  ],
  useful: [
    { label: "Наредби", href: "/biblioteka" },
    { label: "Стандарти", href: "/biblioteka" },
    { label: "Добри практики", href: "/biblioteka" },
    { label: "Формуляри", href: "/biblioteka" },
    { label: "Често задавани въпроси", href: "/chlenstvo" },
  ],
};
