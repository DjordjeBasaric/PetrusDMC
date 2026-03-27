import { redirect } from "next/navigation";
import { LayoutShell } from "@/components/layout/LayoutShell";
import { isValidLanguage } from "@/lib/i18n";

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { lang } = params;
  if (!isValidLanguage(lang)) {
    redirect("/en");
  }

  return <LayoutShell lang={lang}>{children}</LayoutShell>;
}
