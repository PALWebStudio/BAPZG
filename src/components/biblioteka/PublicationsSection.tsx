import PublicationCard from "./PublicationCard";
import Reveal from "@/components/shared/Reveal";
import { publicationMeta, getLatestIssue } from "@/data/publications";

const latestMagazineCover = getLatestIssue("magazine").coverImage;

export default function PublicationsSection() {
  return (
    <section className="shell py-16">
      <Reveal>
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-burgundy">Издания на БАПЗГ</span>
        <h2 className="font-display mt-3 text-2xl font-semibold text-ink sm:text-3xl">Официални периодични издания</h2>
      </Reveal>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <PublicationCard
          title={publicationMeta.bulletin.title}
          periodicity={publicationMeta.bulletin.periodicity}
          description={publicationMeta.bulletin.description}
          ctaLabel="Разгледай бюлетина"
          href="/biblioteka/byuletin"
        />
        <PublicationCard
          title={publicationMeta.magazine.title}
          periodicity={publicationMeta.magazine.periodicity}
          description={publicationMeta.magazine.description}
          ctaLabel="Разгледай списанието"
          href="/biblioteka/spisanie-zdravni-grizhi"
          coverImage={latestMagazineCover}
        />
      </div>
    </section>
  );
}
