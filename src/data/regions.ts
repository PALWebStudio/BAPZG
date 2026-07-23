// Regional commissions (Регионални комисии) — one per administrative region in Bulgaria.
export type Region = {
  city: string;
  chair: string;
  address: string;
  phone: string;
  email: string;
  /** Undefined until an official photo of the regional chair is supplied — renders a placeholder. */
  photo?: string;
};

export const regions: Region[] = [
  {
    city: "София (град)",
    chair: "Мариана Шиякова",
    address: "ул. „Цар Калоян“ 1",
    phone: "0889 520 056",
    email: "bapzg.sof@abv.bg",
  },
  {
    city: "Софийска област",
    chair: "Лилия Иванова",
    address: "предстои да бъде добавен",
    phone: "0882 643 766",
    email: "rk_sof_obl@abv.bg",
  },
  {
    city: "Благоевград",
    chair: "Ваня Лагадинова",
    address: "предстои да бъде добавен",
    phone: "0888 097 450",
    email: "vaniarazlog@abv.bg",
  },
  {
    city: "Бургас",
    chair: "Петя Стефанова",
    address: "предстои да бъде добавен",
    phone: "0886 591 965",
    email: "bapzg_bs@abv.bg",
  },
  {
    city: "Варна",
    chair: "Кичка Димитрова",
    address: "предстои да бъде добавен",
    phone: "0884 674 666",
    email: "bapzg_rkvarna@abv.bg",
  },
  {
    city: "Велико Търново",
    chair: "Ренета Антонова",
    address: "предстои да бъде добавен",
    phone: "0889 190 370",
    email: "bapzg_rk_vt@abv.bg",
  },
  {
    city: "Видин",
    chair: "Владислава Кирилова",
    address: "предстои да бъде добавен",
    phone: "0878 890 373",
    email: "bapzg_vidin@abv.bg",
  },
  {
    city: "Враца",
    chair: "Йорданка Тодорова",
    address: "предстои да бъде добавен",
    phone: "0885 148 804",
    email: "bapzg_vratsa@abv.bg",
  },
  {
    city: "Габрово",
    chair: "Росица Христова",
    address: "предстои да бъде добавен",
    phone: "0884 303 940",
    email: "bapzg_rk_gb@abv.bg",
  },
  {
    city: "Добрич",
    chair: "Мария Куртева",
    address: "предстои да бъде добавен",
    phone: "0885 997 424",
    email: "dobrich.nursing@abv.bg",
  },
  {
    city: "Кърджали",
    chair: "Мария Граменова",
    address: "предстои да бъде добавен",
    phone: "0888 824 542",
    email: "bapzg_kardjali@abv.bg",
  },
  {
    city: "Кюстендил",
    chair: "Нели Евтимова",
    address: "предстои да бъде добавен",
    phone: "0888 657 439",
    email: "kystendilrk@abv.bg",
  },
  {
    city: "Ловеч",
    chair: "Мимоза Кирова",
    address: "предстои да бъде добавен",
    phone: "0887 159 668",
    email: "rk_klonlovech@abv.bg",
  },
  {
    city: "Монтана",
    chair: "Сабинка Стойкова Мечкова",
    address: "предстои да бъде добавен",
    phone: "0884 307 922",
    email: "bapzg_rkmontana@abv.bg",
  },
  {
    city: "Пазарджик",
    chair: "Галина Цинигарова",
    address: "предстои да бъде добавен",
    phone: "0887 710 512",
    email: "pz_nursing.bg@abv.bg",
  },
  {
    city: "Перник",
    chair: "Милена Канациева",
    address: "предстои да бъде добавен",
    phone: "0899 950 565",
    email: "bapzg_rkpernik@abv.bg",
  },
  {
    city: "Плевен",
    chair: "Надя Димитрова",
    address: "предстои да бъде добавен",
    phone: "0887 363 242",
    email: "bapzgplv@abv.bg",
  },
  {
    city: "Пловдив",
    chair: "Теа Цировска",
    address: "предстои да бъде добавен",
    phone: "0886 285 060",
    email: "bapzg_pv@abv.bg",
  },
  {
    city: "Разград",
    chair: "Михаил Мичев",
    address: "предстои да бъде добавен",
    phone: "0886 591 918",
    email: "rcbapzg_razgrad@abv.bg",
  },
  {
    city: "Русе",
    chair: "Татяна Драганова",
    address: "предстои да бъде добавен",
    phone: "0885 635 514",
    email: "nursing_russe@abv.bg",
  },
  {
    city: "Силистра",
    chair: "Петранка Войкова",
    address: "предстои да бъде добавен",
    phone: "0884 337 232",
    email: "rk_silistra@abv.bg",
  },
  {
    city: "Сливен",
    chair: "Желязка Вълчанска",
    address: "предстои да бъде добавен",
    phone: "0888 883 087",
    email: "rk_sliven@abv.bg",
  },
  {
    city: "Смолян",
    chair: "Силвия Кирова-Хаджиева",
    address: "предстои да бъде добавен",
    phone: "0878 938 867",
    email: "bapzg.smolyan@abv.bg",
  },
  {
    city: "Стара Загора",
    chair: "Ваня Георгиева",
    address: "предстои да бъде добавен",
    phone: "0889 117 685",
    email: "vaaanq@yahoo.com",
  },
  {
    city: "Търговище",
    chair: "Антония Иванова Ганчева",
    address: "предстои да бъде добавен",
    phone: "0882 218 120",
    email: "pk_trg@abv.bg",
  },
  {
    city: "Хасково",
    chair: "Кресемирка Петева – Янева",
    address: "предстои да бъде добавен",
    phone: "0886 299 230",
    email: "bapzg_rk_haskovo@abv.bg",
  },
  {
    city: "Шумен",
    chair: "Румяна Желязкова",
    address: "предстои да бъде добавен",
    phone: "0888 222 379",
    email: "rk_bapzg_shumen@abv.bg",
  },
  {
    city: "Ямбол",
    chair: "Цветка Бойчева",
    address: "предстои да бъде добавен",
    phone: "0888 799 717",
    email: "bapzg_y@abv.bg",
  },
];
