import type { PageContent } from "@/types/content";
import type { Language } from "@/lib/i18n";
import { Section } from "@/components/content/Section";
import { ContactInquiryForm } from "./ContactInquiryForm";

interface ContactPageBodyProps {
  content: PageContent;
  lang: Language;
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function ContactPageBody({ content, lang }: ContactPageBodyProps) {
  const extra = content.contactPage;

  if (!extra) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-8 lg:px-12 xl:px-20">
        {content.sections.map((section, i) => (
          <Section
            key={i}
            {...section}
            isLast={i === content.sections.length - 1}
          />
        ))}
      </div>
    );
  }

  const {
    sectionTitle,
    sectionKicker,
    sectionLead,
    emailLabel,
    email,
    phoneLabel,
    phoneNote,
    responseNote,
    form,
  } = extra;

  return (
    <section
      className="-mt-8 border-b border-burgundy/10 bg-petrus-bg px-4 pb-20 pt-1 sm:px-8 lg:-mt-10 lg:px-12 lg:pb-28 lg:pt-6"
      aria-labelledby="contact-methods-heading"
    >
      <div className="mx-auto max-w-4xl">
        {sectionKicker ? (
          <div className="mb-2 flex items-center justify-center gap-3 sm:justify-start">
            <span className="h-px w-10 bg-burgundy/45 sm:w-12" aria-hidden />
            <span className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.28em] text-burgundy/90">
              {sectionKicker}
            </span>
            <span className="h-px flex-1 bg-burgundy/15 sm:max-w-[4rem]" aria-hidden />
          </div>
        ) : null}
        <h2
          id="contact-methods-heading"
          className="text-center font-playfair text-3xl font-semibold leading-tight text-black sm:text-left sm:text-4xl lg:text-[2.35rem]"
        >
          {sectionTitle}
        </h2>
        {sectionLead ? (
          <p className="mt-3 text-center font-montserrat text-sm leading-relaxed text-black/55 sm:text-left sm:text-base">
            {sectionLead}
          </p>
        ) : null}

        <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 md:gap-x-12 lg:gap-x-16">
          <div className="flex gap-4 sm:gap-5">
            <IconMail className="mt-1 h-5 w-5 shrink-0 text-burgundy" />
            <div className="min-w-0 flex-1">
              <p className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.22em] text-black/50">
                {emailLabel}
              </p>
              <p className="mt-3">
                <a
                  href={`mailto:${email}`}
                  className="break-all font-montserrat text-lg font-medium text-burgundy underline decoration-burgundy/25 underline-offset-[5px] transition-colors hover:text-burgundy-dark hover:decoration-burgundy sm:text-xl"
                >
                  {email}
                </a>
              </p>
            </div>
          </div>

          <div className="flex gap-4 border-t border-burgundy/15 pt-12 sm:gap-5 md:border-l md:border-t-0 md:pl-10 md:pt-0 lg:pl-12">
            <IconPhone className="mt-1 h-5 w-5 shrink-0 text-burgundy" />
            <div className="min-w-0 flex-1">
              <p className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.22em] text-black/50">
                {phoneLabel}
              </p>
              <p className="mt-3 font-montserrat text-base leading-relaxed text-black/80">
                {phoneNote}
              </p>
            </div>
          </div>
        </div>

        <ContactInquiryForm copy={form} lang={lang} />

        {responseNote ? (
          <p className="mt-10 max-w-3xl border-t border-burgundy/15 pt-10 font-montserrat text-sm leading-relaxed text-black/65">
            {responseNote}
          </p>
        ) : null}
      </div>
    </section>
  );
}
