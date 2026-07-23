// Official Governing Council (Управителен съвет) contact data.
export type LeadershipMember = {
  name: string;
  role: string;
  phones: string[];
  emails: string[];
  /** Undefined until an official photo is supplied — renders a placeholder avatar. */
  image?: string;
};

export const leadership: LeadershipMember[] = [
  {
    name: "Диана Георгиева",
    role: "Председател",
    phones: ["02/954 97 53", "0887 001 150"],
    emails: ["bg.nursing@abv.bg", "us_bapzg@abv.bg"],
    image: "/images/managementphotos/DianaGeorgieva.png",
  },
  {
    name: "Татяна Славкова д.м.",
    role: "Главен секретар",
    phones: ["915 69 13", "0882 728 077"],
    emails: ["us_bapzg@abv.bg"],
    image: "/images/managementphotos/slavkova.png",
  },
  {
    name: "Василка Николова",
    role: "Заместник-председател",
    phones: ["0888 097 260"],
    emails: ["us_bapzg@abv.bg"],
    image: "/images/managementphotos/nikolova.png",
  },
  {
    name: "Райна Бояджиева",
    role: "Заместник-председател",
    phones: ["0884 673 955"],
    emails: ["us_bapzg@abv.bg"],
    image: "/images/managementphotos/raina.png",
  },
  {
    name: "Александър Василев",
    role: "Заместник-председател",
    phones: ["0877 885 501"],
    emails: ["us_bapzg@abv.bg"],
    image: "/images/managementphotos/vasilev.png",
  },
];
