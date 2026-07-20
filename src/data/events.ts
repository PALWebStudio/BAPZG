export type EventItem = {
  slug: string;
  title: string;
  date: string;
  month: string;
  year: string;
  location: string;
  online?: boolean;
  image: string;
  excerpt: string;
  status: "upcoming" | "past";
};

export const events: EventItem[] = [
  {
    slug: "nacionalen-kongres-2026",
    title: "Национален конгрес по здравни грижи 2026",
    date: "12",
    month: "СЕП",
    year: "2026",
    location: "София, НДК",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=900&auto=format&fit=crop",
    excerpt: "Най-мащабният годишен форум на БАПЗГ, обединяващ специалисти от цялата страна.",
    status: "upcoming",
  },
  {
    slug: "regionalna-sreshta-plovdiv",
    title: "Регионална среща на колегиите — Пловдив",
    date: "28",
    month: "СЕП",
    year: "2026",
    location: "Пловдив, Медицински университет",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop",
    excerpt: "Дискусия по приоритетите на регионалната колегия за следващата година.",
    status: "upcoming",
  },
  {
    slug: "den-na-medicinskata-sestra",
    title: "Международен ден на медицинската сестра",
    date: "12",
    month: "МАЙ",
    year: "2026",
    location: "София",
    online: true,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=900&auto=format&fit=crop",
    excerpt: "Отбелязване на приноса на медицинските сестри в България с онлайн събитие.",
    status: "upcoming",
  },
  {
    slug: "godishna-konferenciya-2025",
    title: "Годишна конференция на БАПЗГ 2025",
    date: "14",
    month: "СЕП",
    year: "2025",
    location: "София, НДК",
    image: "https://images.unsplash.com/photo-1587556930799-8dca6fad6d41?q=80&w=900&auto=format&fit=crop",
    excerpt: "Над 500 специалисти обсъдиха бъдещето на здравните грижи в България.",
    status: "past",
  },
  {
    slug: "regionalna-sreshta-varna-2025",
    title: "Регионална среща на колегиите — Варна",
    date: "20",
    month: "ЮНИ",
    year: "2025",
    location: "Варна",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=900&auto=format&fit=crop",
    excerpt: "Представители на регионалните колегии обсъдиха приоритетите за годината.",
    status: "past",
  },
  {
    slug: "webinar-etika-2025",
    title: "Уебинар: Етика в здравните професии",
    date: "3",
    month: "МАР",
    year: "2025",
    location: "Онлайн",
    online: true,
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=900&auto=format&fit=crop",
    excerpt: "Дискусия по етичните предизвикателства в ежедневната практика.",
    status: "past",
  },
];
