import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { SEO } from '@/components/SEO';

const NotFound = () => {
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <SEO
        title={t("notFound.title")}
        description={t("notFound.description")}
        noIndex={true}
      />
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t("notFound.body")}</p>
        <Link to="/" className="text-primary underline hover:text-primary/90">
          {t("notFound.backHome")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
