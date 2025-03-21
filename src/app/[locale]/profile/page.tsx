import EditUserForm from "@/components/edit-user-form";
import { Pages, Routes } from "@/constants/enums";
import { Locale } from "@/i18n.config";
import getTrans from "@/lib/translation";
import { authOptions } from "@/server/auth";
import { UserRole } from "@prisma/client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const ProfilePage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const session = await getServerSession(authOptions);
  const { locale } = await params;

  if (!session) {
    redirect(`/${locale}/${Routes.AUTH}/${Pages.LOGIN}`);
  }
  if (session && session.user.role === UserRole.ADMIN) {
    redirect(`/${locale}/${Routes.ADMIN}`);
  }
  const translations = await getTrans(locale);

  return (
    <main>
      <section className="section-gap">
        <div className="container">
          <h1 className="text-4xl text-center text-primary font-bold italic mb-10">
            {translations.profile.title}
          </h1>
          <EditUserForm user={session?.user} translations={translations} />
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
