import type { Metadata } from "next";
import { Phone } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import PublicationExperience from "@/components/biblioteka/PublicationExperience";
import { getLatestIssue, getArchiveByYear, publicationMeta } from "@/data/publications";

export const metadata: Metadata = {
  title: "Бюлетин на БАПЗГ",
  description: publicationMeta.bulletin.description,
};

const latestIssue = getLatestIssue("bulletin");
const archiveByYear = getArchiveByYear("bulletin");

export default function BulletinPage() {
  return (
    <>
      <section className="bg-wine px-6 pb-10 pt-32 text-white lg:pt-36">
        <div className="shell">
          <Breadcrumbs
            items={[
              { label: "Начало", href: "/" },
              { label: "Библиотека", href: "/biblioteka" },
              { label: "Бюлетин на БАПЗГ" },
            ]}
          />
          <span className="mt-6 inline-flex w-fit rounded-full bg-burgundy px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
            Официално издание на БАПЗГ
          </span>
          <h1 className="font-display mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
            Бюлетин на БАПЗГ
          </h1>
          <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-white/70">{publicationMeta.bulletin.description}</p>
        </div>
      </section>

      <PublicationExperience latestIssue={latestIssue} archiveByYear={archiveByYear} />

      <section className="bg-white py-12 text-center">
        <p className="text-[14.5px] text-muted/65">
          Повече информация можете да получите на телефон:{" "}
          <a href="tel:0888615600" className="font-semibold text-burgundy hover:text-burgundy-light">
            <Phone size={14} className="mb-0.5 mr-1 inline" /> 0888 615 600
          </a>
        </p>
      </section>
    </>
  );
}
