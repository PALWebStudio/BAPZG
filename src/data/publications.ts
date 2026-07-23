export type PublicationType = "bulletin" | "magazine";

export type PublicationIssue = {
  id: string;
  publicationType: PublicationType;
  title: string;
  issueNumber: number;
  year: number;
  publicationDate?: string;
  /** Undefined when no real cover has been supplied yet — renders a placeholder. */
  coverImage?: string;
  /** Undefined when no real PDF has been uploaded yet — reader shows a "not available" state. */
  pdfUrl?: string;
  description?: string;
  contents?: string[];
  authors?: string[];
  keywords?: string[];
  featured?: boolean;
  downloadable?: boolean;
};

export const publicationMeta: Record<PublicationType, { title: string; periodicity: string; description: string }> = {
  bulletin: {
    title: "Бюлетин на БАПЗГ",
    periodicity: "Всеки месец",
    description: "Актуална информация, новини, инициативи и важни съобщения за професионалистите по здравни грижи.",
  },
  magazine: {
    title: "Списание „Здравни грижи“",
    periodicity: "Четири броя годишно",
    description:
      "Научно и професионално издание на БАПЗГ, посветено на развитието на здравните грижи, образованието, практиката и научните изследвания.",
  },
};

const MONTHS_BG = [
  "Януари", "Февруари", "Март", "Април", "Май", "Юни",
  "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември",
];

function buildBulletinArchive(): PublicationIssue[] {
  const byYear: { year: number; months: number }[] = [
    { year: 2026, months: 7 },
    { year: 2025, months: 12 },
  ];
  const issues: PublicationIssue[] = [];
  byYear.forEach(({ year, months }) => {
    for (let m = months - 1; m >= 0; m--) {
      issues.push({
        id: `byuletin-${year}-${m + 1}`,
        publicationType: "bulletin",
        title: `Бюлетин на БАПЗГ — ${MONTHS_BG[m]} ${year}`,
        issueNumber: m + 1,
        year,
        publicationDate: `${MONTHS_BG[m]} ${year}`,
        description: "Съдържанието на този брой предстои да бъде публикувано.",
        featured: year === 2026 && m === months - 1,
      });
    }
  });
  return issues;
}

const MAGAZINE_ISSUE_2_2026_CONTENTS = [
  "Професионални компетенции на специалистите по здравни грижи в контекста на частните амбулаторни практики",
  "Карцином на ларинкса: ниво на информираност сред пациентите и анализ на предразполагащите фактори",
  "Храненето като условие за превенция на усложненията при пациенти с артериална хипертония",
  "Нагласи на медицинските сестри за продължаващо обучение и образование",
  "Здравни грижи и психосоциална подкрепа при деца с онкохематологични заболявания",
  "Професионални нагласи на медицинските сестри при прилагане на съвременни хирургични методи в урологичната практика",
  "Терапия с дълбоки осцилации и ПНМУ техники при рехабилитация на периферен фациалис (клиничен случай)",
  "Събития: Националната конференция по здравни грижи събра над 600 специалисти от България и Балканите",
  "Събития: БАПЗГ взе участие в 34-ия конгрес на Международната конфедерация на акушерките в Лисабон",
  "Събития: Успешно премина 60-ата юбилейна Национална конференция по трансфузионна хематология",
];

function buildMagazineArchive(): PublicationIssue[] {
  const years = [2026, 2025];
  const issues: PublicationIssue[] = [];
  years.forEach((year) => {
    for (let n = 4; n >= 1; n--) {
      const isIssue2of2026 = year === 2026 && n === 2;
      issues.push({
        id: `zdravni-grizhi-${year}-${n}`,
        publicationType: "magazine",
        title: `Списание „Здравни грижи“ — Брой ${n}`,
        issueNumber: n,
        year,
        coverImage: isIssue2of2026 ? "/images/korica-spisanie.jpg" : undefined,
        description: isIssue2of2026
          ? "Брой 2, година XXIV (2026) на списание „Здравни грижи“ — научни статии, практически обзори и преглед на важни събития от последните месеци."
          : "Съдържанието на този брой предстои да бъде публикувано.",
        contents: isIssue2of2026 ? MAGAZINE_ISSUE_2_2026_CONTENTS : [],
        authors: [],
        keywords: [],
        featured: isIssue2of2026,
      });
    }
  });
  return issues;
}

export const bulletinIssues: PublicationIssue[] = buildBulletinArchive();
export const magazineIssues: PublicationIssue[] = buildMagazineArchive();

export function getLatestIssue(type: PublicationType): PublicationIssue {
  const list = type === "bulletin" ? bulletinIssues : magazineIssues;
  return list.find((i) => i.featured) ?? list[0];
}

export function getArchiveByYear(type: PublicationType): { year: number; issues: PublicationIssue[] }[] {
  const list = type === "bulletin" ? bulletinIssues : magazineIssues;
  const years = Array.from(new Set(list.map((i) => i.year))).sort((a, b) => b - a);
  return years.map((year) => ({ year, issues: list.filter((i) => i.year === year) }));
}
