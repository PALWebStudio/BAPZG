import { ArrowRight, Mail } from "lucide-react";
import BankDetailsCard from "./BankDetailsCard";
import Reveal from "@/components/shared/Reveal";

const REGISTRATION_URL = "https://learning.nursing-bg.com/DL/Registration/Schedule.aspx";
const CONTACT_EMAIL = "cpo.bapzg@gmail.com";

export default function SubscriptionSteps() {
  return (
    <div className="space-y-10">
      <Reveal delay={0}>
        <div className="flex gap-5">
          <span className="font-display shrink-0 text-3xl font-semibold text-gold">01</span>
          <div>
            <h3 className="font-display text-lg font-semibold text-ink">
              Регистрация в платформата за дистанционно обучение на БАПЗГ
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-muted/65">
              Отидете в раздел „Дистанционно обучение“, секция „Регистрация“, и изберете от таблицата „Списание
              „Здравни грижи“ 2026“.
            </p>
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-burgundy px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-burgundy-light active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
            >
              Към регистрацията <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="flex gap-5">
          <span className="font-display shrink-0 text-3xl font-semibold text-gold">02</span>
          <div className="w-full">
            <h3 className="font-display text-lg font-semibold text-ink">Заплащане на абонаментната такса</h3>
            <div className="mt-4 max-w-md">
              <BankDetailsCard />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.16}>
        <div className="flex gap-5">
          <span className="font-display shrink-0 text-3xl font-semibold text-gold">03</span>
          <div>
            <h3 className="font-display text-lg font-semibold text-ink">Изпращане на документа за плащане</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-muted/65">
              Копие от документа за извършеното плащане изпратете на:
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-2 inline-flex items-center gap-2 text-[14.5px] font-semibold text-burgundy hover:text-burgundy-light"
            >
              <Mail size={15} /> {CONTACT_EMAIL}
            </a>
            <p className="mt-4 text-[14px] leading-relaxed text-muted/65">
              След потвърждение ще получите потребителско име и парола за достъп до съдържанието.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
