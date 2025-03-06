"use client";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import { Translations } from "@/types/translations";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Pages, Routes } from "@/constants/enums";
import { useClientSession } from "@/hooks/useClientSession";

function AuthButtons({
  translations,
  initialSession,
}: {
  translations: Translations;

  initialSession: Session | null;
}) {
  const session = useClientSession(initialSession);
  const router = useRouter();
  const { locale } = useParams();
  const path = usePathname();

  return (
    <div>
      {session.data?.user && (
        <div className="flex items-center gap-10">
          <Button
            className="bg-white hover:bg-primary text-accent hover:text-white transition-all duration-700 font-semibold"
            size="lg"
            onClick={() => signOut()}
          >
            {translations.navbar.signOut}
          </Button>
        </div>
      )}
      {!session.data?.user && (
        <div className="flex items-center gap-6">
          <Button
            className={`${
              path.startsWith(`/${locale}/${Routes.AUTH}/${Pages.LOGIN}`)
                ? "bg-primary text-white"
                : "bg-white text-accent"
            } hover:bg-primary hover:text-white transition-all duration-700  font-semibold`}
            onClick={() =>
              router.push(`/${locale}/${Routes.AUTH}/${Pages.LOGIN}`)
            }
          >
            {translations.navbar.login}
          </Button>
          <Button
            className={`${
              path.startsWith(`/${locale}/${Routes.AUTH}/${Pages.Register}`)
                ? "bg-primary text-white"
                : "bg-white text-accent"
            } hover:bg-primary hover:text-white transition-all duration-700  font-semibold`}
            onClick={() =>
              router.push(`/${locale}/${Routes.AUTH}/${Pages.Register}`)
            }
          >
            {translations.navbar.register}
          </Button>
        </div>
      )}
    </div>
  );
}

export default AuthButtons;
