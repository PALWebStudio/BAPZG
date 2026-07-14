export type LibraryDocument = {
  id: string;
  title: string;
  category: "Наредби" | "Стандарти" | "Добри практики" | "Формуляри";
  fileType: "PDF" | "DOCX";
  date: string;
  size: string;
  downloadable?: boolean;
};

export const documents: LibraryDocument[] = [
  {
    id: "doc-1",
    title: "Наредба № 1 за професионалната дейност на медицинските сестри и акушерки",
    category: "Наредби",
    fileType: "PDF",
    date: "12 март 2026",
    size: "1.2 MB",
    downloadable: true,
  },
  {
    id: "doc-2",
    title: "Етичен кодекс на професионалистите по здравни грижи",
    category: "Добри практики",
    fileType: "PDF",
    date: "3 февруари 2026",
    size: "480 KB",
    downloadable: true,
  },
  {
    id: "doc-3",
    title: "Стандарт за добра сестринска практика в интензивни отделения",
    category: "Стандарти",
    fileType: "PDF",
    date: "28 януари 2026",
    size: "2.1 MB",
  },
  {
    id: "doc-4",
    title: "Формуляр за кандидатстване за членство в БАПЗГ",
    category: "Формуляри",
    fileType: "DOCX",
    date: "15 януари 2026",
    size: "95 KB",
    downloadable: true,
  },
  {
    id: "doc-5",
    title: "Правилник за продължаващо професионално обучение",
    category: "Наредби",
    fileType: "PDF",
    date: "10 декември 2025",
    size: "670 KB",
  },
  {
    id: "doc-6",
    title: "Добри практики при комуникация с пациенти",
    category: "Добри практики",
    fileType: "PDF",
    date: "2 декември 2025",
    size: "340 KB",
    downloadable: true,
  },
  {
    id: "doc-7",
    title: "Формуляр за издаване на удостоверение за членство",
    category: "Формуляри",
    fileType: "DOCX",
    date: "20 ноември 2025",
    size: "88 KB",
    downloadable: true,
  },
  {
    id: "doc-8",
    title: "Стандарт за инфекциозен контрол в лечебни заведения",
    category: "Стандарти",
    fileType: "PDF",
    date: "5 ноември 2025",
    size: "1.8 MB",
  },
];
