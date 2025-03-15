import { Locale } from "@/i18n.config";
import getTrans from "@/lib/translation";
import AdminTabs from "./_components/AdminTabs";

const AdminLayout = async ({
  params,
  childern,
}: {
  params: Promise<{ locale: Locale }>;
  childern: React.ReactNode;
}) => {
  const locale = (await params).locale;
  const translations = await getTrans(locale);
  return (
    <>
      <AdminTabs translations={translations} />
      {childern}
    </>
  );
};

export default AdminLayout;
