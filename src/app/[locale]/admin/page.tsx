import { Routes } from "@/constants/enums";
import { Locale } from "@/i18n.config";
import { authOptions } from "@/server/auth";
import { UserRole } from "@prisma/client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AdminPage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const session = await getServerSession(authOptions);
  const { locale } = await params;

  //   if (session && session.user.role === UserRole.ADMIN) {
  //     redirect(`/${locale}/${Routes.ADMIN}`);
  //   }

  return <div>AdminPage</div>;
};

export default AdminPage;
